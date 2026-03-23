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
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-24 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2
          className={`font-display text-4xl md:text-5xl italic mb-20 ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          Gallery
        </h2>

        {/* FAN CONTAINER */}
        <div className="relative h-[420px] flex items-center justify-center">
          {photos.map((photo, i) => {
            const total = photos.length;
            const middle = (total - 1) / 2;

            // spread control (adjust this ↓)
            const spreadX = 90; // horizontal spacing
            const spreadY = 20; // vertical curve
            const rotateFactor = 10;

            const offsetIndex = i - middle;

            const isActive = hovered === i;

            return (
              <button
                key={i}
                onClick={() => setSelected(i)}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="absolute transition-all duration-500"
                style={{
                  zIndex: isActive ? 50 : i,

                  transform: isActive
                    ? `translateX(0px) translateY(-20px) rotate(0deg) scale(1.08)`
                    : `
                      translateX(${offsetIndex * spreadX}px)
                      translateY(${Math.abs(offsetIndex) * spreadY}px)
                      rotate(${offsetIndex * rotateFactor}deg)
                    `,
                }}
              >
                {/* frame */}
                <div
                  className="p-2 rounded-xl transition-all duration-300"
                  style={{
                    background: isActive ? "white" : "transparent",
                    boxShadow: isActive
                      ? "0 25px 50px rgba(0,0,0,0.25)"
                      : "0 8px 16px rgba(0,0,0,0.15)",
                  }}
                >
                  {/* card */}
                  <div className="w-[220px] md:w-[260px] aspect-[3/4] rounded-lg overflow-hidden">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <img
            src={photos[selected].src}
            alt={photos[selected].alt}
            className="max-w-full max-h-[85vh] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;