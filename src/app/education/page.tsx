import Container from '@/components/common/Container';
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
    <Container className="min-h-screen py-16">
      <div className="mb-12">
        <h2 className="text-primary mb-2 text-sm font-bold tracking-widest uppercase">
          Education
        </h2>
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          Academic Journey
        </h1>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
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
