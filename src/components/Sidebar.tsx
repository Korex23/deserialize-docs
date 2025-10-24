"use client";

import React, { useState, useEffect } from "react";
import { ChevronRight, ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  {
    href: "/docs/introduction",
    label: "Introduction",
    ids: ["introduction", "quick-example", "endpoints", "key-concepts"],
  },
  {
    href: "/docs/overview",
    label: "Overview",
    ids: [
      "overview",
      "quote",
      "swap",
      "tokens",
      "token-details",
      "token-price",
    ],
  },
  { href: "/docs/endpoints", label: "Endpoints" },
  {
    href: "/docs/quote",
    label: "Get Quote",
    ids: [
      "endpoints",
      "request-body",
      "request-parameters",
      "response",
      "response-fields",
    ],
  },
  {
    href: "/docs/swap",
    label: "Execute Swap",
    ids: [
      "endpoints",
      "request-body",
      "request-parameters",
      "response",
      "response-fields",
    ],
  },
  {
    href: "/docs/tokens",
    label: "Token List",
    ids: [
      "get-token-list",
      "token-list-response",
      "get-token-list-details",
      "token-list-details-response"
    ],
  },
  {
    href: "/docs/screening",
    label: "Screening",
    ids: [
      "screening-trending",
      "screening-gainers",
      "screening-losers",
      "screening-high-liquidity",
      "screening-new"
    ],
  },
  {
    href: "/docs/pools",
    label: "Pools",
    ids: [
      "pools-list",
      "pool-details"
    ],
  },
  {
    href: "/docs/token-details",
    label: "Token Details",
    ids: ["request-parameters", "example-request", "response"],
  },
  {
    href: "/docs/token-price",
    label: "Token Price",
    ids: ["request-parameters", "example-request", "response"],
  },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const baseDocsPath = React.useMemo(() => {
    const match = pathname.match(/^(.*\/docs)(?:$|\/)/);
    if (match) return match[1];
    const m = pathname.match(/^\/api\/([^/]+)\//);
    const api = m ? m[1] : "swap-api";
    return `/api/${api}/docs`;
  }, [pathname]);

  const currentApi = React.useMemo(() => {
    const m = pathname.match(/^\/api\/([^/]+)\//);
    return m ? m[1] : "swap-api";
  }, [pathname]);

  const items = React.useMemo(() => {
    if (currentApi === "token-screener-api") {
      const allowed = new Set(["Introduction", "Overview", "Endpoints", "Token List", "Screening", "Pools"]);
      return navItems
        .filter((i) => allowed.has(i.label))
        .map((i) =>
          i.label === "Overview" ? { ...i, ids: ["tokens", "token-details"] } : i
        );
    }
    return navItems;
  }, [currentApi]);

  // Close the sidebar when the route changes on mobile
  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [pathname]);

  const scrollToId = (id: string): void => {
    const element: HTMLElement | null = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-3 right-5 z-60 p-2 rounded-md bg-green-100 border border-green-300 backdrop-blur-sm"
        aria-label="Open navigation"
      >
        <Menu className="h-5 w-5 text-green-700" />
      </button>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="md:hidden fixed inset-0 bg-black/40 z-40 transition-opacity"
        />
      )}

      <nav
        className={`transition-transform duration-300 ease-in-out flex-shrink-0
                    ${isOpen
                      ? "fixed top-0 left-0 h-full w-64 z-50 translate-x-0 md:sticky md:top-24 md:h-fit"
                      : "hidden md:block md:sticky md:top-24 md:h-fit"}`}
      >
        <div className="bg-gradient-to-b from-green-50 to-white rounded-r-lg md:rounded-lg border-r border-t border-b border-green-200 h-full p-4 flex flex-col overflow-y-auto">
          <div className="flex justify-between items-center mb-3 md:block">
            <h3 className="text-sm font-semibold text-green-700 uppercase">
              Contents
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="md:hidden p-1"
              aria-label="Close navigation"
            >
              <X className="h-5 w-5 text-green-600" />
            </button>
          </div>

          <ul className="space-y-1">
            {items.map((item) => {
              const fullHref = `${baseDocsPath}${item.href.replace(/^\/docs/, "")}`;
              const isActive = pathname === fullHref;
              const hasIds = item.ids && item.ids.length > 0;

              return (
                <li key={item.href}>
                  <div className="flex flex-col">
                    <Link
                      href={fullHref}
                      className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
                        isActive
                          ? "bg-green-100 text-green-700 font-medium border border-green-300"
                          : "text-gray-700 hover:bg-green-50"
                      }`}
                    >
                      <ChevronRight
                        size={16}
                        className={isActive ? "opacity-100" : "opacity-0 transition-opacity"}
                      />
                      {item.label}
                    </Link>

                    {hasIds && isActive && (
                      <ul className="ml-10 mt-1 space-y-1 border-l border-green-200 pl-3">
                        {item.ids.map((id) => (
                          <li key={id}>
                            <button
                              onClick={() => scrollToId(id)}
                              className="text-xs text-gray-600 hover:text-green-700 transition-colors py-1 text-left w-full capitalize"
                            >
                              {id.replace(/-/g, " ")}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}
