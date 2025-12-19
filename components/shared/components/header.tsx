"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // <-- Add this
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X } from "lucide-react";
import Image from "next/image";
import { Separator } from "@radix-ui/react-separator";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Cars", href: "/cars" },
  { label: "Orders", href: "/orders" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Check", href: "/check" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm bg-white">
      <nav className="container mx-auto max-w-6xl flex items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="JCARMALL Logo"
            width={48}
            height={48}
            className="object-contain"
          />
          <span className="text-2xl font-bold ">JCARMALL</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 ${
                isActive(item.href)
                  ? "bg-primary/30 shadow-sm"
                  : "text-foreground/70 hover:bg-primary/10 hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Shopping cart</span>
          </Button>
          <Button className="bg-primary  hover:bg-primary/90">Sign In</Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </nav>

      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 top-16 bg-black/30 backdrop-blur-sm md:hidden z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div className="fixed  top-4 w-fit right-3  bg-white  rounded-md shadow-xl border-t md:hidden z-50">
            <Link
              href="/"
              className="gap-3 flex items-center justify-center  p-3"
            >
              <Image
                src="/logo.png"
                alt="JCARMALL Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </Link>

            <Separator className="h-0.5 bg-primary/20 my-3" />

            <div className="flex flex-col space-y-1  p-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`rounded-md px-4 py-2 text-center text-base font-medium transition-colors w-50 ${
                    isActive(item.href)
                      ? "bg-primary/30 shadow-sm"
                      : "text-foreground/70 hover:bg-primary/10 hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <button
              className="absolute top-3 right-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X />
            </button>
          </div>
        </>
      )}
    </header>
  );
}
