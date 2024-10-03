import { NavbarLinkType } from "@/types/navbar.types";
import Link from "next/link";

export default function Navbar() {
  const routes: Array<NavbarLinkType> = [
    { name: "Úvod", href: "/" },
    { name: "O aplikaci", href: "/about" },
    { name: "Články", href: "/articles" },
  ];

  return (
    <nav className="flex flex-col justify-center bg-gray-100 border-b-2 border-black h-16">
      <ul className="flex">
        {routes.map((route, index) => (
          <NavbarLink key={index} name={route.name} href={route.href} />
        ))}
      </ul>
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
