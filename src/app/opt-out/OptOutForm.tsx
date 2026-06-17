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
    <form onSubmit={handleSubmit} className="space-y-5">
      {status && (
        <div className={`p-4 rounded-xl border flex gap-3 text-sm ${
          status.type === "success" 
            ? "bg-emerald-50 border-emerald-100 text-emerald-800" 
            : "bg-rose-50 border-rose-100 text-rose-800"
        }`}>
          {status.type === "success" ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          )}
          <p>{status.message}</p>
        </div>
      )}

      <div className="space-y-1">
        <label htmlFor="email" className="block text-xs font-bold text-gray-700 uppercase tracking-wide">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your.email@example.com"
          className="w-full px-4 py-3 rounded-xl border border-gray-250 bg-white text-gray-900 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="phone" className="block text-xs font-bold text-gray-700 uppercase tracking-wide">
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+1 (555) 000-0000"
          className="w-full px-4 py-3 rounded-xl border border-gray-250 bg-white text-gray-900 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
        />
        <p className="text-[10px] text-gray-400">Include country code for international phone numbers.</p>
      </div>

      <div className="space-y-1">
        <label htmlFor="reason" className="block text-xs font-bold text-gray-700 uppercase tracking-wide">
          Reason for Opt-Out (Optional)
        </label>
        <select
          id="reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-250 bg-white text-gray-900 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
        >
          <option value="">Select a reason...</option>
          <option value="too-frequent">Too many phone calls / outreach attempts</option>
          <option value="no-longer-interested">No longer interested in tech training</option>
          <option value="found-alternative">Enrolled in another bootcamp / program</option>
          <option value="other">Other reason</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
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
