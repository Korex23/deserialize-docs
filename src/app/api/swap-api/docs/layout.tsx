import React from "react";
import Sidebar from "@/components/Sidebar";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl mx-auto md:px-6 md:py-8 md:flex gap-8 min-h-screen bg-white">
      <Sidebar />
      <main className="flex-1 bg-gradient-to-b from-green-50 to-white rounded-lg border border-green-200 p-8">
        <div className="flex">
          <Breadcrumbs />
        </div>
        {children}
        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-green-200">
          <p className="text-sm text-green-700 text-center">
            Need help? Contact support or visit our developer community.
          </p>
        </div>
      </main>
    </div>
  );
}
