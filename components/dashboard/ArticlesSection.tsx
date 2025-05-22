import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { ArticlesTable } from "./ArticlesTable";
import { TableSkeleton } from "./TableSkeleton";
import { dummyArticles, Article } from "@/types";
import { Search } from "lucide-react";

const ArticlesSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<Article["status"]>("generated");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Simulate loading
    return () => clearTimeout(timer);
  }, []);

  const filteredArticles = dummyArticles.filter(
    (article) =>
      article.status === activeTab &&
      (article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.keyword.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="w-screen lg:w-full px-4 sm:px-2 lg:px-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-xl sm:text-2xl font-semibold">Articles</h1>
        <div className="relative w-full sm:w-auto sm:max-w-xs">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search for Title & Keywords..."
            className="pl-8 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <Tabs
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as Article["status"])}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-4 overflow-x-auto">
          <TabsTrigger value="generated" className="whitespace-nowrap">
            Generated
          </TabsTrigger>
          <TabsTrigger value="published" className="whitespace-nowrap">
            Published
          </TabsTrigger>
          <TabsTrigger value="scheduled" className="whitespace-nowrap">
            Scheduled
          </TabsTrigger>
          <TabsTrigger value="archived" className="whitespace-nowrap">
            Archived
          </TabsTrigger>
        </TabsList>
        <div className="overflow-x-auto">
          {isLoading ? (
            <TableSkeleton />
          ) : (
            <>
              <TabsContent value="generated">
                <ArticlesTable articles={filteredArticles} />
              </TabsContent>
              <TabsContent value="published">
                <ArticlesTable articles={filteredArticles} />
              </TabsContent>
              <TabsContent value="scheduled">
                <ArticlesTable articles={filteredArticles} />
              </TabsContent>
              <TabsContent value="archived">
                <ArticlesTable articles={filteredArticles} />
              </TabsContent>
            </>
          )}
        </div>
      </Tabs>
    </div>
  );
};

export default ArticlesSection;
