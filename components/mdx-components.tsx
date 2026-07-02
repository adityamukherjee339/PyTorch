import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { CopyButton } from './CopyButton';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Custom Callout component
export function Callout({
  children,
  type = 'tip',
}: {
  children: React.ReactNode;
  type?: 'tip' | 'warn';
}) {
  const isTip = type === 'tip';
  return (
    <div
      className={cn(
        'my-6 rounded-md border-l-4 p-4',
        isTip
          ? 'border-accent-green bg-accent-green/5 text-text-primary'
          : 'border-accent-amber bg-accent-amber/5 text-text-primary'
      )}
    >
      <div className="flex items-center gap-2 mb-2 font-mono text-xs font-semibold uppercase tracking-widest">
        <span className={isTip ? 'text-accent-green' : 'text-accent-amber'}>
          {isTip ? 'Tip' : 'Warning'}
        </span>
      </div>
      <div className="text-sm leading-relaxed text-text-primary/90">
        {children}
      </div>
    </div>
  );
}

export function ComparisonTable({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 w-full overflow-y-auto rounded-lg border border-border">
      <table className="w-full text-left text-sm text-text-primary">
        {children}
      </table>
    </div>
  );
}

export const mdxComponents = {
  Callout,
  ComparisonTable,
  pre: (props: any) => {
    // Extract text for copy button
    let text = '';
    if (props.raw) {
      text = props.raw;
    } else {
      text = extractText(props.children);
    }

    return (
      <div className="relative group my-6 rounded-lg border border-border bg-code-bg overflow-hidden">
        <CopyButton text={text} />
        <pre className={cn("p-5 overflow-x-auto text-[13px] leading-relaxed font-mono", props.className)} {...props} />
      </div>
    );
  },
  // Style table components for ComparisonTable
  table: (props: any) => (
    <div className="my-8 w-full overflow-y-auto rounded-lg border border-border">
      <table className="w-full text-left text-sm text-text-primary" {...props} />
    </div>
  ),
  th: (props: any) => (
    <th className="bg-surface px-4 py-3 font-semibold font-mono tracking-tight text-text-primary border-b border-border" {...props} />
  ),
  td: (props: any) => (
    <td className="px-4 py-3 border-b border-border/50 bg-background/50" {...props} />
  ),
  tr: (props: any) => (
    <tr className="even:bg-surface-secondary/30 transition-colors hover:bg-surface/50" {...props} />
  ),
};

// Helper to extract text from React nodes
function extractText(node: any): string {
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return String(node);
  if (!node) return '';
  if (Array.isArray(node)) return node.map(extractText).join('');
  if (node.props && node.props.children) return extractText(node.props.children);
  return '';
}
