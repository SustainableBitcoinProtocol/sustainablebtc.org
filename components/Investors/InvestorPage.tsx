import React from "react";

// import components
import InvestorHero from "./InvestorHero";
import InvestorInvestment from "./InvestorInvestment";
import InvestorSupport from "./InvestorSupport";

// import Sanity
import { getInvestorPageData } from "@/sanity/sanity-utils";

export default async function InvestorPage() {
   const homePageData = await getInvestorPageData();
   const heroData = homePageData.hero || null;
   return (
      <>
         <InvestorHero heroData={heroData} />
         {/* <InvestorInvestment />
         <InvestorSupport /> */}
      </>
   );
}
