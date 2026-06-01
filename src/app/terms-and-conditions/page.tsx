import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions - SkyReviews",
  description: "Terms of use for SkyReviews, including user content and community guidelines.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold mb-6">Terms &amp; Conditions</h1>

        <p className="mb-4 text-gray-700">These terms govern your use of the SkyReviews website. By using our site you agree to these terms; if you do not agree, please do not use the site.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Using SkyReviews</h2>
        <p className="text-gray-700 mb-4">SkyReviews provides a platform for publishing alumni stories and video testimonials. You may browse content without registering. When you submit content, you grant SkyReviews a license to display and distribute that content on the site.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">User-submitted content</h2>
        <p className="text-gray-700 mb-4">You are responsible for the content you submit. Do not upload content that infringes others' rights, contains confidential information, or violates law. We may remove content that breaches these terms.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Moderation and removal</h2>
        <p className="text-gray-700 mb-4">SkyReviews reserves the right to remove or refuse to publish content for any reason, including to comply with legal obligations or to protect our community. To request removal of your published story, contact <a className="text-blue-600 underline" href="mailto:support@skyreviews.us">support@skyreviews.us</a>.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Disclaimer and limitation of liability</h2>
        <p className="text-gray-700 mb-4">Content on SkyReviews is provided "as is" without warranties. To the fullest extent permitted by law, SkyReviews is not liable for indirect or consequential damages arising from use of the site.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">Governing law</h2>
        <p className="text-gray-700 mb-4">These terms are governed by the laws of the jurisdiction where SkyReviews operates. If you have questions, email <a className="text-blue-600 underline" href="mailto:support@skyreviews.us">support@skyreviews.us</a>.</p>

        <div className="mt-10">
          <Link href="/" className="text-blue-600 underline">Return to home</Link>
        </div>
      </div>
    </div>
  );
}
