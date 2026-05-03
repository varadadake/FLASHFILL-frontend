import { Github } from "lucide-react";

const PIPELINE = [
  { file: "observer.ts",       desc: "Watches DOM mutations + URL changes across every tab" },
  { file: "detector.ts",       desc: "Finds signup forms by keyword + parent heuristics"    },
  { file: "injector.ts",       desc: "Ghost-fills email, name, password with fake identity" },
  { file: "content script",    desc: "Sends FORM_SUBMITTED → service worker"                },
  { file: "worker.ts",         desc: "Spins up polling via polling-manager.ts"              },
  { file: "polling-manager",   desc: "Polls Privatix API for new email in temp mailbox"     },
  { file: "worker.ts",         desc: "Sends OTP_FOUND → content script"                    },
  { file: "injector.ts",       desc: "Injects OTP into verification field"                  },
];

export const UnderTheHood = () => {
  return (
    <section className="border-b-2 border-ink bg-ink py-24 text-paper relative overflow-hidden">
      {/* subtle grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(hsl(var(--paper)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--paper)) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }} />

      <div className="container relative">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:items-start">

          {/* Left — headline */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-bolt">// under the hood</p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Eight steps.<br />
              <span className="text-bolt">Zero human input.</span>
            </h2>
            <p className="mt-6 text-lg text-paper/70">
              From DOM mutation to OTP injection — FlashFill's pipeline runs entirely in your browser.
              No server. No middleman. No data leaves your machine.
            </p>
            <a
              href="https://github.com/rushilbh27/getflashfill"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 border-2 border-bolt px-5 py-2.5 font-mono text-sm font-bold uppercase tracking-wider text-bolt transition-snap hover:-translate-y-0.5 hover:bg-bolt hover:text-ink"
            >
              <Github className="h-4 w-4" />
              Read the source
            </a>
          </div>

          {/* Right — pipeline */}
          <div className="space-y-0">
            {PIPELINE.map(({ file, desc }, i) => (
              <div
                key={i}
                className="group flex items-start gap-4 border-b border-paper/10 py-4 last:border-0 hover:border-bolt/40 transition-colors"
              >
                {/* step number */}
                <span className="w-6 shrink-0 font-mono text-xs font-bold text-bolt/60 pt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* connector line */}
                <div className="flex flex-col items-center pt-1.5 self-stretch">
                  <span className="h-2.5 w-2.5 rounded-full border-2 border-bolt bg-ink group-hover:bg-bolt transition-colors" />
                  {i < PIPELINE.length - 1 && (
                    <span className="mt-1 w-px flex-1 border-l border-dashed border-bolt/30" />
                  )}
                </div>

                {/* content */}
                <div className="pb-2">
                  <span className="font-mono text-xs font-bold bg-paper/10 px-2 py-0.5 text-bolt">
                    {file}
                  </span>
                  <p className="mt-1.5 font-mono text-sm text-paper/60">{desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
