"use client";

import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import mockArticles from "@/mocks/articles.json";

interface ArticleDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const resolvedParams = use(params);

  const article =
    mockArticles.find((a) => a.id.toLowerCase() === resolvedParams.slug.toLowerCase()) ||
    mockArticles[0];

  return (
    <div className="min-h-screen bg-slate-50/60 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-slate-200/80 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-primary transition-colors">
              Articles
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold truncate">{article.title}</span>
          </div>

          <Badge variant="secondary" className="mb-3 text-primary font-semibold text-xs">
            {article.category}
          </Badge>

          <h1 className="text-2xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100 text-xs text-slate-500">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {article.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {article.readTime}
              </span>
            </div>

            <Button asChild variant="outline" size="sm" className="gap-2">
              <Link href="/articles">
                <ArrowLeft className="h-4 w-4" />
                <span>All Articles</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 max-w-4xl">
        <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-100">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="prose max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
            <p className="text-lg font-medium text-slate-900">
              {article.excerpt}
            </p>

            <p>
              As India’s real estate ecosystem matures under stringent RERA oversight, buyers and investors are prioritizing planned infrastructure, institutional title verification, and sustainable living enclaves over speculative gains.
            </p>

            <h3 className="font-heading font-extrabold text-xl text-slate-900 pt-4">
              Key Insights for Buyers & Investors
            </h3>

            <p>
              Leading real estate research agencies note that Grade-A developer projects in Delhi NCR, Mumbai, and Bengaluru have appreciated between 18% to 28% year-over-year. Proximity to upcoming metro stations, high-speed arterial expressways, and operational corporate parks continues to dictate capital value spikes.
            </p>

            <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200 text-slate-800 text-xs sm:text-sm my-6">
              <p className="font-bold text-primary mb-1">Expert Financial Takeaway:</p>
              <p>
                Ensure your builder maintains a dedicated escrow bank account for project construction inflows. Always verify the active registration number on the respective state RERA portal before executing booking advances.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

