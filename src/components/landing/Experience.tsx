import { type Experience, experiences } from '@/config/Experience';
import { Link } from 'next-view-transitions';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { ExperienceCard } from '../experience/ExperienceCard';
import { Button } from '../ui/button';

export default function Experience() {
  if (experiences.length === 0) {
    return null;
  }

  return (
    <Container className="mt-20">
      <SectionHeading subHeading="Featured" heading="Experience" />
      <div className="mt-4 flex flex-col">
        {experiences.slice(0, 2).map((experience: Experience, index: number) => (
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
      <div className="mt-8 flex justify-center">
        <Button variant="outline">
          <Link href="/work-experience">Show all work experiences</Link>
        </Button>
      </div>
    </Container>
  );
}
