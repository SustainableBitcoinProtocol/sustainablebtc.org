"use client";

// Styles
import styles from "@/styles/pages/Home.module.scss";
import "swiper/css";

// Next/React
import Link from "next/link";
import Image from "next/image";

// Sanity
import { urlFor } from "@/sanity/sanity-urlFor";

// Lib
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Image
import imgTestimonialLine from "@/public/home/testomonialLine.svg";

export default function HomeTestimonials({
   testimonialData,
}: {
   testimonialData: any;
}) {
   return (
      <section className={styles.testimonials}>
         <Image
            src={imgTestimonialLine}
            alt="Line"
            className={styles.testimonialLine}
         />

         <div className={`${styles.container} container`}>
            {testimonialData && (
               <div className={styles.testimonialWrapper}>
                  {/* Header */}
                  <div>
                     <h2
                        className={`${styles.testimonialHeading} heading heading-3`}
                     >
                        {testimonialData.testimonialTitle}
                     </h2>
                  </div>
                  {/* Sliding */}
                  <div>
                     <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        onSwiper={(swiper) => console.log(swiper)}
                        autoplay={{
                           delay: 5000,
                           disableOnInteraction: true,
                        }}
                        loop={true}
                        navigation={true}
                        modules={[Autoplay, Navigation]}
                     >
                        {testimonialData.testimonialItems.map(
                           (item: any, i: number) => (
                              <SwiperSlide
                                 key={i}
                                 className={styles.testimonialSlide}
                              >
                                 {/* Image */}
                                 {/* eslint-disable-next-line @next/next/no-img-element */}
                                 <Image
                                    src={urlFor(item.testimonyImage)
                                       .width(400)
                                       .url()}
                                    alt={item.testimonyImage.alt}
                                    className={styles.testimonialTestimonyImage}
                                    width={400}
                                    height={400}
                                 />

                                 {/* Content */}
                                 <div>
                                    <p className={styles.testimonialTestimony}>
                                       {`"${item.testimony}"`}
                                    </p>

                                    <div>
                                       <h3
                                          className={`${styles.testimonialTestimonyName}`}
                                       >
                                          {item.testimonyName}
                                       </h3>
                                       {/* eslint-disable-next-line @next/next/no-img-element */}
                                       <Image
                                          src={urlFor(item.testimonyCompanyLogo)
                                             .width(300)
                                             .url()}
                                          alt={item.testimonyImage.alt}
                                          width={200}
                                          height={100}
                                          className={
                                             styles.testimonialTestimonyCompanyLogo
                                          }
                                       />
                                    </div>
                                 </div>
                              </SwiperSlide>
                           )
                        )}
                     </Swiper>
                  </div>
               </div>
            )}
         </div>
      </section>
   );
}
