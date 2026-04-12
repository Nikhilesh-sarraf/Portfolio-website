import { type Experience } from '@/config/Experience';
import React from 'react';

import { ExperienceCard } from './ExperienceCard';

interface ExperienceListProps {
  experiences: Experience[];
}

export function ExperienceList({ experiences }: ExperienceListProps) {
  if (experiences.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-muted-foreground">No work experiences found.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {experiences.map((experience: Experience, index: number) => (
        <div
          key={experience.company}
          className={
            index > 0 ? 'border-border/40 border-t pt-12' : undefined
          }
        >
          <ExperienceCard experience={experience} />
        </div>
      ))}
    </div>
  );
}
