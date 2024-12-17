"use client";

import { usePathname } from "next/navigation";

// Custom Components
import Header from "@/components/HeaderFooter/Header";
import Footer from "@/components/Footer";
import Breadcrum from "@/components/Breadcrum";
import ProgressBar from "@/components/ProgressBar";

export default function ConditionalLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   const pathname = usePathname();

   const isStudioRoute = pathname?.startsWith("/studio");

   if (isStudioRoute) {
      return <main>{children}</main>; // Only main content for /studio routes
   }

   return (
      <>
         {/* Progressbar */}
         <ProgressBar />
         {/* Navbar */}
         <Header />
         {/* Breadcrum */}
         <Breadcrum />
         {/* Main */}
         <main>{children}</main>
         {/* Footer */}
         <Footer />
      </>
   );
}