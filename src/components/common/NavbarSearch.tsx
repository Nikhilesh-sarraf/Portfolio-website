'use client';

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { navbarConfig } from '@/config/Navbar';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

export function NavbarSearch() {
  const [open, setOpen] = useState(false);
  const [modKey, setModKey] = useState('Ctrl');
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isMac = /Mac|iPhone|iPod|iPad/i.test(navigator.platform);
      setModKey(isMac ? '⌘' : 'Ctrl');
    }
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const navigate = useCallback(
    (href: string) => {
      setOpen(false);
      router.push(href);
    },
    [router],
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-muted-foreground hover:bg-muted/60 inline-flex h-9 items-center gap-2 rounded-full border border-border/80 bg-muted/40 px-3 text-sm transition-colors"
        aria-label="Open command palette"
      >
        <Search className="size-4 shrink-0 opacity-80" aria-hidden />
        <span className="hidden items-center gap-1 sm:inline">
          <kbd className="bg-background/80 pointer-events-none inline-flex h-5 min-w-[1.75rem] select-none items-center justify-center rounded border border-border px-1 font-sans text-[10px] font-medium">
            {modKey}
          </kbd>
          <kbd className="bg-background/80 pointer-events-none inline-flex h-5 min-w-[1.25rem] select-none items-center justify-center rounded border border-border px-1 font-sans text-[10px] font-medium">
            K
          </kbd>
        </span>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search pages…" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Go to">
            {navbarConfig.navItems.map((item) => (
              <CommandItem
                key={item.href}
                value={`${item.label} ${item.href}`}
                onSelect={() => navigate(item.href)}
              >
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
