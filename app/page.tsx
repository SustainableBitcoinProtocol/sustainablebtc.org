"use client";

// Importing Styles
import styles from "@/styles/pages/Home.module.scss";

// Importing Packages
import { useEffect, useState } from "react";
import Link from "next/link";
import { Metadata } from "next";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

// Data Fetch
import { getHomePageData } from "@/sanity/sanity-utils";
import { urlFor } from "@/sanity/sanity-urlFor";

// Importing Images
import imgHeroBg from "@/public/home/hero-bg.png";
import imgHeroWindmill from "@/public/home/windmill.svg";
import imgHeroCloud from "@/public/home/cloud.svg";
import imgSbcIcon from "@/public/home/sbc-icon.svg";
import Image from "next/image";

const metadata: Metadata = {
   title: "Sustainable Bitcoin Protocol | BTC Energy Consumption Solution",
   description:
      "Sustainable Bitcoin Protocol helps accelerate the bitcoin network's transition to clean energy.",
};

export default function Home() {
   const [homePageData, setHomePageData] = useState<any>();
   const [heroData, setHeroData] = useState<any>();
   const [sbcData, setSbcData] = useState<any>();
   const [testimonialData, setTestimonialData] = useState<any>();
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
         setSbcData(homePageData.sbc);
         setTestimonialData(homePageData.testimonials);
      }
   }, [homePageData]);

   const particlesInit = async (main) => {
      console.log(main);

      // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadFull(main);
   };
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
                           speed: 4,
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

               {sbcData && (
                  <>
                     {/* Heading */}
                     <div>
                        <h2
                           className={`${styles.sbcHeading} heading heading-2`}
                        >
                           {sbcData.sbcHeading}
                        </h2>
                        <h4
                           className={`${styles.sbcSubHeading} heading heading-4`}
                        >
                           {sbcData.sbcSubHeading}
                        </h4>
                     </div>

                     {/* Features */}
                     <ul className={styles.sbcFeatures}>
                        {sbcData.sbcFeatures.map((element: string) => (
                           <div key={element}>{element}</div>
                        ))}
                     </ul>

                     {/* Description */}
                     <div className={styles.sbcDescription}>
                        <p className="para">
                           SBP facilitates the issuance of "Sustainable Bitcoin
                           Certificates" (SBC) every time a Bitcoin is mined
                           using verified clean energy. This unique asset
                           creates a market-based mechanism that incentivizes
                           bitcoin miners to use and promote green energy, and
                           enables investors to augment their Bitcoin holdings
                           in a transparent and verifiably sustainable manner,
                           thus addressing the environmental impacts of the
                           network.
                        </p>
                        <p className="para">
                           SBCs overcompensate for bitcoin’s past while
                           simultaneously driving the future of the network to
                           transparent clean energy. 
                        </p>
                     </div>

                     {/* CTA */}
                     {sbcData.sbcBtn1.sbcBtn1Visible && (
                        <Link
                           href={sbcData.sbcBtn1.sbcBtn1Slug}
                           className={`btn btn-${sbcData.sbcBtn1.sbcBtn1Type} ${styles.sbcBtn}`}
                        >
                           <span>{sbcData.sbcBtn1.sbcBtn1Text}</span>
                           {sbcData.sbcBtn1.sbcBtn1Icon !== "NA" ? (
                              <>
                                 <i
                                    className={`bi bi-${sbcData.sbcBtn1.sbcBtn1Icon}`}
                                 ></i>
                              </>
                           ) : (
                              <></>
                           )}
                        </Link>
                     )}
                  </>
               )}
            </div>
         </section>

         {/* Testimonials */}
         <section className={styles.testimonials}>
            <div className={`${styles.container} container`}>
               {testimonialData && (
                  <div>
                     {/* Header */}
                     <div>
                        <h2>{testimonialData.testimonialTitle}</h2>
                     </div>
                     {/* Sliding */}
                     <div>
                        {testimonialData.testimonialItems.map(
                           (item: any, i: number) => (
                              <div key={i}>
                                 {/* Image */}
                                 {/* eslint-disable-next-line @next/next/no-img-element */}
                                 <img
                                    src={urlFor(item.testimonyImage)
                                       .width(100)
                                       .url()}
                                    alt={item.testimonyImage.alt}
                                 />

                                 {/* Content */}
                                 <div>
                                    <p>{item.testimony}</p>

                                    <div>
                                       <h3>{item.testimonyName}</h3>
                                       <p>{item.testimonyCompany}</p>
                                    </div>
                                 </div>
                              </div>
                           )
                        )}
                     </div>
                  </div>
               )}
            </div>
         </section>
      </>
   );
}
