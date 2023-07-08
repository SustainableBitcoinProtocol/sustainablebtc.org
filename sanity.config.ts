import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas/";

const config = defineConfig({
   projectId: "6e7plt23",
   dataset: "production",
   title: "Studio | Sustainable Bitcoin Protocol",
   apiVersion: "2023-03-04",
   basePath: "/studio",
   plugins: [deskTool()],
   schema: {
      types: schemas,
   },
});

export default config;
