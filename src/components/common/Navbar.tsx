import { navbarConfig } from '@/config/Navbar';
import { Link } from 'next-view-transitions';
import React from 'react';

import Github from '../svgs/Github';
import { NavbarSearch } from './NavbarSearch';
import { ThemeToggleButton } from './ThemeSwitch';

export default function Navbar() {
  return (
    <header className="bg-background/85 sticky top-0 z-50 border-b border-border/60 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-6">
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 sm:gap-x-8">
          {navbarConfig.navItems.map((item) =>
            item.label === 'Resume' && navbarConfig.resumePdfHref ? (
              <span
                key={item.href}
                className="flex flex-wrap items-center gap-2 gap-x-3"
              >
                <Link
                  className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
                  href={item.href}
                >
                  {item.label}
                </Link>
                <a
                  href={navbarConfig.resumePdfHref}
                  download={navbarConfig.resumePdfDownloadName}
                  className="text-muted-foreground hover:text-foreground border-border rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors"
                >
                  PDF
                </a>
              </span>
            ) : (
              <Link
                className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
                key={item.href}
                href={item.href}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <NavbarSearch />
          
          <a
            href="https://github.com/Nikhilesh-sarraf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 transition-opacity hover:opacity-80"
            aria-label="GitHub Profile"
          >
            <Github className="size-5" />
            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">0</span>
          </a>
          
          <div className="mx-1 h-4 w-px bg-border/60"></div>
          
          <ThemeToggleButton variant="circle" start="top-right" blur />
        </div>
      </div>
    </header>
  );
}
