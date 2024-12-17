"use client";

// Global Styles
import "@/styles/global.scss";

// Imports
import localFont from "@next/font/local";
import Script from "next/script";
import { usePathname } from "next/navigation";

// Custom Components
import Header from "@/components/HeaderFooter/Header";
import Footer from "@/components/Footer";
import Breadcrum from "@/components/Breadcrum";
import ProgressBar from "@/components/ProgressBar";

// Importing icons
import "bootstrap-icons/font/bootstrap-icons.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

// Defining Fonts
const helveticaNowDisplay = localFont({
   src: [
      { path: "../public/fonts/helvetica-now-display/HelveticaNowDisplay-Thin.ttf", weight: "100", style: "normal" },
      { path: "../public/fonts/helvetica-now-display/HelveticaNowDisplay-Regular.ttf", weight: "400", style: "normal" },
      { path: "../public/fonts/helvetica-now-display/HelveticaNowDisplay-Bold.ttf", weight: "700", style: "normal" },
   ],
});

export default function RootLayout({
   children, // will be a page or nested layout
}: {
   children: React.ReactNode;
}) {
   const pathname = usePathname();

   // Check if the current route starts with /studio
   const isStudioRoute = pathname?.startsWith("/studio");

   return (
      <>
         <>
            <Script
               src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}
            />
            <Script id="google-analytics">
               {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
         
                  gtag('config', '${process.env.GA_MEASUREMENT_ID}');
               `}
            </Script>
         </>
         <html lang="en" className={helveticaNowDisplay.className}>
            <body>
               {/* Conditionally exclude layout components */}
               {isStudioRoute ? (
                  <main>{children}</main> // Sanity Studio page without layout
               ) : (
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
               )}
            </body>
         </html>
      </>
   );
}
