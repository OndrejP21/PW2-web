"use client";

import { Theme, useTheme } from "@/context/themeContext";
import { NavbarLinkType, ThemeBlockType } from "@/types/navbar.types";
import Link from "next/link";

export default function Navbar() {
  const { theme } = useTheme();

  const routes: Array<NavbarLinkType> = [
    { name: "Úvod", href: "/" },
    { name: "O aplikaci", href: "/about" },
    { name: "Články", href: "/articles" },
  ];

  return (
    <nav
      className={`flex items-center justify-between ${
        theme === Theme.Light
          ? "bg-gray-100 text-black"
          : "bg-gray-900 text-white"
      } border-b-2 border-black h-16`}
    >
      <div>
        <ul className="flex">
          {routes.map((route, index) => (
            <NavbarLink key={index} name={route.name} href={route.href} />
          ))}
        </ul>
      </div>

      <div className="flex">
        <ThemeBlock name={Theme.Light} isChoosed={Theme.Light === theme} />
        <ThemeBlock name={Theme.Dark} isChoosed={Theme.Dark === theme} />
        <ThemeBlock name={Theme.Color} isChoosed={Theme.Color === theme} />
      </div>
    </nav>
  );
}

function NavbarLink({ name, href }: NavbarLinkType) {
  return (
    <li>
      <Link className="p-5 hover:underline" href={href}>
        {name}
      </Link>
    </li>
  );
}

function ThemeBlock({ name, isChoosed }: ThemeBlockType) {
  const { changeTheme } = useTheme();

  return (
    <div
      className={`${
        isChoosed && "underline"
      } cursor-pointer hover:underline p-5`}
      onClick={() => changeTheme(name)}
    >
      {name}
    </div>
  );
}
