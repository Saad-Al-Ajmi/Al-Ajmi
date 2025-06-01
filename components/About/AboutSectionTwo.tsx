// components/About/AboutSectionTwo.tsx
"use client"; 

import Image from "next/image";
// 1. Import useLanguage hook
import { useLanguage } from "../../context/LanguageContext"; 

const AboutSectionTwo = () => {
  // 2. Use the hook to get translations
  const { translations } = useLanguage();

  return (
    <section className="py-16 md:py-20 lg:py-28"> {/* */}
      <div className="container"> {/* */}
        <div className="-mx-4 flex flex-wrap items-center"> {/* */}
          <div className="w-full px-4 lg:w-1/2"> {/* */}
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0" //
              data-wow-delay=".15s"
              style={{
                  backgroundImage: "url('/images/about/2.png')", //
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "2rem",
                  minHeight: "800px",
                }}
            >
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2"> {/* */}
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s"> {/* */}
              <div className="mb-9"> {/* */}
                <h3 className="mb-4 text-xl font-bold text-blue-900 dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"> {/* */}
                  {/* 3. Use translated text */}
                  {translations.aboutSectionTwo.carServicesTitle}
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed"> {/* */}
                  {translations.aboutSectionTwo.carServicesParagraph}
                </p>
              </div>

              <div className="mb-9"> {/* */}
                <h3 className="mb-4 text-xl font-bold text-blue-900 dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"> {/* */}
                  {translations.aboutSectionTwo.professionalServicesTitle}
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed"> {/* */}
                  {translations.aboutSectionTwo.professionalServicesParagraph}
                </p>
              </div>

              <div className="mb-9"> {/* */}
                <h3 className="mb-4 text-xl font-bold text-blue-900 dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"> {/* */}
                  {translations.aboutSectionTwo.trustedPartnerTitle}
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed"> {/* */}
                  {translations.aboutSectionTwo.trustedPartnerParagraph}
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;