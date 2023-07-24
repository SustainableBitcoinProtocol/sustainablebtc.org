import React from "react";

// import components
import AboutUsHero from "./AboutUsHero";
import AboutUsSBP from "./AboutUsSBP";
import AboutUsCommitment from "./AboutUsCommitment";
import AboutUsTeam from "./AboutUsTeam";

// import Sanity
import { getAboutPageData } from "@/sanity/sanity-utils";

export default async function AboutUsPage() {
   const aboutPageData = await getAboutPageData();
   const heroData = aboutPageData.hero || null;
   const sbpData = aboutPageData.sbp || null;
   const commitmentData = aboutPageData.commitment || null;
   const teamData = aboutPageData.team || null;

   return (
      <div>
         <AboutUsHero heroData={heroData} />
         <AboutUsSBP sbpData={sbpData} />
         <AboutUsCommitment commitmentData={commitmentData} />
         <AboutUsTeam teamData={teamData} />
      </div>
   );
}
