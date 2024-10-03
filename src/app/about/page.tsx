"use client";

import { useTheme } from "@/context/themeContext";

export default function AboutPage() {
  const { theme } = useTheme();

  return <div>{theme}</div>;
}
