import React from "react";
import { Metadata } from "next";
import FaqPage from "@/components/FAQs/FaqPage";

export const metadata: Metadata = {
   title: "FAQs | Sustainable Bitcoin Protocol",
   description: "",
};

const page = () => {
   return <FaqPage />;
};

export default page;
