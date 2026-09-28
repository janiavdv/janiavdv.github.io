export const tagStyles: Record<string, string> = {
  python: "bg-violet-500",
  pytorch: "bg-violet-400",
  tensorflow: "bg-violet-300",
  r: "bg-cyan-500",
  typescript: "bg-amber-500",
  ocaml: "bg-orange-500",
  java: "bg-red-500",
  csharp: "bg-red-400",
  "c#": "bg-red-400",
  mongodb: "bg-emerald-500",
  opentelemetry: "bg-green-500",
  spark: "bg-orange-600",
  kubernetes: "bg-blue-500",
  aws: "bg-yellow-500",
  sql: "bg-emerald-400",
  lean: "bg-slate-500",
  default: "bg-secondary",
};

export const getTagStyle = (tag: string): string => {
  return tagStyles[tag.toLowerCase()] ?? tagStyles.default;
};

export const formatTagLabel = (tag: string): string => {
  return tag.toLowerCase() === "csharp" ? "C#" : tag;
};
