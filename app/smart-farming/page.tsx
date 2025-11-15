"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Satellite, Brain, Users, Package, Shield, CreditCard, ShoppingCart, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function SmartFarmingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-forest-50 to-beige-50 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-forest-900">
              Residue-Free Farming
            </h1>
            <p className="text-xl text-muted-foreground">
              Complete Digital Solution for Modern Farmers
            </p>
            <p className="text-lg text-muted-foreground">
              From satellite monitoring to buy-back programs, everything you need for sustainable, profitable farming.
            </p>
          </div>
        </div>
      </section>

      {/* Features Tabs */}
      <section className="py-20 bg-white">
        <div className="container">
          <Tabs defaultValue="soil-testing" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              <TabsTrigger value="soil-testing">Soil Testing</TabsTrigger>
              <TabsTrigger value="monitoring">Crop Monitoring</TabsTrigger>
              <TabsTrigger value="advisory">Advisory</TabsTrigger>
              <TabsTrigger value="inputs">Inputs</TabsTrigger>
            </TabsList>

            {/* Soil Testing */}
            <TabsContent value="soil-testing" className="space-y-8">
              <div className="grid gap-8 lg:grid-cols-2 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="h-12 w-12 rounded-lg bg-sky-100 flex items-center justify-center">
                      <Satellite className="h-6 w-6 text-sky-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-forest-900">
                      Satellite-Based Soil Testing
                    </h2>
                  </div>
                  <p className="text-lg text-muted-foreground">
                    Advanced AI-powered soil analysis using satellite imagery to provide accurate, real-time soil health assessments.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="h-2 w-2 rounded-full bg-forest-600 mt-2"></div>
                      <span>Comprehensive soil nutrient analysis</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="h-2 w-2 rounded-full bg-forest-600 mt-2"></div>
                      <span>pH level and organic matter detection</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="h-2 w-2 rounded-full bg-forest-600 mt-2"></div>
                      <span>Before/after soil condition tracking</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="h-2 w-2 rounded-full bg-forest-600 mt-2"></div>
                      <span>Personalized fertilizer recommendations</span>
                    </li>
                  </ul>
                  <div className="flex space-x-4">
                    <Button className="bg-forest-600 hover:bg-forest-700">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline">Learn More</Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-video rounded-lg bg-gradient-to-br from-forest-100 to-sky-100 border-2 border-forest-200">
                    <div className="p-8 h-full flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <Satellite className="h-16 w-16 mx-auto text-forest-600" />
                        <p className="text-sm text-muted-foreground">Soil Analysis Dashboard</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Before/After Comparison */}
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Before</CardTitle>
                    <CardDescription>Traditional Soil Testing</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Manual sampling required</li>
                      <li>• Time-consuming process</li>
                      <li>• Limited coverage area</li>
                      <li>• Delayed results</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-forest-300">
                  <CardHeader>
                    <CardTitle>After</CardTitle>
                    <CardDescription>Satellite-Based Analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Remote sensing technology</li>
                      <li>• Instant results</li>
                      <li>• Complete field coverage</li>
                      <li>• Real-time monitoring</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Crop Monitoring */}
            <TabsContent value="monitoring" className="space-y-8">
              <div className="grid gap-8 lg:grid-cols-2 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="h-12 w-12 rounded-lg bg-forest-100 flex items-center justify-center">
                      <Brain className="h-6 w-6 text-forest-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-forest-900">
                      AI-Driven Satellite Crop Monitoring
                    </h2>
                  </div>
                  <p className="text-lg text-muted-foreground">
                    Real-time satellite monitoring with AI-powered analysis for crop health, growth tracking, and traceability.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="h-2 w-2 rounded-full bg-forest-600 mt-2"></div>
                      <span>Live monitoring dashboard</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="h-2 w-2 rounded-full bg-forest-600 mt-2"></div>
                      <span>Crop health heatmaps</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="h-2 w-2 rounded-full bg-forest-600 mt-2"></div>
                      <span>Complete traceability timeline</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="h-2 w-2 rounded-full bg-forest-600 mt-2"></div>
                      <span>Early disease detection</span>
                    </li>
                  </ul>
                  <div className="flex space-x-4">
                    <Button className="bg-forest-600 hover:bg-forest-700">
                      View Dashboard
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline">See Demo</Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-video rounded-lg bg-gradient-to-br from-forest-100 to-sky-100 border-2 border-forest-200">
                    <div className="p-8 h-full flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <Brain className="h-16 w-16 mx-auto text-forest-600" />
                        <p className="text-sm text-muted-foreground">Crop Monitoring Dashboard</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Traceability Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle>Traceability Timeline</CardTitle>
                  <CardDescription>Track your crop from seed to harvest</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { step: "Seed Sowing", date: "Day 1", status: "Complete" },
                      { step: "Growth Monitoring", date: "Day 15-60", status: "Active" },
                      { step: "Health Analysis", date: "Day 30-90", status: "Active" },
                      { step: "Harvest Ready", date: "Day 90+", status: "Pending" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center space-x-4">
                        <div className="h-8 w-8 rounded-full bg-forest-600 text-white flex items-center justify-center text-sm font-semibold">
                          {i + 1}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{item.step}</p>
                          <p className="text-sm text-muted-foreground">{item.date}</p>
                        </div>
                        <span className="px-3 py-1 rounded-full text-xs bg-forest-100 text-forest-700">
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Advisory */}
            <TabsContent value="advisory" className="space-y-8">
              <div className="grid gap-8 lg:grid-cols-2 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="h-12 w-12 rounded-lg bg-beige-200 flex items-center justify-center">
                      <Users className="h-6 w-6 text-beige-700" />
                    </div>
                    <h2 className="text-3xl font-bold text-forest-900">
                      Agronomy Advisory
                    </h2>
                  </div>
                  <p className="text-lg text-muted-foreground">
                    Get expert guidance through our app and on-ground field experts. Two-pane layout: digital + on-ground advisory.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="h-2 w-2 rounded-full bg-forest-600 mt-2"></div>
                      <span>24/7 digital advisory through app</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="h-2 w-2 rounded-full bg-forest-600 mt-2"></div>
                      <span>On-ground field experts</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="h-2 w-2 rounded-full bg-forest-600 mt-2"></div>
                      <span>Personalized crop recommendations</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="h-2 w-2 rounded-full bg-forest-600 mt-2"></div>
                      <span>Interactive expert consultation</span>
                    </li>
                  </ul>
                  <div className="flex space-x-4">
                    <Button className="bg-forest-600 hover:bg-forest-700">
                      Connect with Expert
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline">View Advisory</Button>
                  </div>
                </div>
                <div className="grid gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Digital Advisory</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Get instant recommendations through AI-powered analysis
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Field Expert</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Connect with certified agronomists for on-ground support
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Inputs */}
            <TabsContent value="inputs" className="space-y-8">
              <div className="grid gap-8 lg:grid-cols-2 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="h-12 w-12 rounded-lg bg-sky-100 flex items-center justify-center">
                      <Package className="h-6 w-6 text-sky-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-forest-900">
                      35 Residue-Free Agricultural Inputs
                    </h2>
                  </div>
                  <p className="text-lg text-muted-foreground">
                    Complete product catalogue with filters by crop and category. Quick info cards for easy selection.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="h-2 w-2 rounded-full bg-forest-600 mt-2"></div>
                      <span>35+ certified residue-free products</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="h-2 w-2 rounded-full bg-forest-600 mt-2"></div>
                      <span>Filter by crop type</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="h-2 w-2 rounded-full bg-forest-600 mt-2"></div>
                      <span>Filter by category</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="h-2 w-2 rounded-full bg-forest-600 mt-2"></div>
                      <span>Detailed product information</span>
                    </li>
                  </ul>
                  <div className="flex space-x-4">
                    <Link href="/products">
                      <Button className="bg-forest-600 hover:bg-forest-700">
                        View Products
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Button variant="outline">Browse Catalogue</Button>
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {["Fertilizers", "Pesticides", "Seeds", "Tools"].map((cat, i) => (
                    <Card key={i} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg">{cat}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Browse {cat.toLowerCase()} products
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-beige-50">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Insurance */}
            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-sky-100 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-sky-600" />
                </div>
                <CardTitle>Parametric Insurance</CardTitle>
                <CardDescription>Weather-based protection for farmers</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Claims for excess rain, low/high humidity, temperature shocks, and wildlife damage.
                </p>
                <Link href="/smart-farming/insurance">
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Credit */}
            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-forest-100 flex items-center justify-center mb-4">
                  <CreditCard className="h-6 w-6 text-forest-600" />
                </div>
                <CardTitle>Farm Credit Support</CardTitle>
                <CardDescription>Quick and easy loan solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Minimal loan eligibility UI. Get financial support for your farming needs.
                </p>
                <Link href="/smart-farming/credit">
                  <Button variant="outline" size="sm" className="w-full">
                    Check Eligibility
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Buy-Back */}
            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-beige-200 flex items-center justify-center mb-4">
                  <ShoppingCart className="h-6 w-6 text-beige-700" />
                </div>
                <CardTitle>Buy-Back from Farm Gate</CardTitle>
                <CardDescription>No middlemen, direct purchase</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Supply chain flow diagram. Purchase order UI. Farmer income calculator.
                </p>
                <Link href="/smart-farming/buyback">
                  <Button variant="outline" size="sm" className="w-full">
                    View Program
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

