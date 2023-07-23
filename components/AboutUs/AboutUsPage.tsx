import React from "react";

// import components
import AboutUsHero from "./AboutUsHero";
import AboutUsSBP from "./AboutUsSBP";

// import Sanity
import { getAboutPageData } from "@/sanity/sanity-utils";

export default async function AboutUsPage() {
   const aboutPageData = await getAboutPageData();
   const heroData = aboutPageData.hero || null;
   const sbpData = aboutPageData.sbp || null;
   return (
      <div>
         <AboutUsHero heroData={heroData} />
         <AboutUsSBP sbpData={sbpData} />
      </div>
   );
}
