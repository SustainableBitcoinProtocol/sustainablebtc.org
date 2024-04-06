import React from "react";

// Styles
import styles from "@/styles/pages/Faq.module.scss";

import FaqQuestions from "./FaqQuestions";

// import Sanity
import { getFaqPageData } from "@/sanity/sanity-utils";

export default async function TransparencyPage() {
   const faqPageData = await getFaqPageData();
   const faqsData = faqPageData.faqs || null;

   return (
      <>
         <section className={`${styles.hero} hero`}>
            {/* Heading */}
            <div className={`${styles.faqHeader}`}>
               <div className={`${styles.container} container`}>
                  <h1 className={`${styles.heading} heading heading-2`}>
                     Frequently Asked Questions
                  </h1>
               </div>
            </div>
            <FaqQuestions faqsData={faqsData} />
         </section>
      </>
   );
}
