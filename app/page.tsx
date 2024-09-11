import { Metadata } from "next";

// Import
import HomePage from "@/components/HomeNew/HomePage";

export const metadata: Metadata = {
   title: "Sustainable Bitcoin Protocol | BTC Energy Consumption Solution",
   description:
      "Sustainable Bitcoin Protocol helps accelerate the bitcoin network's transition to clean energy.",
};

export default function Home() {
   return (
      <>
         <HomePage />
      </>
   );
}
