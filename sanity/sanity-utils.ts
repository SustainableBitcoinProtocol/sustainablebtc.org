import { createClient, groq } from "next-sanity";
import { FooterType } from "@/types/footer-type";

// ! ===============================================================
// ! Defining global client object
// ! ===============================================================
// #region Global Declarations
const client = createClient({
   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
   apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "",
   useCdn: true,
});
// #endregion

// ! ===============================================================
// ! FETCH COMPONENT DATA
// ! ===============================================================
// #region component data fetch
export async function getNavbarData() {
   return client.fetch(
      groq`*[_type=="navbar"][8]{
         _id,
         primaryNavigation,
         secondaryNavigation
      }`
   );
}

export async function getFooterData(): Promise<FooterType[]> {
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
// #endregion

// ! ===============================================================
// ! FETCH PAGEs DATA
// ! ===============================================================
// #region page wise data fetch
export async function getHomePageData() {
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
   return client.fetch(
      groq`*[_type=="sbcPage"][0]{
         _id,
         hero,
         benefits,
         comparison,
         aboutSBC,
         bitcoinMiners
      }`
   );
}

export async function getInvestorPageData() {
   return client.fetch(
      groq`*[_type=="investorsPage"][0]{
         _id,
         hero,
         investment,
         support
      }`
   );
}

export async function getGetStartedPageData() {
   return client.fetch(
      groq`*[_type=="getStartedPage"][0]{
         _id,
         hero,
      }`
   );
}

export async function getMinerPageData() {
   return client.fetch(
      groq`*[_type=="minersPage"][0]{
         _id,
         hero,
         use,
         requirement
      }`
   );
}

export async function getAboutPageData() {
   return client.fetch(
      groq`*[_type=="aboutPage"][0]{
         _id,
         hero,
         sbp,
         commitment,
         team,
         support
      }`
   );
}
// #endregion
