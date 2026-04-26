import { Zap, ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mt-10 border-t-2 border-ink pt-8">
    <h2 className="font-display text-2xl font-bold tracking-tight">{title}</h2>
    <div className="mt-4 space-y-3 text-muted-foreground leading-relaxed">{children}</div>
  </div>
);

const FAQ = ({ q, children }: { q: string; children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-2 border-ink bg-background">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between px-5 py-4 text-left font-display font-bold hover:bg-secondary/40 transition-colors"
      >
        {q}
        <ChevronDown className={`h-5 w-5 shrink-0 text-bolt transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="border-t-2 border-ink px-5 py-4 font-mono text-sm text-muted-foreground leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
};

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-paper text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b-2 border-ink bg-paper/90 backdrop-blur">
        <nav className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center bg-ink text-bolt shadow-brutal-bolt">
              <Zap className="h-4 w-4 fill-bolt" strokeWidth={2.5} />
            </span>
            <span className="font-display text-xl font-bold tracking-tight">FlashFill</span>
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 font-mono text-sm hover:text-bolt">
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <div className="border-b-2 border-ink bg-ink py-16 text-paper">
        <div className="container">
          <p className="font-mono text-xs uppercase tracking-widest text-bolt">// support</p>
          <h1 className="mt-3 font-display text-5xl font-bold tracking-tight sm:text-6xl">
            FlashFill<br />Support
          </h1>
          <p className="mt-4 font-mono text-sm text-paper/50">Last updated: April 25, 2026</p>
        </div>
      </div>

      {/* Body */}
      <main className="container py-16 max-w-3xl">

        {/* Quick start */}
        <div className="border-2 border-ink bg-bolt px-6 py-5 shadow-brutal">
          <p className="font-display text-lg font-bold mb-3">Quick Start</p>
          <ol className="space-y-1.5 font-mono text-sm list-decimal list-inside">
            <li>Install FlashFill from the Chrome Web Store</li>
            <li>Visit any website with a signup form</li>
            <li>FlashFill will automatically detect and fill the form</li>
            <li>Submit the form and wait for automatic OTP verification</li>
          </ol>
          <p className="mt-3 font-mono text-sm font-bold">No setup. No API keys. No configuration.</p>
        </div>

        <Section title="How to Use">
          <div className="space-y-6">
            {[
              {
                heading: "Auto-Fill Signup Forms",
                body: "FlashFill automatically detects and fills signup forms with a temporary email address, realistic name, username, strong password, and US phone number. Just visit a signup page and watch it work.",
              },
              {
                heading: "View Your Inbox",
                body: "Click the FlashFill extension icon to see your current temporary email address, view received verification emails, copy OTP codes manually if auto-injection fails, and click magic verification links.",
              },
              {
                heading: "Navigate Identity History",
                body: "Use the ‹ › arrows in the popup to switch between your last 2 burner identities (free tier).",
              },
              {
                heading: "Pause Auto-Fill",
                body: "Click the pause button in the popup to temporarily stop FlashFill from filling forms. Resume when ready.",
              },
              {
                heading: "Clear Session",
                body: "Click \"Clear Session\" in the popup to wipe your current identity and start fresh.",
              },
            ].map(({ heading, body }) => (
              <div key={heading} className="border-l-4 border-bolt pl-4">
                <p className="font-display font-bold text-foreground">{heading}</p>
                <p className="mt-1">{body}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Troubleshooting">
          <div className="space-y-3">
            <FAQ q="Extension isn't filling forms">
              <p className="font-bold text-foreground mb-2">Possible causes:</p>
              <ul className="space-y-1 mb-3">
                {["The site uses a non-standard signup form", "You have auto-fill paused (check the popup)", "The page hasn't fully loaded yet"].map(s => (
                  <li key={s} className="flex gap-2"><span className="text-bolt">—</span>{s}</li>
                ))}
              </ul>
              <p className="font-bold text-foreground mb-2">Solutions:</p>
              <ul className="space-y-1">
                {["Wait 2–3 seconds after the page loads", "Refresh the page", "Check that FlashFill is active in the popup"].map(s => (
                  <li key={s} className="flex gap-2"><span className="text-bolt">→</span>{s}</li>
                ))}
              </ul>
            </FAQ>

            <FAQ q="OTP code not auto-injecting">
              <p className="font-bold text-foreground mb-2">Possible causes:</p>
              <ul className="space-y-1 mb-3">
                {["The verification email hasn't arrived yet", "The site uses a non-standard OTP input field", "You navigated away before the email arrived"].map(s => (
                  <li key={s} className="flex gap-2"><span className="text-bolt">—</span>{s}</li>
                ))}
              </ul>
              <p className="font-bold text-foreground mb-2">Solutions:</p>
              <ul className="space-y-1">
                {["Open the FlashFill popup and manually copy the code", "Wait up to 90 seconds for emails to arrive", "Check the inbox in the popup for the code"].map(s => (
                  <li key={s} className="flex gap-2"><span className="text-bolt">→</span>{s}</li>
                ))}
              </ul>
            </FAQ>

            <FAQ q='"No emails used yet" in popup'>
              This means you haven't used FlashFill on any signup forms yet. Visit a signup page and the extension will activate automatically.
            </FAQ>

            <FAQ q="Extension icon is grayed out">
              FlashFill only activates on pages with detectable signup forms. If you're on a page without a form, the extension stays inactive.
            </FAQ>
          </div>
        </Section>

        <Section title="Supported Sites">
          <p>FlashFill works on most modern websites including:</p>
          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {["Canva", "Notion", "Loom", "Trello", "Figma", "Typeform", "BlackboxAI", "Product Hunt", "And thousands more…"].map((site) => (
              <div key={site} className="flex items-center gap-2 border border-ink/20 bg-secondary/30 px-3 py-2 font-mono text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-bolt" />
                {site}
              </div>
            ))}
          </div>
          <p className="mt-4">Any site with a standard email + OTP or email + magic link verification flow is supported.</p>
        </Section>

        <Section title="Known Limitations">
          <div className="space-y-3">
            {[
              ["Split OTP boxes", "Sites that use 6 separate input boxes for OTP codes (one digit per box) are not yet supported."],
              ["CAPTCHA-protected forms", "FlashFill cannot bypass CAPTCHA verification."],
              ["SSO-only signups", "Sites that only offer Google/Facebook login won't work with FlashFill."],
            ].map(([title, desc]) => (
              <div key={title} className="flex gap-3 border-2 border-ink/20 bg-secondary/20 px-4 py-3">
                <span className="mt-0.5 font-mono text-xs font-bold text-destructive uppercase">✕</span>
                <div>
                  <p className="font-bold text-foreground">{title}</p>
                  <p className="text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Free Tier Limits">
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ["2", "Burner identities included"],
              ["∞", "Signups using those identities"],
              ["$0", "No credit card required"],
            ].map(([val, label]) => (
              <div key={label} className="border-2 border-ink bg-background p-4 text-center shadow-brutal">
                <p className="font-display text-3xl font-bold text-bolt">{val}</p>
                <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
          <p className="mt-4">A paid tier with unlimited identities is coming soon.</p>
        </Section>

        <Section title="Feature Requests & Bug Reports">
          <p>Found a bug or want a new feature? Reach out and include:</p>
          <ul className="mt-3 space-y-1.5 pl-4">
            {["Browser version", "Website where the issue occurred", "Steps to reproduce", "Screenshots if applicable"].map(s => (
              <li key={s} className="flex gap-2">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-bolt" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Contact">
          <div className="border-2 border-ink bg-background p-5 shadow-brutal">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Email</p>
            <a href="mailto:rushil@sociovate.com" className="font-display text-lg font-bold text-bolt hover:underline">
              rushil@sociovate.com
            </a>
          </div>
          <p className="mt-4 text-sm">
            Also see our full{" "}
            <Link to="/privacy" className="font-bold text-foreground underline hover:text-bolt">
              Privacy Policy
            </Link>.
          </p>
        </Section>

        <p className="mt-12 border-t-2 border-ink pt-6 font-mono text-xs text-muted-foreground">
          Last updated: April 25, 2026
        </p>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-ink bg-ink py-8 text-paper">
        <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center bg-bolt text-ink">
              <Zap className="h-3.5 w-3.5 fill-ink" strokeWidth={2.5} />
            </span>
            <span className="font-display font-bold tracking-tight">FlashFill</span>
          </div>
          <div className="flex items-center gap-6 font-mono text-xs text-paper/40 uppercase tracking-widest">
            <Link to="/privacy" className="hover:text-bolt transition-colors">Privacy</Link>
            <Link to="/support" className="hover:text-bolt transition-colors">Support</Link>
            <span>© {new Date().getFullYear()} FlashFill</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
