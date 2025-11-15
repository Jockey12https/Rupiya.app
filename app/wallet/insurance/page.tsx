"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Heart, Zap, Home, Smartphone, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function InsurancePage() {
  const insuranceTypes = [
    {
      title: "Health Insurance",
      description: "Comprehensive health coverage for you and your family",
      icon: Heart,
      coverage: "Up to ₹25 lakh"
    },
    {
      title: "Motor Insurance",
      description: "Third-party and comprehensive car insurance",
      icon: Zap,
      coverage: "Full coverage"
    },
    {
      title: "Home Insurance",
      description: "Protect your home and belongings",
      icon: Home,
      coverage: "Up to ₹50 lakh"
    },
    {
      title: "Device Insurance",
      description: "Cover your phone, laptop, and electronics",
      icon: Smartphone,
      coverage: "Accident damage"
    }
  ]

  const benefits = [
    "No waiting period for claims",
    "Instant claim settlement",
    "24/7 customer support",
    "Cashless hospitalization",
    "Online policy management",
    "Easy renewal process"
  ]

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-600 to-forest-600 text-white py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4">
              Comprehensive Coverage
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Insurance Made Simple
            </h1>
            <p className="text-xl text-white/90">
              Protect what matters most. Health, home, vehicle, and more - all in one app.
            </p>
            <Button size="lg" variant="secondary" className="mt-6 bg-white text-red-600 hover:bg-red-50">
              Get Insured Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Insurance Types */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
              Insurance Products
            </h2>
            <p className="text-lg text-muted-foreground">
              Wide range of coverage options
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {insuranceTypes.map((insurance, i) => {
              const Icon = insurance.icon
              return (
                <Card key={i} className="hover:shadow-lg transition-shadow border-2 border-red-200">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-red-600" />
                    </div>
                    <CardTitle>{insurance.title}</CardTitle>
                    <CardDescription className="text-red-600 font-semibold">{insurance.coverage}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{insurance.description}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      View Plans
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-red-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
                Simple Claims Process
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: "Report Claim",
                  description: "Submit claim through app with supporting documents",
                  time: "2 minutes"
                },
                {
                  step: 2,
                  title: "Verification",
                  description: "Our team reviews and verifies your claim",
                  time: "24 hours"
                },
                {
                  step: 3,
                  title: "Approval",
                  description: "Claim approved and processed for settlement",
                  time: "48 hours"
                },
                {
                  step: 4,
                  title: "Settlement",
                  description: "Funds credited to your account instantly",
                  time: "Immediate"
                }
              ].map((item) => (
                <Card key={item.step} className="border-l-4 border-l-red-600">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="h-12 w-12 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-lg">
                          {item.step}
                        </div>
                        <div>
                          <CardTitle>{item.title}</CardTitle>
                          <CardDescription>{item.description}</CardDescription>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-red-600">{item.time}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-6">
                  Why Choose Us?
                </h2>
                <ul className="space-y-4">
                  {benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Card className="bg-gradient-to-br from-red-50 to-forest-50 border-2 border-red-200">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-6 w-6 text-red-600" />
                    <span>Coverage Details</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-white rounded-lg">
                    <p className="font-semibold text-sm text-forest-900">Premium as low as</p>
                    <p className="text-2xl font-bold text-red-600">₹99/month</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg">
                    <p className="font-semibold text-sm text-forest-900">Claim Settlement</p>
                    <p className="text-lg font-bold text-forest-900">99% Success Rate</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg">
                    <p className="font-semibold text-sm text-forest-900">Customer Rating</p>
                    <p className="text-lg font-bold text-forest-900">4.8/5 ⭐</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Comparison */}
      <section className="py-20 bg-red-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
              Health Insurance Plans
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the plan that fits your needs
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Basic",
                price: "₹999",
                features: ["₹5 lakh coverage", "No waiting period", "Outpatient cover", "Basic add-ons"]
              },
              {
                name: "Standard",
                price: "₹1,499",
                features: ["₹15 lakh coverage", "Instant cashless", "Full add-ons", "Family coverage"],
                popular: true
              },
              {
                name: "Premium",
                price: "₹2,499",
                features: ["₹25 lakh coverage", "International cover", "Lifetime renewability", "Concierge service"]
              }
            ].map((plan, i) => (
              <Card key={i} className={`border-2 ${plan.popular ? "border-red-600 bg-red-50" : "border-red-200"}`}>
                <CardHeader>
                  {plan.popular && (
                    <div className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold inline-block mb-2 w-fit">
                      Most Popular
                    </div>
                  )}
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription className="text-2xl font-bold text-red-600">{plan.price}/month</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-red-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={plan.popular ? "w-full bg-red-600 hover:bg-red-700" : "w-full"} variant={plan.popular ? "default" : "outline"}>
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Protect Your Future Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get comprehensive insurance coverage with guaranteed claim settlement
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-red-50">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}
