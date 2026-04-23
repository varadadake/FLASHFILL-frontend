import { Zap } from "lucide-react";

export const Nav = () => {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-paper/90 backdrop-blur">
      <nav className="container flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center bg-ink text-bolt shadow-brutal-bolt">
            <Zap className="h-4 w-4 fill-bolt" strokeWidth={2.5} />
          </span>
          <span className="font-display text-xl font-bold tracking-tight">FlashFill</span>
          <span className="ml-1 hidden font-mono text-[10px] uppercase tracking-widest text-muted-foreground sm:inline">
            v1.0
          </span>
        </a>
        <div className="flex items-center gap-1 sm:gap-6">
          <a href="#how" className="hidden font-mono text-sm hover:text-bolt sm:inline">how it works</a>
          <a href="#privacy" className="hidden font-mono text-sm hover:text-bolt sm:inline">privacy</a>
        </div>
      </nav>
    </header>
  );
};
