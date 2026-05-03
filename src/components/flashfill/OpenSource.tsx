import { Github } from "lucide-react";

const MitSeal = () => (
  <div
    className="relative flex h-14 w-14 items-center justify-center"
    aria-label="MIT License"
    title="MIT License"
  >
    {/* outer ring — clipped to star-circle hybrid via clip-path */}
    <svg viewBox="0 0 56 56" className="absolute inset-0 h-full w-full">
      <path
        d="M28 2
           l3.5 8.5 9-1.5-4 8 7.5 5-7.5 5 4 8-9-1.5L28 42
           l-3.5-8.5-9 1.5 4-8-7.5-5 7.5-5-4-8 9 1.5Z"
        fill="hsl(var(--bolt))"
        opacity="0.18"
      />
      <path
        d="M28 6
           l2.8 6.8 7.2-1.2-3.2 6.4 6 4-6 4 3.2 6.4-7.2-1.2L28 38
           l-2.8-6.8-7.2 1.2 3.2-6.4-6-4 6-4-3.2-6.4 7.2 1.2Z"
        fill="none"
        stroke="hsl(var(--bolt))"
        strokeWidth="0.8"
        opacity="0.5"
      />
    </svg>
    <span className="relative font-mono text-[10px] font-bold uppercase tracking-wide text-foreground">
      MIT
    </span>
  </div>
);

export const OpenSource = () => {
  return (
    <section className="border-b-2 border-ink bg-secondary/30 py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">

          {/* badges row */}
          <div className="flex items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2 border-2 border-ink bg-background px-3 py-1 font-mono text-xs uppercase tracking-widest shadow-brutal">
              <Github className="h-3.5 w-3.5" />
              Open Source
            </div>
            <MitSeal />
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
