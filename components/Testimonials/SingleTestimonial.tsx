// components/Testimonials/SingleTestimonial.tsx
"use client";

// Assuming TestimonialDataWithKeys is defined in Testimonials/index.tsx or a shared types file
// If Testimonial type is from "@/types/testimonial", you might need to adjust it
// to accept nameKey, designationKey, contentKey.
// For this example, let's assume the prop 'testimonial' matches TestimonialDataWithKeys
import { TestimonialDataWithKeys } from "./index"; // Or from where TestimonialDataWithKeys is defined
import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext"; // Adjust path

const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current"> {/* */}
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" /> {/* */}
  </svg>
);

// The prop type should match the data structure being passed
const SingleTestimonial = ({ testimonial }: { testimonial: TestimonialDataWithKeys }) => {
  const { translations } = useLanguage();
  const { star, image, nameKey, designationKey, contentKey } = testimonial;

  // Translate the text using the keys
  const name = translations.testimonialsSection[nameKey as keyof typeof translations.testimonialsSection] || nameKey;
  const designation = translations.testimonialsSection[designationKey as keyof typeof translations.testimonialsSection] || designationKey;
  const content = translations.testimonialsSection[contentKey as keyof typeof translations.testimonialsSection] || contentKey;

  let ratingIcons = [];
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span key={index} className="text-yellow"> {/* */}
        {starIcon}
      </span>,
    );
  }

  return (
    <div className="w-full"> {/* */}
      <div
        className="rounded-xl wow fadeInUp shadow-two dark:shadow-three dark:hover:shadow-gray-dark rounded-sm bg-white p-8 duration-300 hover:shadow-one dark:bg-dark lg:px-5 xl:px-8" //
        data-wow-delay=".1s"
      >
        <div className="mb-5 flex items-center space-x-1">{ratingIcons}</div> {/* */}
        <p className="mb-8 border-b border-body-color border-opacity-10 pb-8 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-10 dark:text-white"> {/* */}
          “{content}” {/* Translated content */}
        </p>
        <div className="flex items-center"> {/* */}
          <div className="relative mr-4 h-[50px] w-full max-w-[50px] overflow-hidden rounded-full"> {/* */}
            <Image src={image} alt={name} fill /> {/* Alt text is now translated name */}
          </div>
          <div className="w-full"> {/* */}
            <h3 className="mb-1 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg"> {/* */}
              {name} {/* Translated name */}
            </h3>
            <p className="text-sm text-body-color">{designation}</p> {/* Translated designation */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;