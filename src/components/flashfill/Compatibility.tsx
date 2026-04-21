import { Check } from "lucide-react";

const FRAMEWORKS = ["React", "Next.js", "Vue", "Nuxt", "Svelte", "Angular", "Remix", "Astro", "Vanilla JS", "Webflow", "Framer", "WordPress"];

export const Compatibility = () => {
  return (
    <section className="border-b-2 border-ink py-24">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="border-2 border-ink bg-background p-8 shadow-brutal-lg">
            <div className="flex items-center gap-2 border-b-2 border-ink pb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-bolt" />
              Compatibility matrix
            </div>
            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-3">
              {FRAMEWORKS.map((f) => (
                <div key={f} className="flex items-center gap-2 font-mono text-sm">
                  <Check className="h-4 w-4 text-bolt" strokeWidth={3} />
                  {f}
                </div>
              ))}
            </div>
            <div className="mt-6 border-t-2 border-ink pt-4">
              <p className="font-mono text-xs text-muted-foreground">
                Powered by <span className="text-foreground font-bold">MutationObserver</span> — fields injected after page load? Fills them anyway.
              </p>
            </div>
          </div>

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
              <span className="font-display text-4xl font-bold">5,000+</span>
              <span className="font-mono text-xs uppercase tracking-widest">verified sites</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
