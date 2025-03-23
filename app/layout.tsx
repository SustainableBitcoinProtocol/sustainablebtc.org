// Global Styles
import "@/styles/global.scss";

// Imports
import localFont from "@next/font/local";
import Script from "next/script";

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
      {
         path: "../public/fonts/helvetica-now-display/HelveticaNowDisplay-Thin.ttf",
         weight: "100",
         style: "normal",
      },
      {
         path: "../public/fonts/helvetica-now-display/HelveticaNowDisplay-ExtLt.ttf",
         weight: "200",
         style: "normal",
      },
      {
         path: "../public/fonts/helvetica-now-display/HelveticaNowDisplay-Light.ttf",
         weight: "300",
         style: "normal",
      },
      {
         path: "../public/fonts/helvetica-now-display/HelveticaNowDisplay-Regular.ttf",
         weight: "400",
         style: "normal",
      },
      {
         path: "../public/fonts/helvetica-now-display/HelveticaNowDisplay-Medium.ttf",
         weight: "500",
         style: "normal",
      },
      {
         path: "../public/fonts/helvetica-now-display/HelveticaNowDisplay-Bold.ttf",
         weight: "700",
         style: "normal",
      },
      {
         path: "../public/fonts/helvetica-now-display/HelveticaNowDisplay-ExtraBold.ttf",
         weight: "800",
         style: "normal",
      },
      {
         path: "../public/fonts/helvetica-now-display/HelveticaNowDisplay-Black.ttf",
         weight: "900",
         style: "normal",
      },
   ],
});

export default function RootLayout({
   children, // will be a page or nested layout
}: {
   children: React.ReactNode;
}) {
   return (
      <>
         <head>
            {/* OG Titles */}
            <meta property="og:title" content="Sustainable Bitcoin Protocol | Accelerating the Clean Energy Transition: Powered by Bitcoin" />
            <meta property="og:description" content="Discover how Sustainable Bitcoin Protocol (SBP) aligns Bitcoin mining with renewable energy to drive financial returns and climate impact. Learn about Sustainable Bitcoin Certificates (SBCs), a climate-positive asset and the groundbreaking solution for clean energy Bitcoin investments, methane mitigation, and environmental transparency. Explore how institutional investors can accelerate renewable energy adoption, decarbonize digital assets, and create a new class of appreciating environmental commodities." />
            <meta property="og:image" content="https://www.sustainablebtc.org/SBPthumbnail.png" />
            <meta property="og:url" content="https://www.sustainablebtc.org" />
            <meta name="twitter:card" content="summary_large_image" />

            {/* Google SEO */}
            <meta name="google-site-verification" content="RK55EZhe1N5sd8lCzt8yTh88BFhjqcmkkT_pHNQ03bg" />
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
         </head>
         <html lang="en" className={helveticaNowDisplay.className}>
            <body>
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
            </body>
         </html>
      </>
   );
}
