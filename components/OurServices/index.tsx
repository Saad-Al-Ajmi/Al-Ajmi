// components/OurServices/index.tsx
"use client";

import SectionTitle from "../Common/SectionTitle"; // Path should be correct if Common is sibling to OurServices
import SingleServiceItem from "./SingleServiceItem"; // Updated import
import servicesData from "./servicesData";           // Updated import
import { useLanguage } from "../../context/LanguageContext"; // Adjust path

const OurServices = () => { // Renamed component
  const { translations } = useLanguage();

  return (
    <>
      {/* Changed id to "services" */}
      <section id="services" className="py-16 md:py-20 lg:py-28">
        <div className="container border-b border-body-color/[.15] pb-16">
          <SectionTitle
            title={translations.ourServicesSection.mainTitle}
            paragraph={translations.ourServicesSection.mainParagraph}
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-4">
            {servicesData.map((service) => ( // Renamed variable to service
              <SingleServiceItem key={service.id} item={service} /> // Pass prop as 'item'
            ))}
          </div>

          <p className="pt-10 text-xs font-normal leading-relaxed text-body-color text-center">
            {translations.ourServicesSection.footerText}
          </p>
        </div>
      </section>
    </>
  );
};

export default OurServices; // Renamed export