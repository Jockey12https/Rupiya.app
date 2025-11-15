"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Coins, TrendingUp, Lock, DollarSign, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function GoldTechPage() {
  const features = [
    { title: "Buy Gold Easily", description: "Start investing from as low as ₹100" },
    { title: "No Storage Needed", description: "Digital gold stored safely in vaults" },
    { title: "Easy Redemption", description: "Convert back to cash anytime" },
    { title: "Instant Delivery", description: "Physical gold delivery on demand" },
    { title: "Transparent Pricing", description: "Live market rates, no hidden charges" },
    { title: "Insurance Covered", description: "Safe and insured storage" }
  ]

  const plans = [
    {
      name: "Beginner",
      description: "Start your gold journey",
      benefits: ["Minimum ₹100 investment", "Digital storage", "Easy tracking", "Quick redemption"]
    },
    {
      name: "Regular",
      description: "Build steady wealth",
      benefits: ["Flexible investment", "Monthly plans", "Auto-buy options", "Higher returns"]
    },
    {
      name: "Premium",
      description: "Maximize your returns",
      benefits: ["Unlimited investment", "Priority delivery", "Lower premiums", "Expert guidance"]
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-yellow-500 to-forest-600 text-white py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4">
              Digital Gold Solutions
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Invest in Gold Instantly
            </h1>
            <p className="text-xl text-white/90">
              Buy, hold, and sell gold digitally. No hassles, no purity worries, just pure investment.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
              Why Digital Gold?
            </h2>
            <p className="text-lg text-muted-foreground">
              Safe, secure, and convenient gold investment
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-yellow-100 flex items-center justify-center mb-4">
                    <Coins className="h-6 w-6 text-yellow-600" />
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

      {/* How It Works */}
      <section className="py-20 bg-yellow-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
                How Digital Gold Works
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  step: 1,
                  title: "Choose Amount",
                  description: "Invest from ₹100 onwards. No minimum quantity limits.",
                  icon: DollarSign
                },
                {
                  step: 2,
                  title: "Safe Storage",
                  description: "Your gold is stored in certified vaults with full insurance.",
                  icon: Lock
                },
                {
                  step: 3,
                  title: "Track & Sell",
                  description: "Monitor your investment and sell anytime at live market rates.",
                  icon: TrendingUp
                }
              ].map((item) => {
                const Icon = item.icon
                return (
                  <Card key={item.step} className="bg-white">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-full bg-yellow-600 text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                        {item.step}
                      </div>
                      <CardTitle className="text-center">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-center text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Plans */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
              Investment Plans
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose your gold investment strategy
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((plan, i) => (
              <Card key={i} className="border-2 border-yellow-200 hover:border-yellow-600 transition">
                <CardHeader>
                  <CardTitle className="text-lg">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.benefits.map((benefit, j) => (
                      <li key={j} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-yellow-600" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full border-yellow-600 text-yellow-600 hover:bg-yellow-50">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Market Info */}
      <section className="py-20 bg-yellow-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-6">
                  Gold Investment Made Simple
                </h2>
                <ul className="space-y-4">
                  {[
                    "Live gold rates updated every minute",
                    "Buy & sell with zero entry/exit charges",
                    "Fractional gold ownership",
                    "99.5% pure certified gold",
                    "Instant physical delivery available",
                    "Secure vault storage included"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Card className="bg-gradient-to-br from-yellow-100 to-forest-50 border-2 border-yellow-200">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-6 w-6 text-yellow-600" />
                    <span>Today's Rates</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-white rounded-lg">
                    <p className="text-sm text-muted-foreground">Gold Rate Today</p>
                    <p className="text-3xl font-bold text-yellow-600">₹6,850</p>
                    <p className="text-xs text-green-600 font-semibold mt-1">↑ ₹50 (+0.73%)</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg">
                    <p className="text-sm text-muted-foreground">Your Holdings</p>
                    <p className="text-2xl font-bold text-forest-900">5.32 grams</p>
                    <p className="text-xs text-muted-foreground mt-1">Worth ₹36,437</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg">
                    <p className="text-sm text-muted-foreground">Your Returns</p>
                    <p className="text-2xl font-bold text-green-600">+₹2,345 (+6.8%)</p>
                    <p className="text-xs text-muted-foreground mt-1">Since purchase</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
              What Our Investors Say
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Rajesh Kumar",
                quote: "Finally a safe way to invest in gold. Started with ₹1000, now at ₹15,000+ returns!",
                rating: 5
              },
              {
                name: "Priya Sharma",
                quote: "Transparent pricing and instant access. No middlemen, just pure gold investment.",
                rating: 5
              },
              {
                name: "Amit Patel",
                quote: "Great app for gold investment. Easy to buy, easy to track, easy to sell.",
                rating: 5
              }
            ].map((testimonial, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="text-base">{testimonial.name}</CardTitle>
                  <CardDescription>
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <span key={j}>⭐</span>
                    ))}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-yellow-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Gold Investment Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Invest in gold with complete transparency and safety. Begin your wealth-building journey now!
          </p>
        </div>
      </section>
    </div>
  )
}
