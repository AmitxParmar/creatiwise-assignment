import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MoreVertical, ArrowUpDown, Globe } from "lucide-react";
import { Article } from "@/types";
import { useIsMobile } from "./../../hooks/use-mobile";

interface ArticlesTableProps {
  articles: Article[];
}

export function ArticlesTable({ articles }: ArticlesTableProps) {
  const isMobile = useIsMobile();
  const [selectedArticles, setSelectedArticles] = useState<Set<string>>(
    new Set()
  );
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSelectAll = (checked: boolean | "indeterminate") => {
    if (checked === true) {
      setSelectedArticles(new Set(articles.map((article) => article.id)));
    } else {
      setSelectedArticles(new Set());
    }
  };

  const handleSelectRow = (
    articleId: string,
    checked: boolean | "indeterminate"
  ) => {
    const newSelectedArticles = new Set(selectedArticles);
    if (checked === true) {
      newSelectedArticles.add(articleId);
    } else {
      newSelectedArticles.delete(articleId);
    }
    setSelectedArticles(newSelectedArticles);
  };

  const totalPages = Math.ceil(articles.length / itemsPerPage);
  const paginatedArticles = articles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="rounded-lg h-[calc(100vh-17rem)] overflow-x-hidden border bg-card text-card-foreground shadow-sm">
      <div className="p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
                <Checkbox
                  checked={
                    selectedArticles.size === articles.length &&
                    articles.length > 0
                      ? true
                      : selectedArticles.size > 0
                      ? "indeterminate"
                      : false
                  }
                  onCheckedChange={handleSelectAll}
                />
              </TableHead>
              <TableHead>
                <Button variant="ghost" size="sm">
                  Article Title <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              {!isMobile ? (
                <>
                  <TableHead className="">
                    <Button variant="ghost" size="sm">
                      Keyword [Traffic] <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead className="">
                    <Button variant="ghost" size="sm">
                      Words <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                </>
              ) : null}
              <TableHead className="hidden sm:table-cell">
                <Button variant="ghost" size="sm">
                  Created On <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Publish</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedArticles.length > 0 ? (
              paginatedArticles.map((article) => (
                <TableRow key={article.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedArticles.has(article.id)}
                      onCheckedChange={(checked) =>
                        handleSelectRow(article.id, checked)
                      }
                    />
                  </TableCell>
                  <TableCell className="font-medium">{article.title}</TableCell>
                  {!isMobile ? (
                    <>
                      <TableCell>
                        {article.keyword} [{article.traffic.toLocaleString()}]
                      </TableCell>
                      <TableCell>{article.words.toLocaleString()}</TableCell>
                    </>
                  ) : null}
                  <TableCell>{article.createdOn}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <Globe className="h-5 w-5 mr-1 text-blue-500" />{" "}
                          {/* Placeholder for WordPress icon */}
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Publish Now</DropdownMenuItem>
                        <DropdownMenuItem>Schedule</DropdownMenuItem>
                        <DropdownMenuItem>Save as Draft</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="h-24 text-center">
                  No articles found for this category.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex flex-col gap-4 p-4 border-t">
        <div className="text-sm text-muted-foreground">
          Total {articles.length} Article Titles
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Show</span>
            <Select
              value={itemsPerPage.toString()}
              onValueChange={(value) => {
                setItemsPerPage(Number(value));
                setCurrentPage(1);
              }}
            >
              <SelectTrigger className="w-[70px]">
                <SelectValue placeholder={itemsPerPage} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="50">50</SelectItem>
              </SelectContent>
            </Select>
            <span className="text-sm text-muted-foreground">
              entries per page
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
