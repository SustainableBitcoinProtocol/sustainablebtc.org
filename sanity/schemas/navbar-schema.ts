// Navbar Item Fiels
const navbarItemFields = [
   {
      name: "name",
      title: "Name",
      type: "string",
   },
   {
      name: "slug",
      title: "Slug",
      type: "string",
   },
   {
      name: "isButton",
      title: "Is Button?",
      type: "boolean",
      initialValue: false,
   },
   {
      name: "iconName",
      title: "Icon Name",
      type: "string",
   },
];

// Navbar Schema
const navbar = {
   name: "navbar",
   title: "Navbar",
   type: "document",
   fields: [
      {
         name: "componentTitle",
         title: "Component Title",
         type: "string",
      },
      {
         name: "primaryNavigation",
         title: "Primary Navigation",
         type: "array",
         of: [
            {
               type: "document",
               fields: navbarItemFields,
            },
         ],
      },
      {
         name: "secondaryNavigation",
         title: "Secondary Navigation",
         type: "array",
         of: [
            {
               type: "document",
               fields: navbarItemFields,
            },
         ],
      },
      {
         name: "statistics",
         title: "Statistics",
         type: "array",
         of: [
            {
               type: "document",
               fields: [
                  {
                     name: "statName",
                     title: "Statistics Name",
                     type: "string",
                  },
                  {
                     name: "statImage",
                     title: "Statistics Image",
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
                     name: "statValue",
                     title: "Statistics Value",
                     type: "number",
                  },
                  {
                     name: "statChangedBy",
                     title: "Statistics Changed By",
                     type: "number",
                  },
               ],
            },
         ],
      },
   ],
};

export default navbar;
