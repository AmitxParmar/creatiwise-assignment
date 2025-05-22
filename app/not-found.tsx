import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-full text-center">
      <h1 className="text-4xl font-bold mb-2">404</h1>
      <p className="text-muted-foreground mb-4">Article not found</p>
      <Link
        href="/"
        className="text-primary flex items-center justify-center text-2xl hover:underline"
      >
        <Home className="w-7 h-7 mr-1" />
        <span className="align-middle">Return to Home</span>
      </Link>
    </div>
  );
}
