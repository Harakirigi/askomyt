import Button from "@/components/button";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero";
import { Box } from 'lucide-react';
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="p-8 space-y-4">
        <HeroSection />
    </div>
    </>
    
  );
}
