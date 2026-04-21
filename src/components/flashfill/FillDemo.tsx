import { useEffect, useState } from "react";
import { Check, Zap } from "lucide-react";

const STAGES = [
  { label: "idle", email: "", name: "", pct: 0 },
  { label: "generating email", email: "", name: "", pct: 35 },
  { label: "detecting fields", email: "k7p2x@tempmail.io", name: "", pct: 65 },
  { label: "filling form", email: "k7p2x@tempmail.io", name: "Alex Rivera", pct: 90 },
  { label: "done · 2.4s", email: "k7p2x@tempmail.io", name: "Alex Rivera", pct: 100 },
];

export const FillDemo = () => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setStage((s) => (s + 1) % STAGES.length);
    }, 1400);
    return () => clearInterval(t);
  }, []);

  const s = STAGES[stage];
  const done = stage === STAGES.length - 1;

  return (
    <div className="relative">
      <div className="absolute -inset-2 bg-bolt/30 blur-2xl" aria-hidden />
      <div className="relative border-2 border-ink bg-background shadow-brutal-lg">
        {/* Browser chrome */}
        <div className="flex items-center justify-between border-b-2 border-ink bg-secondary px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full border border-ink bg-destructive" />
            <span className="h-3 w-3 rounded-full border border-ink bg-bolt" />
            <span className="h-3 w-3 rounded-full border border-ink bg-foreground/20" />
          </div>
          <div className="flex-1 mx-4 truncate border border-ink bg-background px-3 py-1 font-mono text-xs">
            https://some-saas.com/signup
          </div>
          <div className={`grid h-6 w-6 place-items-center border-2 border-ink transition-snap ${done ? "bg-bolt" : "bg-background"}`}>
            <Zap className="h-3 w-3 fill-current" strokeWidth={2.5} />
          </div>
        </div>

        {/* Form */}
        <div className="space-y-4 p-6">
          <div>
            <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Full name
            </label>
            <div className="flex h-11 items-center border-2 border-ink bg-input/40 px-3 font-mono text-sm">
              {s.name}
              {!s.name && <span className="h-4 w-px animate-blink bg-foreground" />}
            </div>
          </div>
          <div>
            <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Email address
            </label>
            <div className="flex h-11 items-center border-2 border-ink bg-input/40 px-3 font-mono text-sm">
              {s.email}
              {!s.email && <span className="h-4 w-px animate-blink bg-foreground" />}
            </div>
          </div>
          <div>
            <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Password
            </label>
            <div className="flex h-11 items-center border-2 border-ink bg-input/40 px-3 font-mono text-sm tracking-widest">
              {stage >= 3 ? "••••••••••••" : <span className="h-4 w-px animate-blink bg-foreground" />}
            </div>
          </div>

          <button
            disabled
            className={`flex h-11 w-full items-center justify-center gap-2 border-2 border-ink font-mono text-sm font-bold uppercase tracking-wider transition-snap ${done ? "bg-bolt shadow-brutal-bolt" : "bg-secondary"}`}
          >
            {done ? <><Check className="h-4 w-4" /> Account created</> : "Create account"}
          </button>
        </div>

        {/* Status bar */}
        <div className="border-t-2 border-ink bg-ink px-4 py-2.5">
          <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-bolt">
            <span className="flex items-center gap-2">
              <Zap className="h-3 w-3 fill-bolt animate-bolt-pulse" />
              flashfill: {s.label}
            </span>
            <span>{s.pct}%</span>
          </div>
          <div className="mt-2 h-1 border border-bolt/40">
            <div
              className="h-full bg-bolt transition-all duration-500 ease-out"
              style={{ width: `${s.pct}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
