import { Zap, BookOpen, Clock, Activity } from "lucide-react";

export function Hero() {
  return (
    <section className="px-6 py-16 md:py-24 max-w-4xl mx-auto w-full">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight text-text-primary tracking-tight">
          Master the <span className="text-accent">flame.</span>
        </h1>
        <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-2xl">
          A definitive, technical field guide to PyTorch. From tensor manipulation to deployment, this reference serves as your ultimate companion for deep learning engineering.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-border mt-8">
          <Stat label="Modules" value="14" icon={<BookOpen size={16} />} />
          <Stat label="Difficulty" value="Intermediate" icon={<Activity size={16} />} />
          <Stat label="Read Time" value="~2 Hours" icon={<Clock size={16} />} />
          <Stat label="Status" value="Active" icon={<Zap size={16} />} />
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-1.5 text-text-muted font-mono text-xs uppercase tracking-wider">
        {icon}
        <span>{label}</span>
      </div>
      <div className="text-text-primary font-medium">{value}</div>
    </div>
  );
}
