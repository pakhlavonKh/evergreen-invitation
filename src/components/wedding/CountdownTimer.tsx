import { useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import divider from "@/assets/eucalyptus-divider.png";

const WEDDING_DATE = new Date("2026-09-14T16:00:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const { ref, isVisible } = useScrollReveal();

  useEffect(() => {
    const calc = () => {
      const diff = WEDDING_DATE.getTime() - Date.now();
      if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    };
    setTimeLeft(calc());
    const id = setInterval(() => setTimeLeft(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  const blocks = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <section ref={ref} className="py-20 px-4">
      <div className={`max-w-2xl mx-auto text-center transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
        <img src={divider} alt="" className="w-64 mx-auto mb-8 opacity-60" />
        <h2 className="font-display text-4xl md:text-5xl italic text-foreground mb-2" style={{ lineHeight: 1.1 }}>
          Counting Down
        </h2>
        <p className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground mb-10">
          To our forever
        </p>
        <div className="grid grid-cols-4 gap-3 md:gap-6">
          {blocks.map((b, i) => (
            <div
              key={b.label}
              className={`bg-secondary/60 rounded-lg py-5 md:py-8 transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${200 + i * 100}ms` }}
            >
              <span className="font-display text-4xl md:text-5xl text-foreground tabular-nums">
                {String(b.value).padStart(2, "0")}
              </span>
              <p className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mt-1">
                {b.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
