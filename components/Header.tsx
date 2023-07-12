"use client";

// Importing styles
import styles from "@/styles/components/Header.module.scss";

// Next Imports
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Importing Schema utils
import { getNavbar } from "@/sanity/sanity-utils";
import { Navbar } from "@/types/navbar";

// Images
import logo from "@/public/logo.svg";

const Header = () => {
   // Get pathname
   const [pathname, setPathname] = useState(usePathname());
   // ===========

   // Navbar
   const [navbar, setNavbar] = useState<Navbar[]>();
   const [isNavbarToggled, setIsNavbarToggled] = useState<boolean>(false);

   // Scroll
   const [clientWindowHeight, setClientWindowHeight] = useState<any>("");

   const handleScroll = () => {
      setClientWindowHeight(window.scrollY);
   };

   useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   });

   useEffect(() => {
      setPathname(pathname == "" || pathname == null ? "/" : pathname);
   }, [pathname]);

   useEffect(() => {
      const setNavbarData = async () => {
         setNavbar(await getNavbar());
      };
      setNavbarData();
   }, []);

   return (
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
               {navbar &&
                  navbar.map((item: Navbar, i) => {
                     if (item.isSecondary === false) {
                        return (
                           <>
                              <li
                                 className={
                                    pathname === item.slug ? styles.active : ""
                                 }
                                 key={i}
                              >
                                 <Link href={item.slug}>
                                    <span>{item.name}</span>
                                 </Link>
                              </li>
                           </>
                        );
                     }
                  })}

               <div className={styles.secondaryInPrimary}>
                  <li>
                     <hr />
                  </li>
                  {navbar &&
                     navbar.map((item: Navbar, i) => {
                        if (item.isSecondary === true) {
                           if (item.isButton === true) {
                              return (
                                 <Link
                                    href={item.slug}
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
                                       pathname === item.slug
                                          ? styles.active
                                          : ""
                                    }
                                    key={i}
                                 >
                                    <Link href={item.slug}>
                                       <span>{item.name}</span>
                                    </Link>
                                 </li>
                              );
                           }
                        }
                     })}
               </div>
            </ul>

            {/* Scondary Nav */}
            <ul className={styles.secondaryNav}>
               {navbar &&
                  navbar.map((item: Navbar, i) => {
                     if (item.isSecondary === true) {
                        if (item.isButton === true) {
                           return (
                              <Link
                                 href={item.slug}
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
                                    pathname === item.slug ? styles.active : ""
                                 }
                                 key={i}
                              >
                                 <Link href={item.slug}>
                                    <span>{item.name}</span>
                                 </Link>
                              </li>
                           );
                        }
                     }
                  })}
            </ul>
         </div>
      </header>
   );
};

export default Header;
