import React from "react";

import MinerHero from "./MinerHero";

// import Sanity
import { getMinerPageData } from "@/sanity/sanity-utils";

export default async function MinerPage() {
   const minerPageData = await getMinerPageData();
   const heroData = minerPageData.hero || null;
   return (
      <>
         <MinerHero heroData={heroData} />
      </>
   );
}
