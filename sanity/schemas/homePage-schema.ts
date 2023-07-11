const homePage = {
   name: "homePage",
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
               name: "heroDesc",
               title: "Description",
               type: "array",
               of: [{ type: "block" }],
            },
            {
               name: "heroCTA1",
               title: "Button 1",
               type: "document",
               fields: [
                  {
                     name: "heroBtn1Visible",
                     title: "Is Visible?",
                     type: "boolean",
                     initialValue: false,
                  },
                  {
                     name: "heroBtn1Type",
                     title: "Button Type",
                     type: "string",
                     options: {
                        list: [
                           {
                              title: "Primary",
                              value: "primary",
                           },
                           {
                              title: "Secondary",
                              value: "secondary",
                           },
                        ],
                     },
                  },
                  {
                     name: "heroBtn1Text",
                     title: "Button Text",
                     type: "string",
                  },
                  {
                     name: "heroBtn1Icon",
                     title: "Icon",
                     type: "string",
                  },
                  {
                     name: "heroBtn1Slug",
                     title: "Slug",
                     type: "string",
                  },
               ],
            },
            {
               name: "heroCTA2",
               title: "Button 2",
               type: "document",
               fields: [
                  {
                     name: "heroBtn2Visible",
                     title: "Is Visible?",
                     type: "boolean",
                     initialValue: false,
                  },
                  {
                     name: "heroBtn2Type",
                     title: "Button Type",
                     type: "string",
                     options: {
                        list: [
                           {
                              title: "Primary",
                              value: "primary",
                           },
                           {
                              title: "Secondary",
                              value: "secondary",
                           },
                        ],
                     },
                  },
                  {
                     name: "heroBtn2Text",
                     title: "Button Text",
                     type: "string",
                  },
                  {
                     name: "heroBtn2Icon",
                     title: "Icon",
                     type: "string",
                  },
                  {
                     name: "heroBtn2Slug",
                     title: "Slug",
                     type: "string",
                  },
               ],
            },

            // Slider
            {
               name: "heroCompanyIconsTitle",
               title: "Company Icons Title",
               type: "string",
            },
            {
               name: "heroCompanyImages",
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
};

export default homePage;
