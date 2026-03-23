import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface WishEntry {
  name: string;
  message: string;
  date: string;
}

const initialWishes: WishEntry[] = [
  { name: "Sarah Mitchell", message: "So thrilled for you both! Your love story gives us all hope. Can't wait to celebrate!", date: "Mar 12, 2026" },
  { name: "David Chen", message: "Two of my favorite people becoming one family. This is going to be the most beautiful wedding.", date: "Mar 8, 2026" },
  { name: "Olivia Hart", message: "Emma, you're going to be the most radiant bride. James, you're one lucky man!", date: "Feb 28, 2026" },
];

const GuestBook = () => {
  const { ref, isVisible } = useScrollReveal();
  const [wishes, setWishes] = useState<WishEntry[]>(initialWishes);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setWishes([{ name, message, date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) }, ...wishes]);
    setName("");
    setMessage("");
  };

  return (
    <section ref={ref} className="py-24 px-4">
      <div className={`max-w-2xl mx-auto transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
        <h2 className="font-display text-4xl md:text-5xl italic text-foreground text-center mb-2" style={{ lineHeight: 1.1 }}>
          Guest Book
        </h2>
        <p className="font-body text-sm text-muted-foreground text-center mb-10">
          Leave your wishes for the happy couple
        </p>

        <form onSubmit={handleSubmit} className="bg-secondary/50 rounded-lg p-6 md:p-8 mb-8 space-y-4">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
            className="w-full border border-border rounded-md px-4 py-2.5 font-body text-sm bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your wishes..."
            required
            rows={3}
            className="w-full border border-border rounded-md px-4 py-2.5 font-body text-sm bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring transition-shadow resize-none"
          />
          <button
            type="submit"
            className="bg-primary text-primary-foreground font-body text-sm tracking-[0.15em] uppercase px-8 py-2.5 rounded-md hover:bg-sage-dark transition-colors duration-300 active:scale-[0.98]"
          >
            Sign Guest Book
          </button>
        </form>

        <div className="space-y-4">
          {wishes.map((w, i) => (
            <div
              key={i}
              className="bg-background rounded-lg p-5 shadow-sm border border-border/50"
            >
              <p className="font-body text-sm text-foreground leading-relaxed mb-3">"{w.message}"</p>
              <div className="flex items-center justify-between">
                <span className="font-display text-base italic text-foreground">{w.name}</span>
                <span className="font-body text-xs text-muted-foreground">{w.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuestBook;
