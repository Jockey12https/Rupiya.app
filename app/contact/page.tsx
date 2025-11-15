import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Globe } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-forest-600 to-forest-800 text-white py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              Get in Touch
            </h1>
            <p className="text-xl text-white/90">
              Have questions? We'd love to hear from you. Contact our team and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {/* Phone */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Phone className="h-6 w-6 text-forest-600" />
                  <CardTitle>Phone</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Call us for immediate assistance
                </p>
                <p className="font-semibold text-forest-600">+91 94XXX 64XXX</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Mon - Fri, 9 AM - 6 PM IST
                </p>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="h-6 w-6 text-forest-600" />
                  <CardTitle>Email</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Send us a detailed message
                </p>
                <p className="font-semibold text-forest-600">hello@rupiya.app</p>
                <p className="text-sm text-muted-foreground mt-2">
                  We respond within 24 hours
                </p>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="h-6 w-6 text-forest-600" />
                  <CardTitle>Headquarters</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Visit us in person
                </p>
                <p className="font-semibold text-forest-600">Bangalore, India</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Multiple offices across India
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-forest-50">
        <div className="container max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-12 text-center">
            Send us a Message
          </h2>
          <Card className="border-2 border-forest-200">
            <CardContent className="pt-8">
              <form className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-600 focus:border-transparent outline-none transition"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-600 focus:border-transparent outline-none transition"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-600 focus:border-transparent outline-none transition"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Category
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-600 focus:border-transparent outline-none transition">
                    <option>Select a category</option>
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Business Partnership</option>
                    <option>Feedback</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-600 focus:border-transparent outline-none transition resize-none"
                    placeholder="Tell us your message..."
                  />
                </div>

                <Button className="w-full bg-forest-600 hover:bg-forest-700 text-white py-2 h-auto">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Support Centers */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-12 text-center">
            Offices & Support Centers
          </h2>
          <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Bangalore HQ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-forest-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Rupiya.app Headquarters</p>
                    <p className="text-sm text-muted-foreground">Bangalore, Karnataka, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-forest-600 mt-1 flex-shrink-0" />
                  <p className="text-sm">+91 94XXX 64XXX</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-forest-600 mt-1 flex-shrink-0" />
                  <p className="text-sm">Mon - Fri: 9 AM - 6 PM</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Regional Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-forest-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Pan-India Presence</p>
                    <p className="text-sm text-muted-foreground">Maharashtra, Gujarat, Punjab & 15+ states</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageSquare className="h-5 w-5 text-forest-600 mt-1 flex-shrink-0" />
                  <p className="text-sm">24/7 In-app Chat Support</p>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-forest-600 mt-1 flex-shrink-0" />
                  <p className="text-sm">Email: support@rupiya.app</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-forest-50">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "What is the best time to contact support?",
                a: "Our support team is available Monday to Friday, 9 AM - 6 PM IST. However, you can reach out anytime through our in-app chat, email, or contact form, and we'll respond within 24 hours."
              },
              {
                q: "How can I report a technical issue?",
                a: "Please use the in-app support feature or email us at support@rupiya.app with a detailed description of the issue, screenshots, and your account details. Our technical team will investigate immediately."
              },
              {
                q: "Can I discuss business partnerships with Rupiya?",
                a: "Absolutely! Email us at partnerships@rupiya.app or call +91 94XXX 64XXX to discuss potential collaborations and partnership opportunities."
              },
              {
                q: "How do I provide feedback or suggestions?",
                a: "We value your feedback! Use the feedback feature in the app or email us at feedback@rupiya.app. Your suggestions help us improve our services."
              },
              {
                q: "What languages do your support teams speak?",
                a: "Our support team is multilingual, including Hindi, English, Marathi, Gujarati, Punjabi, and other regional languages to serve our diverse farmer community."
              }
            ].map((faq, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-base text-forest-900">{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-forest-600 to-forest-800 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Download the Rupiya app and connect with our support team through in-app chat for instant help.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-forest-600 hover:bg-gray-100">
            Download App
          </Button>
        </div>
      </section>
    </div>
  )
}
