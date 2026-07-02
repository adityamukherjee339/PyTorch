'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { cn } from './mdx-components'; // We'll export cn from there

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute right-3 top-3 z-10 rounded-md p-2 text-text-muted bg-surface/80 backdrop-blur-sm opacity-0 hover:text-text-primary group-hover:opacity-100 transition-all focus:opacity-100 outline-none border border-border"
      aria-label="Copy code"
    >
      {copied ? <Check size={14} className="text-accent-green" /> : <Copy size={14} />}
    </button>
  );
}
