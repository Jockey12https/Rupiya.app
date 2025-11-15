"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Leaf, TrendingUp, Users, Target, Calculator, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CarbonCreditsPage() {
  const [hectares, setHectares] = useState(1)
  const estimatedCredits = hectares * 2.5 // Example: 2.5 credits per hectare
  const estimatedIncome = estimatedCredits * 800 // ₹800 per credit

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-forest-600 to-forest-800 text-white py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4">
              पर्यावरण बचाओ पैसे कमाओ
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              CARBON CREDITS
            </h1>
            <p className="text-xl text-white/90">
              Earn income while saving the environment through regenerative agriculture
            </p>
          </div>
        </div>
      </section>

      {/* What are Carbon Credits */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
                What is a Carbon Credit?
              </h2>
              <p className="text-lg text-muted-foreground">
                Simple, visual explanation of carbon credits
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <div className="h-16 w-16 rounded-full bg-forest-100 mx-auto mb-4 flex items-center justify-center">
                    <Leaf className="h-8 w-8 text-forest-600" />
                  </div>
                  <CardTitle>1 Credit</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-forest-600">=</p>
                </CardContent>
              </Card>

              <Card className="text-center border-forest-300">
                <CardHeader>
                  <div className="h-16 w-16 rounded-full bg-sky-100 mx-auto mb-4 flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-sky-600" />
                  </div>
                  <CardTitle>1 Tonne CO₂</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Equivalent to removing 1 tonne of carbon dioxide from the atmosphere
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="h-16 w-16 rounded-full bg-beige-200 mx-auto mb-4 flex items-center justify-center">
                    <Target className="h-8 w-8 text-beige-700" />
                  </div>
                  <CardTitle>Verified</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Certified and verified by international standards
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Visual Diagram */}
            <Card className="bg-gradient-to-br from-forest-50 to-beige-50">
              <CardHeader>
                <CardTitle>Carbon Credit Cycle</CardTitle>
                <CardDescription>How regenerative agriculture creates carbon credits</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-full bg-forest-600 text-white flex items-center justify-center font-bold">
                      1
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">Regenerative Practices</p>
                      <p className="text-sm text-muted-foreground">Farmers adopt sustainable farming methods</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-full bg-forest-600 text-white flex items-center justify-center font-bold">
                      2
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">Soil Carbon Storage</p>
                      <p className="text-sm text-muted-foreground">Carbon is stored in soil through root systems</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-full bg-forest-600 text-white flex items-center justify-center font-bold">
                      3
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">Verification</p>
                      <p className="text-sm text-muted-foreground">Satellite monitoring verifies carbon storage</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-full bg-forest-600 text-white flex items-center justify-center font-bold">
                      4
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">Credit Generation</p>
                      <p className="text-sm text-muted-foreground">Carbon credits are generated and certified</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-full bg-forest-600 text-white flex items-center justify-center font-bold">
                      5
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">Farmer Income</p>
                      <p className="text-sm text-muted-foreground">Farmers receive ₹800 per verified credit</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How Regenerative Agriculture Works */}
      <section className="py-20 bg-beige-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
                How Regenerative Agriculture Increases Soil Carbon
              </h2>
              <p className="text-lg text-muted-foreground">
                Visual explanation of soil carbon storage
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Soil Animation Layer</CardTitle>
                  <CardDescription>Understanding carbon storage</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="h-32 rounded-lg bg-gradient-to-b from-forest-200 via-forest-300 to-forest-400 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-white font-semibold">Soil Layers</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Carbon is stored in different soil layers through organic matter decomposition and root systems.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Root Carbon Storage</CardTitle>
                  <CardDescription>Visual representation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="h-32 rounded-lg bg-gradient-to-t from-forest-200 via-forest-300 to-forest-400 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Leaf className="h-12 w-12 text-white" />
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Plant roots store carbon deep in the soil, creating long-term carbon sequestration.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Farmer Income Calculator */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
                Farmer Income Calculator
              </h2>
              <p className="text-lg text-muted-foreground">
                Each verified carbon credit = ₹800
              </p>
            </div>

            <Card className="bg-gradient-to-br from-forest-50 to-beige-50">
              <CardHeader>
                <CardTitle>Calculate Your Potential Income</CardTitle>
                <CardDescription>Enter your farm size to estimate earnings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Farm Size (Hectares)
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={hectares}
                    onChange={(e) => setHectares(Number(e.target.value))}
                    className="w-full px-4 py-2 border rounded-md"
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Estimated Credits</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold text-forest-600">
                        {estimatedCredits.toFixed(1)}
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Credits per year
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-forest-300">
                    <CardHeader>
                      <CardTitle className="text-lg">Estimated Income</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold text-forest-600">
                        ₹{estimatedIncome.toLocaleString('en-IN')}
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Per year from carbon credits
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Button className="w-full bg-forest-600 hover:bg-forest-700">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="py-20 bg-beige-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-6">
              Partnership with Carboneg (Europe)
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Trusted partnership for carbon credit verification and trading
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Verified</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    International verification standards
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Trusted</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    European carbon credit marketplace
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Reliable</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Secure transactions and payments
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Vision */}
      <section className="py-20 bg-gradient-to-br from-forest-600 to-forest-800 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Growth Vision
              </h2>
              <p className="text-xl text-white/90">
                Train and onboard farmers for sustainable agriculture
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <Target className="h-8 w-8" />
                    <CardTitle className="text-2xl">5,00,000 Hectares</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90 mb-4">
                    Target coverage area for regenerative farming
                  </p>
                  <div className="w-full bg-white/20 rounded-full h-4">
                    <div className="bg-white h-4 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                  <p className="text-sm text-white/70 mt-2">25% Progress</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <Users className="h-8 w-8" />
                    <CardTitle className="text-2xl">50,000+ Farmers</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90 mb-4">
                    Target number of farmers in 3 years
                  </p>
                  <div className="w-full bg-white/20 rounded-full h-4">
                    <div className="bg-white h-4 rounded-full" style={{ width: '20%' }}></div>
                  </div>
                  <p className="text-sm text-white/70 mt-2">20% Progress</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg text-white/90 mb-6">
                Timeline: 3 Years
              </p>
              <Button variant="secondary" size="lg" className="bg-white text-forest-600 hover:bg-beige-50">
                Join the Movement
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

