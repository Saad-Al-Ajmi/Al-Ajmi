// components/Blog/index.tsx
"use client";

import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData"; 
import { useLanguage } from "../../context/LanguageContext"; 

const Blog = () => {
  const { translations } = useLanguage();

  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28" //
    >
      <div className="container"> {/* */}
        <SectionTitle
          title={translations.blogSection.mainTitle} // Translated
          paragraph={translations.blogSection.mainParagraph} // Translated
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3"> {/* */}
          {/* blogData now contains keys, SingleBlog handles translation */}
          {blogData.map((blogItem) => ( // Renamed variable for clarity
            <div key={blogItem.id} className="w-full"> {/* */}
              <SingleBlog blog={blogItem} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;