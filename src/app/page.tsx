import CallToAction from "@/components/call-to-action";
import ContentSection from "@/components/content-2";
import Features from "@/components/features-12";
import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/header";
import HeroSection from "@/components/hero-section";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <HeroHeader />
    <HeroSection />
    <Features />
    <CallToAction />
    {/* <ContentSection /> */}
    <FooterSection />
    </>
  );
}
