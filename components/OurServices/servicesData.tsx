// components/OurServices/servicesData.tsx
// Assuming your type definition might be in "@/types/feature" or similar,
// you might want to rename 'Feature' type to 'ServiceItem' as well, or keep it generic.
// For now, let's update the interface name here.

export interface ServiceItemData { // Renamed from TranslatedFeature
  id: number;
  icon: JSX.Element;
  titleKey: string;
  paragraphKey: string;
  ariaLabelKey?: string;
}

// The data now uses keys that match 'ourServicesSection' in translation files
const servicesData: ServiceItemData[] = [ // Renamed from featuresData
  {
    id: 1,
    icon: (
      <div
        className="h-[300px] w-full bg-center bg-contain bg-no-repeat rounded-t-3xl"
        style={{
          backgroundImage: "url('/images/services/1.png')", // You might want to rename image folder too: /images/services/
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        role="img"
        // aria-label will be translated in SingleServiceItem component
      />
    ),
    titleKey: "service1Title", // Corresponds to ourServicesSection.service1Title
    paragraphKey: "service1Paragraph",
    ariaLabelKey: "customsClearanceIconAriaLabel"
  },
  {
    id: 2,
    icon: (
      <div
        className="h-[300px] w-full bg-center bg-contain bg-no-repeat rounded-t-3xl"
        style={{
          backgroundImage: "url('/images/services/2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        role="img"
      />
    ),
    titleKey: "service2Title",
    paragraphKey: "service2Paragraph",
    ariaLabelKey: "transportationIconAriaLabel"
  },
  {
    id: 3,
    icon: (
      <div
        className="h-[300px] w-full bg-center bg-contain bg-no-repeat rounded-t-3xl"
        style={{
          backgroundImage: "url('/images/services/3.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        role="img"
      />
    ),
    titleKey: "service3Title",
    paragraphKey: "service3Paragraph",
    ariaLabelKey: "customsConsultingIconAriaLabel"
  },
  {
    id: 4,
    icon: (
      <div
        className="h-[300px] w-full bg-center bg-contain bg-no-repeat rounded-t-3xl"
        style={{
          backgroundImage: "url('/images/services/4.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        role="img"
      />
    ),
    titleKey: "service4Title",
    paragraphKey: "service4Paragraph",
    ariaLabelKey: "carImportExportIconAriaLabel"
  },
];
export default servicesData; // Renamed export