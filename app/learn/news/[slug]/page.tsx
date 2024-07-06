import ArticlePage from "@/components/News/ArticlePage";

type Props = {
   params: {
      slug: string;
   };
};

const page = ({ params: { slug } }: Props) => {
   return <ArticlePage slug={slug} />;
};

export default page;
