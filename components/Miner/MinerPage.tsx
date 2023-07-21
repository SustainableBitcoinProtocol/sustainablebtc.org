import React from "react";

import MinerHero from "./MinerHero";
import MinerUse from "./MinerUse";
import MinerRequirement from "./MinerRequirement";

// import Sanity
import { getMinerPageData } from "@/sanity/sanity-utils";

export default async function MinerPage() {
   const minerPageData = await getMinerPageData();
   const heroData = minerPageData.hero || null;
   const useData = minerPageData.use || null;
   const requirementData = minerPageData.requirement || null;
   return (
      <>
         <MinerHero heroData={heroData} />
         <MinerUse useData={useData} />
         <MinerRequirement requirementData={requirementData} />
      </>
   );
}
