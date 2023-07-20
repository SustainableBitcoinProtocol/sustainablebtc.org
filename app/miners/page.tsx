import React from "react";
import { Metadata } from "next";
import MinerPage from "@/components/Miner/MinerPage";

export const metadata: Metadata = {
   title: "Miners | Sustainable Bitcoin Protocol",
   description:
      "Sustainable Bitcoin Protocol helps accelerate the bitcoin network's transition to clean energy.",
};

const page = () => {
   return <MinerPage />;
};

export default page;
