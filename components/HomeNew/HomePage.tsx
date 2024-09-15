import React, {Suspense} from "react";

// import components
const HomeHero = React.lazy(() => import("./HomeHero"));
const HomeMiners = React.lazy(() => import("./HomeMiners"));
const HomeAbout = React.lazy(() => import("./HomeAbout"));
const HomeTestimonials = React.lazy(() => import("./HomeTestimonials"));
const HomeSBC = React.lazy(() => import("./HomeSBC"));
const HomeTrust = React.lazy(() => import("./HomeTrust"));
const HomeFaq = React.lazy(() => import("./HomeFaq"));
const HomeWhitepaperDownload = React.lazy(() => import("./HomeWhitepaperDownload"));

// import Sanity
import {
   getHomePageData,
   getMinerPageData,
   getFaqPageData,
} from "@/sanity/sanity-utils";

export default async function HomePage() {
   // Get Data
   const [homePageData, minerPageData, faqPageData] = await Promise.all([
      getHomePageData(),
      getMinerPageData(),
      getFaqPageData(),
   ]);

   const heroData = homePageData.hero || null;
   const minerData = minerPageData.hero || null;
   const sbcData = homePageData.sbc || null;
   const aboutData = homePageData.about || null;
   const testimonialData = homePageData.testimonials || null;
   const trustData = homePageData.trust || null;
   const whitepaperdownloadData = homePageData.whitepaperdownload || null;
   const faqData = homePageData.faq || null;
   const faqsData = faqPageData.faqs || [];

   return (
      <>
         {/* Hero */}
         <Suspense fallback={<div></div>}>
            <HomeHero heroData={heroData} />
         </Suspense>

         {/* Client Data */}
         <Suspense fallback={<div></div>}>
            <HomeMiners minerData={minerData} />
         </Suspense>

         {/* About Us */}
         <Suspense fallback={<div></div>}>
            <HomeAbout aboutData={aboutData} />
         </Suspense>

         {/* Testimonials */}
         <Suspense fallback={<div></div>}>
            <HomeTestimonials testimonialData={testimonialData} />
         </Suspense>

         {/* SBC */}
         <Suspense fallback={<div></div>}>
            <HomeSBC sbcData={sbcData} />
         </Suspense>

         {/* Trust */}
         <Suspense fallback={<div></div>}>
            <HomeTrust trustData={trustData} />
         </Suspense>

         {/* FAQs */}
         <Suspense fallback={<div></div>}>
            <HomeFaq faqData={faqData} faqsData={faqsData} />
         </Suspense>

         {/* Download Whitepaper */}
         <Suspense fallback={<div></div>}>
            <HomeWhitepaperDownload whitepaperdownloadData={whitepaperdownloadData} />
         </Suspense>
      </>
   );
}
