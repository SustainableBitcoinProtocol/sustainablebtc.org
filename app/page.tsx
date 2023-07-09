import { getNavbar } from "@/sanity/sanity-utils";
import styles from "@/styles/pages/Home.module.scss";
import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
   return (
      <div className="container py-10">
         <h1 className={styles.heading}>Home Page</h1>
      </div>
   );
}
