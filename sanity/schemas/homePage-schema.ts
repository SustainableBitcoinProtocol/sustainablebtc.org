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
      // SBC
      {
         name: "sbc",
         title: "About SBC",
         type: "document",
         fields: [
            {
               name: "sbcHeading",
               title: "SBC Heading",
               type: "string",
            },
            {
               name: "sbcSubHeading",
               title: "SBC Sub Heading",
               type: "string",
            },
            {
               name: "sbcFeatures",
               title: "SBC Features",
               type: "array",
               of: [{ type: "string" }],
            },
            {
               name: "sbcDescription",
               title: "SBC Description",
               type: "array",
               of: [{ type: "block" }],
            },
            {
               name: "sbcBtn1",
               title: "Button 1",
               type: "document",
               fields: [
                  {
                     name: "sbcBtn1Visible",
                     title: "Is Visible?",
                     type: "boolean",
                     initialValue: false,
                  },
                  {
                     name: "sbcBtn1Type",
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
                     name: "sbcBtn1Text",
                     title: "Button Text",
                     type: "string",
                  },
                  {
                     name: "sbcBtn1Icon",
                     title: "Icon",
                     type: "string",
                  },
                  {
                     name: "sbcBtn1Slug",
                     title: "Slug",
                     type: "string",
                  },
               ],
            },
         ],
      },
      // Testimonials
      {
         name: "testimonials",
         title: "Testimonials",
         type: "document",
         fields: [
            {
               name: "testimonialTitle",
               title: "Testimonial Title",
               type: "string",
            },
            {
               name: "testimonialItems",
               title: "Testimonial Items",
               type: "array",
               of: [
                  {
                     type: "document",
                     fields: [
                        {
                           name: "testimonyName",
                           title: "Testimony Name",
                           type: "string",
                        },
                        {
                           name: "testimonyCompany",
                           title: "Testimoniy's Company",
                           type: "string",
                        },
                        {
                           name: "testimony",
                           title: "Testimony",
                           type: "string",
                        },
                        {
                           name: "testimonyImage",
                           title: "Testimony's Image",
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
                           name: "testimonyCompanyLogo",
                           title: "Testimony's Company Logo",
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
                     ],
                  },
               ],
            },
         ],
      },
   ],
};

export default homePage;
