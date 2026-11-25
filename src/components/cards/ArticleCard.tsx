import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar } from "lucide-react";
import { Article } from "@/types/content";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ArticleCardProps {
  article: Article;
  className?: string;
}

export function ArticleCard({ article, className }: ArticleCardProps) {
  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover",
        className
      )}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-tint">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-white/95 text-primary backdrop-blur-sm shadow-sm font-semibold">
            {article.category}
          </Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3 text-xs text-muted mb-2.5">
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {article.date}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {article.readTime}
          </span>
        </div>

        <h3 className="font-heading text-lg font-bold text-ink line-clamp-2 mb-2 group-hover:text-primary transition-colors">
          <Link href={`#article-${article.slug}`}>
            {article.title}
          </Link>
        </h3>

        <p className="text-sm text-muted line-clamp-2 mb-4">
          {article.excerpt}
        </p>

        <div className="mt-auto pt-3 border-t border-border flex items-center justify-between text-xs">
          <span className="text-muted">By <strong className="text-ink font-medium">{article.author.name}</strong></span>
          <span className="text-primary font-semibold group-hover:underline">Read article →</span>
        </div>
      </div>
    </article>
  );
}

