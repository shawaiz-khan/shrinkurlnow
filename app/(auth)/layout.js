"use client";

import { usePathname } from "next/navigation";

export default function AuthLayout({ children }) {
  const pathname = usePathname();
  return (
    <div key={pathname} className="page-container">
      {children}
    </div>
  );
}
