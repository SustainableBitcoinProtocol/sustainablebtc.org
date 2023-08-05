import React from "react";
import { Metadata } from "next";
import NewsPage from "@/components/News/NewsPage";

export const metadata: Metadata = {
   title: "News | Sustainable Bitcoin Protocol",
   description:
      "Sustainable Bitcoin Protocol helps accelerate the bitcoin network's transition to clean energy.",
};

const page = () => {
   return <NewsPage />;
};

export default page;
