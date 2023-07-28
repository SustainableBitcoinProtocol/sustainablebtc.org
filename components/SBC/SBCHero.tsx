"use client";

// Styles
import styles from "@/styles/pages/SBC.module.scss";

// Next/React
import Link from "next/link";
import Image from "next/image";

// Sanity
import { urlFor } from "@/sanity/sanity-urlFor";

// Lib
import { PortableText } from "@portabletext/react";

// Image
import imgHero from "@/public/sbc/hero-img.svg";
import imgHeroBg from "@/public/sbc/heroBg.svg";

const SBCHero = ({ heroData }: { heroData: any }) => {
   return (
      <>
         {/* Background */}
         <Image
            className={styles.heroBg}
            src={imgHeroBg}
            alt="Hero Background"
         />
         {/* Hero */}
         <section className={styles.hero}>
            <div className={`${styles.container} container`}>
               {heroData && (
                  <>
                     <div className={styles.heroHeadingWrapper}>
                        <h1
                           className={`${styles.heroHeading} heading heading-1`}
                        >
                           <PortableText value={heroData.heroHeading} />
                        </h1>
                        <h2
                           className={`${styles.heroSubHeading} heading heading-5`}
                        >
                           {heroData.heroSubHeading}
                        </h2>
                     </div>
                     {/* Image */}
                     <Image
                        className={styles.heroImg}
                        src={imgHero}
                        alt="Hero Image"
                     />
                  </>
               )}
            </div>
         </section>
      </>
   );
};

export default SBCHero;
