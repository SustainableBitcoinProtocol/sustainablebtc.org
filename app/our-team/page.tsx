import React from "react";

import { Metadata } from "next";

// Import
import OurTeamPage from "@/components/OurTeam/OurTeamPage";

export const metadata: Metadata = {
   title: "About Us | Sustainable Bitcoin Protocol",
   description:
      "Sustainable Bitcoin Protocol helps accelerate the bitcoin network's transition to clean energy.",
};

const page = () => {
   return (
      <>
         <OurTeamPage />
      </>
   );
};

export default page;
