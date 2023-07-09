import { getNavbar } from "@/sanity/sanity-utils";
import styles from "@/styles/pages/Home.module.scss";

export default async function Home() {
   const navbar = await getNavbar();
   return (
      <div className={styles.bgRed}>
         <span className="text-3xl font-black tracking-tighter">Main</span>
         {/* {navbar.map((navItem) => (
            <>
               <div>
                  {navItem.name}/{navItem.slug}
               </div>
            </>
         ))} */}
      </div>
   );
}
