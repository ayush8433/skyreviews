import { Badge } from "@/components/ui/badge";
import CertificationForm from "../CertificationForm";

export default function NewCertificationPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl">
        <Badge className="bg-emerald-500/15 text-emerald-200 hover:bg-emerald-500/15 mb-3">
          New Certificate
        </Badge>
        <h1 className="text-3xl font-bold text-white">Add Verified Certificate</h1>
        <p className="text-slate-300 mt-1">
          Upload a student&apos;s Microsoft certification to display on the public gallery.
        </p>
      </div>
      <CertificationForm />
    </div>
  );
}
