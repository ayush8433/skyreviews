import type { Metadata } from "next";
import Link from "next/link";
import { ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Data Standards Policy | SkyReviews",
  description: "Learn how we collect, store, and anonymize student review documents.",
};

export default function DataStandardsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="container mx-auto max-w-3xl bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-xs space-y-6">
        <h1 className="text-3xl font-extrabold text-slate-900 border-b border-slate-100 pb-4">
          Data Standards &amp; Privacy
        </h1>
        
        <p className="text-sm text-slate-600 leading-relaxed font-normal">
          We collect student verification documents (receipts, certificates) solely to authenticate reviews. These files are kept secure and are never shared with external advertisers.
        </p>

        <h2 className="text-lg font-bold text-slate-800">Key Policies:</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
          <li><strong>Document Masking:</strong> Sensitive financial info on receipts should be cropped/redacted.</li>
          <li><strong>Retention Policy:</strong> Documents are deleted after review verification is approved.</li>
        </ul>

        <div className="pt-4 border-t border-slate-100 flex justify-between text-sm">
          <Link href="/transparency" className="text-blue-600 hover:underline font-semibold">
            ← Transparency Hub
          </Link>
          <Link href="/transparency/affiliates" className="text-blue-600 hover:underline font-semibold">
            Affiliate Disclosure →
          </Link>
        </div>
      </div>
    </div>
  );
}
