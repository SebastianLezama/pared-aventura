import CallToAction from "@/components/call-to-action";
import ContentSection from "@/components/content-2";
import Features from "@/components/features-12";
import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/header";
import HeroSection from "@/components/hero-section";
import Pricing from "@/components/pricing";
import { createClient } from "@/utils/supabase/server";


export default async function Home() {

  const supabase = createClient()
  const session = (await supabase).auth.getSession()

  if (await session) {
    console.log('User is logged in:', (await session).data.session?.user.email);
  } else {
    console.log('No active session found')
  }

  return (
    <>
    <HeroHeader />
    <HeroSection />
    <Features />
    <Pricing />
    {/* <ContentSection /> */}
    {/* <FooterSection /> */}
    </>
  );
}
