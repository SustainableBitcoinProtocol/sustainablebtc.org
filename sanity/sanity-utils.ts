import { createClient, groq } from "next-sanity";
import { Navbar } from "@/types/navbar";

export async function getNavbar(): Promise<Navbar[]> {
   const client = createClient({
      projectId: "6e7plt23",
      dataset: "production",
      apiVersion: "2023-03-04",
   });

   return client.fetch(
      groq`*[_type=="navbar"] | order(_createdAt asc){
         _id,
         _createdAt,
         name,
         "slug": slug.current
      }`
   );
}
