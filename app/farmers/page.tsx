import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Leaf, TrendingUp, DollarSign, Users, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function FarmersPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-forest-50 to-beige-50 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-forest-900">
              For Farmers
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-forest-700">
              Your Complete Farming Partner
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need for residue-free farming, increased yields, and additional income through carbon credits.
            </p>
          </div>
        </div>
      </section>

      {/* Supported Crops */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
              Supported Crops
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive support for major crops
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
                    <Leaf className="h-8 w-8 text-forest-600" />
                  </div>
                  <CardTitle>{crop}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Adoption Guide */}
      <section className="py-20 bg-beige-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
                How to Adopt Residue-Free Farming
              </h2>
              <p className="text-lg text-muted-foreground">
                Step-by-step process to get started
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: "Register & Onboard",
                  description: "Sign up on rupiya.app and complete your profile with farm details"
                },
                {
                  step: 2,
                  title: "Soil Testing",
                  description: "Get satellite-based soil analysis for your fields"
                },
                {
                  step: 3,
                  title: "Get Advisory",
                  description: "Receive personalized recommendations from our agronomy experts"
                },
                {
                  step: 4,
                  title: "Purchase Inputs",
                  description: "Buy certified residue-free agricultural inputs from our marketplace"
                },
                {
                  step: 5,
                  title: "Monitor & Track",
                  description: "Use AI-powered satellite monitoring to track crop health"
                },
                {
                  step: 6,
                  title: "Earn Carbon Credits",
                  description: "Generate verified carbon credits through regenerative practices"
                },
                {
                  step: 7,
                  title: "Sell Your Produce",
                  description: "Sell directly through our buy-back program at farm gate prices"
                }
              ].map((item) => (
                <Card key={item.step} className="border-l-4 border-l-forest-600">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="h-12 w-12 rounded-full bg-forest-600 text-white flex items-center justify-center font-bold text-lg">
                        {item.step}
                      </div>
                      <div>
                        <CardTitle>{item.title}</CardTitle>
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

      {/* Income Breakdown */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
                Income Breakdown
              </h2>
              <p className="text-lg text-muted-foreground">
                Multiple income streams from residue-free farming
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border-2 border-forest-300">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-forest-100 flex items-center justify-center mb-4">
                    <DollarSign className="h-6 w-6 text-forest-600" />
                  </div>
                  <CardTitle>Carbon Credit Income</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-forest-600 mb-2">₹800</p>
                  <p className="text-sm text-muted-foreground">
                    Per verified carbon credit
                  </p>
                  <p className="text-sm mt-4">
                    Earn additional income while protecting the environment
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-sky-300">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-sky-100 flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-sky-600" />
                  </div>
                  <CardTitle>Yield Increase</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-sky-600 mb-2">15-30%</p>
                  <p className="text-sm text-muted-foreground">
                    Average yield improvement
                  </p>
                  <p className="text-sm mt-4">
                    Better soil health leads to higher crop yields
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-beige-300">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-beige-200 flex items-center justify-center mb-4">
                    <DollarSign className="h-6 w-6 text-beige-700" />
                  </div>
                  <CardTitle>Cost Reduction</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-beige-700 mb-2">20-25%</p>
                  <p className="text-sm text-muted-foreground">
                    Lower input costs
                  </p>
                  <p className="text-sm mt-4">
                    Optimized inputs reduce overall farming costs
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits with Advisory */}
      <section className="py-20 bg-beige-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
                Yield ↑ & Cost ↓ with Advisory
              </h2>
              <p className="text-lg text-muted-foreground">
                Expert guidance leads to better results
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="h-6 w-6 text-forest-600" />
                    <span>Yield Benefits</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-forest-600 mt-0.5" />
                      <span>Optimized planting schedules</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-forest-600 mt-0.5" />
                      <span>Precision fertilizer application</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-forest-600 mt-0.5" />
                      <span>Disease prevention strategies</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-forest-600 mt-0.5" />
                      <span>Water management optimization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="h-6 w-6 text-forest-600" />
                    <span>Cost Benefits</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-forest-600 mt-0.5" />
                      <span>Reduced input wastage</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-forest-600 mt-0.5" />
                      <span>Lower pesticide usage</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-forest-600 mt-0.5" />
                      <span>Efficient resource utilization</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-forest-600 mt-0.5" />
                      <span>Better price realization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground">
              Real farmers, real results
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Rajesh Kumar",
                location: "Punjab",
                crop: "Wheat",
                result: "30% yield increase, ₹45,000 from carbon credits"
              },
              {
                name: "Priya Sharma",
                location: "Maharashtra",
                crop: "Cotton",
                result: "25% cost reduction, better quality produce"
              },
              {
                name: "Amit Patel",
                location: "Gujarat",
                crop: "Groundnut",
                result: "20% yield increase, direct farm gate sales"
              }
            ].map((story, i) => (
              <Card key={i}>
                <CardHeader>
                  <div className="h-16 w-16 rounded-full bg-forest-100 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-forest-600" />
                  </div>
                  <CardTitle className="text-center">{story.name}</CardTitle>
                  <CardDescription className="text-center">
                    {story.location} • {story.crop}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-center text-muted-foreground">
                    {story.result}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-forest-600 to-forest-800 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Farming?
          </h2>
        </div>
      </section>
    </div>
  )
}

