"use client";
import React, { useState, useEffect } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        setTheme("dark");
        document.documentElement.classList.add("dark");
        document.documentElement.style.backgroundColor = "hsl(215, 50%, 10%)";
      } else {
        setTheme("light");
        document.documentElement.classList.remove("dark");
        document.documentElement.style.backgroundColor = "hsl(210, 50%, 98%)";
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.theme = newTheme;
    document.documentElement.classList.toggle("dark");
    document.documentElement.style.backgroundColor =
      newTheme === "dark" ? "hsl(215, 50%, 10%)" : "hsl(210, 50%, 98%)";
  };

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/" className="flex items-center space-x-2 px-4">
          <Image
            src={theme === "dark" ? "/trippy-light.svg" : "/trippy-dark.svg"}
            alt="Trippy Logo"
            width={32}
            height={32}
            className="transition-transform hover:scale-110"
          />
        </Link>
        <MenuItem setActive={setActive} active={active} item="Destinations">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/destinations/europe">Europe</HoveredLink>
            <HoveredLink href="/destinations/asia">Asia</HoveredLink>
            <HoveredLink href="/destinations/americas">Americas</HoveredLink>
            <HoveredLink href="/destinations/africa">Africa</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Experiences">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Adventure Tours"
              href="/experiences/adventure"
              src="https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80&w=2940&auto=format&fit=crop"
              description="Thrilling outdoor activities and adventures."
            />
            <ProductItem
              title="Cultural Tours"
              href="/experiences/cultural"
              src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=2940&auto=format&fit=crop"
              description="Immerse yourself in local traditions and customs."
            />
            <ProductItem
              title="Food & Wine"
              href="/experiences/food-wine"
              src="https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=2944&auto=format&fit=crop"
              description="Culinary journeys and wine tasting experiences."
            />
            <ProductItem
              title="Wellness Retreats"
              href="/experiences/wellness"
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2940&auto=format&fit=crop"
              description="Rejuvenating spa and wellness getaways."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Plan">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/plan/custom-trip">Custom Trip</HoveredLink>
            <HoveredLink href="/plan/group-travel">Group Travel</HoveredLink>
            <HoveredLink href="/plan/honeymoon">Honeymoon</HoveredLink>
            <HoveredLink href="/plan/luxury">Luxury Travel</HoveredLink>
          </div>
        </MenuItem>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-secondary dark:hover:bg-secondary transition-colors"
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-yellow-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          )}
        </button>
      </Menu>
    </div>
  );
}
