// components/OurServices/SingleServiceItem.tsx
"use client";

import React from "react"; // Import React for React.isValidElement and React.cloneElement
import { ServiceItemData } from "./servicesData"; // Updated import
import { useLanguage } from "../../context/LanguageContext"; // Adjust path

const SingleServiceItem = ({ item }: { item: ServiceItemData }) => { // Renamed prop from feature to item
  const { translations } = useLanguage();
  const { icon, titleKey, paragraphKey, ariaLabelKey } = item; // Destructure from item

  const title = translations.ourServicesSection[titleKey as keyof typeof translations.ourServicesSection] || titleKey;
  const paragraph = translations.ourServicesSection[paragraphKey as keyof typeof translations.ourServicesSection] || paragraphKey;
  const ariaLabel = ariaLabelKey ? (translations.ourServicesSection[ariaLabelKey as keyof typeof translations.ourServicesSection] || ariaLabelKey) : "";

  const iconWithTranslatedAriaLabel = React.isValidElement(icon) && ariaLabel
    ? React.cloneElement(icon as React.ReactElement<any>, { "aria-label": ariaLabel })
    : icon;

  return (
    <div className="w-full border border-gray-300 shadow-lg rounded-3xl"> {/* */}
      <div className="wow fadeInUp text-center" data-wow-delay=".15s"> {/* */}
        <div className="mx-auto mb-10 flex h-100 w-100 items-center justify-center">
          {iconWithTranslatedAriaLabel}
        </div>
        <h3 className="mb-5 text-xl font-bold text-blue-900 dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"> {/* */}
          {title}
        </h3>
        <p className="pb-10 pl-10 pr-10 text-xs font-normal leading-relaxed text-body-color text-justify"> {/* */}
          {paragraph}
        </p>
        <hr className="mb-10 ml-10 mr-10 border-gray-300"/> {/* */}
      </div>
    </div>
  );
};

export default SingleServiceItem;