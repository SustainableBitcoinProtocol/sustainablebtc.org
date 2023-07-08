import { getNavbar } from "@/sanity/sanity-utils";

export default async function Home() {
   const navbar = await getNavbar();
   return (
      <div>
         Navbar
         {navbar.map((navItem) => (
            <>
               <div>
                  {navItem.name}/{navItem.slug}
               </div>
            </>
         ))}
      </div>
   );
}
