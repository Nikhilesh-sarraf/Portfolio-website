import { socialLinks } from '@/config/Hero';
import { Card, CardContent } from '@/components/ui/card';
import ContactForm from '../contact/ContactForm';
import X from '../svgs/X';
import { Instagram } from 'lucide-react';
import React from 'react';

const findLink = (name: string) => socialLinks.find(l => l.name.toLowerCase() === name.toLowerCase())?.href || '#';
const findIcon = (name: string) => socialLinks.find(l => l.name.toLowerCase() === name.toLowerCase())?.icon;

const extendedSocials = [
  {
    name: 'GitHub',
    href: findLink('github'),
    icon: findIcon('github'),
    colorClass: 'text-foreground',
  },
  {
    name: 'LinkedIn',
    href: findLink('linkedin'),
    icon: findIcon('linkedin'),
    colorClass: 'text-[#0077b5]',
  },
  {
    name: 'Twitter',
    href: '#',
    icon: <X />,
    colorClass: 'text-foreground',
  },
  {
    name: 'Instagram',
    href: '#',
    icon: <Instagram className="size-full" />,
    colorClass: 'text-[#E1306C]',
  },
  {
    name: 'Email',
    href: findLink('email'),
    icon: findIcon('email'),
    colorClass: 'text-[#ea4335]',
  }
];

export default function ContactSection() {
  return (
    <section className="py-24 border-t border-border/40 mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

        {/* Left Column: Form */}
        <div className="flex flex-col -mx-6 sm:mx-0">
          <ContactForm />
        </div>

        {/* Right Column: Connect */}
        <div className="flex flex-col space-y-8 pt-6 lg:pt-8 pr-0 lg:pr-6">
          <div>
            <h3 className="text-2xl font-bold mb-6 tracking-tight">Connect With Me</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {extendedSocials.map((social) => (
                <a href={social.href} key={social.name} target="_blank" rel="noopener noreferrer">
                  <Card className="hover:bg-muted/50 transition-colors shadow-sm h-full">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className={`size-6 flex items-center justify-center ${social.colorClass}`}>
                        {social.icon}
                      </div>
                      <span className="font-semibold tracking-tight">{social.name}</span>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
