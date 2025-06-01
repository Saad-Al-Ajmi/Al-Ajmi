// components/Blog/SingleBlog.tsx
"use client";

import { BlogDataWithKeys } from "./blogData"; 
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";

const SingleBlog = ({ blog }: { blog: BlogDataWithKeys }) => {
  const { translations } = useLanguage();
  const { id, titleKey, paragraphKey, image, author, tagsKeys, publishDate, blogLinkPath } = blog;

  // Translate text using keys
  const title = translations.blogSection[titleKey as keyof typeof translations.blogSection] || titleKey;
  const paragraph = translations.blogSection[paragraphKey as keyof typeof translations.blogSection] || paragraphKey;
  const authorName = translations.blogSection[author.nameKey as keyof typeof translations.blogSection] || author.nameKey;
  const authorDesignation = translations.blogSection[author.designationKey as keyof typeof translations.blogSection] || author.designationKey;
  const tagText = tagsKeys[0] ? (translations.blogSection[tagsKeys[0] as keyof typeof translations.blogSection] || tagsKeys[0]) : "Read More";

  // Fallback for blog link if not provided in data
  const linkHref = blogLinkPath || `/blog-details?id=${id}`;


  return (
    <>
      <div
        className="rounded-xl wow fadeInUp hover:shadow-two dark:hover:shadow-gray-dark group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 dark:bg-dark" //
        data-wow-delay=".1s"
      >
        <Link
          href={linkHref} // Use dynamic or fallback link
          className="relative block aspect-[37/22] w-full" //
        >
          <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-blue-900 px-4 py-2 text-sm font-semibold capitalize text-white"> {/* */}
            {tagText} {/* Translated tag */}
          </span>
          <Image src={image} alt={title} fill /> {/* Alt text is translated title */}
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8"> {/* */}
          <h3>
            <Link
              href={linkHref} // Use dynamic or fallback link
              className="mb-4 block text-xl font-bold text-blue-900 hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl" //
            >
              {title} {/* Translated title */}
            </Link>
          </h3>
          <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10"> {/* */}
            {paragraph} {/* Translated paragraph */}
          </p>
          <div className="flex items-center"> {/* */}
            <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5"> {/* */}
              <div className="mr-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full"> {/* */}
                  <Image src={author.image} alt={authorName} fill /> {/* Alt text is translated author name */}
                </div>
              </div>
              <div className="w-full">
                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                  {translations.blogSection.byPrefix || "By"} {authorName} {/* Translated "By" and author name */}
                </h4>
                <p className="text-xs text-body-color">{authorDesignation}</p> {/* Translated designation */}
              </div>
            </div>
            <div className="inline-block">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                {translations.blogSection.dateLabel || "Date"} {/* Translated "Date" label */}
              </h4>
              <p className="text-xs text-body-color">{publishDate}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;