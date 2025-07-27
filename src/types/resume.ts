export interface Experience {
  company: string;
  time: string;
  title: string;
  location?: string;
  description?: string;
}

export interface Education {
  school: string;
  time: string;
  degree: string;
  location?: string;
  description?: string;
}

export interface Skill {
  title: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  time: string;
  link?: string;
}

// Function to check if an element is of type Experience or Education
export function isExperience(element: Experience | Education): element is Experience {
  return 'title' in element && 'company' in element;
}