"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const baseNavItems = [
  {
    href: "/docs/introduction",
    label: "Introduction",
    ids: ["introduction", "quick-example", "endpoints", "key-concepts"],
  },
  {
    href: "/docs/overview",
    label: "Overview",
    ids: ["overview", "networks", "tokens", "token-details"],
  },
  { href: "/docs/endpoints", label: "Endpoints" },
  {
    href: "/docs/tokens",
    label: "Token List",
    ids: [
      "get-token-list",
      "token-list-response",
      "get-token-list-details",
      "token-list-details-response",
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
      "screening-new",
    ],
  },
  {
    href: "/docs/pools",
    label: "Pools",
    ids: ["pools-list", "pool-details"],
  },
  {
    href: "/docs/quote",
    label: "Get Quote",
    ids: ["endpoints", "request-body", "request-parameters", "response"],
  },
  {
    href: "/docs/swap",
    label: "Execute Swap",
    ids: ["endpoints", "request-body", "request-parameters", "response"],
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
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const currentApi = useMemo(() => {
    const match = pathname.match(/^\/api\/([^/]+)\//);
    return match ? match[1] : "swap-api";
  }, [pathname]);

  const baseDocsPath = useMemo(() => {
    const match = pathname.match(/^(.*\/docs)(?:$|\/)/);
    if (match) return match[1];
    return `/api/${currentApi}/docs`;
  }, [pathname, currentApi]);

  const items = useMemo(() => {
    if (currentApi === "swap-api") {
      return baseNavItems.filter(
        (item) => item.label !== "Screening" && item.label !== "Pools",
      );
    }

    if (currentApi === "token-screener-api") {
      const allowed = new Set([
        "Introduction",
        "Overview",
        "Endpoints",
        "Token List",
        "Screening",
        "Pools",
      ]);
      return baseNavItems.filter((item) => allowed.has(item.label));
    }

    return baseNavItems;
  }, [currentApi]);

  useEffect(() => {
    if (isOpen) setIsOpen(false);
  }, [pathname]);

  function scrollToId(id: string) {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  }

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
          className="md:hidden fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav
        className={`${
          isOpen
            ? "fixed top-0 left-0 h-full w-64 z-50 translate-x-0"
            : "hidden md:block md:sticky md:top-24"
        } bg-gradient-to-b from-green-50 to-white rounded-r-lg md:rounded-lg border-r border-t border-b border-green-200 p-4 overflow-y-auto transition-transform duration-300`}
      >
        <div className="flex justify-between items-center mb-3 md:block">
          <h3 className="text-sm font-semibold text-green-700 uppercase">
            Contents
          </h3>
          <button onClick={() => setIsOpen(false)} className="md:hidden p-1">
            <X className="h-5 w-5 text-green-600" />
          </button>
        </div>

        <ul className="space-y-1">
          {items.map((item) => {
            const fullHref = `${baseDocsPath}${item.href.replace(
              /^\/docs/,
              "",
            )}`;
            const isActive = pathname === fullHref;
            const hasIds = item.ids && item.ids.length > 0;

            return (
              <li key={item.href}>
                <Link
                  href={fullHref}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm ${
                    isActive
                      ? "bg-green-100 text-green-700 font-medium border border-green-300"
                      : "text-gray-700 hover:bg-green-50"
                  }`}
                >
                  <ChevronRight
                    size={16}
                    className={isActive ? "opacity-100" : "opacity-0"}
                  />
                  {item.label}
                </Link>

                {isActive && hasIds && (
                  <ul className="ml-10 mt-1 space-y-1 border-l border-green-200 pl-3">
                    {item.ids.map((id) => (
                      <li key={id}>
                        <button
                          onClick={() => scrollToId(id)}
                          className="text-xs text-gray-600 hover:text-green-700 w-full text-left capitalize"
                        >
                          {id.replace(/-/g, " ")}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
