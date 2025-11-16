"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Satellite, Brain, Users, Package, Shield, CreditCard, ShoppingCart, ArrowRight, CheckCircle2, Zap } from "lucide-react"
import Link from "next/link"

export default function SmartFarmingPage() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="bg-gradient-to-br from-forest-600 via-forest-500 to-green-700 text-white py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-full border border-white/20">
              <Zap className="h-4 w-4" />
              <span className="text-sm font-medium">Smart Farming Technology</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Technology for Smarter, Profitable Farming
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Satellite monitoring, AI advisory, certified inputs, insurance, credit, and guaranteed buy-back—everything a modern farmer needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link href="/farmers">
                <Button size="lg" variant="outline" className="border-white text-forest-600 hover:bg-white/10 font-semibold">
                  For Farmers
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/buyers">
                <Button size="lg" variant="outline" className="border-white text-forest-600 hover:bg-white/10 font-semibold">
                  For Buyers
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="pt-8 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold">50K+</div>
                <p className="text-white/80 text-sm">Active Farmers</p>
              </div>
              <div>
                <div className="text-3xl font-bold">40%</div>
                <p className="text-white/80 text-sm">Avg Yield Increase</p>
              </div>
              <div>
                <div className="text-3xl font-bold">₹500Cr</div>
                <p className="text-white/80 text-sm">Transaction Value</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: FOR FARMERS - 7 Features */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-forest-900">Smart Farming for Farmers</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete platform to increase yields, reduce costs, and guarantee income—from soil testing to guaranteed buy-back
            </p>
          </div>

          {/* Feature 1: Soil Testing */}
          <div id="soil-testing" className="grid gap-12 lg:grid-cols-2 items-center mb-20">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-3 px-4 py-2 bg-sky-100 rounded-lg w-fit">
                <Satellite className="h-5 w-5 text-sky-600" />
                <span className="text-sm font-semibold text-sky-700">Satellite-Based</span>
              </div>
              <h3 className="text-3xl font-bold text-forest-900">Soil Testing</h3>
              <p className="text-lg text-muted-foreground">
                AI-powered satellite analysis provides accurate soil health in minutes, not days.
              </p>
              <ul className="space-y-3">
                {["Real-time nutrient levels (NPK, micronutrients)", "pH balance & organic matter", "Soil moisture & drainage mapping", "Personalized recommendations"].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-sky-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-sky-50 rounded-2xl p-8 border-2 border-sky-200 flex flex-col items-center justify-center">
              <Satellite className="h-16 w-16 text-sky-600 mb-4" />
              <p className="text-center text-sm font-semibold mb-4">Your Soil Analysis</p>
              <div className="space-y-2 text-xs text-center">
                <p>N: 45 kg/ha | P: 18 kg/ha | K: 220 kg/ha</p>
              </div>
            </div>
          </div>

          {/* Feature 2: Crop Monitoring */}
          <div id="crop-monitoring" className="grid gap-12 lg:grid-cols-2 items-center mb-20">
            <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-200 flex flex-col items-center justify-center order-2 lg:order-1">
              <Brain className="h-16 w-16 text-green-600 mb-4" />
              <p className="text-center text-sm font-semibold mb-4">Real-Time Monitoring</p>
              <div className="space-y-2 text-xs text-center">
                <p>Health: 92% | Risk: Low | Harvest: 28 days</p>
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center space-x-3 px-4 py-2 bg-green-100 rounded-lg w-fit">
                <Brain className="h-5 w-5 text-green-600" />
                <span className="text-sm font-semibold text-green-700">AI-Driven</span>
              </div>
              <h3 className="text-3xl font-bold text-forest-900">Crop Monitoring & Traceability</h3>
              <p className="text-lg text-muted-foreground">
                24/7 satellite monitoring with early disease detection and complete traceability.
              </p>
              <ul className="space-y-3">
                {["Live satellite imaging (every 2-5 days)", "AI disease detection & alerts", "Water stress monitoring", "Harvest readiness assessment", "Complete traceability timeline"].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Feature 3: Advisory */}
          <div id="advisory" className="grid gap-12 lg:grid-cols-2 items-center mb-20">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-3 px-4 py-2 bg-amber-100 rounded-lg w-fit">
                <Users className="h-5 w-5 text-amber-600" />
                <span className="text-sm font-semibold text-amber-700">Expert Support</span>
              </div>
              <h3 className="text-3xl font-bold text-forest-900">Agronomy Advisory</h3>
              <p className="text-lg text-muted-foreground">
                AI recommendations + certified agronomist guidance for optimal crop management.
              </p>
              <ul className="space-y-3">
                {["24/7 AI digital advisory", "On-ground expert visits", "Crop-specific recommendations", "Pest & disease management", "Fertilizer optimization"].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-3">
              <Card className="border-2 border-amber-200">
                <CardHeader><CardTitle className="text-base">📱 AI Advisory</CardTitle></CardHeader>
                <CardContent><p className="text-sm text-muted-foreground">Instant recommendations 24/7</p></CardContent>
              </Card>
              <Card className="border-2 border-forest-200">
                <CardHeader><CardTitle className="text-base">👨‍🌾 Field Expert</CardTitle></CardHeader>
                <CardContent><p className="text-sm text-muted-foreground">Certified agronomist support</p></CardContent>
              </Card>
            </div>
          </div>

          {/* Feature 4: Inputs */}
          <div id="inputs" className="grid gap-12 lg:grid-cols-2 items-center mb-20">
            <div className="bg-purple-50 rounded-2xl p-8 border-2 border-purple-200 flex flex-col items-center justify-center order-2 lg:order-1">
              <Package className="h-16 w-16 text-purple-600 mb-4" />
              <p className="text-center text-sm font-semibold mb-4">Product Catalogue</p>
              <div className="grid grid-cols-2 gap-2 w-full">
                <div className="bg-white rounded p-2 text-center text-xs font-medium">🌾 Fertilizers</div>
                <div className="bg-white rounded p-2 text-center text-xs font-medium">🌱 Bio</div>
                <div className="bg-white rounded p-2 text-center text-xs font-medium">♻️ Organic</div>
                <div className="bg-white rounded p-2 text-center text-xs font-medium">⭐ Premium</div>
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center space-x-3 px-4 py-2 bg-purple-100 rounded-lg w-fit">
                <Package className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-semibold text-purple-700">Certified Products</span>
              </div>
              <h3 className="text-3xl font-bold text-forest-900">Residue-Free Inputs</h3>
              <p className="text-lg text-muted-foreground">
                35+ certified residue-free fertilizers, pesticides & seeds—all tested & verified.
              </p>
              <ul className="space-y-3">
                {["35+ certified products", "Filter by crop & category", "Real-time pricing & inventory", "Direct farm delivery", "Quality guaranteed"].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/products">
                <Button className="bg-forest-600 hover:bg-forest-700 mt-6">Browse Products <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </Link>
            </div>
          </div>

          {/* Feature 5: Insurance */}
          <div id="insurance" className="grid gap-12 lg:grid-cols-2 items-center mb-20">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-3 px-4 py-2 bg-sky-100 rounded-lg w-fit">
                <Shield className="h-5 w-5 text-sky-600" />
                <span className="text-sm font-semibold text-sky-700">Weather Protection</span>
              </div>
              <h3 className="text-3xl font-bold text-forest-900">Parametric Insurance</h3>
              <p className="text-lg text-muted-foreground">
                Automatic payouts triggered by weather events—simple, transparent, no hassle.
              </p>
              <ul className="space-y-2">
                {["✓ Excess rain protection", "✓ Low/high humidity coverage", "✓ Temperature shock protection", "✓ Pest damage claims", "✓ Automatic payouts", "✓ Affordable premiums"].map((item, i) => (
                  <li key={i} className="text-muted-foreground text-sm">{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-sky-50 rounded-2xl p-6 border-2 border-sky-200 space-y-3">
              <div className="bg-white rounded p-3 border-l-4 border-sky-600">
                <p className="font-semibold text-sm">Rain damages your crop?</p>
                <p className="text-xs text-muted-foreground">Insurance automatically pays out</p>
              </div>
              <div className="bg-white rounded p-3 border-l-4 border-sky-600">
                <p className="font-semibold text-sm">No crop assessment needed</p>
                <p className="text-xs text-muted-foreground">Based on weather data, not damage</p>
              </div>
              <div className="bg-white rounded p-3 border-l-4 border-sky-600">
                <p className="font-semibold text-sm">Fast settlement</p>
                <p className="text-xs text-muted-foreground">Money in your account within days</p>
              </div>
            </div>
          </div>

          {/* Feature 6: Credit */}
          <div id="credit" className="grid gap-12 lg:grid-cols-2 items-center mb-20">
            <div className="bg-green-50 rounded-2xl p-6 border-2 border-green-200 space-y-3 order-2 lg:order-1">
              <div className="bg-white rounded p-3">
                <p className="font-semibold text-sm">💰 Up to ₹5 Lakh Loans</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="font-semibold text-sm">📝 Minimal Documents</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="font-semibold text-sm">⚡ Quick Approval (24-48hrs)</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="font-semibold text-sm">💳 Flexible Repayment</p>
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center space-x-3 px-4 py-2 bg-green-100 rounded-lg w-fit">
                <CreditCard className="h-5 w-5 text-green-600" />
                <span className="text-sm font-semibold text-green-700">Easy Credit</span>
              </div>
              <h3 className="text-3xl font-bold text-forest-900">Farm Credit Support</h3>
              <p className="text-lg text-muted-foreground">
                Quick, affordable loans for farm investments with minimal documentation.
              </p>
              <ul className="space-y-3">
                {["Up to ₹5 lakh loans", "Low interest rates (7-12%)", "Minimal eligibility requirements", "Quick approval (24-48 hours)", "Flexible repayment after harvest", "No collateral required"].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Feature 7: Buy-Back */}
          <div id="buyback" className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-3 px-4 py-2 bg-amber-100 rounded-lg w-fit">
                <ShoppingCart className="h-5 w-5 text-amber-600" />
                <span className="text-sm font-semibold text-amber-700">Direct Sale</span>
              </div>
              <h3 className="text-3xl font-bold text-forest-900">Buy-Back Program</h3>
              <p className="text-lg text-muted-foreground">
                Sell directly from farm gate. No middlemen, guaranteed prices, same-day payment.
              </p>
              <ul className="space-y-3">
                {["Direct farm gate pickup", "Guaranteed minimum pricing", "Same-day payment in account", "No quality disputes", "Bulk & individual options", "We arrange transportation"].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-50 rounded-2xl p-8 border-2 border-amber-200 space-y-3 text-center">
              <p className="text-2xl font-bold text-amber-600">You Produce</p>
              <p className="text-3xl">➜</p>
              <p className="text-2xl font-bold text-amber-600">We Buy</p>
              <p className="text-3xl">➜</p>
              <p className="text-2xl font-bold text-amber-600">You Get Paid</p>
              <p className="text-xs text-muted-foreground mt-4">Farm gate pickup • Fair pricing • Same-day payment</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FOR BUYERS */}
      <section className="py-24 bg-forest-50">
        <div className="container">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-forest-900">Smart Farming for Buyers</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Source verified, residue-free produce directly from farms with complete traceability
            </p>
          </div>

          <div className="grid gap-8 mb-16">
            {[
              { icon: "✓", title: "Verified Farmers", desc: "50,000+ certified farms with satellite monitoring" },
              { icon: "🏡", title: "Direct Farm Access", desc: "Buy directly—no middlemen, maximum freshness" },
              { icon: "📊", title: "Full Traceability", desc: "Complete growth history & real-time monitoring" },
              { icon: "🔒", title: "Residue-Free Certified", desc: "All produce certified with satellite verification" },
              { icon: "💰", title: "Competitive Pricing", desc: "Fair prices directly from farmers" },
              { icon: "📱", title: "Real-Time Tracking", desc: "Monitor crops & harvest readiness anytime" }
            ].map((feature, i) => (
              <Card key={i} className="border-2 border-forest-200 hover:shadow-lg transition-all">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-forest-900">{feature.title}</CardTitle>
                      <CardDescription className="mt-2">{feature.desc}</CardDescription>
                    </div>
                    <span className="text-3xl">{feature.icon}</span>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="bg-white rounded-2xl border-2 border-forest-200 p-12 text-center">
            <h3 className="text-3xl font-bold text-forest-900 mb-4">Start Sourcing Quality Produce</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Connect with verified farmers, track crops in real-time, source residue-free produce with complete transparency.
            </p>
            <Link href="/buyers">
              <Button size="lg" className="bg-forest-600 hover:bg-forest-700 font-semibold">
                Explore Farmer Network <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

