"use client";

// Styles
import styles from "@/styles/pages/Faq.module.scss";

// Next/React
import Image from "next/image";
import { useState } from "react";

// Lib
import { PortableText } from "@portabletext/react";

const FaqQuestions = ({ question, answer }: { question: any; answer: any }) => {
   const [showQA, setShowQA] = useState(false);

   return (
      <>
         <div
            className={`${styles.faqQuestionAnswer} ${
               showQA ? styles.active : ""
            }`}
         >
            <div
               className={`${styles.faqQuestion} heading heading-5`}
               onClick={() => setShowQA(!showQA)}
            >
               <span>{question}</span>
               <i className={`bi bi-arrow-${showQA ? "down" : "right"}`}></i>
            </div>
            <div className={`${styles.faqAnswer} portableText`}>
               <PortableText value={answer} />
            </div>
         </div>
      </>
   );
};

export default FaqQuestions;
