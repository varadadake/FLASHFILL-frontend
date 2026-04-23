import { ShieldCheck, EyeOff, Code2, Lock } from "lucide-react";

const POINTS = [
  { icon: EyeOff, title: "Your real email never leaves the building", body: "Forms get a disposable address. Always. Your inbox stays out of every leaked database." },
  { icon: ShieldCheck, title: "Zero telemetry. Zero tracking.", body: "No analytics. No phone-home. No mystery network calls. Inspect the bundle yourself." },
  { icon: Code2, title: "Open source, MIT licensed", body: "Every line is public. Audit it, fork it, ship your own. We have nothing to hide." },
  { icon: Lock, title: "Keys live in your browser only", body: "Your credentials are stored locally with the browser's storage API — never synced to a server." },
];

export const Privacy = () => {
  return (
    <section id="privacy" className="border-b-2 border-ink bg-ink py-24 text-paper relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--paper)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--paper)) 1px, transparent 1px)',
        backgroundSize: '48px 48px'
      }} />
      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-bolt">// privacy</p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Built like<br />
              <span className="text-bolt">you'd build it</span><br />
              for yourself.
            </h2>
            <p className="mt-6 max-w-md text-lg text-paper/70">
              Because everyone knows the pain — your inbox buried under trial emails, newsletters, and spam from tools you tested once and forgot. FlashFill was built to end that.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {POINTS.map(({ icon: Icon, title, body }) => (
              <div key={title} className="border-2 border-paper/20 bg-paper/[0.03] p-5 transition-snap hover:border-bolt hover:bg-paper/[0.06]">
                <Icon className="h-6 w-6 text-bolt" strokeWidth={2} />
                <h3 className="mt-4 font-display text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm text-paper/60">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
