import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function TableSkeleton() {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">
              <Skeleton className="h-5 w-5" />
            </TableHead>
            <TableHead>
              <Skeleton className="h-5 w-3/4" />
            </TableHead>
            <TableHead>
              <Skeleton className="h-5 w-1/2" />
            </TableHead>
            <TableHead className="text-right">
              <Skeleton className="h-5 w-1/4 ml-auto" />
            </TableHead>
            <TableHead>
              <Skeleton className="h-5 w-1/2" />
            </TableHead>
            <TableHead>
              <Skeleton className="h-5 w-16" />
            </TableHead>
            <TableHead>
              <Skeleton className="h-5 w-10" />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 5 }).map((_, index) => (
            <TableRow key={index}>
              <TableCell>
                <Skeleton className="h-5 w-5" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-5 w-full" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-5 w-3/4" />
              </TableCell>
              <TableCell className="text-right">
                <Skeleton className="h-5 w-1/2 ml-auto" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-5 w-3/4" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-8 w-16" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-8 w-10" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex items-center justify-between pt-4 border-t mt-4">
        <Skeleton className="h-5 w-1/4" />
        <div className="flex items-center gap-4">
          <Skeleton className="h-8 w-24" />
          <Skeleton className="h-8 w-32" />
        </div>
      </div>
    </div>
  );
}
