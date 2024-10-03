import { ArticleType } from "@/types/articles.types";

/** Komponenta pro zobrazení článku */
export default function Article({ article }: { article: ArticleType }) {
  return (
    <div className="w-[600px] border-2 border-gray-500">
      <h3 className="text-xl">{article.title}</h3>
      <p className="w-[50ch] text-justify">{article.title}</p>
    </div>
  );
}
