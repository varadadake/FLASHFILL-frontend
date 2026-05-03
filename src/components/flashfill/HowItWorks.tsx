import { Lock, MousePointerClick, Mailbox } from "lucide-react";

const STEPS = [
  {
    n: "01",
    icon: Lock,
    title: "???",
    body: "Something is coming. We can't say what yet.",
    comingSoon: true,
  },
  {
    n: "02",
    icon: MousePointerClick,
    title: "Click the bolt. Watch it fill.",
    body: "Hit the FlashFill icon on any signup page. It instantly detects every field — name, email, password — and fills them all.",
    comingSoon: false,
  },
  {
    n: "03",
    icon: Mailbox,
    title: "Verify inside. Account unlocked.",
    body: "Your confirmation email lands right inside the popup — no tab switching. Click the link and you're in. Real inbox untouched. Zero spam, forever.",
    comingSoon: false,
  },
];

export const HowItWorks = () => {
  return (
    <section id="how" className="border-b-2 border-ink py-24">
      <div className="container">
        <div className="flex items-end justify-between gap-8 mb-12">
          <div>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Three steps. Then never type<br />a fake email again.
            </h2>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.n}
                className={`group relative border-2 border-ink bg-background p-6 transition-snap ${
                  step.comingSoon
                    ? "overflow-hidden cursor-not-allowed"
                    : "hover:-translate-y-1 hover:shadow-brutal-bolt"
                }`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {/* coming soon overlay */}
                {step.comingSoon && (
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-ink/90 backdrop-blur-sm">
                    <Lock className="h-8 w-8 text-bolt" strokeWidth={2} />
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-bolt animate-pulse">
                      Coming Soon
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-paper/50">
                      Something big is loading…
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold tracking-widest text-muted-foreground">
                    STEP {step.n}
                  </span>
                  <span className="grid h-10 w-10 place-items-center border-2 border-ink bg-bolt">
                    <Icon className="h-5 w-5" strokeWidth={2.5} />
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold leading-tight">{step.title}</h3>
                <p className="mt-3 text-muted-foreground">{step.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
