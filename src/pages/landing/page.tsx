"use client";
// import { Brands } from "./Brands";
import FAQSection from "./FAQSection";
import Features from "./Features";
import GetStarted from "./GetStarted";
import Hero from "./Hero";
import Navbar from "./Navbar";
import DevelopmentSprints from "./DevelopmentSprints";
import ExpertFeatures from "./ExpertFeatures";
import PricingSection from "./PricingSection";
import HelpCTA from "./HelpCTA";
import TestimonialSlider from "./TestimonialSlider";
import ProcessTimeline from "./ProcessTimeline";
import Capabilities from "./Capabilities";
import Footer from "./Footer";
import GoogleTagManagerNoScript from "@/utils/GoogleTagManagerNoScript";
// import ExternalScripts from "../../utils/ExternalScripts";



function Landing() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* <ExternalScripts /> */}
      <Navbar />
      <div className="pt-16">
        <Hero />
        <GoogleTagManagerNoScript />
        {/* <Brands /> */}
        <Features />
        <DevelopmentSprints />
        <ExpertFeatures />
        <PricingSection />
        <HelpCTA />
        <TestimonialSlider />
        <ProcessTimeline />
        <Capabilities />
        <GetStarted />
        {/* <FAQSection /> */}
        <Footer />
      </div>
    </div>
  );
}

export default Landing;
