import { Github, Code2 } from "lucide-react";

export const OpenSource = () => {
  return (
    <section className="border-b-2 border-ink bg-secondary/30 py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 border-2 border-ink bg-background px-3 py-1 font-mono text-xs uppercase tracking-widest shadow-brutal">
            <Github className="h-3.5 w-3.5" />
            Open Source
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

          {/* MIT badge */}
          <div className="mt-10 flex items-center justify-center">
            <div className="flex items-center gap-3 border-2 border-ink bg-background px-6 py-3 shadow-brutal">
              <Code2 className="h-5 w-5 text-bolt" strokeWidth={2} />
              <div className="text-left">
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">License</p>
                <p className="font-display text-xl font-bold">MIT</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#"
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
