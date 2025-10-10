"use client";

import React from "react";
import Section from "../../components/Section";
import Endpoint from "../../components/Endpoints";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import CodeBlock from "../../components/Codeblocks";

const Endpoints = () => {
  return (
    <>
      <Section id="endpoints" title="API Endpoints">
        <div className="space-y-2">
          <Endpoint method="POST" path="/quote" description="Get swap quote" />
          <Endpoint
            method="POST"
            path="/swap"
            description="Execute swap transaction"
          />
          <Endpoint
            method="GET"
            path="/tokenList"
            description="Get all tokens"
          />
          <Endpoint
            method="GET"
            path="/tokenListWithDetails"
            description="Get tokens with details"
          />
          <Endpoint
            method="GET"
            path="/tokenPrice/:tokenAddress"
            description="Get token price"
          />
          <Endpoint
            method="GET"
            path="/tokenDetails/:tokenAddress"
            description="Get token details"
          />
        </div>
      </Section>
      <div className="grid grid-cols-2 gap-5">
        <div>
          <Link
            href={"/docs/overview"}
            className="flex items-center justify-between px-4 py-3 bg-green-100 hover:bg-green-200 border border-green-300 rounded-md transition-colors group"
          >
            <ChevronLeft
              size={20}
              className="text-green-700 group-hover:translate-x-1 transition-transform"
            />
            <div className="flex flex-col">
              <span className="text-xs text-green-600 uppercase font-semibold">
                Previous
              </span>
              <span className="text-sm text-green-800 font-medium">
                Overview
              </span>
            </div>
          </Link>
        </div>
        <div>
          <Link
            href={"/docs/quote"}
            className="flex items-center justify-between px-4 py-3 bg-green-100 hover:bg-green-200 border border-green-300 rounded-md transition-colors group"
          >
            <div className="flex flex-col">
              <span className="text-xs text-green-600 uppercase font-semibold">
                Next
              </span>
              <span className="text-sm text-green-800 font-medium">Quote</span>
            </div>
            <ChevronRight
              size={20}
              className="text-green-700 group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Endpoints;
