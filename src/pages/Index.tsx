import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HolidayCampSection from "@/components/HolidayCampSection";
import MoveItSection from "@/components/MoveItSection";
import ContactSection from "@/components/ContactSection";
import VideoSection from "@/components/VideoSection";
import ParallaxImageSection from "@/components/ParallaxImageSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <AboutSection />
      <HeroSection />
      <ParallaxImageSection />
      <HolidayCampSection />
      <MoveItSection />
      <ContactSection />
      <VideoSection />
      <Footer />
    </div>
  );
};

export default Index;
