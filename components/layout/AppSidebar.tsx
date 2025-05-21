"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import {
  Newspaper,
  Settings,
  BarChart3,
  Users,
  HelpCircle,
  LifeBuoy,
  Briefcase,
  LayoutGrid,
  Link2,
  Star,
  DollarSign,
  MessageSquare,
  UserCircle,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const mainNavItems = [
  {
    title: "Articles",
    href: "/articles",
    icon: Newspaper,
    subItems: [
      { title: "Create Article", href: "/articles/create" },
      { title: "Generated Articles", href: "/articles/generated" },
      { title: "Keyword Projects", href: "/articles/keywords" },
    ],
  },
  { title: "Auto Blog", href: "/autoblog", icon: Briefcase },
  { title: "Internal Links", href: "/internal-links", icon: Link2 },
  { title: "Free Backlinks", href: "/free-backlinks", icon: Star },
  { title: "Integrations", href: "/integrations", icon: LayoutGrid },
  { title: "Subscription", href: "/subscription", icon: DollarSign },
];

const secondaryNavItems = [
  { title: "Affiliate Program", href: "/affiliate", icon: Users },
  { title: "Help Center", href: "/help", icon: HelpCircle },
  { title: "Updates", href: "/updates", icon: BarChart3 },
  { title: "Live Chat Support", href: "/support", icon: MessageSquare },
  { title: "Profile", href: "/profile", icon: UserCircle },
];

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-lg">abun</span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full justify-between mt-4">
              amazon.com
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Select Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>example.com</DropdownMenuItem>
            <DropdownMenuItem>another.com</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarHeader>
      <SidebarContent className="flex-grow">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className={pathname.startsWith(item.href) ? "bg-accent" : ""}
                >
                  <SidebarMenuButton asChild>
                    <Link href={item.href}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                      {item.subItems && (
                        <ChevronDown className="ml-auto h-4 w-4" />
                      )}
                    </Link>
                  </SidebarMenuButton>
                  {item.subItems && (
                    <SidebarGroupContent className="ml-4">
                      <SidebarMenu>
                        {item.subItems.map((subItem) => (
                          <SidebarMenuItem
                            key={subItem.title}
                            className={
                              pathname === subItem.href ? "text-primary" : ""
                            }
                          >
                            <SidebarMenuButton asChild>
                              <Link href={subItem.href}>
                                <span className="pl-2">{subItem.title}</span>
                              </Link>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))}
                      </SidebarMenu>
                    </SidebarGroupContent>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup className="mt-auto">
          {" "}
          {/* Push secondary items down */}
          <SidebarGroupContent>
            <SidebarMenu>
              {secondaryNavItems.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className={pathname.startsWith(item.href) ? "bg-accent" : ""}
                >
                  <SidebarMenuButton asChild>
                    <Link href={item.href}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4 border-t">
        <Button variant="outline" className="w-full">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
