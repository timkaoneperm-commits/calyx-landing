import { Dosage } from "@/components/Dosage";
import { FinalCta } from "@/components/FinalCta";
import { Flavors } from "@/components/Flavors";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { ProductIdea } from "@/components/ProductIdea";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <ProductIdea />
        <Flavors />
        <HowItWorks />
        <Dosage />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
