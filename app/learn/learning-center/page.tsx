import React from "react";
import { Metadata } from "next";
import LearningCentrePage from "@/components/LearningCentre/LearningCentrePage";

export const metadata: Metadata = {
   title: " Learning Center | Sustainable Bitcoin Protocol",
   description:
      "Sustainable Bitcoin Protocol helps accelerate the bitcoin network's transition to clean energy.",
};

const page = () => {
   return <LearningCentrePage />;
};

export default page;
