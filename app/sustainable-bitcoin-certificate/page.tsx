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
   ReactCompareSliderImage,
} from "react-compare-slider";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

// Data Fetch
import { getSBCPageData } from "@/sanity/sanity-utils";
import { urlFor } from "@/sanity/sanity-urlFor";

// Image
import imgHeroBg from "@/public/sbc/heroBg.svg";
import imgHero from "@/public/sbc/hero-img.svg";
import imgSbcIcon from "@/public/home/sbc-icon.svg";

const SBC = () => {
   const [sbcPageData, setSbcPageData] = useState<any>();
   const [heroData, setHeroData] = useState<any>();
   const [benefitsData, setBenefitsData] = useState<any>();
   const [comparisonData, setComparisonData] = useState<any>();
   const [aboutSbcData, setAboutSbcData] = useState<any>();
   const [bitcoinMinersData, setBitcoinMinersData] = useState<any>();
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
         setAboutSbcData(sbcPageData.aboutSBC);
         setBitcoinMinersData(sbcPageData.bitcoinMiners);
      }
   }, [sbcPageData]);
   // console.log(bitcoinMinersData);

   const handlePositionChange: any = useCallback((position: any) => {}, []);

   const particlesInit = async (main: any) => {
      await loadFull(main);
   };

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
         <section className={styles.sbc}>
            {/* Image Animation */}
            <div>
               <Particles
                  className={styles.sbcBg}
                  id="tsparticles"
                  init={particlesInit}
                  options={{
                     particles: {
                        number: {
                           value: 60,
                           density: {
                              enable: true,
                              value_area: 800,
                           },
                        },
                        color: {
                           value: "#ffffff",
                        },
                        shape: {
                           type: "circle",
                           stroke: {
                              width: 0,
                              color: "#000000",
                           },
                           polygon: {
                              nb_sides: 5,
                           },
                           image: {
                              src: "img/github.svg",
                              width: 100,
                              height: 100,
                           },
                        },
                        opacity: {
                           value: 0.1,
                           random: false,
                           anim: {
                              enable: false,
                              speed: 1,
                              opacity_min: 0.1,
                              sync: false,
                           },
                        },
                        size: {
                           value: 5,
                           random: true,
                           anim: {
                              enable: false,
                              speed: 40,
                              size_min: 0.1,
                              sync: false,
                           },
                        },
                        line_linked: {
                           enable: true,
                           distance: 120,
                           color: "#ffffff",
                           opacity: 0.2,
                           width: 1,
                        },
                        move: {
                           enable: true,
                           speed: 2,
                           direction: "none",
                           random: false,
                           straight: false,
                           out_mode: "out",
                           bounce: false,
                           attract: {
                              enable: false,
                              rotateX: 600,
                              rotateY: 1200,
                           },
                        },
                     },
                     interactivity: {
                        detect_on: "canvas",
                        events: {
                           onhover: {
                              enable: true,
                              mode: "grab",
                           },
                           onclick: {
                              enable: true,
                              mode: "push",
                           },
                           resize: true,
                        },
                        modes: {
                           grab: {
                              distance: 150,
                              line_linked: {
                                 opacity: 0.5,
                              },
                           },
                           bubble: {
                              distance: 400,
                              size: 40,
                              duration: 2,
                              opacity: 8,
                              speed: 3,
                           },
                           repulse: {
                              distance: 200,
                              duration: 0.4,
                           },
                           push: {
                              particles_nb: 4,
                           },
                           remove: {
                              particles_nb: 2,
                           },
                        },
                     },
                     fullScreen: { enable: false },
                     retina_detect: false,
                  }}
               />
            </div>

            <div className={`${styles.container} container`}>
               {/* Sbc Image */}
               <div className={styles.sbcIcon}>
                  <Image src={imgSbcIcon} alt="SBC Icon" />
               </div>

               {aboutSbcData && (
                  <>
                     {/* Heading */}
                     <div>
                        <h2
                           className={`${styles.sbcHeading} heading heading-2`}
                        >
                           {aboutSbcData.aboutSBCHeading}
                        </h2>
                        <h4
                           className={`${styles.sbcSubHeading} heading heading-4`}
                        >
                           {aboutSbcData.aboutSBCSubHeading}
                        </h4>
                     </div>

                     {/* Description */}
                     <div className={styles.sbcDescription}>
                        <PortableText
                           value={aboutSbcData.aboutSBCDescription}
                        />
                     </div>

                     {/* CTA */}
                     <div className={styles.aboutSbcCTA}>
                        {aboutSbcData.aboutSBCCTA.map((cta: any, i: number) => (
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

         {/* Support Companies */}
         <section className={styles.bitcoinMiners}>
            <div className={`${styles.container} container`}>
               {bitcoinMinersData && (
                  <>
                     {/* Heading */}
                     <h2
                        className={`${styles.bitcoinMinersHeading} heading heading-2`}
                     >
                        <PortableText
                           value={bitcoinMinersData.bitcoinMinersHeading}
                        />
                     </h2>

                     {/* Features */}
                     <ul className={styles.bitcoinMinersFeatures}>
                        {bitcoinMinersData.bitcoinMinersFeatures.map(
                           (feature: string) => (
                              <li key={feature}>{feature}</li>
                           )
                        )}
                     </ul>

                     {/* Images */}
                     <div className={styles.bitcoinMiners}>
                        {bitcoinMinersData.heroCompanyImages.map(
                           (item: any, i: number) => (
                              <div
                                 key={i}
                                 className={styles.bitcoinMinersImage}
                              >
                                 {/* eslint-disable-next-line @next/next/no-img-element */}
                                 <img
                                    src={urlFor(item).url()}
                                    alt={item.alt}
                                    width={`auto`}
                                    height={`auto`}
                                 />
                              </div>
                           )
                        )}
                     </div>
                  </>
               )}
            </div>
         </section>
      </>
   );
};

export default SBC;
