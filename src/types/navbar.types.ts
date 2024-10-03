import { Theme } from "@/context/themeContext";

export interface NavbarLinkType {
  name: string;
  href: string;
}

export interface ThemeBlockType {
  name: Theme;
  isChoosed: boolean;
}
