"use client";
import { useState, useRef, useEffect } from "react";

// Styles
import styles from "@/styles/pages/Invest.module.scss";

// Lib
import { PortableText } from "@portabletext/react";


const InvestHero = ({ heroData }: { heroData: any }) => {

   // #region autoplay YouTube video
   const videoRef = useRef(null);
   const [isInView, setIsInView] = useState(false);

   useEffect(()=>{
      const observer = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting) {
               setIsInView(true);
               observer.disconnect();
            }
         },
         { threshold: 0.5 }
      );

      if(videoRef.current){
         observer.observe(videoRef.current);
      }

      return () => {
         if (videoRef.current) {
            observer.disconnect(); // Ensure cleanup of the observer
         }
      };
   },[])
   // #endregion

   return (
      <>
         <section className={`${styles.hero} hero`}>
            <div className={`${styles.container} container`}>
               {/* Headings */}
               {heroData && (
                  <>
                     <div className={`${styles.heroHeading} portableText`}>
                        <PortableText value={heroData.heroHeading} />
                     </div>

                     <div className={styles.image}>
                        <iframe
                           className={styles.image}
                           src="https://www.youtube.com/embed/qOxwcyU8AdA?autoplay=1&rel=0"
                           title="YouTube video player"
                           frameBorder="0"
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                           referrerPolicy="strict-origin-when-cross-origin"
                           allowFullScreen>
                        </iframe>
                     </div>
                  </>
               )}
            </div>
         </section>
      </>
   )
}

export default InvestHero