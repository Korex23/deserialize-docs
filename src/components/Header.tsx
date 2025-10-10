import React from "react";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="bg-gradient-to-b from-green-50 to-white shadow-lg border-b border-green-900/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex gap-3 items-center">
          <Logo />
          <h1 className="text-2xl font-bold text-green-700">Deserialize</h1>
        </div>
      </div>
    </header>
  );
}
