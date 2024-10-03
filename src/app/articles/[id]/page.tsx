"use client";

import Article from "@/components/Article";
import { ArticleType } from "@/types/articles.types";
import { articlesArray } from "@/utils/articles";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ArticlePage() {
  const [article, setArticle] = useState<ArticleType | undefined>(undefined);
  const { id } = useParams();

  useEffect(() => {
    const articleFind = articlesArray.find((x) => x.id === id);

    setArticle(articleFind);
  }, []);

  if (article) {
    return (
      <div>
        <Article article={article} />
      </div>
    );
  } else {
    return <>Loading...</>;
  }
}
