"use client";

// Styles
import styles from "@/styles/pages/News.module.scss";

// Next/React
import Link from "next/link";
import Image from "next/image";

// Sanity
import { urlFor } from "@/sanity/sanity-urlFor";

// Lib
import { PortableText } from "@portabletext/react";

// Images

const NewsHero = ({ newsPageData }: { newsPageData: any }) => {
   return (
      <>
         <section className={`${styles.hero} hero`}>
            <div className={`${styles.container} container`}>
               <div className={styles.articles}>
                  {newsPageData &&
                     newsPageData.map((news: any) => (
                        <>
                           <div className={styles.articleCard}>
                              {/* Image */}
                              <div className={styles.articleImage}>
                                 <Link href={`news/${news.slug.current}`}>
                                    {news.imageURL && (
                                       <Image
                                          src={news.imageURL}
                                          alt={news.image.alt}
                                          width={1920}
                                          height={1280}
                                       />
                                    )}
                                 </Link>
                              </div>

                              <div>
                                 {/* Title */}
                                 <Link href={`news/${news.slug.current}`}>
                                    <h4
                                       className={`${styles.articleTitle} heading heading-5`}
                                       title={news.title}
                                    >
                                       {news.title}
                                    </h4>
                                 </Link>
                                 {/* Publish Date */}
                                 <p className={styles.articleDate}>
                                    {new Date(
                                       news._createdAt
                                    ).toLocaleDateString("en-US", {
                                       timeZone: "UTC",
                                       month: "long",
                                       day: "2-digit",
                                       year: "numeric",
                                    })}
                                 </p>
                              </div>

                              {/* Description */}
                              <p
                                 className={`${styles.articleDescription} para`}
                              >
                                 {news.description}
                              </p>

                              {/* CTA */}
                              <Link
                                 href={`news/${news.slug.current}`}
                                 className="btn btn-secondary"
                              >
                                 <span>Read More</span>
                                 <i className="bi bi-arrow-up-right-circle"></i>
                              </Link>
                           </div>
                        </>
                     ))}
               </div>
            </div>
         </section>
      </>
   );
};

export default NewsHero;
