"use client";

// Importing Styles
import styles from "@/styles/pages/SBC.module.scss";

// Importing Packages
import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import React from "react";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import {
   ReactCompareSlider,
   ReactCompareSliderHandle,
   ReactCompareSliderImage,
} from "react-compare-slider";

// Data Fetch
import { getSBCPageData } from "@/sanity/sanity-utils";
import { urlFor } from "@/sanity/sanity-urlFor";

// Image
import imgHeroBg from "@/public/sbc/heroBg.svg";
import imgHero from "@/public/sbc/hero-img.svg";

const SBC = () => {
   const [sbcPageData, setSbcPageData] = useState<any>();
   const [heroData, setHeroData] = useState<any>();
   const [benefitsData, setBenefitsData] = useState<any>();
   const [comparisonData, setComparisonData] = useState<any>();
   useEffect(() => {
      const setSBCData = async () => {
         setSbcPageData(await getSBCPageData());
      };
      setSBCData();
   }, []);
   useEffect(() => {
      if (sbcPageData) {
         setHeroData(sbcPageData.hero);
         setBenefitsData(sbcPageData.benefits);
         setComparisonData(sbcPageData.comparison);
      }
   }, [sbcPageData]);
   console.log(comparisonData);

   const handlePositionChange: any = useCallback((position: any) => {
      console.log("[CustomHandle]", position);
   }, []);

   return (
      <>
         {/* Background */}
         <Image
            className={styles.heroBg}
            src={imgHeroBg}
            alt="Hero Background"
         />

         {/* Hero Section */}
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

         {/* SBC Benefits */}
         <section className={styles.benefits}>
            <div className={`${styles.container} container`}>
               {benefitsData && (
                  <>
                     {/* Heading */}
                     <h2
                        className={`${styles.benefitsHeading} heading heading-2`}
                     >
                        {benefitsData.benefitsHeading}
                     </h2>

                     {/* Benefits */}
                     <div className={styles.benefitsItems}>
                        {benefitsData.benefitsItems.map(
                           (benefit: any, i: number) => (
                              <>
                                 <div>
                                    <div className={styles.itemImg}>
                                       <Image
                                          src={urlFor(
                                             benefit.benefitsItemImage
                                          ).url()}
                                          alt={benefit.benefitsItemImage}
                                          width={90}
                                          height={90}
                                       />
                                    </div>
                                    <h5 className={`heading heading-6`} key={i}>
                                       {benefit.benefitsItemTitle}
                                    </h5>
                                 </div>
                              </>
                           )
                        )}
                     </div>

                     {/* CTA */}
                     <div className={styles.benefitsCTA}>
                        {benefitsData.benefitsCTA.map((cta: any, i: number) => (
                           <>
                              {cta.btnOptions.btnVisible && (
                                 <Link
                                    key={i}
                                    href={cta.btnOptions.btnSlug}
                                    className={`btn btn-${cta.btnOptions.btnType}`}
                                 >
                                    <span>{cta.btnText}</span>
                                    {cta.btnOptions.btnIcon !== "NA" && (
                                       <i
                                          className={`bi bi-${cta.btnOptions.btnIcon}`}
                                       ></i>
                                    )}
                                 </Link>
                              )}
                           </>
                        ))}
                     </div>
                  </>
               )}
            </div>
         </section>

         {/* SBC Comparison */}
         <section className={styles.comparison}>
            <div className={`${styles.container} container`}>
               {comparisonData && (
                  <>
                     {/* Heading */}
                     <div className={styles.comparisonHeading}>
                        <PortableText value={comparisonData.comparisonTitle} />
                     </div>
                     {/* Features */}
                     <ul className={styles.comparisonFeatures}>
                        {comparisonData.comparisonFeatures.map(
                           (feature: string) => (
                              <li key={feature}>{feature}</li>
                           )
                        )}
                     </ul>
                     {/* Comparison */}
                     <ReactCompareSlider
                        className={styles.comparisonSlider}
                        itemOne={
                           <ReactCompareSliderImage
                              className={styles.comparisonSliderImg}
                              src={urlFor(
                                 comparisonData.comparisonImageGreen
                              ).url()}
                              alt={comparisonData.comparisonImageGreen.alt}
                           />
                        }
                        itemTwo={
                           <ReactCompareSliderImage
                              className={styles.comparisonSliderImg}
                              src={urlFor(
                                 comparisonData.comparisonImageDark
                              ).url()}
                              style={{ filter: "grayscale(1) brightness(0.8)" }}
                              alt={comparisonData.comparisonImageDark.alt}
                           />
                        }
                        onPositionChange={handlePositionChange}
                        changePositionOnHover={handlePositionChange}
                     />
                  </>
               )}
            </div>
         </section>

         {/* About SBC */}
         <section>
            <div className={`${styles.container} container`}>About SBC</div>
         </section>

         {/* Support Companies */}
         <section>Companies</section>
      </>
   );
};

export default SBC;
