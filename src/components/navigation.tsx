"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About PI", href: "/about" },
  { name: "People", href: "/people" },
  { name: "Publications", href: "/publications" },
  { name: "News", href: "/news" },
  { name: "Software", href: "/software" },
  { name: "Openings", href: "/openings" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <>
      {/* Top Purple Banner with Tsinghua Logo */}
      <div className="bg-primary">
        <div className="container mx-auto flex h-6 sm:h-8 items-center px-4 sm:px-6 md:px-8">
          <div className="relative h-full w-24 sm:w-32">
            <Image
              src="/slider1-1.png"
              alt="Tsinghua University"
              fill
              className="object-contain"
              style={{ objectPosition: "left" }}
              priority
              sizes="(max-width: 640px) 96px, 128px"
            />
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 sm:h-16 items-center px-4 sm:px-6 md:px-8">
          <div className="hidden md:flex flex-1 items-center">
            <Link href="/" className="flex items-center space-x-2 lg:space-x-3">
              <div className="relative h-7 lg:h-8 w-16 lg:w-20 flex-shrink-0">
                <Image
                  src="/slider1-2.png"
                  alt="University"
                  fill
                  className="object-contain"
                  style={{ objectPosition: "left" }}
                  sizes="80px"
                />
              </div>
              <div className="h-8 lg:h-10 w-px bg-primary"></div>
              <span className="font-bold text-primary text-lg lg:text-xl whitespace-nowrap">
                Wang Lab
              </span>
            </Link>
            <nav className="ml-4 lg:ml-6 flex items-center space-x-3 lg:space-x-6 text-base lg:text-lg font-medium">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "transition-colors hover:text-primary/80 whitespace-nowrap",
                    pathname === item.href ? "text-primary" : "text-primary/60"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Mobile Navigation */}
          <div className="flex flex-1 items-center justify-between space-x-2 md:hidden">
            <Link href="/" className="flex flex-1 items-center space-x-2 min-w-0">
              <div className="relative h-6 w-20 flex-shrink-0">
                <Image
                  src="/slider1-2.png"
                  alt="University"
                  fill
                  className="object-contain"
                  style={{ objectPosition: "left" }}
                  sizes="80px"
                />
              </div>
              <div className="h-6 w-px bg-primary flex-shrink-0"></div>
              <span className="font-bold text-primary text-sm truncate">Wang Lab</span>
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm">Menu</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[200px] gap-3 p-4">
                      {navigationItems.map((item) => (
                        <NavigationMenuLink key={item.href} asChild>
                          <Link
                            href={item.href}
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                              pathname === item.href ? "bg-accent" : ""
                            )}
                          >
                            <div className="text-sm font-medium leading-none">
                              {item.name}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </header>
    </>
  );
}
