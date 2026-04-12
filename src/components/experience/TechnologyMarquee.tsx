import { type Technology } from '@/config/Experience';
import { cn } from '@/lib/utils';
import { Link } from 'next-view-transitions';
import React from 'react';

interface TechnologyMarqueeProps {
  technologies: Technology[];
  className?: string;
}

export function TechnologyMarquee({
  technologies,
  className,
}: TechnologyMarqueeProps) {
  if (technologies.length === 0) return null;

  const loop = [...technologies, ...technologies];

  return (
    <div
      className={cn(
        'relative overflow-hidden py-1 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]',
        className,
      )}
    >
      <div className="animate-tech-marquee flex w-max gap-3">
        {loop.map((technology, techIndex) => (
          <Link
            key={`${technology.name}-${techIndex}`}
            href={technology.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-muted/80 hover:bg-muted border-border/60 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-colors [&_svg]:size-5"
            title={technology.name}
          >
            <span className="sr-only">{technology.name}</span>
            {technology.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}
