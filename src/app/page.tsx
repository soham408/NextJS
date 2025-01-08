import { main } from "framer-motion/client";
import Image from "next/image";
import HeroSection from "@/components/ui/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[096] antialisaed bg-grid-white/[0.02]">
    <HeroSection />
    </main>
  );
}
