"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Leaf, Package, Droplet, Zap, Shield, TrendingUp, Search, Filter, Star, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const categories = [
    { id: "all", name: "All Products", icon: Package },
    { id: "fertilizers", name: "Fertilizers", icon: Droplet },
    { id: "organic", name: "Organic", icon: Leaf },
  ]

  const products = [
    {
      id: 1,
      name: "Rupiya Kuber",
      category: "fertilizers",
      crop: "All Crops",
      price: "₹499",
      rating: 4.8,
      reviews: 342,
      certified: true,
      description: "Premium growth promoter product for enhanced crop development",
      features: ["Growth Enhancement", "Yield Increase", "Quality Improvement", "Farmer Tested"],
      image: "📈"
    },
    {
      id: 2,
      name: "Grow Shakti",
      category: "fertilizers",
      crop: "All Crops",
      price: "₹425",
      rating: 4.9,
      reviews: 428,
      certified: true,
      description: "NPK-based fertilizer for balanced crop nutrition",
      features: ["Balanced NPK", "Organic Base", "Residue-Free", "Certified"],
      image: "🌱"
    },
    {
      id: 3,
      name: "N.P.K. Shakti",
      category: "fertilizers",
      crop: "All Crops",
      price: "₹380",
      rating: 4.7,
      reviews: 315,
      certified: true,
      description: "Standard NPK nutrient formulation for optimal plant nutrition",
      features: ["Essential Nutrients", "Soil Enriching", "Cost Effective", "High Quality"],
      image: "💪"
    },
    {
      id: 4,
      name: "Cereal Shakti",
      category: "fertilizers",
      crop: "Cereals",
      price: "₹420",
      rating: 4.8,
      reviews: 267,
      certified: true,
      description: "Specialized formulation for cereal crops (wheat, rice, maize)",
      features: ["Crop Specific", "Higher Yields", "Grain Quality", "Proven Results"],
      image: "🌾"
    },
    {
      id: 5,
      name: "Nitro Shakti",
      category: "fertilizers",
      crop: "All Crops",
      price: "₹395",
      rating: 4.8,
      reviews: 289,
      certified: true,
      description: "Nitrogen-focused product for vegetative growth",
      features: ["Nitrogen Rich", "Leaf Development", "Organic Source", "Sustained Release"],
      image: "🟢"
    },
    {
      id: 6,
      name: "Verti Shakti",
      category: "fertilizers",
      crop: "Specialty",
      price: "₹450",
      rating: 4.6,
      reviews: 178,
      certified: true,
      description: "Vertical farming and specialized application product",
      features: ["Hydroponic Ready", "Space Efficient", "Quick Absorption", "Premium Formula"],
      image: "🌿"
    },
    {
      id: 7,
      name: "Meta Shakti",
      category: "fertilizers",
      crop: "All Crops",
      price: "₹440",
      rating: 4.9,
      reviews: 356,
      certified: true,
      description: "Micronutrient enriched formulation for comprehensive nutrition",
      features: ["Micronutrients", "Deficiency Prevention", "Balanced Formula", "Crop Boosting"],
      image: "✨"
    },
    {
      id: 8,
      name: "Fungi Shakti",
      category: "organic",
      crop: "All Crops",
      price: "₹480",
      rating: 4.7,
      reviews: 234,
      certified: true,
      description: "Fungal and biological product for soil health enhancement",
      features: ["Biological Active", "Soil Microbes", "Root Development", "Natural Solution"],
      image: "🍄"
    },
    {
      id: 9,
      name: "Rupiya ORGO",
      category: "organic",
      crop: "All Crops",
      price: "₹520",
      rating: 4.9,
      reviews: 401,
      certified: true,
      description: "Complete organic fertilizer and input solution",
      features: ["100% Organic", "OMRI Certified", "Eco-Friendly", "Premium Quality"],
      image: "🌍"
    },
    {
      id: 10,
      name: "Shakti Premium Mix",
      category: "fertilizers",
      crop: "Mixed Crops",
      price: "₹495",
      rating: 4.8,
      reviews: 312,
      certified: true,
      description: "All-in-one premium nutrient solution for diverse farming",
      features: ["Multi-Crop", "Complete Nutrition", "Easy Application", "Best Value"],
      image: "🎯"
    },
    {
      id: 11,
      name: "Rupiya Bio-Growth",
      category: "organic",
      crop: "All Crops",
      price: "₹445",
      rating: 4.7,
      reviews: 298,
      certified: true,
      description: "Bio-based growth promoter with active microorganisms",
      features: ["Bio-Active", "Microbial Rich", "Safe Application", "Sustainable"],
      image: "🌳"
    },
    {
      id: 12,
      name: "Shakti Master Formula",
      category: "fertilizers",
      crop: "Cash Crops",
      price: "₹575",
      rating: 4.9,
      reviews: 267,
      certified: true,
      description: "Premium formulation specifically designed for high-value cash crops",
      features: ["Cash Crop Focus", "Enhanced Yield", "Quality Boosting", "Market Premium"],
      image: "👑"
    }
  ]

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.crop.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const stats = [
    { label: "Verified Products", value: "150+", icon: CheckCircle },
    { label: "Farmer Satisfaction", value: "4.8/5", icon: Star },
    { label: "Certified Organic", value: "85%", icon: Leaf },
    { label: "Residue-Free", value: "100%", icon: Zap },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-forest-600 to-forest-800 text-white py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4">
              Rupiya Premium Fertilizers & Inputs
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Shakti & ORGO Product Series
            </h1>
            <p className="text-xl text-white/90">
              Advanced nutrient formulations designed for Indian farmers. Proven results, trusted quality, and guaranteed growth for all crops.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-16 bg-white border-b">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <div key={i} className="text-center">
                  <div className="flex justify-center mb-3">
                    <Icon className="h-8 w-8 text-forest-600" />
                  </div>
                  <p className="text-3xl font-bold text-forest-900 mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-12 bg-beige-50 border-b">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by product name or crop..."
                className="w-full pl-10 pr-4 py-3 border-2 border-forest-200 rounded-lg focus:outline-none focus:border-forest-600"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Tabs */}
            <Tabs
              value={selectedCategory}
              onValueChange={setSelectedCategory}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-3 md:grid-cols-5 bg-white border-2 border-forest-200 h-auto gap-0 p-0 rounded-lg overflow-hidden">
                {categories.map((cat) => {
                  const Icon = cat.icon
                  return (
                    <TabsTrigger
                      key={cat.id}
                      value={cat.id}
                      className="data-[state=active]:bg-forest-600 data-[state=active]:text-white rounded-none border-r border-forest-100 last:border-r-0 flex items-center justify-center gap-2 py-3 text-sm font-medium"
                    >
                      <Icon className="h-4 w-4" />
                      <span className="hidden sm:inline">{cat.name}</span>
                    </TabsTrigger>
                  )
                })}
              </TabsList>
            </Tabs>

            <p className="text-sm text-muted-foreground">
              Showing <span className="font-semibold text-forest-900">{filteredProducts.length}</span> products
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
                >
                  <CardHeader className="pb-3 bg-gradient-to-br from-forest-50 to-sky-50">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-5xl">{product.image}</div>
                      {product.certified && (
                        <div className="flex items-center space-x-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
                          <CheckCircle className="h-3 w-3" />
                          <span>Certified</span>
                        </div>
                      )}
                    </div>
                    <CardTitle className="text-lg line-clamp-2">{product.name}</CardTitle>
                    <CardDescription className="text-sm">{product.crop}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4 pt-4">
                    {/* Rating */}
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        {product.rating} <span className="text-gray-500">({product.reviews})</span>
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2">
                      {product.features.slice(0, 2).map((feature, i) => (
                        <div key={i} className="flex items-center space-x-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-forest-600"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                      {product.features.length > 2 && (
                        <p className="text-xs text-forest-600 font-semibold">
                          +{product.features.length - 2} more features
                        </p>
                      )}
                    </div>

                    {/* Price & CTA */}
                    <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                      <div className="text-lg font-bold text-forest-900">{product.price}</div>
                      <Button
                        size="sm"
                        className="bg-forest-600 hover:bg-forest-700"
                        onClick={() => alert(`Product: ${product.name}\nPrice: ${product.price}\nContact farmer support for ordering.`)}
                      >
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-xl text-muted-foreground mb-4">No products found</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("all")
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Our Products */}
      <section className="py-20 bg-beige-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
                Why Choose Our Products?
              </h2>
              <p className="text-lg text-muted-foreground">
                Every product is handpicked and verified by our agricultural experts
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-forest-200">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-forest-100 flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-forest-600" />
                  </div>
                  <CardTitle>Certified Quality</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    All products meet international quality standards and are verified by independent labs.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-forest-200">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-forest-100 flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-forest-600" />
                  </div>
                  <CardTitle>Proven Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Real farmer feedback shows 25-35% yield improvements with our residue-free products.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-forest-200">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-forest-100 flex items-center justify-center mb-4">
                    <Leaf className="h-6 w-6 text-forest-600" />
                  </div>
                  <CardTitle>100% Residue-Free</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Safe for consumption, environment, and future generations. No harmful chemicals.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-forest-200">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-forest-100 flex items-center justify-center mb-4">
                    <Droplet className="h-6 w-6 text-forest-600" />
                  </div>
                  <CardTitle>Sustainable Farming</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Build long-term soil health while increasing yields and earning carbon credits.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
                How to Order
              </h2>
              <p className="text-lg text-muted-foreground">
                Simple 4-step process to get your products
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-4">
              {[
                {
                  step: 1,
                  title: "Browse",
                  description: "Explore 150+ verified products by crop or category",
                  icon: Search
                },
                {
                  step: 2,
                  title: "Compare",
                  description: "Check ratings, reviews, and product specifications",
                  icon: Filter
                },
                {
                  step: 3,
                  title: "Select",
                  description: "Choose quantity and add to your cart",
                  icon: Package
                },
                {
                  step: 4,
                  title: "Checkout",
                  description: "Secure payment and fast home delivery within 2 days",
                  icon: CheckCircle
                }
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="relative">
                    <div className="bg-gradient-to-br from-forest-50 to-sky-50 p-6 rounded-lg border-2 border-forest-200 text-center">
                      <div className="h-14 w-14 rounded-full bg-forest-600 text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                        {item.step}
                      </div>
                      <h3 className="text-lg font-bold text-forest-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    {i < 3 && (
                      <div className="hidden md:flex absolute top-1/2 -right-4 translate-y-1/2">
                        <div className="text-2xl text-forest-600">→</div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-beige-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "Are all products certified organic?",
                  a: "85% of our products are certified organic. The remaining 15% are residue-free but may use approved chemical inputs. All are verified for farmer safety and quality."
                },
                {
                  q: "What's the minimum order quantity?",
                  a: "Minimum order is 50kg for bulk products and 1 kit for packaged products. No minimum for individual farmer orders through the app."
                },
                {
                  q: "Do you provide delivery?",
                  a: "Yes! We offer free delivery for orders above ₹2,000 within 2 days. For smaller orders, delivery fee is ₹100-200 depending on location."
                },
                {
                  q: "Can I return products if I'm not satisfied?",
                  a: "Yes. 100% refund within 7 days of delivery if unopened. For opened products, we offer 50% refund or replacement with different product."
                },
                {
                  q: "Do you provide usage guidance?",
                  a: "Absolutely! Every product comes with detailed usage instructions. Our agronomy team is available via WhatsApp for personalized guidance."
                }
              ].map((faq, i) => (
                <Card key={i} className="border-forest-200">
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
      <section className="py-20 bg-forest-600 text-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Upgrade Your Farming?
            </h2>
            <p className="text-xl text-white/90">
              Join 50,000+ farmers already using our premium residue-free products
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="border-white text-black hover:bg-white/20">
                Download Rupiya App
              </Button>
              <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/20">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
