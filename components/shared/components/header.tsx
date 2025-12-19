"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, X } from "lucide-react";
import Image from "next/image";

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

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 ">
      <nav className="container mx-auto max-w-6xl flex items-center justify-between px-4 py-4 ">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="JCARMALL Logo" width={64} height={64} />
          <span className="text-xl font-bold ">JCARMALL</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-accent hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Shopping cart</span>
          </Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Signin
          </Button>
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
            className="fixed inset-0 top-16 bg-black/20 backdrop-blur-sm md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div className="fixed right-0 top-16 w-full max-w-sm animate-in slide-in-from-right bg-background shadow-lg md:hidden">
            <div className="flex flex-col space-y-1 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-4 py-3 text-sm font-medium text-foreground hover:bg-accent"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <div className="my-2 h-px bg-border" />

              <div className="flex items-center justify-between px-4 py-3">
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="sr-only">Shopping cart</span>
                </Button>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Signin
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
