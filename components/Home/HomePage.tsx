import React from "react";

// import components
import HomeHero from "./HomeHero";
import HomeMiners from "./HomeMiners";
import HomeSBC from "./HomeSBC";
import HomeTestimonials from "./HomeTestimonials";
import HomeTrust from "./HomeTrust";

// import Sanity
import { getHomePageData, getMinerPageData } from "@/sanity/sanity-utils";

export default async function HomePage() {
   // Get Data
   const homePageData = await getHomePageData();
   const minerPageData = await getMinerPageData();
   const heroData = homePageData.hero || null;
   const minerData = minerPageData.hero || null;
   const sbcData = homePageData.sbc || null;
   const testimonialData = homePageData.testimonials || null;
   const trustData = homePageData.trust || null;

   return (
      <>
         <HomeHero heroData={heroData} />
         <HomeMiners minerData={minerData}/>
         <HomeSBC sbcData={sbcData} />
         <HomeTestimonials testimonialData={testimonialData} />
         <HomeTrust trustData={trustData} />
      </>
   );
}
