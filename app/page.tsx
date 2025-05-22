"use client";

import ArticlesSection from "@/components/dashboard/ArticlesSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 md:gap-8">
      <ArticlesSection />
    </div>
  );
}
