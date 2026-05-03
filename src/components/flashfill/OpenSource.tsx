import { Github, Code2 } from "lucide-react";

export const OpenSource = () => {
  return (
    <section className="border-b-2 border-ink bg-secondary/30 py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">

          {/* badges row */}
          <div className="flex items-center justify-center gap-2">
            <div className="inline-flex items-center gap-2 border-2 border-ink bg-background px-3 py-1 font-mono text-xs uppercase tracking-widest shadow-brutal">
              <Github className="h-3.5 w-3.5" />
              Open Source
            </div>
            <div className="inline-flex items-center gap-1.5 border border-ink bg-background px-2 py-1 font-mono text-[10px] uppercase tracking-widest">
              <Code2 className="h-3 w-3 text-bolt" strokeWidth={2} />
              MIT
            </div>
          </div>

          <h2 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Built in the open.<br />
            <span className="relative inline-block">
              <span className="relative z-10">Yours to inspect.</span>
              <span className="absolute inset-x-0 bottom-1 -z-0 h-4 bg-bolt" />
            </span>
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            Every line of FlashFill is public. No black boxes, no mystery network calls, no hidden tracking.
            Read the code, audit it yourself, or fork it and make it your own.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://github.com/rushilbh27/getflashfill"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border-2 border-ink bg-ink px-8 py-3.5 font-mono text-sm font-bold uppercase tracking-wider text-bolt shadow-brutal-bolt transition-snap hover:-translate-y-0.5"
            >
              <Github className="h-5 w-5" />
              View on GitHub
            </a>
          </div>

          <p className="mt-8 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            MIT licensed · No telemetry · No data collection · Fork it, ship it, make it yours
          </p>
        </div>
      </div>
    </section>
  );
};
