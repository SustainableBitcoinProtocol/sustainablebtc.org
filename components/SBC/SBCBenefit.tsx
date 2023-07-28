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

const SBCBenefit = ({ benefitsData }: { benefitsData: any }) => {
   return (
      <section className={styles.benefits}>
         <div className={`${styles.container} container`}>
            {benefitsData && (
               <>
                  {/* Heading */}
                  <h2 className={`${styles.benefitsHeading} heading heading-2`}>
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
   );
};

export default SBCBenefit;
