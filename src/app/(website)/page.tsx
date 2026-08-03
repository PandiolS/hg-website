import AudienceTabs from "@/components/sections/AudienceTabs";
import Clients from "@/components/sections/Clients";
import ExploreCta from "@/components/sections/ExploreCta";
import Faqs from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";

export default function Home() {

  return (

    <div>

      {/* Hero Section */}
    <Hero />

    {/* Clients Section */}
    <Clients />

    {/* Audience tabs */}
    <AudienceTabs />

    {/* Explore CTA Section */}
    <ExploreCta />

    {/* FAQs Section */}
    <Faqs />


    </div>

  );
}