import React from "react";

// import components
import InvestorHero from "./InvestorHero";
import InvestorInvestment from "./InvestorInvestment";
import InvestorSupport from "./InvestorSupport";

// import Sanity
import { getInvestorPageData } from "@/sanity/sanity-utils";

export default async function InvestorPage() {
   const investorPageData = await getInvestorPageData();
   const heroData = investorPageData.hero || null;
   const investmentData = investorPageData.investment || null;

   return (
      <>
         <InvestorHero heroData={heroData} />
         <InvestorInvestment investmentData={investmentData} />
         {/* <InvestorSupport /> */}
      </>
   );
}
