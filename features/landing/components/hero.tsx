"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ChevronRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-background to-muted/20">
      <div className="absolute -bottom-[80vw] size-[100vw] rounded-full bg-jcar-secondary opacity-10 w-full inset-x-0" />

      <div className="container relative mx-auto px-4 pb-0 pt-12 md:pt-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-block px-4 py-2 bg-jcar-secondary/15 border border-border rounded-full mb-6 brightness-75">
            <p className="text-sm font-semibold text-jcar-secondary ">
              Premium Imported Vehicles
            </p>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold tracking-tight text-balance mb-6 text-foreground">
            <span className="text-primary brightness-25">J Car Mall</span>,
            Premium car imports
          </h1>

          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto mb-8 leading-relaxed">
            Your premier destination for curated luxury vehicles in Addis Ababa.
            Experience exceptional quality and service.
          </p>

          <form
            onSubmit={handleSearch}
            className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center"
          >
            <div className="flex sm:max-w-md">
              <Input
                type="text"
                placeholder="Search any cars..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-10 pr-20  shadow-sm  rounded-bl-sm rounded-tl-sm rounded-tr-none rounded-br-none text-xs bg-jcar-input-bg!"
              />
              <Button
                type="submit"
                size="sm"
                className="h-10 rounded-bl-none rounded-tl-none rounded-tr-sm rounded-br-sm text-xs"
                disabled={!searchQuery.trim()}
              >
                <Search className=" h-4 w-4" />
                Search
              </Button>
            </div>
          </form>

          <Button size="lg">
            Explore Collection
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <Image
            src="/hero-mercedes.png"
            alt="Luxury black sedan - Premium imported vehicle"
            className="relative z-10  h-auto w-full object-contain"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
}
