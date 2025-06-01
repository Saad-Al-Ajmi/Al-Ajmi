// components/Hero/index.tsx
"use client";

import Link from "next/link";
// 1. Import useLanguage hook
import { useLanguage } from "../../context/LanguageContext";

const Hero = () => {
  // 2. Use the hook to get translations
  const { translations } = useLanguage();

  return (
    <>
      <section
        id="home"
        style={{
          backgroundImage: "url('/images/hero/7.png')", //
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="relative z-10 h-screen overflow-hidden bg-white dark:bg-gray-dark" //
      >
        <div className="flex h-full items-center pl-[150px]"> {/* */}
          <div
              className="wow fadeInUp max-w-[800px] text-left" // Parent container
              data-wow-delay=".2s"
            >
            {/* 3. Use translated text */}
            <h1 className="mb-5 text-3xl font-bold leading-tight text-blue-900 dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
              {translations.hero.title}
            </h1>
            <h3 className="mb-9 font-bold text-blue-900 dark:text-white">
              {translations.hero.subtitle}
            </h3>
            {/* <p className="dark:text-body-color-dark mb-12 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl">
              Speed of Completion & Accuracy of Performance
            </p> */}

            <div className="relative w-full max-w-md mt-12"> {/* Search bar container */}
              <input
                type="text"
                placeholder={translations.hero.containerPlaceholder} // Assuming you've updated this for translations
                className="w-full shadow-lg shadow-blue-200 rounded-full border border-stroke bg-white px-6 py-4 pr-14 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
              />
              <button
                type="submit"
                className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-900 p-3 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-white/10 dark:hover:bg-white/5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  xmlSpace="preserve"
                  style={{
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 2,
                  }}
                  width="24"
                  height="24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                >
                  <path
                    d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" //
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;