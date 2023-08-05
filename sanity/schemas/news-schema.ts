const news = {
   name: "news",
   title: "news",
   type: "document",
   fields: [
      {
         name: "title",
         title: "Title",
         type: "string",
      },
      {
         name: "slug",
         title: "Slug",
         type: "slug",
         options: { source: "title" },
      },
      {
         name: "description",
         title: "Description",
         type: "string",
      },
      {
         name: "image",
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
         name: "content",
         title: "Content",
         type: "array",
         of: [{ type: "block" }],
      },
   ],
};

export default news;
