"use client";

import React from "react";
import Link from "next/link";
import { Newspaper, ArrowLeft } from "lucide-react";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { Button } from "@/components/ui/button";
import { Article } from "@/types/content";
import mockArticles from "@/mocks/articles.json";

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-slate-50/60 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-slate-200/80 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Articles & Market News</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold mb-2">
                <Newspaper className="h-4 w-4" />
                <span>Editorial Desk</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
                Real Estate Insights & News
              </h1>
              <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                In-depth policy breakdowns, repo rate updates, home buying checklists, and emerging infrastructure corridor analyses.
              </p>
            </div>

            <Button asChild variant="outline" size="sm" className="gap-2 shrink-0">
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(mockArticles as Article[]).map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}

