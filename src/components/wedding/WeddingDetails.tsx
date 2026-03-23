import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Clock, MapPin, Heart } from "lucide-react";

const details = [
  { icon: Clock, title: "Ceremony", time: "4:00 PM", desc: "Gather at the garden pavilion as we exchange vows beneath the oak canopy." },
  { icon: Heart, title: "Reception", time: "6:00 PM", desc: "Dinner, dancing, and celebration under the stars at the vineyard terrace." },
  { icon: MapPin, title: "Venue", time: "Meadow Creek Gardens", desc: "1847 Silverado Trail, Napa Valley, CA 94558" },
];

const WeddingDetails = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2
          className={`font-display text-4xl md:text-5xl italic text-foreground mb-12 transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
          style={{ lineHeight: 1.1 }}
        >
          Wedding Details
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {details.map((d, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${200 + i * 150}ms` }}
            >
              <d.icon className="w-6 h-6 text-sage mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="font-display text-xl italic text-foreground mb-1">{d.title}</h3>
              <p className="font-body text-sm font-medium text-sage mb-2">{d.time}</p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeddingDetails;
