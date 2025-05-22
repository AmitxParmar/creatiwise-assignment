"use client";
import { SidebarProvider, useSidebar } from "@/components/ui/sidebar";
import AppSidebar from "./AppSidebar";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

// This new component will render the actual layout and can safely use the sidebar context
const AppLayoutContent = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useIsMobile();
  const { toggleSidebar } = useSidebar();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen container xl:max-w-full flex w-full bg-muted/40">
      <AppSidebar />
      <main className="flex-1 flex flex-col">
        {isMobile && (
          <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 py-4">
            <Button
              variant="outline"
              size="icon"
              className="sm:hidden"
              onClick={toggleSidebar}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
            {/* Add any header content here, like breadcrumbs or user menu */}
          </header>
        )}
        <div className="flex-1 max-w-screen lg:max-w-full sm:px-1 sm:py-0 lg:py-6 md:gap-8 overflow-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppLayoutContent>{children}</AppLayoutContent>
    </SidebarProvider>
  );
}
