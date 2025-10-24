"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-96px)] bg-black text-white">
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Welcome to <span className="text-emerald-400">Deserialize</span> Docs
        </h1>
        <p className="mt-4 text-lg text-emerald-100/80 max-w-2xl">
          The official documentation for the Deserialize SDK and APIs. Build powerful
          integrations on Eclipse with optimized routing and rich token data.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/api/swap-api/docs/introduction"
            className="px-6 py-3 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-300 hover:bg-emerald-500/30 transition-colors"
          >
            API: Swap Docs
          </Link>
          <Link
            href="/api/token-screener-api/docs/introduction"
            className="px-6 py-3 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-300 hover:bg-emerald-500/30 transition-colors"
          >
            API: Token Screener Docs
          </Link>
          <Link
            href="/api/swap-api/docs/endpoints"
            className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
          >
            All Endpoints
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-8">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Deserialize?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard title="Fast & Efficient" desc="Optimized swap routing across multiple DEXs for minimal slippage and best rates." />
          <FeatureCard title="Seamless Integration" desc="Plug-and-play SDK and REST APIs, making it easy to integrate swaps into your app." />
          <FeatureCard title="Secure & Reliable" desc="Backed by smart contract security and high-availability infrastructure." />
          <FeatureCard title="Partner Fees" desc="Set your custom fees as a partner and track performance with ease." />
          <FeatureCard title="Customizable Swaps" desc="Fine-tune slippage, routing, and gas settings to match your trading needs." />
          <FeatureCard title="Multi-DEX Support" desc="Trade across top DEXs with a single API and consistent interface." />
        </div>
      </section>

      <footer className="max-w-7xl mx-auto px-6 py-12 text-center">
        <h3 className="text-2xl font-bold mb-2 text-emerald-300">Deserialize</h3>
        <p className="text-emerald-100/80 mb-6">Powering decentralized swaps and token data.</p>
        <div className="flex justify-center gap-4 text-sm">
          <Link className="hover:text-emerald-300 underline" href="/api/token-screener-api/docs/introduction">Docs</Link>
          <Link className="hover:text-emerald-300 underline" href="/api/token-screener-api/docs/endpoints">API</Link>
          <Link className="hover:text-emerald-300 underline" href="#">Support</Link>
          <Link className="hover:text-emerald-300 underline" href="#">Terms</Link>
        </div>
        <p className="mt-6 text-xs text-emerald-100/60">© 2025 Deserialize. All rights reserved.</p>
      </footer>
    </main>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/5 p-6">
      <h4 className="text-lg font-semibold text-emerald-300 mb-2">{title}</h4>
      <p className="text-sm text-emerald-100/80">{desc}</p>
    </div>
  );
}
