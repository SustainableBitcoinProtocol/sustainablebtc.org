"use client";

import styles from "@/styles/pages/Home.module.scss";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Metadata } from "next";

// Data Fetch
import { getHomePageData } from "@/sanity/sanity-utils";

// Importing Images
import imgHeroBg from "@/public/home/hero-bg.png";
import imgHeroWindmill from "@/public/home/windmill.svg";
import imgHeroCloud from "@/public/home/cloud.svg";
import Image from "next/image";

const metadata: Metadata = {
   title: "Sustainable Bitcoin Protocol | BTC Energy Consumption Solution",
   description:
      "Sustainable Bitcoin Protocol helps accelerate the bitcoin network's transition to clean energy.",
};

export default function Home() {
   const [homePageData, setHomePageData] = useState<any>();
   const [heroData, setHeroData] = useState<any>();
   useEffect(() => {
      const setHomeData = async () => {
         setHomePageData(await getHomePageData());
      };
      console.log("api");
      setHomeData();
   }, []);
   useEffect(() => {
      if (homePageData) {
         setHeroData(homePageData.hero);
      }
   }, [homePageData]);
   console.log(heroData);

   return (
      <>
         {/* Hero Section */}
         <section className={styles.hero}>
            <div className={`${styles.container} container`}>
               {/* content */}
               <div>
                  {heroData && (
                     <>
                        {/* descriptive */}
                        <div className={styles.heroDescription}>
                           <h1 className={styles.heroHeading}>
                              The New Gold Standard of{" "}
                              <b>Bitcoin Sustainability</b>
                           </h1>
                           <div className={styles.heroPara}>
                              <p>
                                 Sustainable Bitcoin Protocol (SBP) is
                                 accelerating the evolution of Bitcoin to become
                                 a more sustainable and transparent asset class.
                                 Our protocol financially incentivizes Bitcoin
                                 miners to use verified clean energy and for the
                                 first time allows investors to own Bitcoin
                                 sustainably.
                              </p>
                           </div>
                           <div className={styles.heroBtnWrapper}>
                              {heroData.heroCTA1.heroBtn1Visible && (
                                 <a
                                    href="#"
                                    className={`btn btn-${heroData.heroCTA1.heroBtn1Type} ${styles.heroBtn}`}
                                 >
                                    <span>
                                       {heroData.heroCTA1.heroBtn1Text}
                                    </span>
                                    {heroData.heroCTA1.heroBtn1Icon !== "NA" ? (
                                       <>
                                          <i
                                             className={`bi bi-${heroData.heroCTA1.heroBtn1Icon}`}
                                          ></i>
                                       </>
                                    ) : (
                                       <></>
                                    )}
                                 </a>
                              )}
                              {heroData.heroCTA2.heroBtn2Visible && (
                                 <a
                                    href="#"
                                    className={`btn btn-${heroData.heroCTA2.heroBtn2Type} ${styles.heroBtn}`}
                                 >
                                    <span>
                                       {heroData.heroCTA2.heroBtn2Text}
                                    </span>
                                    {heroData.heroCTA2.heroBtn2Icon !== "NA" ? (
                                       <>
                                          <i
                                             className={`bi bi-${heroData.heroCTA2.heroBtn2Icon}`}
                                          ></i>
                                       </>
                                    ) : (
                                       <></>
                                    )}
                                 </a>
                              )}
                           </div>
                        </div>

                        {/* logos */}
                        <div className={styles.heroClient}>
                           <h3 className={styles.heroClientLogoTitle}>
                              {heroData.heroCompanyIconsTitle}
                           </h3>

                           <div className={styles.heroClientLogo}></div>
                        </div>
                     </>
                  )}
               </div>

               {/* Windmill */}
               <Image
                  src={imgHeroWindmill}
                  alt="Windmill"
                  className={styles.imgHeroWindmill}
               />

               {/* Cloud */}
               <Image
                  src={imgHeroCloud}
                  alt="Windmill"
                  className={styles.imgHeroCloud}
               />
            </div>

            {/* Background Image */}
            <Image
               src={imgHeroBg}
               alt="Hero Background"
               className={styles.imgHeroBg}
               objectFit="contain"
            />
         </section>

         {/* About SBC */}
         <section>SBC</section>

         {/* Testimonials */}
         <section>Testimonials</section>
      </>
   );
}
