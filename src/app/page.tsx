import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { ExplorePropertyTypes } from "@/components/home/ExplorePropertyTypes";
import { PopularCitiesSection } from "@/components/home/PopularCitiesSection";
import { ReadyToMoveSection } from "@/components/home/ReadyToMoveSection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO with floating SearchCard */}
      <HeroSection />

      {/* 2. EXPLORE BY PROPERTY TYPE */}
      <ExplorePropertyTypes />

      {/* 3. POPULAR CITIES */}
      <PopularCitiesSection />

      {/* 4. READY TO MOVE PROPERTIES CAROUSEL */}
      <ReadyToMoveSection />
    </div>
  );
}
