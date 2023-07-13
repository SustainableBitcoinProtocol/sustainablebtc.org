import { createClient, groq } from "next-sanity";
import { Navbar } from "@/types/navbar";
import { FooterType } from "@/types/footer-type";

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
         'slug': slug.current,
         isSecondary,
         isButton,
         iconName,
      }`
   );
}

export async function getFooterData(): Promise<FooterType[]> {
   const client = createClient({
      projectId: "6e7plt23",
      dataset: "production",
      apiVersion: "2023-03-04",
   });

   return client.fetch(
      groq`*[_type=="footer"]{
         _id,
         _createdAt,
         name,
         'logoURL': logo.asset->url,
         about,
         footerLinks,
         socialLinks,
         copyright,
      }`
   );
}

export async function getHomePageData() {
   const client = createClient({
      projectId: "6e7plt23",
      dataset: "production",
      apiVersion: "2023-03-04",
   });

   return client.fetch(
      groq`*[_type=="homePage"][0]{
         _id,
         hero,
         sbc,
         testimonials
      }`
   );
}

export async function getSBCPageData() {
   const client = createClient({
      projectId: "6e7plt23",
      dataset: "production",
      apiVersion: "2023-03-04",
      useCdn: true,
   });

   return client.fetch(
      groq`*[_type=="sbcPage"][0]{
         _id,
         hero,
         benefits
      }`
   );
}
