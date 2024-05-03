"use client";

// React Packages
import { useRef, useState, useEffect } from "react";

// Styles
import styles from "@/styles/pages/News.module.scss";

// Next/React
import Link from "next/link";
import Image from "next/image";

// Sanity
import { urlFor } from "@/sanity/sanity-urlFor";

// Lib
import { PortableText } from "@portabletext/react";
import Isotope from "isotope-layout";

// Images

const NewsHero = ({ newsPageData }: { newsPageData: any }) => {
   // * Implementing Isotope Library
   // init one ref to store the future isotope object
   const isotope = useRef<Isotope | null>();
   // store the filter keyword in a state
   const [filterKey, setFilterKey] = useState("*");
   const [isCategoryActive, setIsCategoryActive] = useState("*");

   // initialize an Isotope object with configs
   useEffect(() => {
      isotope.current = new Isotope(".filter-container", {
         itemSelector: ".filter-item",
         layoutMode: "fitRows",
      });
      // cleanup
      return () => isotope.current?.destroy();
   }, []);

   // handling filter key change
   useEffect(() => {
      if (filterKey === "*") isotope.current?.arrange({ filter: `*` });
      else isotope.current?.arrange({ filter: `.${filterKey}` });
   }, [filterKey]);
   const handleFilterKeyChange = (key: string) => () => {
      setFilterKey(key);
      setIsCategoryActive(key);
   };
   // END Isotope

   return (
      <>
         <section className={`${styles.hero} hero`}>
            <div className={`${styles.container} container`}>
               {/* Heading */}
               <div className={`${styles.heroHeading} heading heading-1`}>
                  <strong>News</strong>
               </div>
               {/* Sub Heading */}
               <div className={`${styles.heroSubHeading} heading heading-5`}>
                  {/* <PortableText value={heroData.heroSubHeading} /> */}
                  Stay up to date with the latest research & insights from{" "}
                  <br />
                  Sustainable Bitcoin Protocol
               </div>

               {/* Categories */}
               <ul className={`${styles.categoryFilter}`}>
                  <li
                     className={`${
                        isCategoryActive == "*" ? styles.active : ""
                     }`}
                     onClick={handleFilterKeyChange("*")}
                  >
                     All Categories
                  </li>
                  {newsPageData.categories.map((category: any, i: number) => (
                     <>
                        <li
                           className={`${
                              isCategoryActive == category.categoryKey
                                 ? styles.active
                                 : ""
                           }`}
                           onClick={handleFilterKeyChange(category.categoryKey)}
                        >
                           {category.title}
                        </li>
                     </>
                  ))}
               </ul>

               <div className={`${styles.articles} filter-container`}>
                  {newsPageData.news &&
                     newsPageData.news.map((news: any, i: any) => {
                        let category = news.categories
                           .map(
                              (category: any, i: number) => category.categoryKey
                           )
                           .toString()
                           .replace(",", " ");
                        return (
                           <>
                              <div
                                 className={`
                              filter-item 
                              ${styles.articleCard}
                              ${category}
                              `}
                                 key={i}
                              >
                                 {/* Image */}
                                 <div className={styles.articleImage}>
                                    <Link
                                       href={`${
                                          news.btnIsRedirect
                                             ? news.url
                                             : `news/${news.slug.current}`
                                       }`}
                                       target={`${
                                          news.btnIsRedirect ? "_blank" : ""
                                       }`}
                                    >
                                       {news.imageURL && (
                                          <Image
                                             src={news.imageURL}
                                             alt={news.image.alt}
                                             // height={1280}
                                             fill
                                          />
                                       )}
                                    </Link>
                                 </div>

                                 <div>
                                    {/* Title */}
                                    <Link
                                       href={`${
                                          news.btnIsRedirect
                                             ? news.url
                                             : `news/${news.slug.current}`
                                       }`}
                                       target={`${
                                          news.btnIsRedirect ? "_blank" : ""
                                       }`}
                                    >
                                       <h4
                                          className={`${styles.articleTitle} heading heading-5`}
                                          title={news.title}
                                       >
                                          {news.title}
                                       </h4>
                                    </Link>
                                    {/* Publish Date */}
                                    <p className={styles.articleDate}>
                                       {new Date(news.date).toLocaleDateString(
                                          "en-US",
                                          {
                                             timeZone: "UTC",
                                             month: "long",
                                             day: "2-digit",
                                             year: "numeric",
                                          }
                                       )}
                                    </p>
                                 </div>

                                 {/* Categories */}
                                 <div className={`${styles.articleCategories}`}>
                                    {news.categories.map(
                                       (category: any, i: number) => (
                                          <>
                                             <div>{category.title}</div>
                                          </>
                                       )
                                    )}
                                 </div>

                                 {/* Description */}
                                 <p
                                    className={`${styles.articleDescription} para`}
                                 >
                                    {news.description}
                                 </p>

                                 {/* CTA */}
                                 <Link
                                    href={`${
                                       news.btnIsRedirect
                                          ? news.url
                                          : `news/${news.slug.current}`
                                    }`}
                                    target={`${
                                       news.btnIsRedirect ? "_blank" : ""
                                    }`}
                                    className="btn btn-secondary"
                                 >
                                    <span>Read More</span>
                                    <i className="bi bi-arrow-up-right-circle"></i>
                                 </Link>
                              </div>
                           </>
                        );
                     })}
               </div>
            </div>
         </section>
      </>
   );
};

export default NewsHero;
