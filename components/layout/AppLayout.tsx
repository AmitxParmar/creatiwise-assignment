"use client";

import { SidebarProvider, useSidebar } from "@/components/ui/sidebar";
import AppSidebar from "./AppSidebar";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

// This new component will render the actual layout and can safely use the sidebar context
const AppLayoutContent = ({ children }: { children: React.ReactNode }) => {
  const { toggleSidebar } = useSidebar();

  return (
    <div className="min-h-screen flex w-full bg-muted/40">
      <AppSidebar />
      <main className="flex-1 flex flex-col">
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
        <div className="flex-1 p-4 sm:px-6 sm:py-0 md:gap-8 overflow-auto">
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
