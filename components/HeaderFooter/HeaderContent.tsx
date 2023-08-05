"use client";

// Importing styles
import styles from "@/styles/components/Header.module.scss";

// Next/React Imports
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

// Images
import logo from "@/public/logo.svg";

const HeaderContent = ({ navbarData }: { navbarData: any }) => {
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
                                    <Link href={`/${item.slug}`}>
                                       <span>{item.name}</span>
                                    </Link>
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
