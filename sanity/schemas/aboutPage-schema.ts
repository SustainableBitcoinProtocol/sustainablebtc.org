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
      // SBP
      {
         name: "sbp",
         title: "Sustainable Bitcoin Protocol",
         type: "document",
         fields: [
            {
               name: "sbpHeading",
               title: "Heading",
               type: "array",
               of: [{ type: "block" }],
            },
            {
               name: "sbpDescription",
               title: "Description",
               type: "array",
               of: [{ type: "block" }],
            },
            {
               name: "sbpVision",
               title: "Vision",
               type: "document",
               fields: [
                  {
                     name: "sbpVisionHeading",
                     title: "Heading",
                     type: "array",
                     of: [{ type: "block" }],
                  },
                  {
                     name: "sbpVisionDescription",
                     title: "Description",
                     type: "array",
                     of: [{ type: "block" }],
                  },
               ],
            },
            {
               name: "sbpMission",
               title: "Mission",
               type: "document",
               fields: [
                  {
                     name: "sbpMissionHeading",
                     title: "Heading",
                     type: "array",
                     of: [{ type: "block" }],
                  },
                  {
                     name: "sbpMissionDescription",
                     title: "Description",
                     type: "array",
                     of: [{ type: "block" }],
                  },
               ],
            },
         ],
      },
   ],
};

export default aboutPage;
