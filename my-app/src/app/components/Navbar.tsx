"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
      </p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/Panel-Manufacturer">Panel Manufacturer</HoveredLink>
            <HoveredLink href="/Lighting-Manufacturer">Lighting Manufacturer</HoveredLink>
            <HoveredLink href="/Electrical-consultancy">Electrical Consultancyn</HoveredLink>
            <HoveredLink href="/Electrical-contractor">Electrical Contractor</HoveredLink>
            <HoveredLink href="/Interior-design-and-contracting">Interior Design and Contracting</HoveredLink>
            <HoveredLink href="/Natura-Gas-Distribution">Government Civil Contractor</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About Us">
        <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact Us">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Mail</HoveredLink>
            <HoveredLink href="/individual">Whatup</HoveredLink>
            <HoveredLink href="/team">Mobile</HoveredLink>
            {/* <HoveredLink href="/enterprise">Enterprise</HoveredLink> */}
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
