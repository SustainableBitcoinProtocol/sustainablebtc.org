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
      //
      {
         name: "investment",
         title: "Stategic Investment",
         type: "document",
         fields: [
            {
               name: "investmentHeading",
               title: "Heading",
               type: "array",
               of: [{ type: "block" }],
            },
            {
               name: "investmentSubHeading",
               title: "Sub Heading",
               type: "string",
            },
            {
               name: "investmentFormula",
               title: "Formula",
               type: "document",
               fields: [
                  {
                     name: "investmentFormulaLHS",
                     title: "LHS",
                     type: "string",
                  },
                  {
                     name: "investmentFormulaRHS",
                     title: "RHS",
                     type: "string",
                  },
                  {
                     name: "investmentFormulaRHSSubHeading",
                     title: "RHS Sub Heading",
                     type: "string",
                  },
                  {
                     name: "investmentFormulaRHSTags",
                     title: "RHS Tags",
                     type: "array",
                     of: [{ type: "string" }],
                  },
               ],
            },
            {
               name: "investmentDescription",
               title: "Description",
               type: "array",
               of: [{ type: "block" }],
            },
            {
               name: "investmentCTA",
               title: "Call to Actions",
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

export default investorsPage;
