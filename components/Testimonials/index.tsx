// components/Testimonials/index.tsx
"use client"; // Add this because we'll use a hook for SectionTitle

import { Testimonial } from "@/types/testimonial"; // Assuming this type might need adjustment
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";
import { useLanguage } from "../../context/LanguageContext"; // Adjust path

// Define a new type for data if Testimonial type is strict
export interface TestimonialDataWithKeys {
  id: number;
  nameKey: string;
  designationKey: string;
  contentKey: string;
  image: string;
  star: number;
}

const testimonialData: TestimonialDataWithKeys[] = [
  {
    id: 1,
    nameKey: "testimonial1Name", // Key from translation file
    designationKey: "testimonial1Designation", // Key
    contentKey: "testimonial1Content", // Key
    image: "/images/testimonials/1.svg", //
    star: 5,
  },
  {
    id: 2,
    nameKey: "testimonial2Name",
    designationKey: "testimonial2Designation",
    contentKey: "testimonial2Content",
    image: "/images/testimonials/1.svg", //
    star: 5,
  },
  {
    id: 3,
    nameKey: "testimonial3Name",
    designationKey: "testimonial3Designation",
    contentKey: "testimonial3Content",
    image: "/images/testimonials/1.svg", //
    star: 5,
  },
];

const Testimonials = () => {
  const { translations } = useLanguage();

  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28"> {/* */}
      <div className="container  border-b border-white pb-16"> {/* */}
        <SectionTitle
          title={translations.testimonialsSection.mainTitle}
          paragraph={translations.testimonialsSection.mainParagraph}
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3"> {/* */}
          {testimonialData.map((testimonialItem) => (
            // Pass the whole item, SingleTestimonial will handle keys
            <SingleTestimonial key={testimonialItem.id} testimonial={testimonialItem} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;