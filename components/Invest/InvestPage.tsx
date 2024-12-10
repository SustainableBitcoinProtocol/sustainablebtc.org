import React from "react";

// import components
import InvestorHero from "./InvestHero";
import InvestSBC from "./InvestSBC";
import InvestUseCases from "./InvestUseCases";
import InvestScheduleCall from "./InvestScheduleCall";

// import Sanity
import { getInvestPageData } from "@/sanity/sanity-utils";

export default async function InvestPage() {
   const investPageData = await getInvestPageData();
   const heroData = investPageData.hero || null;
   const sbcData = investPageData.sbc || null;
   const useCaseData = investPageData.useCase || null;
   const scheduleCallData = investPageData.scheduleCall || null;

   return (
      <>
         <InvestorHero heroData={heroData} />
         <InvestSBC sbcData={sbcData} />
         <InvestUseCases useCaseData={useCaseData} />
         <InvestScheduleCall scheduleCallData={scheduleCallData} />
      </>
   );
}
