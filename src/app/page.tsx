import CallToAction from "@/components/call-to-action";
import ContentSection from "@/components/about";
import Features from "@/components/features-12";
import FooterSection from "@/components/footer";
import { Header } from "@/components/header";
import HeroSection from "@/components/hero-section";
import Pricing from "@/components/pricing";
import { createClient } from "@/utils/supabase/server";


export default async function Home() {

  const supabase = await createClient()
  const { data: sessionData } = await supabase.auth.getSession()
  const { data: user } = await supabase.auth.getUser()
  
  // const user = sessionData.session?.user.user_metadata.full_name
  console.log(user.user)

  function isLoggedIn() {
    return sessionData.session?.user.email !== undefined
  }

  return (
    <>
    <Header isLoggedIn={isLoggedIn()} user={user.user}/>
    <HeroSection />
    <Features />
    <Pricing />
    </>
  );
}
