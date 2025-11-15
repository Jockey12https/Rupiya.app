"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Leaf, TrendingUp, Users, Target, Calculator, ArrowRight, CheckCircle, Zap, Droplet, BarChart3, HelpCircle, ChevronDown } from "lucide-react"
import Link from "next/link"

export default function CarbonCreditsPage() {
  const [hectares, setHectares] = useState(1)
  const estimatedCredits = hectares * 2.5 // Example: 2.5 credits per hectare
  const estimatedIncome = estimatedCredits * 800 // ₹800 per credit
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0)

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-forest-600 to-forest-800 text-white py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4">
              मिट्टी बचाओ, उपज बढ़ाओ, पैसे कमाओ
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Carbon Credits
            </h1>
            <p className="text-xl text-white/90">
              Turn your regenerative farming practices into verified income. Earn ₹800 for every tonne of CO₂ you store in your soil.
            </p>
          </div>
        </div>
      </section>

      {/* What are Carbon Credits - Farmer Friendly */}
      <section id="what-are-credits" className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
                What is a Carbon Credit?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A simple way to measure and earn from the carbon your farm stores
              </p>
            </div>

            <Card className="mb-12 border-forest-200">
              <CardContent className="pt-6">
                <div className="bg-gradient-to-r from-forest-50 to-sky-50 p-8 rounded-lg">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="text-4xl">🌍</div>
                    <div>
                      <p className="text-xl font-bold text-forest-900">Simple Definition:</p>
                      <p className="text-lg text-forest-800">
                        <span className="font-semibold">1 Carbon Credit</span> = Permission to emit 1 tonne of CO₂
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">🚜</div>
                    <div>
                      <p className="text-xl font-bold text-forest-900">For Farmers:</p>
                      <p className="text-lg text-forest-800">
                        <span className="font-semibold">1 Credit You Generate</span> = 1 tonne of CO₂ your farm removed from atmosphere
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-3 mb-12">
              <Card>
                <CardHeader>
                  <div className="h-16 w-16 rounded-full bg-forest-100 mx-auto mb-4 flex items-center justify-center">
                    <Leaf className="h-8 w-8 text-forest-600" />
                  </div>
                  <CardTitle>Your Farm</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    You adopt regenerative farming practices like composting, crop rotation, and minimal tilling
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="h-16 w-16 rounded-full bg-sky-100 mx-auto mb-4 flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-sky-600" />
                  </div>
                  <CardTitle>Carbon Stored</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Soil stores more carbon through increased organic matter and deeper root systems
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="h-16 w-16 rounded-full bg-beige-200 mx-auto mb-4 flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-beige-700" />
                  </div>
                  <CardTitle>You Earn ₹800</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    For every verified tonne of CO₂ stored, receive ₹800 additional annual income
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Principles of Regenerative Farming */}
      <section className="py-20 bg-beige-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
                6 Key Principles of Regenerative Farming
              </h2>
              <p className="text-lg text-muted-foreground">
                How regenerative agriculture stores carbon and builds healthier soil
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 mb-12">
              <Card className="hover:shadow-lg transition">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 rounded-full bg-forest-600 text-white flex items-center justify-center flex-shrink-0">
                      <span className="font-bold">1</span>
                    </div>
                    <CardTitle>Do Not Disturb</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Minimize chemical and mechanical disturbance. Avoid excessive tilling and chemicals that kill soil microorganisms. This preserves soil structure and carbon stores.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 rounded-full bg-forest-600 text-white flex items-center justify-center flex-shrink-0">
                      <span className="font-bold">2</span>
                    </div>
                    <CardTitle>Armor the Soil Surface</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Use mulch, crop residues, and cover crops to protect soil. This prevents erosion, retains moisture, and adds organic matter which stores carbon.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 rounded-full bg-forest-600 text-white flex items-center justify-center flex-shrink-0">
                      <span className="font-bold">3</span>
                    </div>
                    <CardTitle>Know Your Context</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Understand local soil, water, and climate. Tailor practices to your environment. What works elsewhere may need adaptation for your farm.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 rounded-full bg-forest-600 text-white flex items-center justify-center flex-shrink-0">
                      <span className="font-bold">4</span>
                    </div>
                    <CardTitle>Integrate Animals</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Animals and plants enrich each other. Rotational grazing improves soil, spreads nutrients, and increases biodiversity. Both benefit from this integration.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 rounded-full bg-forest-600 text-white flex items-center justify-center flex-shrink-0">
                      <span className="font-bold">5</span>
                    </div>
                    <CardTitle>Keep Living Roots in Soil</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Year-round living roots through cover crops store carbon via photosynthesis. Plants feed carbon underground to build soil microbiomes and increase soil fertility.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 rounded-full bg-forest-600 text-white flex items-center justify-center flex-shrink-0">
                      <span className="font-bold">6</span>
                    </div>
                    <CardTitle>Mix Species</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Diversity boosts ecosystem resilience. Intercropping, agroforestry, and crop rotation increase biodiversity, improve soil health, and maximize carbon storage.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-forest-50 to-sky-50">
              <CardHeader>
                <CardTitle className="text-xl">Why These Practices Matter?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-forest-600 flex-shrink-0 mt-1" />
                  <p><span className="font-semibold">Healthier Soil:</span> More microorganisms, better structure, improved water retention</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-forest-600 flex-shrink-0 mt-1" />
                  <p><span className="font-semibold">Higher Yields:</span> Healthy soil produces more nutritious crops with better yields</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-forest-600 flex-shrink-0 mt-1" />
                  <p><span className="font-semibold">Carbon Storage:</span> Organic matter and root systems store carbon dioxide, reducing atmospheric CO₂</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-forest-600 flex-shrink-0 mt-1" />
                  <p><span className="font-semibold">Additional Income:</span> Verified carbon credits = ₹800 per tonne × your annual storage</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How Soil Organic Carbon Increases */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
                How Soil Organic Carbon Increases
              </h2>
              <p className="text-lg text-muted-foreground">
                The science behind carbon storage in regenerative farming
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 mb-12">
              <div>
                <Card className="mb-4">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center space-x-2">
                      <Droplet className="h-5 w-5 text-sky-600" />
                      <span>Year 1-2: Foundation</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p>• Reduce tilling and chemical inputs</p>
                    <p>• Add cover crops and mulch</p>
                    <p>• Build beneficial microbiomes</p>
                    <p className="font-semibold text-forest-600">Carbon increase: 0.5-1 tonne/hectare</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center space-x-2">
                      <TrendingUp className="h-5 w-5 text-forest-600" />
                      <span>Year 3-5: Growth</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p>• Soil biology thriving</p>
                    <p>• Root systems deepening</p>
                    <p>• Organic matter accumulating</p>
                    <p className="font-semibold text-forest-600">Carbon increase: 1-1.5 tonnes/hectare/year</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gradient-to-br from-forest-50 to-sky-50">
                <CardHeader>
                  <CardTitle>Carbon Storage Process</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="h-8 w-8 rounded-full bg-forest-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                      <div>
                        <p className="font-semibold">Photosynthesis</p>
                        <p className="text-sm text-muted-foreground">Plants capture CO₂ from air using sunlight</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="h-8 w-8 rounded-full bg-forest-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                      <div>
                        <p className="font-semibold">Root Transfer</p>
                        <p className="text-sm text-muted-foreground">Plants send 40-60% of carbon below ground</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="h-8 w-8 rounded-full bg-forest-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                      <div>
                        <p className="font-semibold">Soil Storage</p>
                        <p className="text-sm text-muted-foreground">Carbon becomes organic matter in soil</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="h-8 w-8 rounded-full bg-forest-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                      <div>
                        <p className="font-semibold">Long-term Sequestration</p>
                        <p className="text-sm text-muted-foreground">Carbon locked in soil for 10+ years</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-forest-200">
              <CardHeader>
                <CardTitle>Measurement & Verification</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-forest-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Satellite Monitoring:</p>
                    <p className="text-sm text-muted-foreground">Regular satellite imagery tracks vegetation and soil health changes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-forest-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Soil Sampling:</p>
                    <p className="text-sm text-muted-foreground">Annual lab testing measures soil organic carbon percentage</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-forest-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Credit Calculation:</p>
                    <p className="text-sm text-muted-foreground">Verified carbon storage converted to credits, with 80% paid annually, 20% reserved for certification</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Farmer Income Calculator - Enhanced */}
      <section id="rewards" className="py-20 bg-beige-50">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
                Calculate Your Potential Income
              </h2>
              <p className="text-lg text-muted-foreground">
                See exactly how much you can earn from carbon credits
              </p>
            </div>

            <Card className="bg-gradient-to-br from-forest-50 to-sky-50 mb-8">
              <CardHeader>
                <CardTitle>Income Estimator</CardTitle>
                <CardDescription>Based on 2.5 tonnes CO₂ per hectare annually (industry average)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-3 block">
                    Your Farm Size (Hectares)
                  </label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="range"
                      min="1"
                      max="100"
                      value={hectares}
                      onChange={(e) => setHectares(Number(e.target.value))}
                      className="flex-1"
                    />
                    <span className="text-2xl font-bold text-forest-600 min-w-fit">{hectares} ha</span>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <Card className="bg-white border-forest-200">
                    <CardContent className="pt-6">
                      <p className="text-sm text-muted-foreground mb-2">Carbon Stored/Year</p>
                      <p className="text-3xl font-bold text-forest-600">
                        {(hectares * 2.5).toFixed(1)}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">tonnes CO₂</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border-forest-200">
                    <CardContent className="pt-6">
                      <p className="text-sm text-muted-foreground mb-2">Credits Generated</p>
                      <p className="text-3xl font-bold text-forest-600">
                        {estimatedCredits.toFixed(1)}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">annual credits</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border-forest-200">
                    <CardContent className="pt-6">
                      <p className="text-sm text-muted-foreground mb-2">Your Income</p>
                      <p className="text-3xl font-bold text-forest-600">
                        ₹{estimatedIncome.toLocaleString('en-IN')}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">per year (80% paid)</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-white p-4 rounded-lg border border-forest-200">
                  <p className="text-sm text-muted-foreground mb-2">Based on:</p>
                  <div className="grid grid-cols-3 gap-4 text-xs">
                    <div>
                      <p className="font-semibold text-forest-900">2.5 tonnes</p>
                      <p className="text-muted-foreground">CO₂/ha/year</p>
                    </div>
                    <div>
                      <p className="font-semibold text-forest-900">₹800</p>
                      <p className="text-muted-foreground">per credit</p>
                    </div>
                    <div>
                      <p className="font-semibold text-forest-900">80%</p>
                      <p className="text-muted-foreground">paid annually</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reward System & Payment Details */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
                Reward System: How You Get Paid
              </h2>
              <p className="text-lg text-muted-foreground">
                Transparent payment structure that rewards regenerative farming
              </p>
            </div>

            <Card className="mb-8 border-forest-200">
              <CardHeader>
                <CardTitle className="text-xl">Payment Structure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="bg-gradient-to-br from-forest-50 to-transparent p-6 rounded-lg">
                    <p className="text-sm font-semibold text-forest-600 mb-2">Base Payment</p>
                    <p className="text-3xl font-bold text-forest-900">€8/tonne</p>
                    <p className="text-sm text-muted-foreground mt-2">Minimum guaranteed price per tonne of CO₂</p>
                  </div>
                  <div className="bg-gradient-to-br from-sky-50 to-transparent p-6 rounded-lg">
                    <p className="text-sm font-semibold text-sky-600 mb-2">Country Bonus</p>
                    <p className="text-2xl font-bold text-sky-900">Up to 30% ↑</p>
                    <p className="text-sm text-muted-foreground mt-2">Additional bonus based on your country & practices</p>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <p className="font-semibold text-forest-900 mb-4">Example: 10 Hectares Farm</p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span>Carbon stored per year:</span>
                      <span className="font-semibold">25 tonnes CO₂</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span>Base payment (€8/tonne × 25):</span>
                      <span className="font-semibold">€200</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span>With 20% country bonus:</span>
                      <span className="font-semibold">€240</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-forest-100 rounded font-semibold">
                      <span>Annual income to farmer (80%):</span>
                      <span className="text-forest-700">₹15,744* (~€192)</span>
                    </div>
                    <p className="text-xs text-muted-foreground">*Converted at current exchange rate. 20% reserved for certification assurance.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Step 1: Measure</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Satellite and soil testing measure baseline and annual carbon increase
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Step 2: Verify</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Independent verification certifies the carbon increase
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Step 3: Convert & Pay</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Verified carbon converted to credits, 80% paid annually
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br from-forest-50 to-sky-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
                Trusted Partnership: Carboneg (Europe)
              </h2>
              <p className="text-lg text-muted-foreground">
                Industry-leading carbon credit verification and marketplace
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mb-8">
              <Card className="hover:shadow-lg transition">
                <CardHeader>
                  <Zap className="h-8 w-8 text-forest-600 mb-4" />
                  <CardTitle>Verified Standards</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    International verification standards (Verra, Gold Standard) ensure credits are legitimate and tradable globally
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition">
                <CardHeader>
                  <BarChart3 className="h-8 w-8 text-sky-600 mb-4" />
                  <CardTitle>Global Marketplace</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Access to European carbon credit buyers and traders ensures competitive pricing for your credits
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition">
                <CardHeader>
                  <CheckCircle className="h-8 w-8 text-beige-700 mb-4" />
                  <CardTitle>Secure Payments</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Reliable payment processing with transparent terms and regular communication
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white border-forest-200">
              <CardHeader>
                <CardTitle>Why Carboneg?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-forest-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Experience:</p>
                    <p className="text-sm text-muted-foreground">10+ years in carbon credit market across Europe</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-forest-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Farmer-First Approach:</p>
                    <p className="text-sm text-muted-foreground">70% of revenue from carbon sales goes directly to farmers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-forest-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Sustainability Focus:</p>
                    <p className="text-sm text-muted-foreground">Committed to regenerative agriculture and environmental impact</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-forest-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Technology-Enabled:</p>
                    <p className="text-sm text-muted-foreground">Satellite monitoring, data analytics, and transparent dashboards</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Growth Vision & Commitment */}
      <section className="py-20 bg-gradient-to-br from-forest-600 to-forest-800 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Commitment to Scale Regenerative Farming
              </h2>
              <p className="text-xl text-white/90">
                Over 3 years, we're committed to onboarding farmers across India
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 mb-12">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <Target className="h-8 w-8 text-white" />
                    <CardTitle className="text-2xl text-white">5,00,000 Hectares</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-white/90">
                    Target: Convert 5 lakh hectares to regenerative farming
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span className="font-semibold">1,25,000 ha (25%)</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                      <div className="bg-white h-3 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                  <p className="text-sm text-white/70">
                    Target timeline: 3 years | Status: On track
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <Users className="h-8 w-8 text-white" />
                    <CardTitle className="text-2xl text-white">50,000+ Farmers</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-white/90">
                    Target: Train and onboard 50,000+ farmers
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span className="font-semibold">10,000 farmers (20%)</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                      <div className="bg-white h-3 rounded-full" style={{ width: '20%' }}></div>
                    </div>
                  </div>
                  <p className="text-sm text-white/70">
                    Target timeline: 3 years | Status: On track
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white/10 backdrop-blur border-white/20 mb-8">
              <CardContent className="pt-6">
                <div className="grid gap-6 md:grid-cols-3 text-center">
                  <div>
                    <p className="text-3xl font-bold mb-2">Year 1</p>
                    <p className="text-white/80">
                      <strong>10,000 hectares</strong><br />
                      <strong>5,000 farmers</strong><br />
                      Training & setup
                    </p>
                  </div>
                  <div className="border-l border-r border-white/20">
                    <p className="text-3xl font-bold mb-2">Year 2</p>
                    <p className="text-white/80">
                      <strong>2,50,000 hectares</strong><br />
                      <strong>20,000 farmers</strong><br />
                      Scaling & support
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold mb-2">Year 3</p>
                    <p className="text-white/80">
                      <strong>5,00,000 hectares</strong><br />
                      <strong>50,000 farmers</strong><br />
                      Full impact realized
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Clear answers to common questions about carbon credits
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "What is a carbon credit and how does it work?",
                  a: "A carbon credit represents 1 tonne of CO₂ removed or reduced from the atmosphere. When you practice regenerative farming, your soil stores carbon. We measure this annual increase, verify it through satellite and lab testing, and convert it into tradable credits. You earn ₹800 per credit."
                },
                {
                  q: "How much can I earn from my farm?",
                  a: "On average, regenerative farms store 2-3 tonnes of CO₂ per hectare per year. At ₹800 per tonne, a 10-hectare farm can earn ₹16,000-24,000 annually. Exact earnings depend on your farm's soil condition, practices, and location. Use our calculator to estimate your potential."
                },
                {
                  q: "Is there a minimum farm size requirement?",
                  a: "No minimum farm size! Whether you own 0.5 hectares or 100 hectares, you can participate. We encourage smallholder farmers to join and benefit from carbon credit income."
                },
                {
                  q: "How is the carbon measured and verified?",
                  a: "We use satellite monitoring to track vegetation and soil health changes. Annually, we conduct lab soil testing to measure organic carbon percentage. This data is verified by international certification standards (Verra, Gold Standard) to ensure authenticity."
                },
                {
                  q: "When do I get paid?",
                  a: "After carbon storage is verified (annually), we pay 80% of earnings immediately. The remaining 20% is held as a certification reserve and paid 5 years later, ensuring long-term commitment to regenerative practices."
                },
                {
                  q: "What if my soil carbon decreases one year?",
                  a: "Natural variation is normal. We calculate rewards based on year-over-year increase. If carbon is lower than the previous year, no payment is made that year. Payment resumes when carbon increases again."
                },
                {
                  q: "Do I need to change my crop types?",
                  a: "No! You can continue growing the same crops. Regenerative practices work alongside existing cropping patterns. Cover crops, reduced tilling, composting, and crop rotation enhance your yields while storing carbon."
                },
                {
                  q: "What is Carboneg and why are they our partner?",
                  a: "Carboneg is a Europe-based company specializing in carbon credit verification and trading. They've worked with 10,000+ farmers across Europe. We partnered with them for their transparent processes, farmer-first approach (70% of revenue to farmers), and access to global carbon markets."
                },
                {
                  q: "Is this program available only in certain regions?",
                  a: "We're starting in major agricultural regions across India and expanding based on farmer interest and soil conditions. Check our app or website to see if your region is covered. We're gradually expanding to all states."
                },
                {
                  q: "What support do you provide to farmers?",
                  a: "We provide free training on regenerative practices, satellite monitoring dashboards, soil testing assistance, monthly advisories, and technical support. You're not alone in this journey - we have expert agronomists supporting every step."
                }
              ].map((item, index) => (
                <Card 
                  key={index}
                  className="cursor-pointer hover:shadow-md transition overflow-hidden"
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between space-x-3">
                      <CardTitle className="text-base text-left">{item.q}</CardTitle>
                      <ChevronDown
                        className={`h-5 w-5 text-forest-600 flex-shrink-0 transition-transform ${expandedFAQ === index ? 'rotate-180' : ''}`}
                      />
                    </div>
                  </CardHeader>
                  {expandedFAQ === index && (
                    <CardContent className="pt-0 text-sm text-muted-foreground border-t">
                      {item.a}
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>

            <Card className="mt-8 bg-gradient-to-br from-forest-50 to-sky-50">
              <CardHeader>
                <CardTitle>Still have questions?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Our team is here to help. Reach out through the Rupiya app or contact us directly.
                </p>
                <Button className="w-full bg-forest-600 hover:bg-forest-700">
                  Contact Carbon Credits Team
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}


