import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const photos = [
  { src: gallery1, alt: "Garden ceremony arch" },
  { src: gallery2, alt: "Reception table setting" },
  { src: gallery3, alt: "Wedding bouquet" },
  { src: gallery4, alt: "Couple in garden" },
];

const PhotoGallery = () => {
  const { ref, isVisible } = useScrollReveal();
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2
          className={`font-display text-4xl md:text-5xl italic text-foreground text-center mb-12 transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
          style={{ lineHeight: 1.1 }}
        >
          Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {photos.map((photo, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`group relative aspect-[3/4] overflow-hidden rounded-lg transition-all duration-700 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${200 + i * 100}ms` }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
            </button>
          ))}
        </div>
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/80 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <img
            src={photos[selected].src}
            alt={photos[selected].alt}
            className="max-w-full max-h-[85vh] rounded-lg shadow-2xl animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;
