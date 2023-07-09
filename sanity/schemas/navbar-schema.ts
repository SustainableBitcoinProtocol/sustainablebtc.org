const navbar = {
   name: "navbar",
   title: "Navbar",
   type: "document",
   fields: [
      {
         name: "name",
         title: "Name",
         type: "string",
      },
      {
         name: "slug",
         title: "Slug",
         type: "slug",
         options: { source: "name" },
      },
      {
         name: "isSecondary",
         title: "Is Secondary?",
         type: "boolean",
         initialValue: false,
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
   ],
};

export default navbar;
