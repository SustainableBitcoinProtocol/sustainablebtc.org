import btn from "../components/btn-schema";

const minersPage = {
   name: "minersPage",
   title: "Home Page",
   type: "document",
   fields: [
      {
         name: "pageTitle",
         title: "Page Title",
         type: "string",
      },
      {
         name: "hero",
         title: "Hero",
         type: "document",
         fields: [
            {
               name: "heroHeading",
               title: "Heading",
               type: "array",
               of: [{ type: "block" }],
            },
            {
               name: "heroSubHeading",
               title: "Sub Heading",
               type: "array",
               of: [{ type: "block" }],
            },
            {
               name: "heroMiningFlow",
               title: "Mining Flow",
               type: "array",
               of: [{ type: "string" }],
            },
            {
               name: "heroCTA",
               title: "CTA",
               type: "array",
               of: [{ type: "document", fields: btn }],
            },
            {
               name: "heroClients",
               title: "Clients",
               type: "document",
               fields: [
                  {
                     name: "heroClientHeading",
                     title: "Heading",
                     type: "array",
                     of: [{ type: "block" }],
                  },
                  {
                     name: "heroClientLogos",
                     title: "Client Logos",
                     type: "array",
                     of: [{ type: "image" }],
                     options: {
                        layout: "grid",
                        hotspot: true,
                     },
                  },
               ],
            },
         ],
      },
   ],
};

export default minersPage;
