import React from "react";

import SBC2025Hero from "./SBCHero";

// import Sanity
import { getSBC2025PageData } from "@/sanity/sanity-utils";

export default async function SBC2025Page() {
   const sbcPageData = await getSBC2025PageData();
   const heroData = sbcPageData.hero || null;

   return (
      <>
         <SBC2025Hero heroData={heroData} />
      </>
   );
}
