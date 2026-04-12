import { about, mySkills } from '@/config/About';
import Image from 'next/image';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

export default function About() {
  return (
    <Container className="mt-20">
      <SectionHeading subHeading="About" heading="Me" />
      <div className="mt-8 flex flex-col gap-4 md:flex-row">
        <Image
          src="/assets/avatar.png"
          alt={about.name}
          width={240}
          height={240}
          className="border-secondary size-60 shrink-0 rounded-md border-2 object-cover"
        />
        <div className="mt-4 min-w-0">
          <h3 className="text-2xl font-bold">{about.name}</h3>
          <p className="text-secondary mt-4">{about.description}</p>
          <p className="text-secondary mt-8 font-bold">Skills</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {mySkills.map((skill) => (
              <Tooltip key={skill.name}>
                <TooltipTrigger asChild>
                  <div className="flex size-8 cursor-default items-center justify-center [&_svg]:size-6">
                    {skill.icon}
                  </div>
                </TooltipTrigger>
                <TooltipContent>{skill.name}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
