import CallToAction from "@/components/call-to-action";
import ContentSection from "@/components/about";
import Features from "@/components/features-12";
import FooterSection from "@/components/footer";
import { Header } from "@/components/header";
import HeroSection from "@/components/hero-section";
import Pricing from "@/components/pricing";
import { createClient } from "@/utils/supabase/server";


export default async function Home() {

  return (
    <>
    <HeroSection />
    <Features />
    <Pricing />
    </>
  );
}
