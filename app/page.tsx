import Image from "next/image";
import Authenticated from "./authenticated";
import User from "@/components/dashboard/main";
import { HeroSection } from "@/components/layout/sections/hero";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { BenefitsSection } from "@/components/layout/sections/benefits";
import { FeaturesSection } from "@/components/layout/sections/features";
import { ServicesSection } from "@/components/layout/sections/services";
import { TestimonialSection } from "@/components/layout/sections/testimonial";
import { PricingSection } from "@/components/layout/sections/pricing";
import { FAQSection } from "@/components/layout/sections/faq";
import { FooterSection } from "@/components/layout/sections/footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      {/* <SponsorsSection /> */}
      <BenefitsSection />
      <FeaturesSection />
      <ServicesSection />
      {/* <TestimonialSection />
      <PricingSection /> */}
      {/* <FAQSection /> */}
      <FooterSection />
    </div>
  );
}
