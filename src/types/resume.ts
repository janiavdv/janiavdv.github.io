export interface Experience {
  company: string;
  time: string;
  title: string;
  location?: string;
  description?: string;
  link?: string;
}

export interface Education {
  school: string;
  time: string;
  degree: string;
  location?: string;
  courses?: string;
  link?: string;
}

export interface Skill {
  title: string;
  level: number; // e.g., from 1 to 5
}

export interface Project {
  title: string;
  description: string;
  time: string;
  link?: string;
}

// Function to check if an element is of type Experience or Education
export function isExperience(
  element: Experience | Education
): element is Experience {
  return "title" in element && "company" in element;
}

// Function to check if an element is of type Skill
export function isSkill(element: Skill): element is Skill {
  return "level" in element && "title" in element;
}
