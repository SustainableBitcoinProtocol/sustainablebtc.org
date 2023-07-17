import { Metadata } from "next";

// Import
import InvestorPage from "@/components/Investors/InvestorPage";

export const metadata: Metadata = {
   title: "Investors | Sustainable Bitcoin Protocol",
   description:
      "Sustainable Bitcoin Protocol helps accelerate the bitcoin network's transition to clean energy.",
};

const investors = () => {
   return (
      <>
         <InvestorPage />
      </>
   );
};

export default investors;
