import { Zap, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mt-10 border-t-2 border-ink pt-8">
    <h2 className="font-display text-2xl font-bold tracking-tight">{title}</h2>
    <div className="mt-4 space-y-3 text-muted-foreground leading-relaxed">{children}</div>
  </div>
);

export default function PrivacyPage() {
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
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-sm hover:text-bolt"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <div className="border-b-2 border-ink bg-ink py-16 text-paper">
        <div className="container">
          <p className="font-mono text-xs uppercase tracking-widest text-bolt">// privacy policy</p>
          <h1 className="mt-3 font-display text-5xl font-bold tracking-tight sm:text-6xl">
            FlashFill<br />Privacy Policy
          </h1>
          <p className="mt-4 font-mono text-sm text-paper/50">Last Updated: April 25, 2026</p>
        </div>
      </div>

      {/* Body */}
      <main className="container py-16 max-w-3xl">

        {/* Intro highlight */}
        <div className="border-2 border-ink bg-bolt px-6 py-5 shadow-brutal">
          <p className="font-display text-xl font-bold">
            FlashFill does not collect, store, or transmit any personal user data.
          </p>
          <p className="mt-2 text-sm">
            All data generated and used by FlashFill remains local to your browser and is never sent to external servers — because FlashFill has no servers.
          </p>
        </div>

        <Section title="Introduction">
          <p>
            FlashFill is a Chrome extension that automates signup form completion using temporary email addresses and automatic OTP verification. This privacy policy explains how FlashFill handles user data.
          </p>
        </Section>

        <Section title="What Data is Stored Locally">
          <p>The following data is stored in your browser using Chrome's local storage API:</p>
          <ul className="mt-3 space-y-2 pl-4">
            {[
              ["Burner Identity History", "Up to 2 temporary identities (free tier) including generated names, usernames, and temporary email addresses."],
              ["Session Tokens", "Temporary tokens used to access disposable email inboxes."],
              ["Inbox Messages", "OTP verification emails received during signup flows."],
            ].map(([term, def]) => (
              <li key={term} className="flex gap-2">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-bolt" />
                <span><strong className="text-foreground">{term}:</strong> {def}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4">
            This data is stored locally on your device and can be cleared at any time by clicking <strong className="text-foreground">"Clear Session"</strong> in the FlashFill popup, or by uninstalling the extension.
          </p>
        </Section>

        <Section title="What FlashFill Does">
          <p>When you visit a website with a signup form:</p>
          <ol className="mt-3 space-y-2 pl-4 list-decimal list-inside">
            {[
              "FlashFill detects email input fields automatically.",
              "Generates a temporary email address and burner identity (name, username, password, phone number).",
              "Auto-fills the form with this temporary data.",
              "Monitors the temporary inbox for verification emails.",
              "Automatically extracts and injects OTP codes when they arrive.",
            ].map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
          <p className="mt-4">
            <strong className="text-foreground">FlashFill only activates on signup forms.</strong> It does not read, analyze, or transmit content from other parts of the websites you visit.
          </p>
        </Section>

        <Section title="Third-Party Services">
          <p>
            FlashFill uses third-party temporary email services to generate disposable email addresses. These services operate independently and FlashFill does not control their data handling practices.
          </p>
          <p>
            When you use FlashFill, the third-party email service may receive the temporary email address being created and verification emails sent to that address. These services have their own privacy policies. FlashFill acts as an intermediary to display this data to you but does not store it permanently.
          </p>
        </Section>

        <Section title="Permissions Explanation">
          <p>FlashFill requests the following Chrome permissions:</p>
          <ul className="mt-3 space-y-2 pl-4">
            {[
              ["storage", "To save your identity history and session data locally in your browser."],
              ["activeTab", "To detect and interact with signup forms on the page you're currently viewing."],
              ["scripting", "To inject form-filling scripts into web pages."],
              ["tabs", "To communicate between different parts of the extension."],
              ["alarms", "To set automatic timeouts for OTP polling."],
              ["Host permissions (all URLs)", "To detect signup forms across any website you visit."],
            ].map(([perm, desc]) => (
              <li key={perm} className="flex gap-2">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-bolt" />
                <span>
                  <strong className="font-mono text-xs text-foreground bg-secondary px-1 py-0.5">{perm}</strong>
                  {" — "}{desc}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4">
            <strong className="text-foreground">These permissions are used solely for the extension's core functionality.</strong> FlashFill does not use them to collect browsing data, track your activity, or transmit information to third parties.
          </p>
        </Section>

        <Section title="Data Sharing">
          <p>FlashFill does not:</p>
          <ul className="mt-3 space-y-2 pl-4">
            {[
              "Sell user data.",
              "Share user data with third parties for advertising or marketing purposes.",
              "Transmit browsing history, form data, or personal information to external servers.",
              "Track user behavior across websites.",
            ].map((s) => (
              <li key={s} className="flex gap-2">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-destructive" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Data Retention">
          <ul className="space-y-2 pl-4">
            {[
              ["Identity history", "Stored locally until you manually clear it or uninstall the extension."],
              ["Temporary email inboxes", "Expire automatically according to the third-party email service's retention policy (typically 10–60 minutes)."],
              ["Session data", "Cleared when you click 'Clear Session' in the popup."],
            ].map(([term, def]) => (
              <li key={term} className="flex gap-2">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-bolt" />
                <span><strong className="text-foreground">{term}:</strong> {def}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="User Rights">
          <p>You have the right to:</p>
          <ul className="mt-3 space-y-2 pl-4">
            {[
              "Clear all locally stored data at any time via the FlashFill popup.",
              "Uninstall the extension to remove all associated data.",
              "Contact us with privacy concerns at the email below.",
            ].map((s) => (
              <li key={s} className="flex gap-2">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-bolt" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Children's Privacy">
          <p>
            FlashFill is not intended for use by children under 13. We do not knowingly collect data from children.
          </p>
        </Section>

        <Section title="Changes to This Policy">
          <p>
            We may update this privacy policy from time to time. Changes will be reflected by updating the "Last Updated" date at the top of this document. Continued use of FlashFill after changes constitutes acceptance of the updated policy.
          </p>
        </Section>

        <Section title="Contact">
          <p>For privacy questions or concerns:</p>
          <div className="mt-4 border-2 border-ink bg-background p-5 shadow-brutal">
            <p className="font-mono text-sm">
              <span className="text-muted-foreground uppercase tracking-widest text-xs">Email</span><br />
              <a href="mailto:rushil@sociovate.com" className="font-bold text-bolt hover:underline">
                rushil@sociovate.com
              </a>
            </p>
          </div>
        </Section>

        <p className="mt-12 border-t-2 border-ink pt-6 font-mono text-xs text-muted-foreground">
          This privacy policy was last updated on April 25, 2026.
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
          <p className="font-mono text-xs text-paper/40 uppercase tracking-widest">
            © {new Date().getFullYear()} FlashFill · MIT Licensed · No telemetry
          </p>
        </div>
      </footer>
    </div>
  );
}
