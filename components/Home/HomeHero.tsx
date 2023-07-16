// Styles
import styles from "@/styles/pages/Home.module.scss";

// Next/React
import Link from "next/link";
import Image from "next/image";

// Sanity
import { urlFor } from "@/sanity/sanity-urlFor";

// Lib
import { PortableText } from "@portabletext/react";

// Images
import imgHeroBg from "@/public/home/hero-bg.png";
import imgHeroWindmill from "@/public/home/windmill.svg";
import imgHeroCloud from "@/public/home/cloud.svg";

export default function HomeHero({ heroData }: { heroData: any }) {
   return (
      <section className={styles.hero}>
         <div className={`${styles.container} container`}>
            {/* content */}
            <div>
               {heroData && (
                  <>
                     {/* descriptive */}
                     <div className={styles.heroDescription}>
                        <h1 className={styles.heroHeading}>
                           <PortableText value={heroData.heroHeading} />
                        </h1>
                        <div className={styles.heroPara}>
                           <PortableText value={heroData.heroDesc} />
                        </div>
                        <div className={styles.heroBtnWrapper}>
                           {heroData.heroCTA1.heroBtn1Visible && (
                              <a
                                 href="#"
                                 className={`btn btn-${heroData.heroCTA1.heroBtn1Type} ${styles.heroBtn}`}
                              >
                                 <span>{heroData.heroCTA1.heroBtn1Text}</span>
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
                                 <span>{heroData.heroCTA2.heroBtn2Text}</span>
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

                        <div className={styles.heroClientLogo}>
                           {heroData.heroCompanyImages.map(
                              (item: any, i: number) => (
                                 <div key={i}>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                       src={urlFor(item).width(100).url()}
                                       alt={item.alt}
                                       width={`auto`}
                                       height={`auto`}
                                    />
                                 </div>
                              )
                           )}
                           {/* <img
                                 src={urlFor(item.testimonyImage)
                                    .width(100)
                                    .url()}
                                 alt={item.testimonyImage.alt}
                                 width={100}
                                 height={100}
                              /> */}
                        </div>
                     </div>
                  </>
               )}
            </div>

            {/* Windmill */}
            <Image
               src={imgHeroWindmill}
               alt="Windmill"
               className={styles.imgHeroWindmill}
               loading="eager"
            />

            {/* Cloud */}
            <Image
               src={imgHeroCloud}
               alt="Windmill"
               className={styles.imgHeroCloud}
               loading="eager"
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
   );
}
