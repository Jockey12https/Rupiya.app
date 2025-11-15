"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DollarSign, Clock, CheckCircle, FileText, TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function LoansPage() {
  const loanTypes = [
    {
      title: "Personal Loans",
      description: "For any personal need - travel, education, repairs",
      amount: "Up to ₹5 lakh",
      rate: "From 12% p.a."
    },
    {
      title: "Agricultural Loans",
      description: "Support for seeds, equipment, and farming needs",
      amount: "Up to ₹2 lakh",
      rate: "From 8% p.a."
    },
    {
      title: "Emergency Loans",
      description: "Quick funds for urgent situations",
      amount: "Up to ₹50,000",
      rate: "From 18% p.a."
    },
    {
      title: "Business Loans",
      description: "Grow your business with working capital",
      amount: "Up to ₹10 lakh",
      rate: "From 10% p.a."
    }
  ]

  const features = [
    {
      icon: Clock,
      title: "Quick Approval",
      description: "Get approved in minutes, not days"
    },
    {
      icon: FileText,
      title: "Paperless Process",
      description: "100% digital application and verification"
    },
    {
      icon: DollarSign,
      title: "No Hidden Charges",
      description: "Transparent pricing with clear terms"
    },
    {
      icon: CheckCircle,
      title: "Collateral Free",
      description: "No need for physical securities"
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 to-forest-600 text-white py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4">
              Loans When You Need Them
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Need Money Urgently?
            </h1>
            <p className="text-xl text-white/90">
              Get instant personal loans with no paperwork, no hidden fees, and easy EMIs.
            </p>
            <Button size="lg" variant="secondary" className="mt-6 bg-white text-green-600 hover:bg-green-50">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Loan Types */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
              Loan Options for Everyone
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the loan type that fits your needs
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {loanTypes.map((loan, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow border-2 border-green-200">
                <CardHeader>
                  <CardTitle className="text-lg">{loan.title}</CardTitle>
                  <CardDescription>{loan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Amount</span>
                      <span className="font-semibold text-green-600">{loan.amount}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Interest Rate</span>
                      <span className="font-semibold text-green-600">{loan.rate}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50" size="sm">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-green-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
              Why Choose Rupiya Loans?
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <Card key={i} className="text-center">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-base">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
                Simple 4-Step Process
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: "Apply Online",
                  description: "Fill out simple form with basic information",
                  time: "2 minutes"
                },
                {
                  step: 2,
                  title: "KYC Verification",
                  description: "Digital verification without visiting branch",
                  time: "5 minutes"
                },
                {
                  step: 3,
                  title: "Get Approved",
                  description: "Instant approval based on your profile",
                  time: "Instant"
                },
                {
                  step: 4,
                  title: "Receive Funds",
                  description: "Money credited to your account directly",
                  time: "Same day"
                }
              ].map((item) => (
                <Card key={item.step} className="border-l-4 border-l-green-600">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="h-12 w-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-lg">
                          {item.step}
                        </div>
                        <div>
                          <CardTitle>{item.title}</CardTitle>
                          <CardDescription>{item.description}</CardDescription>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-green-600">{item.time}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Loan Calculator */}
      <section className="py-20 bg-green-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-12 text-center">
              EMI Calculator
            </h2>

            <Card className="border-2 border-green-200">
              <CardHeader>
                <CardTitle>Calculate Your EMI</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-3">
                  <div>
                    <label className="text-sm font-semibold text-forest-900">Loan Amount</label>
                    <p className="text-2xl font-bold text-green-600 mt-2">₹1,00,000</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-forest-900">Interest Rate</label>
                    <p className="text-2xl font-bold text-green-600 mt-2">12% p.a.</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-forest-900">Tenure</label>
                    <p className="text-2xl font-bold text-green-600 mt-2">12 months</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border-2 border-green-200">
                  <p className="text-sm text-muted-foreground">Your Monthly EMI</p>
                  <p className="text-4xl font-bold text-green-600 mt-2">₹8,885</p>
                  <p className="text-xs text-muted-foreground mt-2">Total Interest: ₹6,620 | Total Amount: ₹1,06,620</p>
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700 h-12">
                  Get Personalized Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-6">
                  Eligibility Criteria
                </h2>
                <ul className="space-y-4">
                  {[
                    "Age: 21-65 years",
                    "Monthly income: ₹15,000+",
                    "Employment: Salaried or self-employed",
                    "CIBIL Score: 650+",
                    "No active defaults",
                    "Valid bank account"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Card className="bg-gradient-to-br from-green-50 to-forest-50 border-2 border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <DollarSign className="h-6 w-6 text-green-600" />
                    <span>Loan Benefits</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-white rounded-lg">
                    <p className="font-semibold text-sm text-forest-900">Processing Fee</p>
                    <p className="text-lg font-bold text-green-600">0%</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg">
                    <p className="font-semibold text-sm text-forest-900">Pre-payment Penalty</p>
                    <p className="text-lg font-bold text-green-600">Allowed Anytime</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg">
                    <p className="font-semibold text-sm text-forest-900">Lifetime Validity</p>
                    <p className="text-lg font-bold text-green-600">Unlimited Reuse</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-green-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-forest-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                { q: "How fast can I get the loan?", a: "Loans are typically approved within 1-2 hours and disbursed same day." },
                { q: "What are the eligibility criteria?", a: "Minimum income ₹15,000/month, age 21-65, CIBIL 650+, and valid employment." },
                { q: "Is documentation required?", a: "Minimal - just ID, address proof, bank statements, and income proof uploaded digitally." },
                { q: "Can I repay early?", a: "Yes, you can repay anytime without any prepayment penalty." },
                { q: "What's the maximum loan amount?", a: "Personal loans up to ₹5 lakh depending on your income and eligibility." }
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
      <section className="py-20 bg-green-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Your Loan Now
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Quick approval, instant disbursement, and flexible repayment terms. Apply today!
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-green-50">
            Apply for Loan
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}
