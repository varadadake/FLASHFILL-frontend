import { ArrowRight, Zap } from "lucide-react";
import { FillDemo } from "./FillDemo";

export const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden border-b-2 border-ink bg-grid">
      <div className="container relative grid gap-12 py-20 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:py-28">
        <div className="animate-slide-up">
          <div className="inline-flex items-center gap-2 border-2 border-ink bg-background px-3 py-1 font-mono text-xs uppercase tracking-widest shadow-brutal">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-bolt" />
            Open source · MIT
          </div>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            Sign up for{" "}
            <span className="relative inline-block">
              <span className="relative z-10">anything</span>
              <span className="absolute inset-x-0 bottom-1 -z-0 h-4 bg-bolt" />
            </span>
            <br />
            in under{" "}
            <span className="inline-flex items-baseline gap-2">
              <Zap className="h-12 w-12 fill-bolt text-ink animate-bolt-pulse sm:h-14 sm:w-14 lg:h-16 lg:w-16" strokeWidth={2} />
              3 seconds.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
            FlashFill is a browser extension that fills signup forms with a fresh disposable email — instantly. On 5000+ sites. Without ever touching your real inbox.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#how"
              className="group inline-flex items-center gap-2 border-2 border-ink bg-ink px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider text-bolt shadow-brutal-bolt transition-snap hover:-translate-y-0.5 hover:translate-x-0 hover:shadow-[10px_10px_0_0_hsl(var(--bolt))]"
            >
              See how it works
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t-2 border-ink pt-6 max-w-md">
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Sites</dt>
              <dd className="font-display text-2xl font-bold">5000+</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Fill time</dt>
              <dd className="font-display text-2xl font-bold">&lt;3s</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Telemetry</dt>
              <dd className="font-display text-2xl font-bold">0</dd>
            </div>
          </dl>
        </div>

        <div className="animate-slide-up [animation-delay:120ms]">
          <FillDemo />
        </div>
      </div>
    </section>
  );
};
