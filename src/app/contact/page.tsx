import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
    <div className="min-h-screen font-sans antialiased text-slate-200">
      <section className="relative overflow-hidden bg-transparent pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/4 w-1/2 h-full bg-blue-600/10 blur-[120px] rounded-full rotate-12" />
          <div className="absolute -bottom-1/2 -right-1/4 w-1/2 h-full bg-indigo-600/10 blur-[120px] rounded-full -rotate-12" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-1/3 h-1/3 bg-cyan-500/5 blur-[100px] rounded-full" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center max-w-3xl space-y-6">
          <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
            Contact SkyStates
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
            Let&apos;s Start a{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Conversation
            </span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Have questions about SkyStates, alumni stories, or partnership opportunities? We&apos;re here to help.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <Card className="border border-white/10 bg-slate-900/40 backdrop-blur-md rounded-3xl overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-5" noValidate>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-slate-300">Full name</label>
                      <Input id="name" name="name" placeholder="Your full name" className="bg-slate-950/40 border-white/10 text-white placeholder-slate-500 focus-visible:ring-blue-500" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                      <Input id="email" name="email" type="email" placeholder="you@example.com" className="bg-slate-950/40 border-white/10 text-white placeholder-slate-500 focus-visible:ring-blue-500" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="topic" className="text-sm font-medium text-slate-300">Topic</label>
                    <select
                      id="topic"
                      name="topic"
                      defaultValue=""
                      className="h-10 w-full rounded-lg border border-white/10 bg-slate-950/60 px-3 text-sm outline-none text-white transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                    >
                      <option value="" disabled className="bg-slate-950 text-slate-400">
                        Select a topic
                      </option>
                      <option value="general" className="bg-slate-950 text-white">General enquiry</option>
                      <option value="admissions" className="bg-slate-950 text-white">Admissions support</option>
                      <option value="partnership" className="bg-slate-950 text-white">Partnership</option>
                      <option value="feedback" className="bg-slate-950 text-white">Feedback</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                    <Textarea id="message" name="message" placeholder="Tell us how we can help..." className="min-h-36 bg-slate-950/40 border-white/10 text-white placeholder-slate-500 focus-visible:ring-blue-500" />
                  </div>

                  <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-slate-400">
                      By submitting, you agree to be contacted regarding your request.
                    </p>
                    <Button type="button" size="lg" className="bg-blue-600 text-white hover:bg-blue-700 rounded-xl">
                      Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            <Card className="h-full border border-white/10 bg-slate-900/40 backdrop-blur-md rounded-3xl overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Frequently Asked</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {faqs.map((item) => (
                  <div key={item.question} className="rounded-xl border border-white/5 bg-slate-950/40 p-4">
                    <h3 className="mb-1 font-semibold text-white">{item.question}</h3>
                    <p className="text-sm text-slate-300">{item.answer}</p>
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
