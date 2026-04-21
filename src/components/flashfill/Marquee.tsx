const ITEMS = [
  "5000+ SITES",
  "REACT",
  "NEXT.JS",
  "VUE",
  "SVELTE",
  "SPAs",
  "MUTATIONOBSERVER",
  "ZERO TELEMETRY",
  "MIT LICENSED",
  "OPEN SOURCE",
  "<3 SECOND FILL",
];

export const Marquee = () => {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="border-b-2 border-ink bg-ink py-3 overflow-hidden">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap font-mono text-sm font-bold uppercase tracking-widest text-bolt">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            <span>{item}</span>
            <span className="text-bolt/40">★</span>
          </span>
        ))}
      </div>
    </div>
  );
};
