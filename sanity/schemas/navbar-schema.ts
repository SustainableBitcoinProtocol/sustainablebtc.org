const navbar = {
   name: "navbar",
   title: "Navbar",
   type: "document",
   fields: [
      {
         name: "name",
         title: "Display Name",
         type: "string",
      },
      {
         name: "slug",
         title: "Slug",
         type: "slug",
         options: { source: "display" },
      },
   ],
};

export default navbar;
