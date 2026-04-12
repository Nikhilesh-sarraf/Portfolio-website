import Container from '@/components/common/Container';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { resumeConfig } from '@/config/Resume';
import { Download } from 'lucide-react';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  ...getMetadata('/resume'),
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

export default function ResumePage() {
  return (
    <Container className="py-16">
      <div className="space-y-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
              Resume
            </h1>
            <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
              View my resume below or download the PDF. The same file is linked
              next to <b>Resume</b> in the navbar.
            </p>
          </div>
          <Button variant="outline" asChild className="shrink-0 gap-2">
            <a href={resumeConfig.url} download={resumeConfig.downloadFileName}>
              <Download className="size-4" />
              Download PDF
            </a>
          </Button>
        </div>
        <Separator />
        <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-lg border">
          <iframe
            title="Resume PDF"
            src={resumeConfig.url}
            className="min-h-[80vh] w-full"
          />
        </div>
        <p className="text-muted-foreground text-center text-sm">
          Trouble viewing?{' '}
          <a
            href={resumeConfig.url}
            download={resumeConfig.downloadFileName}
            className="text-primary underline-offset-4 hover:underline"
          >
            Download the PDF
          </a>{' '}
          directly.
        </p>
      </div>
    </Container>
  );
}
