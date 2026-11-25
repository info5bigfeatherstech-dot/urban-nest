import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20">
      <div className="h-16 w-16 rounded-2xl bg-blue-50 text-primary flex items-center justify-center mb-4 shadow-sm">
        <Home className="h-8 w-8" />
      </div>
      <span className="text-xs font-extrabold uppercase tracking-widest text-primary mb-1">
        404 - Page Not Found
      </span>
      <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900 tracking-tight mb-3">
        Looking for a home that moved?
      </h1>
      <p className="text-sm text-slate-600 max-w-md mx-auto mb-8">
        The page or property listing you are searching for might have been sold, rented out, or the link has changed.
      </p>
      <Button asChild className="bg-primary hover:bg-primary-hover text-white font-bold text-xs h-10 px-6 gap-2">
        <Link href="/">
          <ArrowLeft className="h-4 w-4" />
          <span>Return to Homepage</span>
        </Link>
      </Button>
    </div>
  );
}

