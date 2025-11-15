import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, CheckCircle, Package, ArrowRight, TrendingUp, FileText } from "lucide-react"
import Link from "next/link"

export default function BuyersPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-forest-50 to-beige-50 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-forest-900">
              For Institutional Buyers
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-forest-700">
              Traceable, Certified, Quality Assured
            </h2>
            <p className="text-lg text-muted-foreground">
              Source residue-free produce directly from farmers with complete traceability and certifications.
            </p>
            <Button size="lg" className="bg-forest-600 hover:bg-forest-700">
              Partner With Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Traceability Module */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
                Traceability Module
              </h2>
              <p className="text-lg text-muted-foreground">
                Real-time tracking from seed to delivery
              </p>
            </div>

            <Card className="bg-gradient-to-br from-forest-50 to-beige-50">
              <CardHeader>
                <CardTitle>Complete Supply Chain Visibility</CardTitle>
                <CardDescription>Track every step of your procurement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    { stage: "Seed Sowing", tracking: "GPS location, date, farmer details" },
                    { stage: "Growth Monitoring", tracking: "Satellite imagery, health metrics" },
                    { stage: "Harvest", tracking: "Harvest date, quantity, quality check" },
                    { stage: "Processing", tracking: "Processing facility, certifications" },
                    { stage: "Delivery", tracking: "Logistics, delivery date, final quality" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-4 p-4 bg-white rounded-lg">
                      <div className="h-10 w-10 rounded-full bg-forest-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                        {i + 1}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">{item.stage}</p>
                        <p className="text-sm text-muted-foreground">{item.tracking}</p>
                      </div>
                      <CheckCircle className="h-5 w-5 text-forest-600 flex-shrink-0" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-beige-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
              Certifications & Quality Assurance
            </h2>
            <p className="text-lg text-muted-foreground">
              Trusted quality badges and certificates
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-forest-100 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-forest-600" />
                </div>
                <CardTitle>Residue-Free Certified</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  All produce is tested and certified residue-free
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-sky-100 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-sky-600" />
                </div>
                <CardTitle>Organic Standards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Meets international organic farming standards
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-beige-200 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-beige-700" />
                </div>
                <CardTitle>Quality Assured</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Multi-stage quality checks and verification
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Supply Chain Quality */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
                Supply Chain Quality
              </h2>
              <p className="text-lg text-muted-foreground">
                End-to-end quality management
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Quality Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-forest-600" />
                      <span>Pesticide residue testing</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-forest-600" />
                      <span>Nutritional value analysis</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-forest-600" />
                      <span>Microbial safety checks</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-forest-600" />
                      <span>Physical quality assessment</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Supply Chain Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-forest-600" />
                      <span>Direct from farm gate</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-forest-600" />
                      <span>No middlemen</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-forest-600" />
                      <span>Consistent quality</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-forest-600" />
                      <span>Scalable procurement</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Crop Portfolio */}
      <section className="py-20 bg-beige-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
              Crop Portfolio
            </h2>
            <p className="text-lg text-muted-foreground">
              Available crops for procurement
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Wheat", "Rice", "Cotton", "Soybean",
              "Corn", "Sugarcane", "Potato", "Tomato",
              "Onion", "Chili", "Turmeric", "Ginger"
            ].map((crop, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="h-16 w-16 rounded-full bg-forest-100 mx-auto mb-4 flex items-center justify-center">
                    <Package className="h-8 w-8 text-forest-600" />
                  </div>
                  <CardTitle>{crop}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="w-full">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Procurement Flow */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
                Procurement Flow
              </h2>
              <p className="text-lg text-muted-foreground">
                Simple, streamlined process
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: "Order Placement",
                  description: "Place your order through our platform with quantity and quality specifications"
                },
                {
                  step: "Quality Check",
                  description: "Our team conducts comprehensive quality checks at farm gate"
                },
                {
                  step: "Processing & Packaging",
                  description: "Produce is processed and packaged according to your requirements"
                },
                {
                  step: "Delivery",
                  description: "Timely delivery to your facility with complete documentation"
                }
              ].map((item, i) => (
                <Card key={i} className="border-l-4 border-l-forest-600">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="h-12 w-12 rounded-full bg-forest-600 text-white flex items-center justify-center font-bold text-lg">
                        {i + 1}
                      </div>
                      <div>
                        <CardTitle>{item.step}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner With Us */}
      <section className="py-20 bg-gradient-to-br from-forest-600 to-forest-800 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Partner With Us
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join leading institutions like ITC, Reliance, and Mother Dairy in sourcing quality, traceable produce.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-forest-600 hover:bg-beige-50">
            Contact Procurement Team
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}

