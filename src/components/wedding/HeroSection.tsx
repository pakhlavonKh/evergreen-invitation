import floralFrame from "@/assets/floral-frame.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      <div className="relative z-10 flex flex-col items-center text-center max-w-xl mx-auto">
        <img
          src={floralFrame}
          alt="Floral wreath"
          className="absolute inset-0 w-full h-full object-contain pointer-events-none opacity-90 animate-fade-in"
        />
        <div className="relative z-20 py-24 px-8 md:py-32 md:px-12">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6 animate-fade-up">
            Together with their families
          </p>
          <h1
            className="font-display text-6xl md:text-7xl lg:text-8xl font-light italic text-foreground leading-[0.95] mb-2 animate-fade-up animation-delay-200"
            style={{ lineHeight: 1 }}
          >
            Emma
          </h1>
          <p className="font-display text-3xl md:text-4xl italic text-sage animate-fade-up animation-delay-300 my-2">
            &amp;
          </p>
          <h1
            className="font-display text-6xl md:text-7xl lg:text-8xl font-light italic text-foreground leading-[0.95] mb-6 animate-fade-up animation-delay-400"
            style={{ lineHeight: 1 }}
          >
            James
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mb-6 animate-fade-up animation-delay-500" />
          <p className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground animate-fade-up animation-delay-500">
            Request the pleasure of your company
          </p>
          <p className="font-display text-2xl md:text-3xl text-foreground mt-4 animate-fade-up animation-delay-600">
            September 14, 2026
          </p>
          <p className="font-body text-sm text-muted-foreground mt-2 animate-fade-up animation-delay-600">
            Meadow Creek Gardens · Napa Valley, CA
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
