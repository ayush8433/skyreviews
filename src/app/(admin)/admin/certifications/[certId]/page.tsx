import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { Badge } from "@/components/ui/badge";
import CertificationForm from "../CertificationForm";

export default async function EditCertificationPage({
  params,
}: {
  params: Promise<{ certId: string }>;
}) {
  const { certId } = await params;
  const cert = await prisma.studentCertification.findUnique({ where: { id: certId } });

  if (!cert) notFound();

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl">
        <Badge className="bg-sky-500/15 text-sky-200 hover:bg-sky-500/15 mb-3">
          Edit Certificate
        </Badge>
        <h1 className="text-3xl font-bold text-white">
          {cert.studentName} — {cert.certCode}
        </h1>
        <p className="text-slate-300 mt-1">
          Update certificate details, image, or publication status.
        </p>
      </div>
      <CertificationForm cert={cert} />
    </div>
  );
}
