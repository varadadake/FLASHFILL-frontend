import { Zap } from "lucide-react";

const CATEGORIES = [
  { label: "SaaS & Productivity", count: "12,000+" },
  { label: "Developer Tools",     count: "8,500+"  },
  { label: "eCommerce & Retail",  count: "9,200+"  },
  { label: "Social & Community",  count: "7,400+"  },
  { label: "Finance & Fintech",   count: "6,100+"  },
  { label: "Media & Publishing",  count: "6,800+"  },
];

export const Compatibility = () => {
  return (
    <section className="border-b-2 border-ink py-24">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Left panel — category breakdown */}
          <div className="border-2 border-ink bg-background p-8 shadow-brutal-lg">
            <div className="flex items-center gap-2 border-b-2 border-ink pb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-bolt" />
              Where it works
            </div>
            <div className="mt-6 space-y-3">
              {CATEGORIES.map(({ label, count }) => (
                <div key={label} className="flex items-center justify-between border border-ink/10 bg-secondary/40 px-4 py-2.5">
                  <span className="flex items-center gap-2 font-mono text-sm">
                    <Zap className="h-3.5 w-3.5 fill-bolt text-bolt" strokeWidth={2} />
                    {label}
                  </span>
                  <span className="font-mono text-sm font-bold text-bolt">{count}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 font-mono text-xs text-muted-foreground">
              If a page has a form field, FlashFill finds it and fills it — even on dynamically rendered pages.
            </p>
          </div>

          {/* Right — headline */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">// compatibility</p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              If it has a form,<br />
              FlashFill fills it.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Single-page apps used to break autofill. Not anymore. FlashFill watches the DOM and reacts the moment a field appears — Shadow DOM, hydration, lazy mounts, all of it.
            </p>
            <div className="mt-8 inline-flex items-baseline gap-3 border-2 border-ink bg-bolt px-5 py-3 shadow-brutal">
              <span className="font-display text-4xl font-bold">50,000+</span>
              <span className="font-mono text-xs uppercase tracking-widest">verified sites</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
