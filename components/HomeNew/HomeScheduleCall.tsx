"use client"
import React, { useEffect } from 'react';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';

import styles from "@/styles/pages/HomeNew.module.scss";

const HomeScheduleCall = ({ scheduleCallData }: { scheduleCallData: any }) => {
   return (
      <section className={styles.scheduleCall}>
         <div className={`container ${styles.container}`}>
            <div className={`${styles.scheduleCallHeading} portableText`}>
               <PortableText value={scheduleCallData.scheduleCallHeading} />
            </div>
            <div className={styles.scheduleCallCTA}>
               {scheduleCallData.scheduleCallHeadingCTA.map((cta: any, i: number) => (
                  <Link
                     key={i}
                     href={cta.btnOptions.btnSlug}
                     className={`btn btn-${cta.btnOptions.btnType}`}
                     target='_blank'
                  >
                     <span>{cta.btnText}</span>
                     {cta.btnOptions.btnIcon !== "NA" && (
                        <i
                           className={`bi bi-${cta.btnOptions.btnIcon}`}
                        ></i>
                     )}
                  </Link>
               ))}
            </div>
         </div>
      </section>
   )
}

export default HomeScheduleCall