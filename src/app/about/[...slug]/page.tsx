"use client";

import { usePathname } from "next/navigation";

export default function DynamicPage() {
  const pathName = usePathname();

  const pathNameArray = pathName.split("/");

  return (
    <>
      {pathName}{" "}
      <div>
        {pathNameArray.map((url, index) => (
          <p key={index}>{url}</p>
        ))}
      </div>
    </>
  );
}
