import { Terminal, Chrome, Zap } from "lucide-react";

const CHROME_STEPS = [
  "Open chrome://extensions",
  "Enable Developer mode",
  "Click Load unpacked → select the dist/ folder",
];

export const GettingStarted = () => {
  return (
    <section id="how" className="border-b-2 border-ink py-24">
      <div className="container">
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">// getting started</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Up and running<br />in 60 seconds.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {/* Step 1 — Clone & build */}
          <div className="border-2 border-ink bg-background p-6 shadow-brutal">
            <div className="flex items-center justify-between mb-5">
              <span className="font-mono text-xs font-bold tracking-widest text-muted-foreground">STEP 01</span>
              <span className="grid h-10 w-10 place-items-center border-2 border-ink bg-bolt">
                <Terminal className="h-5 w-5" strokeWidth={2.5} />
              </span>
            </div>
            <h3 className="font-display text-xl font-bold">Clone &amp; build</h3>
            <p className="mt-2 text-sm text-muted-foreground">Node.js 18+ required. Free RapidAPI account needed.</p>

            <div className="mt-5 border-2 border-ink bg-ink font-mono text-xs text-paper">
              <div className="border-b border-paper/10 px-3 py-1.5 text-bolt/60 uppercase tracking-widest text-[10px]">terminal</div>
              <div className="space-y-1 p-3">
                <div><span className="text-bolt">$</span> git clone github.com/rushilbh27/getflashfill</div>
                <div><span className="text-bolt">$</span> cd getflashfill</div>
                <div><span className="text-bolt">$</span> npm install</div>
                <div><span className="text-bolt">$</span> npm run build</div>
              </div>
            </div>
          </div>

          {/* Step 2 — Load in Chrome */}
          <div className="border-2 border-ink bg-background p-6 shadow-brutal">
            <div className="flex items-center justify-between mb-5">
              <span className="font-mono text-xs font-bold tracking-widest text-muted-foreground">STEP 02</span>
              <span className="grid h-10 w-10 place-items-center border-2 border-ink bg-bolt">
                <Chrome className="h-5 w-5" strokeWidth={2.5} />
              </span>
            </div>
            <h3 className="font-display text-xl font-bold">Load in Chrome</h3>
            <p className="mt-2 text-sm text-muted-foreground">Takes 30 seconds. No store required.</p>

            <ul className="mt-5 space-y-3">
              {CHROME_STEPS.map((s, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border-2 border-ink bg-bolt font-mono text-[10px] font-bold">
                    {i + 1}
                  </span>
                  <span className="font-mono text-sm text-muted-foreground">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Step 3 — First run */}
          <div className="border-2 border-ink bg-background p-6 shadow-brutal">
            <div className="flex items-center justify-between mb-5">
              <span className="font-mono text-xs font-bold tracking-widest text-muted-foreground">STEP 03</span>
              <span className="grid h-10 w-10 place-items-center border-2 border-ink bg-bolt">
                <Zap className="h-5 w-5 fill-ink" strokeWidth={2.5} />
              </span>
            </div>
            <h3 className="font-display text-xl font-bold">First run</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Subscribe to <strong>Privatix Temp Mail</strong> on RapidAPI (free tier). Paste your API key into the FlashFill popup when prompted.
            </p>
            <div className="mt-5 border-2 border-ink bg-bolt px-4 py-3">
              <p className="font-mono text-sm font-bold">That's it — FlashFill is now active on every tab.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
