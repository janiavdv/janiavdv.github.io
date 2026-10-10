const USER = "152478889";
const MAX_READING_DAYS = 30;
const DAY = 86_400_000;

const dayStart = (value: string) => {
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? null
    : Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
};

const field = (xml: string, tag: string) =>
  xml.match(
    new RegExp(`<${tag}>\\s*(?:<!\\[CDATA\\[)?(.*?)(?:\\]\\]>)?\\s*</${tag}>`),
  )?.[1];

const dateField = (xml: string, tag: string) => {
  const value = field(xml, tag);
  return value ? dayStart(value) : null;
};

const items = (xml: string) => xml.split("<item>").slice(1);

const fetchXml = async (path: string) => {
  const res = await fetch(`https://www.goodreads.com/${path}`);
  return res.ok ? res.text() : "";
};

const normalize = (title: string) => title.toLowerCase().replace(/\s+/g, " ");

const getStartedByTitle = async () => {
  const started = new Map<string, number>();
  const xml = await fetchXml(`user/updates_rss/${USER}`);
  for (const item of items(xml)) {
    const title = field(item, "title")?.match(
      /(?:started|is currently) reading '(.*)'/,
    )?.[1];
    const date = dateField(item, "pubDate");
    if (!title || date === null) continue;
    const key = normalize(title);
    started.set(key, Math.min(started.get(key) ?? Infinity, date));
  }
  return started;
};

export async function getReadingDays(): Promise<Map<string, number>> {
  const counts = new Map<string, number>();
  try {
    const [read, current, started] = await Promise.all([
      fetchXml(`review/list_rss/${USER}?shelf=read&per_page=200`),
      fetchXml(`review/list_rss/${USER}?shelf=currently-reading`),
      getStartedByTitle(),
    ]);

    const startFor = (title: string | undefined) => {
      const key = normalize(title ?? "");
      if (!key) return undefined;
      for (const [startedTitle, date] of started) {
        if (key.startsWith(startedTitle)) return date;
      }
      return undefined;
    };

    const finished = items(read)
      .map((item) => ({
        end: dateField(item, "user_read_at"),
        added: dateField(item, "user_date_added"),
        started: startFor(field(item, "title")),
      }))
      .filter((item): item is typeof item & { end: number } => item.end !== null)
      .sort((a, b) => a.end - b.end);

    const spans: [number, number][] = [];
    let previousEnd = -Infinity;
    for (const { end, added, started: exactStart } of finished) {
      const floor = Math.max(previousEnd, end - MAX_READING_DAYS * DAY);
      const estimate = added !== null && added < end ? Math.max(added, floor) : floor;
      spans.push([Math.min(exactStart ?? estimate, end), end]);
      previousEnd = end;
    }

    const today = dayStart(new Date().toISOString())!;
    for (const item of items(current)) {
      const added = dateField(item, "user_date_added");
      const start = startFor(field(item, "title")) ?? added;
      if (start !== null) spans.push([start, today]);
    }

    for (const [start, end] of spans) {
      for (let time = start; time <= end; time += DAY) {
        counts.set(new Date(time).toISOString().slice(0, 10), 1);
      }
    }
  } catch {
    return new Map();
  }
  return counts;
}
