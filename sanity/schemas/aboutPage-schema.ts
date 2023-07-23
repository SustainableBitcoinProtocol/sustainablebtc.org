import btn from "../components/btn-schema";

const aboutPage = {
   name: "aboutPage",
   title: "Home Page",
   type: "document",
   fields: [
      {
         name: "title",
         title: "pageTitle",
         type: "string",
      },
      // Hero
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
               name: "heroDescription",
               title: "Description",
               type: "array",
               of: [{ type: "block" }],
            },
            {
               name: "heroCTA",
               title: "CTA",
               type: "array",
               of: [
                  {
                     type: "document",
                     fields: btn,
                  },
               ],
            },
         ],
      },
   ],
};

export default aboutPage;
