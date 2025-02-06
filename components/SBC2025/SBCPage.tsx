import React from "react";

import SBC2025Hero from "./SBCHero";

// import Sanity
import { getSBC2025PageData } from "@/sanity/sanity-utils";

export default async function SBC2025Page() {
   const sbcPageData = await getSBC2025PageData();
   const heroData = sbcPageData.hero || null;

   return (
      <>
         {/* Hero */}
         <SBC2025Hero heroData={heroData} />

         {/* What are SBC */}

         {/* Trusted by global leaders */}

         {/* Key features of SBC */}

         {/* Problem & Solution */}

         {/* How SBCs are created */}

         {/* Schedule a call */}

         {/* Benefits of investing */}
      </>
   );
}
