"use client";

import Article from "@/components/Article";
import { ArticleType } from "@/types/articles.types";
import { articlesArray } from "@/utils/articles";
import { useEffect, useState } from "react";

export default function ArticlesScreen() {
  const [loading, setLoading] = useState<boolean>(false);
  const [articles, setArticles] = useState<Array<ArticleType>>([]);

  // Stažení dat po načtení stránky
  useEffect(() => {
    setLoading(true);

    setArticles(articlesArray);
    setLoading(false);
  }, []);

  return loading ? (
    <>Loading....</>
  ) : (
    <div>
      <h1>Články</h1>

      <main>
        <section>
          <h2>Soupis článků</h2>

          <div className="flex justify-between gap-10 flex-wrap">
            {articles.map((article, index) => (
              <Article key={index} article={article} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
