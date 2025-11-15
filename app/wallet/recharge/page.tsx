"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Smartphone, Zap, DollarSign, TrendingUp, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function RechargePage() {
  const features = [
    { title: "Instant Recharge", description: "Complete your recharge in seconds" },
    { title: "All Operators", description: "Support for all major telecom providers" },
    { title: "Data Plans", description: "Best data plans at competitive prices" },
    { title: "Roaming Packs", description: "International roaming at best rates" },
    { title: "Cashback", description: "Get rewarded on every recharge" },
    { title: "Bill Payments", description: "Pay electricity, water, and more" }
  ]

  const plans = [
    { type: "Basic Recharge", amount: "₹29 - ₹99", features: ["Talk time", "SMS", "Standard data"] },
    { type: "Data Plans", amount: "₹149 - ₹499", features: ["High-speed data", "Unlimited calls", "Additional benefits"] },
    { type: "Roaming", amount: "₹199 - ₹599", features: ["International coverage", "Data abroad", "Low rates"] },
    { type: "Special Packs", amount: "₹699 - ₹2,999", features: ["Premium data", "Rollover benefits", "Exclusive offers"] }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-600 to-forest-600 text-white py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4">
              Lightning Fast Recharges
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Mobile Recharge in Seconds
            </h1>
            <p className="text-xl text-white/90">
              Instant recharge for all operators. Get cashback on every recharge!
            </p>
            <Button size="lg" variant="secondary" className="mt-6 bg-white text-sky-600 hover:bg-sky-50">
              Recharge Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
              Why Use Rupiya Recharge?
            </h2>
            <p className="text-lg text-muted-foreground">
              Fast, secure, and rewarding mobile recharges
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-sky-100 flex items-center justify-center mb-4">
                    <Smartphone className="h-6 w-6 text-sky-600" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recharge Plans */}
      <section className="py-20 bg-beige-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
              Popular Recharge Plans
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the perfect plan for your needs
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan, i) => (
              <Card key={i} className="border-2 border-sky-200 hover:border-sky-600 transition">
                <CardHeader>
                  <CardTitle className="text-lg">{plan.type}</CardTitle>
                  <CardDescription className="text-2xl font-bold text-sky-600">{plan.amount}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-sky-600" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full" size="sm">
                    Select Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cashback Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-6">
                  Earn Cashback Every Time
                </h2>
                <ul className="space-y-4">
                  {[
                    "5% cashback on all recharges",
                    "Bonus cashback on first 3 recharges",
                    "Special offers on weekends",
                    "Loyalty rewards program",
                    "Refer friends and earn more"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-sky-600 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Card className="bg-gradient-to-br from-sky-50 to-forest-50 border-2 border-sky-200">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <DollarSign className="h-6 w-6 text-sky-600" />
                    <span>How Cashback Works</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                      <div>
                        <p className="font-semibold">Recharge Amount</p>
                        <p className="text-sm text-muted-foreground">Choose and complete your recharge</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                      <div>
                        <p className="font-semibold">Cashback Credited</p>
                        <p className="text-sm text-muted-foreground">5% cashback instantly added to wallet</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                      <div>
                        <p className="font-semibold">Use Anytime</p>
                        <p className="text-sm text-muted-foreground">Use cashback for future purchases</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-beige-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-forest-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                { q: "How long does recharge take?", a: "Usually instant, within seconds of payment confirmation." },
                { q: "Can I recharge any operator?", a: "Yes, we support all major operators and regional providers." },
                { q: "Is there any hidden charge?", a: "No, the amount you see is what you pay. No hidden charges." },
                { q: "How do I claim my cashback?", a: "Cashback is automatically credited to your Rupiya wallet and can be used for future purchases." }
              ].map((faq, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle className="text-base">{faq.q}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-sky-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Recharge?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Download the Rupiya app and start earning cashback on every recharge!
          </p>
          <a href="https://play.google.com/store/apps/details?id=rupiya.app&pli=1" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="secondary" className="bg-white text-sky-600 hover:bg-sky-50">
              Download App
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}
