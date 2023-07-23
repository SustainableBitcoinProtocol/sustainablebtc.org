// Styles
import styles from "@/styles/pages/About.module.scss";

// Next/React
import Link from "next/link";
import Image from "next/image";

// Sanity
import { urlFor } from "@/sanity/sanity-urlFor";

// Lib
import { PortableText } from "@portabletext/react";

// Image
import imgSBPIcon from "@/public/home/sbc-icon.svg";
import imgSBPLine from "@/public/about/about-line.svg";

const AboutUsSBP = ({ sbpData }: { sbpData: any }) => {
   return (
      <section className={styles.sbp}>
         <div className={`${styles.container} container`}>
            {/* Heading */}
            <div className={`${styles.sbpHeading} heading heading-2`}>
               <PortableText value={sbpData.sbpHeading} />
            </div>
            {/* Description */}
            <div className={`${styles.sbpDescription} para`}>
               <PortableText value={sbpData.sbpDescription} />
            </div>

            {/* Split */}
            <div className={styles.sbpVisionMission}>
               {/* Vision */}
               <div className={styles.sbpVision}>
                  <div className="heading heading-4">
                     <PortableText value={sbpData.sbpVision.sbpVisionHeading} />
                  </div>
                  <div className="para">
                     <PortableText
                        value={sbpData.sbpVision.sbpVisionDescription}
                     />
                  </div>

                  {/* Line */}
                  <Image
                     src={imgSBPLine}
                     alt="Line"
                     className={styles.sbpVisionLine}
                  />
               </div>

               {/* Icon */}
               <div className={styles.sbpIcon}>
                  <Image src={imgSBPIcon} alt="SBP Icon" />
               </div>

               {/* Mission */}
               <div className={styles.sbpMission}>
                  <div className="heading heading-4">
                     <PortableText
                        value={sbpData.sbpMission.sbpMissionHeading}
                     />
                  </div>
                  <div className="para">
                     <PortableText
                        value={sbpData.sbpMission.sbpMissionDescription}
                     />
                  </div>

                  {/* Line */}
                  <Image
                     src={imgSBPLine}
                     alt="Line"
                     className={styles.sbpMissionLine}
                  />
               </div>
            </div>
         </div>
      </section>
   );
};

export default AboutUsSBP;
