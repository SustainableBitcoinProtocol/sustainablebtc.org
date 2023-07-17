import React from "react";
import styles from "@/styles/components/ComingSoon.module.scss";
import Link from "next/link";

const ComingSoon = () => {
   return (
      <div className={styles.comingSoon}>
         <div className={`${styles.container} container`}>
            <p className={`${styles.para} para`}>
               — The page will be live soon
            </p>
            <h1 className={`${styles.heading} heading heading-1`}>
               Coming Soon...
            </h1>

            <div className={styles.doYouKnow}>
               <strong>Do you know?</strong> our protocol financially
               incentivizes Bitcoin miners to use verified clean energy and for
               the first time allows investors to own Bitcoin sustainably.
            </div>

            <div className={styles.btnWrapper}>
               <Link href="/" className="btn btn-primary">
                  <span>Visit Home</span>
                  <i className="bi bi-arrow-up-right-circle"></i>
               </Link>
               {/* <Link href="/get-started" className="btn btn-secondary">
                  <span>Get started</span>
               </Link> */}
            </div>
         </div>
      </div>
   );
};

export default ComingSoon;
