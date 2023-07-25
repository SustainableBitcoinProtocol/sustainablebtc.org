import React from "react";

// Importing Components
import HeaderContent from "./HeaderContent";

// Importing Sanity
import { getNavbarData } from "@/sanity/sanity-utils";

export default async function Header() {
   const navbarData = await getNavbarData();
   return (
      <>
         <HeaderContent navbarData={navbarData} />
      </>
   );
}
