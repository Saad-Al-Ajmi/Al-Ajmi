// components/Header/index.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuDataFromFile from "./menuData";
import { useLanguage } from "../../context/LanguageContext"; 

const Header = () => {
  const { language, setLanguage, translations } = useLanguage();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleStickyNavbar = () => {
    setSticky(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  const handleSubmenu = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const currentPathName = usePathname();

  const flagUrl =
    language === "en"
      ? "https://flagcdn.com/w40/gb.png"
      : "https://flagcdn.com/w40/sa.png";

  const toggleLanguageHandler = () => {
    const newLang = language === "en" ? "ar" : "en";
    setLanguage(newLang);
  };

  const translatedMenuData = menuDataFromFile.map(item => ({
    ...item,
    title: item.title === "Our Services" ? translations.header.services : translations.header[item.title.toLowerCase().replace(/\s+/g, '') as keyof typeof translations.header] || item.title
  }));

  // Get the current logo source from translations
  const currentLogoSrc = translations.header.logoSrc;

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center ${sticky
            ? "dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
            : "absolute bg-transparent"
          }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${sticky ? "py-5 lg:py-2" : "py-8" //
                  }`}
              >
                {/* Light mode logo */}
                <Image
                  src={currentLogoSrc} // Use dynamic logo source
                  alt="logo"
                  width={200}
                  height={100}
                  className="dark:hidden" // This class hides it in dark mode
                  priority // Good to add for LCP elements like a logo
                />
                {/* Dark mode logo - assuming you want the same logo for dark mode but it's controlled by CSS */}
                {/* If you have a *different* logo file for dark mode, you'd need more logic or separate Image components */}
                <Image
                  src={currentLogoSrc} // Use dynamic logo source
                  alt="logo"
                  width={200}
                  height={100}
                  className="hidden dark:block" // This class shows it only in dark mode
                  priority
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? " top-[7px] rotate-45" : "" //
                      }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? "opacity-0" : "" //
                      }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? " top-[-8px] -rotate-45" : "" //
                      }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${navbarOpen
                      ? "visibility top-full opacity-100" //
                      : "invisible top-[120%] opacity-0" //
                    }`}
                >
                  <ul className="block lg:flex lg:space-x-12">
                    {translatedMenuData.map((menuItem, index) => (
                      <li key={menuItem.id || index} className="group relative">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${currentPathName === menuItem.path
                                ? "text-primary dark:text-white" //
                                : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white" //
                              }`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <p
                              onClick={() => menuItem.submenu && handleSubmenu(index)}
                              className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                            >
                              {menuItem.title}
                              {menuItem.submenu && (
                                <span className="pl-3">
                                  <svg width="25" height="24" viewBox="0 0 25 24">
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </span>
                              )}
                            </p>
                            {menuItem.submenu && (
                              <div
                                className={`submenu relative left-0 top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${openIndex === index ? "block" : "hidden" //
                                  }`}
                              >
                                {menuItem.submenu.map((submenuItem, subIndex) => (
                                  <Link
                                    href={submenuItem.path}
                                    key={submenuItem.id || subIndex}
                                    className="block rounded py-2.5 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white lg:px-3"
                                  >
                                    {translations.header[submenuItem.title.toLowerCase().replace(/\s+/g, '') as keyof typeof translations.header] || submenuItem.title}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className="flex items-center justify-end pr-16 lg:pr-0">
                <button
                  onClick={toggleLanguageHandler}
                  className="flex items-center gap-2 px-4 py-2 border rounded-full shadow-sm text-sm font-medium hover:bg-gray-100 transition" //
                >
                  <img
                    src={flagUrl}
                    alt="Language"
                    className="w-5 h-5 rounded-full object-cover" //
                  />
                  <span>{language === 'en' ? translations.header.languageEnglish : translations.header.languageArabic}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;