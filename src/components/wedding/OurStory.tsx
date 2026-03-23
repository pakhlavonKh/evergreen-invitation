import { useScrollReveal } from "@/hooks/useScrollReveal";

const events = [
  { date: "June 2019", title: "First Meeting", text: "A chance encounter at a friend's garden party. One conversation turned into hours." },
  { date: "August 2020", title: "First Adventure", text: "A spontaneous road trip to the coast that cemented what we already knew." },
  { date: "December 2024", title: "The Proposal", text: "Under a canopy of fairy lights in our favorite vineyard, he asked — and she said yes." },
  { date: "September 2026", title: "The Wedding", text: "The beginning of our forever, surrounded by the people we love most." },
];

const OurStory = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-24 px-4 bg-secondary/40">
      <div className="max-w-2xl mx-auto text-center">
        <h2
          className={`font-display text-4xl md:text-5xl italic text-foreground mb-12 transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
          style={{ lineHeight: 1.1 }}
        >
          Our Story
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
          {events.map((e, i) => (
            <div
              key={i}
              className={`relative pb-12 last:pb-0 transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${200 + i * 150}ms` }}
            >
              <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-sage border-2 border-background" />
              <div className={`${i % 2 === 0 ? "pr-[55%] text-right" : "pl-[55%] text-left"}`}>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-sage mb-1">{e.date}</p>
                <h3 className="font-display text-xl italic text-foreground mb-1">{e.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{e.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStory;
