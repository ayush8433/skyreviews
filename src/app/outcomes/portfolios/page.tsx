import type { Metadata } from "next";
import Link from "next/link";
import { Folder } from "lucide-react";

export const metadata: Metadata = {
  title: "Alumni Portfolios & Code Examples | SkyReviews",
  description: "Browse student capstone projects, automated build pipelines, and dataset visualizations.",
};

export default function PortfoliosPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="container mx-auto max-w-3xl bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-6">
        <h1 className="text-3xl font-extrabold text-slate-900 border-b border-slate-100 pb-4 flex items-center gap-2">
          <Folder className="w-8 h-8 text-blue-600" /> Student Portfolios
        </h1>

        <p className="text-sm text-slate-600 leading-relaxed font-normal">
          Examples of code repositories and pipeline architectures completed by our graduates during their cohorts:
        </p>

        <ul className="space-y-2 text-sm text-slate-600">
          <li><strong>Sales Predictive Model:</strong> An end-to-end Python pipeline deploying Scikit-learn churn predictions to Azure.</li>
          <li><strong>CI/CD Multi-Branch Pipeline:</strong> Kubernetes orchestration using Jenkins automation and Terraform.</li>
          <li><strong>Security Threat Audit:</strong> Virtual network capture and Kali packet capture reports.</li>
        </ul>

        <div className="pt-4 border-t border-slate-100 flex justify-between text-sm">
          <Link href="/outcomes/career-transitions" className="text-blue-600 hover:underline font-semibold">
            ← Career Transitions
          </Link>
          <Link href="/outcomes/employer-partners" className="text-blue-600 hover:underline font-semibold">
            Employer Partners →
          </Link>
        </div>
      </div>
    </div>
  );
}
