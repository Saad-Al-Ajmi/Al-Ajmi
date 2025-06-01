// components/About/AboutSectionThree.tsx
"use client";

import Image from "next/image"; 
// 1. Import useLanguage hook
import { useLanguage } from "../../context/LanguageContext"; 

const AboutSectionThree = () => {
  // 2. Use the hook to get translations
  const { translations } = useLanguage();

  return (
    <section className="py-16 md:py-20 lg:py-28 bg-white dark:bg-gray-900"> {/* */}
      <div className="container"> {/* */}
        <div className="flex flex-wrap -mx-4 mb-10"> {/* */}
          {/* Vision */}
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0"> {/* */}
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-md h-full"> {/* */}
              <h3 className="mb-4 text-2xl font-bold text-blue-900 dark:text-white"> {/* */}
                {/* 3. Use translated text */}
                {translations.aboutSectionThree.visionTitle}
              </h3>
              <p className="text-base font-medium leading-relaxed text-body-color dark:text-gray-300"> {/* */}
                {translations.aboutSectionThree.visionParagraph}
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="w-full md:w-1/2 px-4"> {/* */}
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-md h-full"> {/* */}
              <h3 className="mb-4 text-2xl font-bold text-blue-900 dark:text-white"> {/* */}
                {translations.aboutSectionThree.missionTitle}
              </h3>
              <p className="text-base font-medium leading-relaxed text-body-color dark:text-gray-300"> {/* */}
                {translations.aboutSectionThree.missionParagraph}
              </p>
            </div>
          </div>
        </div>

        {/* Goals */}
        <div className="flex justify-center px-4"> {/* */}
          <div className="w-full md:w-2/3"> {/* */}
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-md"> {/* */}
              <h3 className="mb-4 text-2xl font-bold text-blue-900 dark:text-white text-center"> {/* */}
                {translations.aboutSectionThree.goalsTitle}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-base font-medium text-body-color dark:text-gray-300"> {/* */}
                <li>
                  {translations.aboutSectionThree.goal1}
                </li>
                <li>
                  {translations.aboutSectionThree.goal2}
                </li>
                <li>
                  {translations.aboutSectionThree.goal3}
                </li>
                <li>
                  {translations.aboutSectionThree.goal4}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionThree;