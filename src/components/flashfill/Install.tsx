import { Github, Download, Terminal } from "lucide-react";

export const Install = () => {
  return (
    <section id="install" className="border-b-2 border-ink bg-paper py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">// install</p>
          <h2 className="mt-3 font-display text-5xl font-bold tracking-tight sm:text-6xl">
            Get the bolt.<br />
            <span className="bg-bolt px-3">In 60 seconds.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Clone, load unpacked, drop in a free Tempmail RapidAPI key. Done.
          </p>

          <div className="mt-10 mx-auto max-w-2xl border-2 border-ink bg-ink shadow-brutal-lg text-left">
            <div className="flex items-center gap-2 border-b-2 border-ink/50 px-4 py-2.5">
              <Terminal className="h-4 w-4 text-bolt" />
              <span className="font-mono text-xs uppercase tracking-widest text-bolt">terminal</span>
            </div>
            <div className="p-5 font-mono text-sm text-paper space-y-1.5">
              <div><span className="text-bolt">$</span> git clone https://github.com/rushilbh27/flashfill.git</div>
              <div><span className="text-bolt">$</span> cd flashfill</div>
              <div className="text-paper/50"># Open chrome://extensions → Load unpacked → select folder</div>
              <div className="text-paper/50"># Click the bolt → paste your free RapidAPI key</div>
              <div><span className="text-bolt">$</span> <span className="animate-blink">▌</span></div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://github.com/rushilbh27/flashfill"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border-2 border-ink bg-ink px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider text-bolt shadow-brutal-bolt transition-snap hover:-translate-y-0.5"
            >
              <Github className="h-4 w-4" />
              View on GitHub
            </a>
            <a
              href="https://github.com/rushilbh27/flashfill/archive/refs/heads/main.zip"
              className="inline-flex items-center gap-2 border-2 border-ink bg-bolt px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider transition-snap hover:-translate-y-0.5 hover:shadow-brutal"
            >
              <Download className="h-4 w-4" />
              Download .zip
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
