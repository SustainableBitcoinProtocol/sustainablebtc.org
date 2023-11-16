"use client";

// Importing styles
import styles from "@/styles/components/Header.module.scss";

// Next/React Imports
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

// Lib
import { urlFor } from "@/sanity/sanity-urlFor";
import { PortableText } from "@portabletext/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Images
import logo from "@/public/logo.svg";
import sbcIcon from "@/public/sbc-icon.svg";
import bitcoinIcon from "@/public/bitcoin-icon.svg";

const HeaderContent = ({
   navbarData,
   navbarGlobalLeadersData,
}: {
   navbarData: any;
   navbarGlobalLeadersData: any;
}) => {
   // =====================================================================
   // ! Get activelink
   let activeLink = useSelectedLayoutSegment();
   // =====================================================================

   // =====================================================================
   // ! Navbar Data
   const [isNavbarToggled, setIsNavbarToggled] = useState<boolean>(false);
   // =====================================================================

   // =====================================================================
   // ! Scroll Behaviour
   const [clientWindowHeight, setClientWindowHeight] = useState<any>("");

   const handleScroll = () => {
      setClientWindowHeight(window.scrollY);
   };

   useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   });
   // =====================================================================

   return (
      <>
         <aside className={`${styles.headerTopBar}`}>
            <div className={`${styles.container} container`}>
               {/* Global Leaders */}
               <div className={styles.globalLeader}>
                  <h6 className={styles.globalLeaderHeading}>
                     Trusted by Global Leaders
                  </h6>
                  {/* Logo Slider */}
                  <div className={styles.globalLeaderSlider}>
                     {navbarGlobalLeadersData.map((image: any) => (
                        <>
                           <div
                              className={styles.globalLeaderSlide}
                              title={image.alt}
                           >
                              <Image
                                 src={urlFor(image).url()}
                                 alt={image.alt}
                                 width={300}
                                 height={100}
                              />
                           </div>
                        </>
                     ))}
                     {navbarGlobalLeadersData.map((image: any) => (
                        <>
                           <div
                              className={styles.globalLeaderSlide}
                              title={image.alt}
                           >
                              <Image
                                 src={urlFor(image).url()}
                                 alt={image.alt}
                                 width={300}
                                 height={100}
                              />
                           </div>
                        </>
                     ))}

                     {navbarData.statistics &&
                        navbarData.statistics.map((item: any, i: number) => {
                           return (
                              <>
                                 <div
                                    className={`md:hidden ${styles.globalLeaderSlide}`}
                                 >
                                    <div className={styles.sbc}>
                                       <Image
                                          src={urlFor(item.statImage).url()}
                                          alt={item.alt}
                                          className={styles.sbcLogo}
                                          width={20}
                                          height={20}
                                       />
                                       <span className={styles.sbcValue}>
                                          {new Intl.NumberFormat("en-US", {
                                             style: "currency",
                                             currency: "USD",
                                          }).format(item.statValue)}
                                       </span>
                                       <span
                                          className={`${
                                             styles.sbcValueChangeBy
                                          } ${
                                             item.statChangedBy >= 0
                                                ? styles.positive
                                                : styles.negative
                                          }`}
                                       >
                                          <i
                                             className={`bi bi-arrow-${
                                                item.statChangedBy >= 0
                                                   ? "up"
                                                   : "down"
                                             }`}
                                          ></i>
                                          <span>{item.statChangedBy}%</span>
                                       </span>
                                    </div>
                                 </div>
                              </>
                           );
                        })}
                  </div>
               </div>
               {/* SBC Value */}
               <div className={styles.ticker}>
                  {navbarData.statistics &&
                     navbarData.statistics.map((item: any, i: number) => {
                        return (
                           <>
                              <div className={styles.sbc}>
                                 <Image
                                    src={urlFor(item.statImage).url()}
                                    alt={item.alt}
                                    className={styles.sbcLogo}
                                    width={20}
                                    height={20}
                                 />
                                 <span className={styles.sbcValue}>
                                    {new Intl.NumberFormat("en-US", {
                                       style: "currency",
                                       currency: "USD",
                                    }).format(item.statValue)}
                                 </span>
                                 <span
                                    className={`${styles.sbcValueChangeBy} ${
                                       item.statChangedBy >= 0
                                          ? styles.positive
                                          : styles.negative
                                    }`}
                                 >
                                    <i
                                       className={`bi bi-arrow-${
                                          item.statChangedBy >= 0
                                             ? "up"
                                             : "down"
                                       }`}
                                    ></i>
                                    <span>{item.statChangedBy}%</span>
                                 </span>
                              </div>
                           </>
                        );
                     })}
               </div>
            </div>
         </aside>
         <header
            className={`${styles.header} ${
               clientWindowHeight > 98 / 2 ? styles.fixToTop : ""
            }`}
         >
            <div className={`${styles.container} container`}>
               {/* Logo */}
               <div className={styles.logoWraooer}>
                  <Link href="/">
                     <Image src={logo} alt="Logo" />
                  </Link>

                  {/* separator */}
                  <div area-hidden="true" className={styles.separator}></div>

                  {/* Menu Toggle */}
                  <div
                     className={`${styles.btnNavToggle} ${
                        isNavbarToggled ? styles.open : ""
                     }`}
                     onClick={() => setIsNavbarToggled(!isNavbarToggled)}
                  >
                     <span></span>
                     <span></span>
                     <span></span>
                  </div>
               </div>

               {/* Primary nav */}
               <ul
                  className={`${styles.primaryNav} ${
                     isNavbarToggled ? styles.open : ""
                  }`}
               >
                  {navbarData.primaryNavigation &&
                     navbarData.primaryNavigation.map(
                        (item: any, i: number) => {
                           const isActive =
                              activeLink === item.slug ||
                              (activeLink == null && item.slug === "/");

                           return (
                              <>
                                 <li
                                    className={isActive ? styles.active : ""}
                                    key={i}
                                 >
                                    <Link
                                       href={`/${item.slug}`}
                                       onClick={() =>
                                          window.innerWidth < 1440
                                             ? setIsNavbarToggled(
                                                  !isNavbarToggled
                                               )
                                             : null
                                       }
                                    >
                                       <span>{item.name}</span>
                                    </Link>
                                 </li>
                              </>
                           );
                        }
                     )}

                  <ul className={styles.secondaryInPrimary}>
                     <li>
                        <hr />
                     </li>
                     {navbarData.secondaryNavigation &&
                        navbarData.secondaryNavigation.map(
                           (item: any, i: number) => {
                              if (item.isButton === true) {
                                 return (
                                    <Link
                                       href={`/${item.slug}`}
                                       className="btn btn-primary"
                                       key={i}
                                       onClick={() =>
                                          window.innerWidth < 1440
                                             ? setIsNavbarToggled(
                                                  !isNavbarToggled
                                               )
                                             : null
                                       }
                                    >
                                       <span>{item.name}</span>
                                       <i
                                          className={`bi bi-${item.iconName}`}
                                       ></i>
                                    </Link>
                                 );
                              } else {
                                 return (
                                    <li
                                       className={
                                          activeLink === item.slug
                                             ? styles.active
                                             : ""
                                       }
                                       key={i}
                                       onClick={() =>
                                          window.innerWidth < 1440
                                             ? setIsNavbarToggled(
                                                  !isNavbarToggled
                                               )
                                             : null
                                       }
                                    >
                                       <Link href={`/${item.slug}`}>
                                          <span>{item.name}</span>
                                       </Link>
                                    </li>
                                 );
                              }
                           }
                        )}
                  </ul>
               </ul>

               {/* Scondary Nav */}
               <ul className={styles.secondaryNav}>
                  {navbarData.secondaryNavigation &&
                     navbarData.secondaryNavigation.map(
                        (item: any, i: number) => {
                           if (item.isButton === true) {
                              return (
                                 <Link
                                    href={`/${item.slug}`}
                                    className="btn btn-primary"
                                    key={i}
                                 >
                                    <span>{item.name}</span>
                                    <i className={`bi bi-${item.iconName}`}></i>
                                 </Link>
                              );
                           } else {
                              return (
                                 <li
                                    className={
                                       activeLink === item.slug
                                          ? styles.active
                                          : ""
                                    }
                                    key={i}
                                 >
                                    {item.slug.includes("http") ? (
                                       <Link href={item.slug}>
                                          <span>{item.name}</span>
                                       </Link>
                                    ) : (
                                       <Link href={`/${item.slug}`}>
                                          <span>{item.name}</span>
                                       </Link>
                                    )}
                                 </li>
                              );
                           }
                        }
                     )}
               </ul>
            </div>
         </header>
      </>
   );
};

export default HeaderContent;
