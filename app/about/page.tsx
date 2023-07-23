import React from "react";

import { Metadata } from "next";

// Import
import AboutUsPage from "@/components/AboutUs/AboutUsPage";

export const metadata: Metadata = {
   title: "About Us | Sustainable Bitcoin Protocol",
   description:
      "Sustainable Bitcoin Protocol helps accelerate the bitcoin network's transition to clean energy.",
};

const page = () => {
   return (
      <>
         <AboutUsPage />
      </>
   );
};

export default page;
