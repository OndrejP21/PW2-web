"use client";

import Article from "@/components/Article";
import { ArticleType } from "@/types/articles.types";
import { useEffect, useState } from "react";

export default function ArticlesScreen() {
  const [loading, setLoading] = useState<boolean>(false);
  const [articles, setArticles] = useState<Array<ArticleType>>([]);

  // Stažení dat po načtení stránky
  useEffect(() => {
    setLoading(true);

    const articlesArray: Array<ArticleType> = [
      {
        title: "Začínáme s TypeScript: Proč přejít na statické typování?",
        content:
          "TypeScript je nadstavba JavaScriptu, která přidává statické typování. Statické typy pomáhají vývojářům psát bezpečnější a snadněji udržovatelný kód tím, že umožňují kontrolu typů už při psaní, nikoli až za běhu aplikace. V tomto článku se podíváme, jak začít s TypeScriptem a jak nám může pomoci v každodenním vývoji.",
        img: "/images/typescript-intro.jpg",
      },
      {
        title: "Moderní vývoj s Next.js: Optimalizace výkonu a SEO",
        content:
          "Next.js je populární framework postavený na Reactu, který usnadňuje server-side rendering, statické generování stránek a optimalizaci SEO. Díky těmto funkcím umožňuje vytvářet vysoce výkonné webové aplikace. Tento článek prozkoumává základní koncepty Next.js a jak maximalizovat výkon pomocí optimalizace obrázků, lazy-loading a pre-fetchování.",
        img: "/images/nextjs-performance.jpg",
      },
      {
        title: "Jak správně strukturovat projekt s Reactem a TypeScriptem?",
        content:
          "Strukturování projektu je klíčové pro jeho dlouhodobou udržovatelnost. V tomto článku si ukážeme, jak nastavit strukturu pro větší aplikace v Reactu s využitím TypeScriptu. Zaměříme se na správné používání komponent, rozdělení souborů a využití rozhraní pro lepší čitelnost a predikovatelnost kódu.",
        img: "/images/react-structure.jpg",
      },
      {
        title: "Node.js a Express: Tvorba REST API s TypeScriptem",
        content:
          "Node.js je známý pro svou asynchronní architekturu a je skvělý pro tvorbu backendů. Express.js je minimalistický framework pro Node.js, který je ideální pro vývoj REST API. V tomto článku si ukážeme, jak vytvořit jednoduché REST API s Express.js a TypeScriptem, včetně konfigurace, routingu a správy požadavků a odpovědí.",
        img: "/images/node-express.jpg",
      },
      {
        title: "Automatizované testování v TypeScriptu: Jest a Testing Library",
        content:
          "Testování je důležitou součástí každého projektu. Automatizované testy zajišťují, že kód funguje tak, jak očekáváme. V tomto článku se podíváme na to, jak používat Jest a Testing Library k testování TypeScriptových projektů. Naučíme se psát unit testy a testy pro React komponenty, a jak začít s TDD (test-driven development).",
        img: "/images/testing-ts.jpg",
      },
    ];

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
