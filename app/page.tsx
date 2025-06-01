import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import OurServices from "@/components/OurServices";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import UsefulLinks from "@/components/UsefulLinks";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "مكتب عبدالله سعد العجمي | تخليص جمركي",
  description: "Abdullah Saad Al-Ajmi | Customs Clearance Office",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      
      <OurServices />
      {/* <Pricing/> */}
      {/* <Video /> */}
      {/* <Brands /> */}
      <AboutSectionOne />
      <AboutSectionTwo />
      <AboutSectionThree />
      <Testimonials />
      {/* <Pricing /> */}
      <UsefulLinks />
      <Blog />
      <Contact />
    </>
  );
}
