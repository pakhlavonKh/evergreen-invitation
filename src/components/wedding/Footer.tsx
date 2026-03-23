import divider from "@/assets/eucalyptus-divider.png";

const Footer = () => (
  <footer className="py-16 px-4 text-center">
    <img src={divider} alt="" className="w-48 mx-auto mb-6 opacity-50" />
    <p className="font-display text-3xl italic text-foreground mb-2">Emma &amp; James</p>
    <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">
      September 14, 2026 · Napa Valley, CA
    </p>
    <p className="font-body text-xs text-muted-foreground/50 mt-8">
      Made with love
    </p>
  </footer>
);

export default Footer;
