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

import { getBtcInfo } from "@/utils/livecoinwatch";
import { getSbcInfo } from "@/utils/sbp";

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

   // ! BTC Info
   const [btcInfo, setBtcInfo] = useState<any>(null);
   useEffect(() => {
      async function startFetchingBtcInfo() {
         const result = await getBtcInfo();

         result.delta.dayPercent = (
            100 -
            (result.rate / (result.rate * result.delta.day)) * 100
         ).toFixed(2);
         setBtcInfo(result);
      }

      const refreshInterval: number = parseInt(
         process.env.NEXT_PUBLIC_LIVECOINWATCH_REFRESH_INTREVAL || "15",
         10
      );

      startFetchingBtcInfo();
      const intervalID = setInterval(() => {
         startFetchingBtcInfo();
      }, refreshInterval * 1000);

      return () => {
         clearInterval(intervalID);
      };
   }, []);
   // =====================================================================

   // ! SBC Info
   const [sbcInfo, setSBCInfo] = useState<any>(null);
   useEffect(() => {
      async function startFetchingSbcInfo() {
         const result = await getSbcInfo();
         result.deltaDayPercent = (
            100 -
            (result.price / (result.price * result.deltaDay)) * 100
         ).toFixed(2);
         setSBCInfo(result);
      }

      startFetchingSbcInfo();
   }, []);
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
                              key={image.alt}
                           >
                              <Image
                                 src={urlFor(image).url()}
                                 alt={image.alt}
                                 width={300}
                                 height={100}
                                 loading="eager"
                              />
                           </div>
                        </>
                     ))}

                     <>
                        <div
                           className={`md:hidden ${styles.globalLeaderSlide} ${styles.price}`}
                        >
                           {btcInfo && (
                              <div className={styles.sbc}>
                                 <Image
                                    src={btcInfo.png64}
                                    alt={btcInfo.name}
                                    className={styles.sbcLogo}
                                    width={20}
                                    height={20}
                                    loading="eager"
                                 />
                                 <span className={styles.sbcValue}>
                                    {new Intl.NumberFormat("en-US", {
                                       style: "currency",
                                       currency: "USD",
                                    }).format(btcInfo.rate)}
                                 </span>
                                 <span
                                    className={`${styles.sbcValueChangeBy} ${
                                       btcInfo.delta.dayPercent >= 0
                                          ? styles.positive
                                          : styles.negative
                                    }`}
                                 >
                                    <i
                                       className={`bi bi-arrow-${
                                          btcInfo.delta.dayPercent >= 0
                                             ? "up"
                                             : "down"
                                       }`}
                                    ></i>
                                    <span>{btcInfo.delta.dayPercent}%</span>
                                 </span>
                              </div>
                           )}
                        </div>
                        <div
                           className={`md:hidden ${styles.globalLeaderSlide} ${styles.price} ${styles.price}`}
                        >
                           {sbcInfo && (
                              <div className={styles.sbc}>
                                 <Image
                                    src={sbcIcon}
                                    alt="SBC Token"
                                    className={styles.sbcLogo}
                                    width={20}
                                    height={20}
                                    loading="eager"
                                 />
                                 <span className={styles.sbcValue}>
                                    {new Intl.NumberFormat("en-US", {
                                       style: "currency",
                                       currency: "USD",
                                    }).format(sbcInfo.price)}
                                 </span>
                                 <span
                                    className={`${styles.sbcValueChangeBy} ${
                                       sbcInfo.deltaDayPercent >= 0
                                          ? styles.positive
                                          : styles.negative
                                    }`}
                                 >
                                    <i
                                       className={`bi bi-arrow-${
                                          sbcInfo.deltaDayPercent >= 0
                                             ? "up"
                                             : "down"
                                       }`}
                                    ></i>
                                    <span>{sbcInfo.deltaDayPercent}%</span>
                                 </span>
                              </div>
                           )}
                        </div>
                     </>

                     {navbarGlobalLeadersData.map((image: any) => (
                        <>
                           <div
                              className={styles.globalLeaderSlide}
                              title={image.alt}
                              key={image.alt}
                           >
                              <Image
                                 src={urlFor(image).url()}
                                 alt={image.alt}
                                 width={300}
                                 height={100}
                                 loading="eager"
                              />
                           </div>
                        </>
                     ))}

                     <>
                        <div
                           className={`md:hidden ${styles.globalLeaderSlide} ${styles.price}`}
                        >
                           {btcInfo && (
                              <div className={styles.sbc}>
                                 <Image
                                    src={btcInfo.png64}
                                    alt={btcInfo.name}
                                    className={styles.sbcLogo}
                                    width={20}
                                    height={20}
                                    loading="eager"
                                 />
                                 <span className={styles.sbcValue}>
                                    {new Intl.NumberFormat("en-US", {
                                       style: "currency",
                                       currency: "USD",
                                    }).format(btcInfo.rate)}
                                 </span>
                                 <span
                                    className={`${styles.sbcValueChangeBy} ${
                                       btcInfo.delta.dayPercent >= 0
                                          ? styles.positive
                                          : styles.negative
                                    }`}
                                 >
                                    <i
                                       className={`bi bi-arrow-${
                                          btcInfo.delta.dayPercent >= 0
                                             ? "up"
                                             : "down"
                                       }`}
                                    ></i>
                                    <span>{btcInfo.delta.dayPercent}%</span>
                                 </span>
                              </div>
                           )}
                        </div>
                        <div
                           className={`md:hidden ${styles.globalLeaderSlide} ${styles.price} ${styles.price}`}
                        >
                           {sbcInfo && (
                              <div className={styles.sbc}>
                                 <Image
                                    src={sbcIcon}
                                    alt="SBC Token"
                                    className={styles.sbcLogo}
                                    width={20}
                                    height={20}
                                    loading="eager"
                                 />
                                 <span className={styles.sbcValue}>
                                    {new Intl.NumberFormat("en-US", {
                                       style: "currency",
                                       currency: "USD",
                                    }).format(sbcInfo.price)}
                                 </span>
                                 <span
                                    className={`${styles.sbcValueChangeBy} ${
                                       sbcInfo.deltaDayPercent >= 0
                                          ? styles.positive
                                          : styles.negative
                                    }`}
                                 >
                                    <i
                                       className={`bi bi-arrow-${
                                          sbcInfo.deltaDayPercent >= 0
                                             ? "up"
                                             : "down"
                                       }`}
                                    ></i>
                                    <span>{sbcInfo.deltaDayPercent}%</span>
                                 </span>
                              </div>
                           )}
                        </div>
                     </>
                  </div>
               </div>
               {/* BTC & SBC Values */}
               <div className={styles.ticker}>
                  {btcInfo && (
                     <>
                        <div className={styles.sbc}>
                           <Image
                              src={btcInfo.png64}
                              alt={btcInfo.name}
                              className={styles.sbcLogo}
                              width={20}
                              height={20}
                           />
                           <span className={styles.sbcValue}>
                              {new Intl.NumberFormat("en-US", {
                                 style: "currency",
                                 currency: "USD",
                              }).format(btcInfo.rate)}
                           </span>
                           <span
                              className={`${styles.sbcValueChangeBy} ${
                                 btcInfo.delta.dayPercent >= 0
                                    ? styles.positive
                                    : styles.negative
                              }`}
                           >
                              <i
                                 className={`bi bi-arrow-${
                                    btcInfo.delta.dayPercent >= 0
                                       ? "up"
                                       : "down"
                                 }`}
                              ></i>
                              <span>{btcInfo.delta.dayPercent}%</span>
                           </span>
                        </div>
                     </>
                  )}
                  {sbcInfo && (
                     <>
                        <div className={styles.sbc}>
                           <Image
                              src={sbcIcon}
                              alt="SBC Token"
                              className={styles.sbcLogo}
                              width={20}
                              height={20}
                           />
                           <span className={styles.sbcValue}>
                              {new Intl.NumberFormat("en-US", {
                                 style: "currency",
                                 currency: "USD",
                              }).format(sbcInfo.price)}
                           </span>
                           <span
                              className={`${styles.sbcValueChangeBy} ${
                                 sbcInfo.deltaDayPercent >= 0
                                    ? styles.positive
                                    : styles.negative
                              }`}
                           >
                              <i
                                 className={`bi bi-arrow-${
                                    sbcInfo.deltaDayPercent >= 0 ? "up" : "down"
                                 }`}
                              ></i>
                              <span>{sbcInfo.deltaDayPercent}%</span>
                           </span>
                        </div>
                     </>
                  )}
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
                                    {item.slug.includes("http") ? (
                                       <a
                                          href={`${item.slug}`}
                                          onClick={() =>
                                             window.innerWidth < 1440
                                                ? setIsNavbarToggled(
                                                     !isNavbarToggled
                                                  )
                                                : null
                                          }
                                       >
                                          <span>{item.name}</span>
                                       </a>
                                    ) : (
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
                                    )}
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
                                       <a href={`${item.slug}`}>
                                          <span>{item.name}</span>
                                       </a>
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
                                       <a href={item.slug}>
                                          <span>{item.name}</span>
                                       </a>
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
