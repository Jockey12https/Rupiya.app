import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Users, Target, Award, FileText, ArrowRight, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function InvestorsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-forest-50 to-beige-50 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-forest-900">
              For Investors
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-forest-700">
              Invest in India's Agricultural Future
            </h2>
            <p className="text-lg text-muted-foreground">
              Join us in transforming Indian agriculture through technology, sustainability, and financial inclusion.
            </p>
            <Button size="lg" className="bg-forest-600 hover:bg-forest-700">
              Explore Opportunities
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
              Impact Numbers
            </h2>
            <p className="text-lg text-muted-foreground">
              Real impact, measurable results
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center border-2 border-forest-300">
              <CardHeader>
                <div className="h-16 w-16 rounded-full bg-forest-100 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-forest-600" />
                </div>
                <CardTitle className="text-3xl font-bold text-forest-600">50,000+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Farmers Onboarded</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-sky-300">
              <CardHeader>
                <div className="h-16 w-16 rounded-full bg-sky-100 mx-auto mb-4 flex items-center justify-center">
                  <Target className="h-8 w-8 text-sky-600" />
                </div>
                <CardTitle className="text-3xl font-bold text-sky-600">5,00,000</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Hectares Covered</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-beige-300">
              <CardHeader>
                <div className="h-16 w-16 rounded-full bg-beige-200 mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-beige-700" />
                </div>
                <CardTitle className="text-3xl font-bold text-beige-700">₹500 Cr+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Revenue Generated</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-forest-300">
              <CardHeader>
                <div className="h-16 w-16 rounded-full bg-forest-100 mx-auto mb-4 flex items-center justify-center">
                  <BarChart3 className="h-8 w-8 text-forest-600" />
                </div>
                <CardTitle className="text-3xl font-bold text-forest-600">300%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">YoY Growth</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Growth Charts */}
      <section className="py-20 bg-beige-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
                Growth Charts
              </h2>
              <p className="text-lg text-muted-foreground">
                Track our progress across key metrics
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Growth</CardTitle>
                  <CardDescription>Year-over-year</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-32 bg-gradient-to-t from-forest-200 to-forest-400 rounded flex items-end justify-center">
                    <div className="w-full h-3/4 bg-forest-600 rounded-t"></div>
                  </div>
                  <p className="text-center mt-4 text-sm text-muted-foreground">
                    Steady 300% YoY growth
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Farmer Growth</CardTitle>
                  <CardDescription>Onboarding rate</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-32 bg-gradient-to-t from-sky-200 to-sky-400 rounded flex items-end justify-center">
                    <div className="w-full h-4/5 bg-sky-600 rounded-t"></div>
                  </div>
                  <p className="text-center mt-4 text-sm text-muted-foreground">
                    50,000+ active farmers
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Hectares Coverage</CardTitle>
                  <CardDescription>Geographic expansion</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-32 bg-gradient-to-t from-beige-200 to-beige-400 rounded flex items-end justify-center">
                    <div className="w-full h-2/3 bg-beige-600 rounded-t"></div>
                  </div>
                  <p className="text-center mt-4 text-sm text-muted-foreground">
                    5,00,000 hectares target
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
              MoUs & Partnerships
            </h2>
            <p className="text-lg text-muted-foreground">
              Strategic partnerships driving growth
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Carboneg (Europe)", type: "Carbon Credits" },
              { name: "ITC Limited", type: "Procurement" },
              { name: "Reliance Industries", type: "Supply Chain" },
              { name: "Mother Dairy", type: "Direct Sourcing" }
            ].map((partner, i) => (
              <Card key={i} className="text-center">
                <CardHeader>
                  <div className="h-16 w-16 rounded-full bg-forest-100 mx-auto mb-4 flex items-center justify-center">
                    <FileText className="h-8 w-8 text-forest-600" />
                  </div>
                  <CardTitle className="text-lg">{partner.name}</CardTitle>
                  <CardDescription>{partner.type}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Farmer Testimonials */}
      <section className="py-20 bg-beige-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
              Farmer Testimonials
            </h2>
            <p className="text-lg text-muted-foreground">
              Real impact on farmers' lives
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Rajesh Kumar",
                location: "Punjab",
                quote: "rupiya.app transformed my farming. I earned ₹45,000 from carbon credits alone!"
              },
              {
                name: "Priya Sharma",
                location: "Maharashtra",
                quote: "The advisory helped me reduce costs by 25% while increasing yield by 30%."
              },
              {
                name: "Amit Patel",
                location: "Gujarat",
                quote: "Direct buy-back eliminated middlemen. I get better prices for my produce."
              }
            ].map((testimonial, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground italic">
                    "{testimonial.quote}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
                Achievements Timeline
              </h2>
              <p className="text-lg text-muted-foreground">
                Key milestones in our journey
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  year: "2022",
                  achievement: "Best Fintech Startup - Times Gujarat Icons",
                  description: "Recognized as Gujarat's leading fintech startup"
                },
                {
                  year: "2023",
                  achievement: "Startup India Recognised",
                  description: "Official recognition by Government of India"
                },
                {
                  year: "2023",
                  achievement: "Fintech Achiever - HT Media",
                  description: "Awarded for making fintech accessible"
                },
                {
                  year: "2023",
                  achievement: "Partnership with Carboneg",
                  description: "International carbon credit partnership"
                },
                {
                  year: "2024",
                  achievement: "50,000+ Farmers Onboarded",
                  description: "Major milestone in farmer empowerment"
                }
              ].map((item, i) => (
                <Card key={i} className="border-l-4 border-l-forest-600">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="h-12 w-12 rounded-full bg-forest-600 text-white flex items-center justify-center font-bold">
                        {item.year}
                      </div>
                      <div>
                        <CardTitle>{item.achievement}</CardTitle>
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

      {/* Investment Opportunities */}
      <section className="py-20 bg-gradient-to-br from-forest-600 to-forest-800 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Investment Opportunities
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join us in building India's largest agritech platform. We're looking for strategic investors who share our vision of sustainable agriculture and farmer empowerment.
            </p>
            <div className="grid gap-6 md:grid-cols-2 mb-8">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardHeader>
                  <CardTitle>Series A</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-white/90">
                    Scaling operations and expanding farmer base
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardHeader>
                  <CardTitle>Strategic Partners</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-white/90">
                    Partnerships in supply chain and technology
                  </p>
                </CardContent>
              </Card>
            </div>
            <Button size="lg" variant="secondary" className="bg-white text-forest-600 hover:bg-beige-50">
              Contact Investment Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

