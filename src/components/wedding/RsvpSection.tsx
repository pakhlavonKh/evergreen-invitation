import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import divider from "@/assets/eucalyptus-divider.png";

const RsvpSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", guests: "1", attending: "yes", dietary: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section ref={ref} id="rsvp" className="py-24 px-4 bg-secondary/40">
      <div className={`max-w-lg mx-auto text-center transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
        <img src={divider} alt="" className="w-48 mx-auto mb-8 opacity-60" />
        <h2 className="font-display text-4xl md:text-5xl italic text-foreground mb-2" style={{ lineHeight: 1.1 }}>
          RSVP
        </h2>
        <p className="font-body text-sm text-muted-foreground mb-10">
          Kindly respond by August 1, 2026
        </p>

        {submitted ? (
          <div className="animate-fade-up bg-background rounded-lg p-10 shadow-sm">
            <p className="font-display text-2xl italic text-foreground mb-2">Thank You!</p>
            <p className="font-body text-sm text-muted-foreground">We've received your response and can't wait to celebrate with you.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-background rounded-lg p-8 md:p-10 shadow-sm text-left space-y-5">
            <div>
              <label className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-1.5 block">Full Name</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-border rounded-md px-4 py-2.5 font-body text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
              />
            </div>
            <div>
              <label className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-1.5 block">Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border border-border rounded-md px-4 py-2.5 font-body text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-1.5 block">Attending?</label>
                <select
                  value={form.attending}
                  onChange={(e) => setForm({ ...form, attending: e.target.value })}
                  className="w-full border border-border rounded-md px-4 py-2.5 font-body text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                >
                  <option value="yes">Joyfully Accept</option>
                  <option value="no">Regretfully Decline</option>
                </select>
              </div>
              <div>
                <label className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-1.5 block">Number of Guests</label>
                <select
                  value={form.guests}
                  onChange={(e) => setForm({ ...form, guests: e.target.value })}
                  className="w-full border border-border rounded-md px-4 py-2.5 font-body text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                >
                  {[1, 2, 3, 4].map((n) => (
                    <option key={n} value={String(n)}>{n}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-1.5 block">Dietary Requirements</label>
              <input
                value={form.dietary}
                onChange={(e) => setForm({ ...form, dietary: e.target.value })}
                placeholder="Any allergies or preferences"
                className="w-full border border-border rounded-md px-4 py-2.5 font-body text-sm bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
              />
            </div>
            <div>
              <label className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-1.5 block">Message for the Couple</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={3}
                className="w-full border border-border rounded-md px-4 py-2.5 font-body text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-body text-sm tracking-[0.15em] uppercase py-3 rounded-md hover:bg-sage-dark transition-colors duration-300 active:scale-[0.98]"
            >
              Send RSVP
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default RsvpSection;
