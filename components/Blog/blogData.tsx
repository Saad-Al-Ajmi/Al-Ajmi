
export interface BlogAuthor { 
  nameKey: string; 
  image: string;
  designationKey: string; 
}
export interface BlogDataWithKeys {
  id: number;
  titleKey: string; 
  paragraphKey: string; 
  image: string;
  author: BlogAuthor;
  tagsKeys: string[];
  publishDate: string;
  blogLinkPath?: string;
}


const blogData: BlogDataWithKeys[] = [
  {
    id: 1,
    titleKey: "blog1Title",
    paragraphKey: "blog1Paragraph",
    image: "/images/blog/1.png", //
    author: {
      nameKey: "blog1AuthorName",
      image: "/images/blog/author-01.png", //
      designationKey: "blog1AuthorDesignation",
    },
    tagsKeys: ["blog1Tag"], 
    publishDate: "2025", //
    blogLinkPath: "/blog-details-1",
  },
  {
    id: 2,
    titleKey: "blog2Title",
    paragraphKey: "blog2Paragraph",
    image: "/images/blog/2.png", //
    author: {
      nameKey: "blog2AuthorName",
      image: "/images/blog/author-02.png", //
      designationKey: "blog2AuthorDesignation",
    },
    tagsKeys: ["blog2Tag"],
    publishDate: "2025", //
    blogLinkPath: "/blog-details-2", // Example path
  },
  {
    id: 3,
    titleKey: "blog3Title",
    paragraphKey: "blog3Paragraph",
    image: "/images/blog/3.png", //
    author: {
      nameKey: "blog3AuthorName",
      image: "/images/blog/author-03.png", //
      designationKey: "blog3AuthorDesignation",
    },
    tagsKeys: ["blog3Tag"],
    publishDate: "2025", //
    blogLinkPath: "/blog-details-3",
  },
];
export default blogData;