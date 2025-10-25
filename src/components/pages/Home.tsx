"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-36px)] bg-white text-gray-900">
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-emerald-600">
          Deserialize Documentation
        </h1>

        <p className="mt-6 text-gray-700 text-lg max-w-2xl mx-auto">
          Robust SDKs and REST APIs for secure swaps and intelligent token
          screening on Eclipse. Designed for performance, reliability, and ease
          of integration.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/api/swap-api/docs/introduction"
            className="px-6 py-3 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition"
          >
            Swap API Docs
          </Link>
          <Link
            href="/api/token-screener-api/docs/introduction"
            className="px-6 py-3 rounded-xl border border-emerald-500 text-emerald-600 hover:bg-emerald-50 transition"
          >
            Token Screener API Docs
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
          Why Deserialize?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            title="Fast & Efficient"
            desc="Optimized swap routing across multiple DEXs to secure the best execution."
          />
          <FeatureCard
            title="Seamless Integration"
            desc="SDK and REST interfaces designed for a quick and consistent setup."
          />
          <FeatureCard
            title="Secure & Reliable"
            desc="Decentralized infrastructure backed by extensive smart contract auditing."
          />
          <FeatureCard
            title="Partner Fees"
            desc="Monetize swaps with flexible fee settings and insights."
          />
          {/* <FeatureCard
            title="Advanced Swap Controls"
            desc="Define your own routing rules, slippage, and limits."
          /> */}
          <FeatureCard
            title="Multi-DEX Support"
            desc="Access liquidity across top DEXes through a unified API."
          />
        </div>
      </section>

      <footer className="border-t border-gray-200 py-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-xl font-semibold text-emerald-600">
            Deserialize
          </h3>
          <p className="text-gray-600 mt-2">
            Powering decentralized swaps and token data intelligence.
          </p>

          <div className="mt-6 flex justify-center gap-6 text-sm">
            <FooterLink href="/api/swap-api/docs/introduction" label="Docs" />
            <FooterLink
              href="/api/token-screener-api/docs/endpoints"
              label="API"
            />
            <FooterLink href="#" label="Support" />
            <FooterLink href="#" label="Terms" />
          </div>

          <p className="text-xs text-gray-500 mt-6">
            © 2025 Deserialize. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
      <h4 className="text-lg font-semibold text-emerald-600 mb-2">{title}</h4>
      <p className="text-sm text-gray-700">{desc}</p>
    </div>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2 transition"
      href={href}
    >
      {label}
    </Link>
  );
}
