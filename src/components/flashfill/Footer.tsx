import { Zap } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-ink py-12 text-paper">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center bg-bolt text-ink">
                <Zap className="h-4 w-4 fill-ink" strokeWidth={2.5} />
              </span>
              <span className="font-display text-xl font-bold tracking-tight">FlashFill</span>
            </div>
            <p className="mt-3 max-w-sm font-mono text-xs text-paper/50">
              Fill fast. Stay private. Sign up for anything.
            </p>
          </div>

          <div className="flex items-center gap-6 font-mono text-xs uppercase tracking-widest">
            <Link to="/privacy" className="text-paper/70 hover:text-bolt transition-colors">
              Privacy
            </Link>
            <Link to="/support" className="text-paper/70 hover:text-bolt transition-colors">
              Support
            </Link>
            <a href="https://github.com/rushilbh27/flashfill/blob/main/LICENSE" target="_blank" rel="noreferrer" className="text-paper/70 hover:text-bolt transition-colors">
              MIT License
            </a>
          </div>
        </div>

        <div className="mt-10 border-t-2 border-paper/10 pt-6 font-mono text-[10px] uppercase tracking-widest text-paper/40">
          © {new Date().getFullYear()} FlashFill · Open source · No telemetry · No tracking · No nonsense
        </div>
      </div>
    </footer>
  );
};
