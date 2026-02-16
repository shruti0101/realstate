"use client";

import { usePathname } from "next/navigation";
import Stickybottom from "@/components/Stickybottom";

export default function LayoutClient({ children }) {
  const pathname = usePathname();

  const hideSticky = pathname === "/inquiry";

  return (
    <>
      {children}
      {!hideSticky && <Stickybottom />}
    </>
  );
}
