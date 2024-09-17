import { Metadata } from "next";

// Import
import HomePage from "@/components/HomeNew/HomePage";

export const metadata: Metadata = {
   title: "Sustainable Bitcoin Protocol | BTC Energy Consumption Solution",
   description:
      "Sustainable Bitcoin Protocol (SBP), is the leading solution to align Bitcoin investing with the clean energy transition. SBP introduces Sustainable Bitcoin Certificates (SBCs) which transform a Bitcoin portfolio into a climate-positive asset by ensuring bitcoin mining supports clean energy and methane mitigation. With unparalleled transparency and valuable insights into energy consumption, SBCs provide a verifiable way for institutional investors to drive environmental impact while investing in Bitcoin. Invest in Bitcoin with confidence, knowing your portfolio not only delivers returns but also drives meaningful climate action.",
};

export default function Home() {
   return (
      <>
         <HomePage />
      </>
   );
}
