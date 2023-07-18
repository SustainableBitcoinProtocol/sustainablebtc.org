import React from "react";

// import components
import HomeHero from "./HomeHero";
import HomeSBC from "./HomeSBC";
import HomeTestimonials from "./HomeTestimonials";

// import Sanity
import { getHomePageData } from "@/sanity/sanity-utils";

export default async function HomePage() {
   // Get Data
   const homePageData = await getHomePageData();
   const heroData = homePageData.hero || null;
   const sbcData = homePageData.sbc || null;
   const testimonialData = homePageData.testimonials || null;
   return (
      <>
         <HomeHero heroData={heroData} />
         <HomeSBC sbcData={sbcData} />
         <HomeTestimonials testimonialData={testimonialData} />
      </>
   );
}
