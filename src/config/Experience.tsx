import type { ReactNode } from 'react';

export interface Technology {
  name: string;
  href: string;
  icon: ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

/** No formal work history on resume yet — add roles here when needed. */
export const experiences: Experience[] = [];
