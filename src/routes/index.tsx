import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { VisionMission } from "@/components/site/VisionMission";
import { Academics } from "@/components/site/Academics";
import { Gallery } from "@/components/site/Gallery";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { Facilities } from "@/components/site/Facilities";
import { Admissions } from "@/components/site/Admissions";
import { Contact } from "@/components/site/Contact";
import { FAQ } from "@/components/site/FAQ";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { BackToTop, LoadingScreen, SocialRail } from "@/components/site/Chrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Spring of Knowledge International School — Abuja" },
      { name: "description", content: "Premier international school in Kubwa, Abuja. Nurturing knowledge, character and excellence from Play Group to JSS3 since 1999." },
      { property: "og:title", content: "Spring of Knowledge International School" },
      { property: "og:description", content: "Raising future leaders through knowledge, character and excellence in Abuja, Nigeria." },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "School",
        name: "Spring of Knowledge International School",
        slogan: "Knowledge is Light",
        foundingDate: "1999-04-02",
        address: {
          "@type": "PostalAddress",
          streetAddress: "No 2, Tony Limba Crescent, Gbazango",
          addressLocality: "Kubwa",
          addressRegion: "Abuja",
          addressCountry: "NG",
        },
        telephone: "+234-803-613-1258",
        email: "springokis@gmail.com",
      }),
    }],
  }),
  component: Home,
});

function Home() {
  const [waOpen, setWaOpen] = useState(false);
  return (
    <>
      <LoadingScreen />
      <Navbar onWhatsApp={() => setWaOpen(true)} />
      <SocialRail />
      <main>
        <Hero />
        <About />
        <VisionMission />
        <Academics />
        <Gallery />
        <WhyUs />
        <Testimonials />
        <Facilities />
        <Admissions />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFab open={waOpen} setOpen={setWaOpen} />
      <BackToTop />
    </>
  );
}
