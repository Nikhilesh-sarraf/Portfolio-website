import { type Experience } from '@/config/Experience';
import { cn } from '@/lib/utils';
import { Link } from 'next-view-transitions';
import React from 'react';

import Github from '../svgs/Github';
import LinkedIn from '../svgs/LinkedIn';
import Website from '../svgs/Website';
import X from '../svgs/X';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { TechnologyMarquee } from './TechnologyMarquee';

interface ExperienceCardProps {
  experience: Experience;
}

const parseDescription = (text: string): string => {
  return text.replace(/\*(.*?)\*/g, '<b>$1</b>');
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="min-w-0 flex-1 space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <h3
              className={cn(
                'text-foreground text-2xl font-bold tracking-tight',
                experience.isBlur ? 'blur-[5px]' : 'blur-none',
              )}
            >
              {experience.company}
            </h3>
            {experience.website ? (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={experience.website}
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground size-4"
                  >
                    <Website />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>Visit Website</TooltipContent>
              </Tooltip>
            ) : null}
            {experience.x ? (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={experience.x}
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground size-4"
                  >
                    <X />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>Follow on X</TooltipContent>
              </Tooltip>
            ) : null}
            {experience.linkedin ? (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={experience.linkedin}
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground size-4"
                  >
                    <LinkedIn />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>Connect on LinkedIn</TooltipContent>
              </Tooltip>
            ) : null}
            {experience.github ? (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={experience.github}
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground size-4"
                  >
                    <Github />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>View GitHub</TooltipContent>
              </Tooltip>
            ) : null}
            {experience.isCurrent ? (
              <div className="flex items-center gap-1 rounded-md border-green-300 bg-green-500/10 px-2 py-1 text-xs">
                <div className="size-2 animate-pulse rounded-full bg-green-500"></div>
                Working
              </div>
            ) : null}
          </div>
          <p className="text-muted-foreground text-sm font-medium">
            {experience.position}
          </p>
        </div>
        <div className="text-muted-foreground shrink-0 text-sm md:text-right">
          <p>
            {experience.startDate} –{' '}
            {experience.isCurrent ? 'Present' : experience.endDate}
          </p>
          <p>{experience.location}</p>
        </div>
      </div>

      <div className="border-border/50 space-y-3 border-b pb-6">
        <h4 className="text-foreground text-base font-semibold tracking-tight">
          Technologies &amp; Tools
        </h4>
        <TechnologyMarquee technologies={experience.technologies} />
      </div>

      <div className="space-y-3">
        <h4 className="text-foreground text-base font-semibold tracking-tight">
          What I&apos;ve done
        </h4>
        <div className="text-secondary flex flex-col gap-2 leading-relaxed">
          {experience.description.map(
            (description: string, descIndex: number) => (
              <p
                key={descIndex}
                dangerouslySetInnerHTML={{
                  __html: `• ${parseDescription(description)}`,
                }}
              />
            ),
          )}
        </div>
      </div>
    </article>
  );
}
