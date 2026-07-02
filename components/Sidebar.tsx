'use client';

import Link from 'next/link';
import { useActiveSection } from '@/hooks/useActiveSection';
import { ModuleMeta } from '@/lib/mdx';
import { Flame } from 'lucide-react';

export function Sidebar({ modules }: { modules: ModuleMeta[] }) {
  const activeSection = useActiveSection(modules.map((m) => m.slug));

  return (
    <aside className="hidden lg:flex flex-col w-[270px] border-r border-border h-screen sticky top-0 overflow-y-auto bg-background/95 backdrop-blur-sm z-40">
      <div className="p-6 pb-2 sticky top-0 bg-background/95 backdrop-blur-sm z-10 border-b border-transparent">
        <Link href="#" className="flex items-center gap-2 group outline-none">
          <div className="text-accent group-hover:scale-110 transition-transform">
            <Flame size={24} strokeWidth={2.5} />
          </div>
          <span className="font-display font-semibold text-lg tracking-tight text-text-primary">
            PyTorch Field Notes
          </span>
        </Link>
      </div>

      <nav className="flex-1 py-6 px-4 flex flex-col gap-1">
        {modules.map((mod) => {
          const isActive = activeSection === mod.slug;
          return (
            <Link
              key={mod.slug}
              href={`#${mod.slug}`}
              className={`
                group flex items-center gap-3 px-3 py-2 rounded-md outline-none
                transition-all duration-200 border-l-2
                ${isActive 
                  ? 'bg-accent/10 border-accent text-text-primary' 
                  : 'border-transparent text-text-muted hover:bg-surface hover:text-text-primary'
                }
              `}
            >
              <span className={`font-mono text-xs ${isActive ? 'text-accent' : 'text-text-muted group-hover:text-text-primary/70'}`}>
                {mod.number}
              </span>
              <span className="text-sm font-medium leading-tight">
                {mod.title}
              </span>
            </Link>
          );
        })}
      </nav>
      
      <div className="p-4 border-t border-border mt-auto">
        <p className="text-xs text-text-muted font-mono">v1.0.0</p>
      </div>
    </aside>
  );
}
