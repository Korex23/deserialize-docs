"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);

  return (
    <nav className="flex items-center space-x-2 text-sm text-green-600 mb-6">
      <Link href="/" className="hover:text-green-800">
        Home
      </Link>
      {pathSegments.map((segment, index) => {
        const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
        const isLast = index === pathSegments.length - 1;
        const capitalizedSegment =
          segment.charAt(0).toUpperCase() + segment.slice(1);

        return (
          <React.Fragment key={href}>
            <ChevronRight size={16} />
            {isLast ? (
              <span className="font-semibold text-green-800">
                {capitalizedSegment}
              </span>
            ) : (
              <Link href={href} className="hover:text-green-800">
                {capitalizedSegment}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
