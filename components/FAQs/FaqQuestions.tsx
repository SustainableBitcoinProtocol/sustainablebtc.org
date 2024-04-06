// Styles
import styles from "@/styles/pages/Faq.module.scss";

// Next/React
import Link from "next/link";
import Image from "next/image";

// Sanity
import { urlFor } from "@/sanity/sanity-urlFor";

// Lib
import { PortableText } from "@portabletext/react";

const FaqQuestions = ({ faqsData }: { faqsData: any }) => {
   return (
      <>
         <div className={`${styles.container} container`}>
            {faqsData.map((item: any, i: number) => (
               <>
                  <div className={`${styles.faqWrapper}`}>
                     <div
                        key={i}
                        className={`${styles.faqQuestion} heading heading-5`}
                     >
                        {item.faqQuestion}
                     </div>
                     <div className={`portableText`}>
                        <PortableText value={item.faqAnswer} />
                     </div>
                  </div>
               </>
            ))}
         </div>
      </>
   );
};

export default FaqQuestions;
