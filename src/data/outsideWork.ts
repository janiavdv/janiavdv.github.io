export interface OutsideWorkSection {
  emoji: string;
  title: string;
  description: string;
  bullets?: { emoji: string; label: string }[];
  links?: { emoji: string; label: string; href: string }[];
  images: { src: string; alt: string }[];
}

export const outsideWork: OutsideWorkSection[] = [
  {
    emoji: "🏉",
    title: "Rugby",
    description:
      "I've played rugby for 11 years including 4 at Brown University, where the team was D1. I'm currently captaining the club team here at Michigan. I mostly play lock and number 8!",
    images: [],
  },
  {
    emoji: "✨",
    title: "Hobbies",
    description: "",
    bullets: [
      { emoji: "🏃‍♀️", label: "Running" },
      { emoji: "📚", label: "Reading" },
      { emoji: "💎", label: "Bedazzling" },
      { emoji: "📓", label: "Journaling" },
      { emoji: "🏋️‍♀️", label: "Lifting weights" },
      { emoji: "🧁", label: "Baking" },
    ],
    images: [],
  },
];
