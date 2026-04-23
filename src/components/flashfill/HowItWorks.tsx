import { LogIn, MousePointerClick, Mailbox } from "lucide-react";

const STEPS = [
  {
    n: "01",
    icon: LogIn,
    title: "Sign in with Google. You're set.",
    body: "Sign in with Google into the FlashFill popup. One-time setup. Never do it again.",
  },
  {
    n: "02",
    icon: MousePointerClick,
    title: "Click the bolt. Watch it fill.",
    body: "Hit the FlashFill icon on any signup page. It instantly detects every field — name, email, password — and fills them all.",
  },
  {
    n: "03",
    icon: Mailbox,
    title: "Verify inside. Account unlocked.",
    body: "Your confirmation email lands right inside the popup — no tab switching. Click the link and you're in. Real inbox untouched. Zero spam, forever.",
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
                className="group relative border-2 border-ink bg-background p-6 transition-snap hover:-translate-y-1 hover:shadow-brutal-bolt"
                style={{ animationDelay: `${i * 80}ms` }}
              >
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
