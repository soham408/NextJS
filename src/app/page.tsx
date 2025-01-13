import { main } from "framer-motion/client";
import Image from "next/image";
import HeroSection from "@/components/ui/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/ui/WhyChooseUs";
import PicCards from "@/components/PicCards";
import UpcommingWbinars from "@/components/UpcommingWbinars";
import Instructors from "@/components/Instructors";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[096] antialisaed bg-grid-white/[0.02]">
    <HeroSection />
    <FeaturedCourses />
    <WhyChooseUs />
    <PicCards />  
    <UpcommingWbinars />    
    <Instructors />         
    </main>
  );
}
