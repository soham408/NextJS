import { main } from "framer-motion/client";
import Image from "next/image";
import HeroSection from "@/components/ui/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/ui/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[096] antialisaed bg-grid-white/[0.02]">
    <HeroSection />
    <FeaturedCourses />
    <WhyChooseUs />
    </main>
  );
}
