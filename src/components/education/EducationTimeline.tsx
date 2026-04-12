import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { educationData } from '@/config/Education';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import React from 'react';

const getIcon = (iconStr: string) => {
  switch (iconStr) {
    case 'degree': case 'level': case 'stream': return <GraduationCap className="size-4 mr-2" />;
    case 'duration': return <Calendar className="size-4 mr-2" />;
    case 'campus': return <MapPin className="size-4 mr-2" />;
    default: return <GraduationCap className="size-4 mr-2" />;
  }
};

export default function EducationTimeline() {
  return (
    <div className="relative border-l border-border/50 ml-4 md:ml-6 space-y-16 pb-12">
      {educationData.map((edu, idx) => (
        <div key={idx} className="relative pl-8 md:pl-12">
          {/* Timeline Node */}
          <div className="absolute -left-2.5 top-2 size-5 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
             <div className="size-2 rounded-full bg-primary" />
          </div>

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h3 className="text-2xl font-bold tracking-tight">{edu.institution}</h3>
              {edu.status === 'Current' ? (
                <Badge variant="default" className="w-fit">{edu.status}</Badge>
              ) : (
                <span className="text-sm font-medium text-muted-foreground">{edu.status}</span>
              )}
            </div>
            
            <p className="text-muted-foreground text-sm">{edu.subInstitution}</p>
            
            <div className="mt-2">
              <p className="font-semibold text-primary">{edu.degree}</p>
              <p className="text-xs text-muted-foreground mt-1">{edu.duration}</p>
            </div>

            <Card className="bg-muted/30 shadow-none border-border/50 p-4 lg:p-6 mt-4">
               <div className="flex items-center gap-4">
                  <div className="flex items-baseline gap-1">
                     <span className="text-3xl lg:text-4xl font-bold">{edu.score}</span>
                  </div>
                  <div className="flex flex-col">
                     <span className="text-xs text-muted-foreground">{edu.scoreLabel} {edu.scoreTotal}</span>
                     <span className="text-xs text-muted-foreground">{edu.scoreSubtext}</span>
                  </div>
               </div>

               <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-border/50">
                 {edu.badges.map((badge, bIdx) => (
                   <div key={bIdx} className="flex items-center text-xs font-medium bg-background px-3 py-1.5 rounded-full border border-border/50 shadow-sm">
                     {getIcon(badge.icon)}
                     {badge.label}
                   </div>
                 ))}
               </div>
            </Card>

            <div className="mt-8">
              <div className="flex items-center gap-2 mb-4">
                 <h4 className="text-[11px] tracking-widest text-muted-foreground uppercase font-bold">Core Coursework</h4>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {edu.coursework.map((course, cIdx) => (
                  <li key={cIdx} className="flex items-center gap-2 text-sm text-foreground/80 bg-muted/20 px-4 py-2.5 rounded-md border border-border/40">
                    <div className="size-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
