"use client";

// Importing styles
import styles from "@/styles/components/Footer.module.scss";

// Next Imports
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PortableText } from "@portabletext/react";

// Importing Schema utils
import { getFooterData, getNavbar } from "@/sanity/sanity-utils";
import { FooterType } from "@/types/footer-type";
import { Navbar } from "@/types/navbar";

// Custom Components
import FooterCareerForm from "./FooterCareerForm";

const Footer = () => {
   // Data
   const [footerData, setFooterData] = useState<FooterType>();
   const [navbarData, setNavbarData] = useState<Navbar[]>();
   useEffect(() => {
      const setFooter = async () => {
         setFooterData((await getFooterData())[0]);
         setNavbarData(await getNavbar());
      };
      setFooter();
   }, []);

   return (
      <footer className={styles.footer}>
         {/* Career Form */}
         <FooterCareerForm />

         {/* Top Footer */}
         <div className={styles.footerContent}>
            <div className={`${styles.container} container`}>
               {/* Description */}
               <div className={styles.footerAbout}>
                  {footerData?.logoURL && (
                     <>
                        <Image
                           src={footerData.logoURL}
                           alt="SBP Short Logo"
                           width={10}
                           height={4}
                        />
                     </>
                  )}
                  {footerData && <PortableText value={footerData.about} />}
               </div>

               {/* Navigation Links */}
               <ul>
                  {navbarData &&
                     navbarData.map((item, i) => {
                        if (!item.isSecondary) {
                           return (
                              <>
                                 <li key={i}>
                                    <Link
                                       href={item.slug}
                                       className={styles.footerLink}
                                    >
                                       {item.name}
                                    </Link>
                                 </li>
                              </>
                           );
                        }
                     })}
               </ul>

               {/* Footer Links */}
               <ul>
                  {footerData &&
                     footerData.footerLinks.map((item: any, i: number) => {
                        return (
                           <>
                              <li key={i}>
                                 <Link
                                    href={item.footerLinkSlug}
                                    className={styles.footerLink}
                                 >
                                    {item.footerLinkName}
                                 </Link>
                              </li>
                           </>
                        );
                     })}

                  {/* Social */}
                  <li className={styles.footerSocialMedia}>
                     {footerData &&
                        footerData.socialLinks.map((item: any, i: number) => {
                           const socialMediaName = new URL(
                              item.socialMedia
                           ).hostname
                              .replace("www.", "")
                              .replace(".com", "")
                              .toLowerCase();
                           return (
                              <>
                                 <a
                                    className="btn btn-primary btn-rounded btn-sm"
                                    href={item.socialMedia}
                                    target="_blank"
                                    key={i}
                                    aria-label={socialMediaName}
                                 >
                                    <i
                                       className={`bi bi-${socialMediaName}`}
                                    ></i>
                                 </a>
                              </>
                           );
                        })}
                  </li>
               </ul>
            </div>
         </div>
         {/* Copyright */}
         <div className={styles.copyright}>
            <div className={`${styles.container} container`}>
               <p>{footerData?.copyright}</p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
