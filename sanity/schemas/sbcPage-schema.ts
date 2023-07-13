import btn from "../components/btn-schema";

const sbcPage = {
   name: "sbcPage",
   title: "Home Page",
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
               title: "Title",
               type: "array",
               of: [{ type: "block" }],
            },
            {
               name: "heroSubHeading",
               title: "Sub Heading",
               type: "string",
            },
         ],
      },
      // Benefits
      {
         name: "benefits",
         title: "Benefits",
         type: "document",
         fields: [
            {
               name: "benefitsHeading",
               title: "Heading",
               type: "string",
            },
            {
               name: "benefitsItems",
               title: "Benefits Items",
               type: "array",
               of: [
                  {
                     type: "document",
                     fields: [
                        {
                           name: "benefitsItemImage",
                           title: "Image",
                           type: "image",
                           options: { hotspot: true },
                           fields: [
                              {
                                 name: "alt",
                                 title: "Alt",
                                 type: "string",
                              },
                           ],
                        },
                        {
                           name: "benefitsItemTitle",
                           title: "Title",
                           type: "string",
                        },
                     ],
                  },
               ],
            },
            {
               name: "benefitsCTA",
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

export default sbcPage;
