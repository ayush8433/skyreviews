"use client";

import React, { useState } from "react";
import { submitOptOut } from "../actions/optout";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function OptOutForm() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [reason, setReason] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const formData = new FormData();
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("reason", reason);

    const result = await submitOptOut(formData);
    setIsSubmitting(false);

    if (result.success) {
      setStatus({
        type: "success",
        message: "Your opt-out request has been submitted and registered successfully.",
      });
      setEmail("");
      setPhone("");
      setReason("");
    } else {
      setStatus({
        type: "error",
        message: result.error || "An unexpected error occurred. Please try again.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 text-left">
      {status && (
        <div className={`p-4 rounded-xl border flex gap-3 text-sm ${
          status.type === "success" 
            ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-300" 
            : "bg-rose-500/10 border-rose-500/20 text-rose-300"
        }`}>
          {status.type === "success" ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
          )}
          <p>{status.message}</p>
        </div>
      )}

      <div className="space-y-1">
        <label htmlFor="email" className="block text-xs font-bold text-slate-350 uppercase tracking-wide">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your.email@example.com"
          className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-950 text-white text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-slate-600"
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="phone" className="block text-xs font-bold text-slate-355 uppercase tracking-wide">
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+1 (555) 000-0000"
          className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-950 text-white text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-slate-600"
        />
        <p className="text-[10px] text-slate-400">Include country code for international phone numbers.</p>
      </div>

      <div className="space-y-1">
        <label htmlFor="reason" className="block text-xs font-bold text-slate-350 uppercase tracking-wide">
          Reason for Opt-Out (Optional)
        </label>
        <select
          id="reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-950 text-white text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
        >
          <option value="" className="bg-slate-900 text-white">Select a reason...</option>
          <option value="too-frequent" className="bg-slate-900 text-white">Too many phone calls / outreach attempts</option>
          <option value="no-longer-interested" className="bg-slate-900 text-white">No longer interested in tech training</option>
          <option value="found-alternative" className="bg-slate-900 text-white">Enrolled in another bootcamp / program</option>
          <option value="other" className="bg-slate-900 text-white">Other reason</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-purple-650 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg shadow-purple-500/20 hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed border-none mt-6"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" /> Submitting Request...
          </>
        ) : (
          "Submit Opt-Out Request"
        )}
      </button>
    </form>
  );
}
