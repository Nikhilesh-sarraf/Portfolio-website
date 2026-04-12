import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { sidebarData } from '@/config/Education';
import { GraduationCap, Award, MapPin, Calendar, Globe, BookOpen } from 'lucide-react';
import React from 'react';

const getSummaryIcon = (iconStr: string) => {
  switch(iconStr) {
    case 'degree': return <GraduationCap className="size-5" />;
    case 'gpa': return <Award className="size-5" />;
    case 'university': return <MapPin className="size-5" />;
    case 'date': return <Calendar className="size-5" />;
    case 'origin': return <Globe className="size-5" />;
    default: return <BookOpen className="size-5" />;
  }
}

export default function EducationSidebar() {
  return (
    <div className="space-y-6 sticky top-24">
      
      {/* Academic Summary */}
      <Card className="bg-transparent border-border/50 shadow-sm">
        <CardHeader className="pb-3 border-b border-border/30">
          <CardTitle className="text-sm font-semibold tracking-wide text-primary">Academic Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5 pt-5">
          {sidebarData.academicSummary.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className="flex items-center justify-center size-8 rounded-md bg-muted text-muted-foreground flex-shrink-0">
                 {getSummaryIcon(item.icon!)}
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">{item.label}</span>
                <span className="text-sm font-semibold text-foreground/90">{item.value}</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* GPA Progression */}
      <Card className="bg-transparent border-border/50 shadow-sm">
        <CardHeader className="pb-3 border-b border-border/30">
           <CardTitle className="text-sm font-semibold tracking-wide text-primary">GPA Progression</CardTitle>
        </CardHeader>
        <CardContent className="pt-5 flex flex-col gap-3">
            {sidebarData.gpaProgression.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground font-medium flex items-center gap-2">
                  <div className="size-1 rounded-full bg-muted-foreground/50" />
                  {item.level}
                </span>
                <span className="font-bold text-primary text-xs tracking-wider">{item.score}</span>
              </div>
            ))}
        </CardContent>
      </Card>

      {/* Currently Studying */}
      <Card className="bg-transparent border-border/50 shadow-sm">
        <CardHeader className="pb-3 border-b border-border/30">
           <CardTitle className="text-sm font-semibold tracking-wide text-primary">Currently Studying</CardTitle>
        </CardHeader>
        <CardContent className="pt-5">
           <div className="flex flex-col gap-2.5">
             {sidebarData.currentlyStudying.map((course, idx) => (
               <span key={idx} className="flex items-center gap-2 text-xs font-medium px-3 py-2 rounded-md border border-border/60 bg-muted/20 text-foreground/80 leading-tight">
                 <div className="size-1.5 rounded-full bg-primary/70 flex-shrink-0" />
                 {course}
               </span>
             ))}
           </div>
        </CardContent>
      </Card>

      {/* Career Goal */}
      <Card className="bg-transparent border-border/50 shadow-sm">
         <CardHeader className="pb-3 border-b border-border/30">
            <CardTitle className="text-sm font-semibold tracking-wide text-primary">Career Goal</CardTitle>
         </CardHeader>
         <CardContent className="pt-5">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {sidebarData.careerGoal}
            </p>
         </CardContent>
      </Card>

    </div>
  );
}
