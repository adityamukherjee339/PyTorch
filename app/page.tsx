import { Hero } from "@/components/Hero";
import { ModuleSection } from "@/components/ModuleSection";
import { getAllModules } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx-components";
import rehypePrettyCode from "rehype-pretty-code";

const prettyCodeOptions = {
  theme: "github-dark-dimmed", // We'll use a standard dark theme that fits the vibe
  keepBackground: false, // Let our CSS handle the background
};

export default function Home() {
  const modules = getAllModules();

  return (
    <div className="flex flex-col min-h-screen pb-24">
      <Hero />
      
      <div className="flex flex-col">
        {modules.map((module) => (
          <ModuleSection key={module.slug} module={module}>
            <MDXRemote
              source={module.content}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  rehypePlugins: [[rehypePrettyCode as any, prettyCodeOptions]],
                },
              }}
            />
          </ModuleSection>
        ))}
        {modules.length === 0 && (
          <div className="text-center py-24 text-text-muted">
            No modules found. Create `.mdx` files in `content/modules`.
          </div>
        )}
      </div>

      <footer className="mt-16 py-8 px-6 border-t border-border/50 text-center text-text-muted text-sm">
        <p>
          &copy; {new Date().getFullYear()} PyTorch Field Notes. 
          Built for deep learning engineers.
        </p>
        <div className="mt-2 flex justify-center gap-4">
          <a href="https://pytorch.org/docs" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
            Official Docs
          </a>
        </div>
      </footer>
    </div>
  );
}
