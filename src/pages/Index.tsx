import { Nav } from "@/components/flashfill/Nav";
import { Hero } from "@/components/flashfill/Hero";
import { Marquee } from "@/components/flashfill/Marquee";
import { GettingStarted } from "@/components/flashfill/GettingStarted";
import { Compatibility } from "@/components/flashfill/Compatibility";
import { OpenSource } from "@/components/flashfill/OpenSource";
import { UnderTheHood } from "@/components/flashfill/UnderTheHood";
import { Footer } from "@/components/flashfill/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-paper text-foreground">
      <Nav />
      <h1 className="sr-only">FlashFill — open-source browser extension that fills signup forms with disposable emails in under 3 seconds</h1>
      <Hero />
      <Marquee />
      <GettingStarted />
      <Compatibility />
      <OpenSource />
      <UnderTheHood />
      <Footer />
    </main>
  );
};

export default Index;
