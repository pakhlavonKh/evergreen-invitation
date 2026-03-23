import Navigation from "@/components/wedding/Navigation";
import HeroSection from "@/components/wedding/HeroSection";
import CountdownTimer from "@/components/wedding/CountdownTimer";
import OurStory from "@/components/wedding/OurStory";
import WeddingDetails from "@/components/wedding/WeddingDetails";
import PhotoGallery from "@/components/wedding/PhotoGallery";
import RsvpSection from "@/components/wedding/RsvpSection";
import GuestBook from "@/components/wedding/GuestBook";
import Footer from "@/components/wedding/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <HeroSection />
    <CountdownTimer />
    <div id="story">
      <OurStory />
    </div>
    <div id="details">
      <WeddingDetails />
    </div>
    <div id="gallery">
      <PhotoGallery />
    </div>
    <RsvpSection />
    <div id="guestbook">
      <GuestBook />
    </div>
    <Footer />
  </div>
);

export default Index;
