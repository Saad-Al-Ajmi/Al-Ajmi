// components/UsefulLinks/index.tsx
"use client"; // Add this because we'll use a hook

import SectionTitle from "@/components/Common/SectionTitle"; // Assuming path is correct
// 1. Import useLanguage hook
import { useLanguage } from "../../context/LanguageContext"; // Adjust path as needed (e.g., "@/context/LanguageContext")

const UsefulLinksSection = () => {
  // 2. Use the hook to get translations
  const { translations } = useLanguage();

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-white dark:bg-gray-900"> {/* */}
      <div className="container px-4 mx-auto"> {/* */}
        {/* Section Title */}
        <SectionTitle
          // 3. Use translated text
          title={translations.usefulLinksSection.mainTitle}
          paragraph={translations.usefulLinksSection.mainParagraph}
          center
        />

        {/* Useful Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"> {/* */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"> {/* */}
            <h3 className="text-lg font-semibold text-blue-800 dark:text-white mb-2">
              <a href="http://www.customs.gov.kw" target="_blank" rel="noopener noreferrer">
                {translations.usefulLinksSection.link1Title}
              </a>
            </h3>
            <p className="text-sm text-body-color dark:text-gray-300">
              {translations.usefulLinksSection.link1Paragraph}
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"> {/* */}
            <h3 className="text-lg font-semibold text-blue-800 dark:text-white mb-2">
              <a href="https://www.moci.gov.kw" target="_blank" rel="noopener noreferrer">
                {translations.usefulLinksSection.link2Title}
              </a>
            </h3>
            <p className="text-sm text-body-color dark:text-gray-300">
              {translations.usefulLinksSection.link2Paragraph}
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"> {/* */}
            <h3 className="text-lg font-semibold text-blue-800 dark:text-white mb-2">
              <a href="https://www.customs.gov.kw/HSCode/HsCode" target="_blank" rel="noopener noreferrer">
                {translations.usefulLinksSection.link3Title}
              </a>
            </h3>
            <p className="text-sm text-body-color dark:text-gray-300">
              {translations.usefulLinksSection.link3Paragraph}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsefulLinksSection;