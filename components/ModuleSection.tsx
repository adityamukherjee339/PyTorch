import { ReactNode } from "react";
import { ModuleMeta } from "@/lib/mdx";

export function ModuleSection({ module, children }: { module: ModuleMeta, children: ReactNode }) {
  return (
    <section 
      id={module.slug} 
      className="border-t border-border py-16 md:py-24 px-6 max-w-4xl mx-auto w-full scroll-mt-0"
    >
      <div className="mb-8">
        <div className="font-mono text-accent text-sm font-semibold mb-3 uppercase tracking-wider">
          {module.tag}
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-3">
          {module.title}
        </h2>
        {module.subtitle && (
          <p className="text-lg text-text-muted">
            {module.subtitle}
          </p>
        )}
      </div>
      
      <div className="prose prose-invert prose-p:text-text-primary/90 prose-headings:font-display prose-headings:tracking-tight prose-a:text-accent prose-a:no-underline hover:prose-a:underline max-w-none prose-code:text-accent-cyan prose-code:before:content-none prose-code:after:content-none prose-pre:bg-transparent prose-pre:p-0 prose-pre:m-0 prose-li:text-text-primary/90">
        {children}
      </div>
    </section>
  );
}
