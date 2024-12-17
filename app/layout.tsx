// Global Styles
import "@/styles/global.scss";

// Imports
import localFont from "@next/font/local";
import Script from "next/script";
import ConditionalLayout from "@/components/ConditionalLayout";

// Importing fonts
const helveticaNowDisplay = localFont({
   src: [
      { path: "../public/fonts/helvetica-now-display/HelveticaNowDisplay-Thin.ttf", weight: "100", style: "normal" },
      { path: "../public/fonts/helvetica-now-display/HelveticaNowDisplay-Regular.ttf", weight: "400", style: "normal" },
      { path: "../public/fonts/helvetica-now-display/HelveticaNowDisplay-Bold.ttf", weight: "700", style: "normal" },
   ],
});

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
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
               {/* Conditionally Render Layout */}
               <ConditionalLayout>{children}</ConditionalLayout>
            </body>
         </html>
      </>
   );
}