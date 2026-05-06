import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import TechStack from "@/components/home/TechStack";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0b0b0f]">
      <Navbar />
      <HeroSection />
      <FeaturedProjects />
      <TechStack />
      <Footer />
    </main>
  );
}