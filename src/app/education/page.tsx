import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import EducationSidebar from '@/components/education/EducationSidebar';
import EducationTimeline from '@/components/education/EducationTimeline';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  ...getMetadata('/education'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function EducationPage() {
  return (
    <Container className="py-16 min-h-screen">
      <div className="mb-12">
        <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Education</h2>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Academic Journey</h1>
      </div>
      
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
        {/* Main Content - Timeline */}
        <div className="lg:col-span-8">
          <EducationTimeline />
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4">
          <EducationSidebar />
        </div>
      </div>
    </Container>
  );
}
