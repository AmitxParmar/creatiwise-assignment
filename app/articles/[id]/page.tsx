import React from "react";
import { dummyArticles } from "@/types";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

const ArticlePage = ({ params }: Props) => {
  const article = dummyArticles.find((article) => article.id === params.id);

  if (!article) {
    notFound();
  }

  return (
    <div className="container mx-auto py-8">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
        <div className="flex gap-4 text-sm text-muted-foreground mb-6">
          <span>Keyword: {article.keyword}</span>
          <span>•</span>
          <span>{article.words.toLocaleString()} words</span>
          <span>•</span>
          <span>Created: {article.createdOn}</span>
          <span>•</span>
          <span className="capitalize">{article.status}</span>
        </div>
        <div className="prose prose-lg max-w-none">
          <p>{article.content}</p>
        </div>
      </article>
    </div>
  );
};

export default ArticlePage;
