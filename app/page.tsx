import { Metadata } from "next";

// Import
// import HomePage from "@/components/Home/HomePage";

export const metadata: Metadata = {
   title: "Sustainable Bitcoin Protocol | BTC Energy Consumption Solution",
   description:
      "Sustainable Bitcoin Protocol helps accelerate the bitcoin network's transition to clean energy.",
};

export default function Home() {
   return (
      <>
         {/* <HomePage /> */}
         <main className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <div className="text-center">
               <h1 className="text-4xl font-bold mb-4">Sustainable Bitcoin Protocol</h1>
               <p className="text-xl text-gray-400">Site is currently under maintenance.</p>
               <a href="/energyweb" className="mt-8 inline-block px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600">
                  View Energy Web Proposal
               </a>
            </div>
         </main>
      </>
   );
}
