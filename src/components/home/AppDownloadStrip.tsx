import React from "react";
import { Smartphone, QrCode, Star, BellRing } from "lucide-react";

export function AppDownloadStrip() {
  return (
    <section className="py-12 bg-tint/80 border-t border-border/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-6 sm:p-8 rounded-2xl bg-white border border-border shadow-sm">
          {/* Left Blurb */}
          <div className="flex items-center gap-5 max-w-xl">
            <div className="hidden sm:flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shrink-0 shadow-md">
              <Smartphone className="h-8 w-8" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-1">
                <BellRing className="h-3.5 w-3.5" />
                <span>UrbanNest Mobile Experience</span>
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-ink tracking-tight">
                Get Instant Property Alerts on the UrbanNest App
              </h3>
              <p className="text-xs sm:text-sm text-muted mt-1 leading-relaxed">
                Receive instant notifications when new verified homes or price
                drops hit your favorite localities.
              </p>
            </div>
          </div>

          {/* Right Store Badges & QR Code */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 justify-center">
            {/* QR Mock */}
            <div className="hidden md:flex items-center gap-3 p-2.5 rounded-xl border border-border bg-tint/40">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white border border-border text-ink">
                <QrCode className="h-8 w-8 text-primary" />
              </div>
              <div className="text-left text-[11px] leading-tight">
                <span className="font-bold text-ink block">Scan QR Code</span>
                <span className="text-muted">to download app</span>
              </div>
            </div>

            {/* App Store Buttons */}
            <div className="flex items-center gap-3">
              {/* Apple App Store Badge Placeholder */}
              <a
                href="#"
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-ink text-white hover:bg-ink/90 transition-all shadow-sm group"
                aria-label="Download on App Store"
              >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.64 1.35-.58.65-1.09 1.72-.95 2.73 1 .08 2.04-.48 2.66-1.23z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wider text-white/70 leading-none">
                    Download on the
                  </div>
                  <div className="text-xs font-bold leading-none mt-1">
                    App Store
                  </div>
                </div>
              </a>

              {/* Google Play Store Badge Placeholder */}
              <a
                href="#"
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-ink text-white hover:bg-ink/90 transition-all shadow-sm group"
                aria-label="Get it on Google Play"
              >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.793 12 3.61 22.186c-.37-.36-.61-.87-.61-1.45V3.264c0-.58.24-1.09.609-1.45zm11.258 11.258l2.25 2.25-11.454 6.55 9.204-8.8zm0-2.144L5.663 2.126l11.454 6.55-2.25 2.25zM18.736 12l2.368 1.353c.616.353.616.924 0 1.277L18.736 16l-2.025-2 2.025-2z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wider text-white/70 leading-none">
                    GET IT ON
                  </div>
                  <div className="text-xs font-bold leading-none mt-1">
                    Google Play
                  </div>
                </div>
              </a>
            </div>

            {/* App rating */}
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-muted pl-2">
              <div className="flex items-center text-accent">
                <Star className="h-4 w-4 fill-accent" />
              </div>
              <span className="font-bold text-ink">4.8 / 5</span>
              <span>(50k+ reviews)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
