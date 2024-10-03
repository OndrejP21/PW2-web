"use client";

import { useEffect, useState } from "react";

export default function AboutPage() {
  const [test, setTest] = useState<string>("");

  useEffect(() => {
    setTest("ahoj");
  }, []);

  return <>{test}</>;
}
