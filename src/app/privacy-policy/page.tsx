import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - SkyReviews",
  description: "How SkyReviews collects, uses, and protects personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <p className="mb-4 text-gray-700">
          At SkyReviews we respect your privacy. This page explains what data we collect, why we collect it,
          how we use it, and the choices available to you. If you have questions, contact us at
          <a className="ml-1 text-blue-600 underline" href="mailto:support@skyreviews.us">support@skyreviews.us</a>.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Scope and purpose</h2>
        <p className="text-gray-700 mb-4">This policy applies to data collected through the SkyReviews website and related services. Our goal is to support alumni stories, video testimonials, and community engagement while protecting personal information.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Types of data we collect</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li><strong>Contact data:</strong> name, email address, and message content when you contact us or submit a story.</li>
          <li><strong>User-submitted content:</strong> story text, photos, and video testimonials you upload or grant us permission to publish.</li>
          <li><strong>Usage data:</strong> anonymized analytics and performance data (pages visited, timestamps, and interaction events).</li>
          <li><strong>Technical data:</strong> IP address, browser type, and device information needed for security and to provide the service.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">How we use your data</h2>
        <p className="text-gray-700 mb-4">We use information to:</p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Publish and improve alumni stories and video testimonials.</li>
          <li>Respond to inquiries and provide support.</li>
          <li>Prevent abuse and secure our platform.</li>
          <li>Measure and improve site performance and content relevance.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Sharing and disclosure</h2>
        <p className="text-gray-700 mb-4">We will not sell your personal information. We may share data with service providers who process data on our behalf (hosting, analytics, email delivery). We also disclose information when required by law, or to protect rights and safety.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Retention</h2>
        <p className="text-gray-700 mb-4">We retain personal data only as long as necessary for the purposes described here, including any legal or reporting obligations. User-submitted stories and media will remain published until you request removal and we complete our moderation process.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Your choices and rights</h2>
        <p className="text-gray-700 mb-4">You may request access, correction, or deletion of personal data. To exercise these rights, contact <a className="text-blue-600 underline" href="mailto:support@skyreviews.us">support@skyreviews.us</a>. We will respond within a reasonable timeframe.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Cookies and similar technologies</h2>
        <p className="text-gray-700 mb-4">We use cookies for essential site functionality and to gather anonymous analytics. We do not use cookies to track you across unrelated sites for advertising purposes. You can control cookies in your browser settings.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Security</h2>
        <p className="text-gray-700 mb-4">We implement reasonable security measures to protect your data. However, no transmission over the internet is completely secure—if you suspect an issue, contact us at <a className="text-blue-600 underline" href="mailto:support@skyreviews.us">support@skyreviews.us</a>.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Changes to this policy</h2>
        <p className="text-gray-700 mb-4">We may update this policy from time to time. The page will display the date of the most recent update.</p>

        <div className="mt-10">
          <Link href="/" className="text-blue-600 underline">Return to home</Link>
        </div>
      </div>
    </div>
  );
}
