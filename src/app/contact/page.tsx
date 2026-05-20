import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const channels = [
  {
    title: "General Enquiries",
    detail: "hello@skystates.com",
    help: "Questions about programs, stories, and community initiatives.",
  },
  {
    title: "Admissions & Guidance",
    detail: "admissions@skystates.com",
    help: "Need help choosing a path or understanding program fit?",
  },
  {
    title: "Partnerships",
    detail: "partners@skystates.com",
    help: "Collaborations for hiring, events, and ecosystem partnerships.",
  },
];

const faqs = [
  {
    question: "How quickly can I expect a response?",
    answer: "Most messages are answered within 1-2 business days.",
  },
  {
    question: "Can alumni request edits to their published story?",
    answer: "Yes. Include your story link in the message and our team will assist.",
  },
  {
    question: "Do you offer company-specific talent pipelines?",
    answer: "Yes. Reach out via partnerships and we can discuss hiring goals.",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-linear-to-br from-blue-600 via-blue-700 to-indigo-800 px-4 py-20 md:py-24">
        <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="absolute bottom-6 right-10 h-44 w-44 rounded-full bg-cyan-300/20 blur-3xl" />

        <div className="container relative z-10 mx-auto max-w-4xl text-center text-white">
          <Badge className="mb-4 bg-white/20 text-white hover:bg-white/20">Contact SkyStates</Badge>
          <h1 className="mb-5 text-4xl font-bold leading-tight md:text-5xl">Let&apos;s Start a Conversation</h1>
          <p className="mx-auto max-w-2xl text-lg text-blue-100">
            Have questions about SkyStates, alumni stories, or partnership opportunities? We&apos;re here to help.
          </p>
        </div>
      </section>

      <section className="bg-linear-to-b from-slate-50 to-white px-4 py-14 md:py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8 grid gap-4 md:grid-cols-3">
            {channels.map((channel) => (
              <Card key={channel.title} className="bg-white shadow-sm ring-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">{channel.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="font-semibold text-blue-700">{channel.detail}</p>
                  <p className="text-sm text-gray-600">{channel.help}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <Card className="bg-white shadow-sm ring-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-5" noValidate>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">Full name</label>
                      <Input id="name" name="name" placeholder="Your full name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                      <Input id="email" name="email" type="email" placeholder="you@example.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="topic" className="text-sm font-medium text-gray-700">Topic</label>
                    <select
                      id="topic"
                      name="topic"
                      defaultValue=""
                      className="h-10 w-full rounded-lg border border-input bg-transparent px-3 text-sm outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                    >
                      <option value="" disabled>
                        Select a topic
                      </option>
                      <option value="general">General enquiry</option>
                      <option value="admissions">Admissions support</option>
                      <option value="partnership">Partnership</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                    <Textarea id="message" name="message" placeholder="Tell us how we can help..." className="min-h-36" />
                  </div>

                  <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-gray-500">
                      By submitting, you agree to be contacted regarding your request.
                    </p>
                    <Button type="button" size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                      Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            <Card className="h-full bg-white shadow-sm ring-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Frequently Asked</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {faqs.map((item) => (
                  <div key={item.question} className="rounded-xl border border-gray-200 bg-white p-4">
                    <h3 className="mb-1 font-semibold text-gray-900">{item.question}</h3>
                    <p className="text-sm text-gray-600">{item.answer}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
