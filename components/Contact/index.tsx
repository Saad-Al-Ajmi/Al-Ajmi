// components/Contact/index.tsx
"use client"; 

// 1. Import useLanguage hook
import { useLanguage } from "../../context/LanguageContext"; 

const Contact = () => {
  // 2. Use the hook to get translations
  const { translations } = useLanguage();

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28"> {/* */}
      <div className="container"> {/* */}
        <div className="-mx-4 flex flex-wrap justify-center"> {/* */}
          <div className="w-full px-4 lg:w-8/12 xl:w-10/12 mx-auto"> {/* */}
            <div
              className="rounded-xl wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]" //
              data-wow-delay=".15s"
            >
              {/* 3. Use translated text */}
              <h2 className="mb-3 text-2xl font-bold text-blue-900 dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl"> {/* */}
                {translations.contactSection.mainTitle}
              </h2>
              <p className="mb-12 text-base font-medium text-body-color"> {/* */}
                {translations.contactSection.mainParagraph}
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap"> {/* */}
                  <div className="w-full px-4 md:w-1/2"> {/* */}
                    <div className="mb-8">
                      <label
                        htmlFor="phone"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        {translations.contactSection.phoneLabel}
                      </label>
                      <input
                        type="text"
                        placeholder={translations.contactSection.phonePlaceholder}
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" //
                      />
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/2"> {/* */}
                    <div className="mb-8">
                      <label
                        htmlFor="whatsapp"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        {translations.contactSection.whatsappLabel}
                      </label>
                      <input
                        type="text"
                        placeholder={translations.contactSection.whatsappPlaceholder}
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" //
                      />
                    </div>
                  </div>

                  <div className="w-full px-4"> {/* */}
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        {translations.contactSection.emailLabel}
                      </label>
                      <input
                        type="email"
                        placeholder={translations.contactSection.emailPlaceholder}
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" //
                      />
                    </div>
                  </div>

                  <div className="w-full px-4"> {/* */}
                    <div className="mb-8">
                      <label
                        htmlFor="address"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        {translations.contactSection.addressLabel}
                      </label>
                      <input
                        type="text"
                        placeholder={translations.contactSection.addressPlaceholder}
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" //
                      />
                    </div>
                  </div>

                  <div className="w-full px-4"> {/* */}
                    <button className="shadow-submit dark:shadow-submit-dark rounded-sm bg-blue-900 px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90"> {/* */}
                      {translations.contactSection.submitButton}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;