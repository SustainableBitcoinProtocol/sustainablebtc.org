import btn from "../components/btn-schema";

const investorsPage = {
   name: "investorsPage",
   title: "Investor Page",
   type: "document",
   fields: [
      {
         name: "pageTitle",
         title: "Page Title",
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
               type: "string",
            },
            {
               name: "heroSubHeading",
               title: "Sub Heading",
               type: "string",
            },
            {
               name: "heroPara",
               title: "Para",
               type: "array",
               of: [{ type: "block" }],
            },
         ],
      },
   ],
};

export default investorsPage;
