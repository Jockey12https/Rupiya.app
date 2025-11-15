import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, TrendingUp, DollarSign, BookOpen, ShoppingCart, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function FPOsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-forest-50 to-beige-50 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-forest-900">
              For FPOs
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-forest-700">
              Empowering Farmer Producer Organizations
            </h2>
            <p className="text-lg text-muted-foreground">
              Scale your impact with training, carbon credit revenue, and buy-back programs.
            </p>
            <Button size="lg" className="bg-forest-600 hover:bg-forest-700">
              Partner With Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
              FPO Benefits
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive support for your organization
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-forest-100 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-forest-600" />
                </div>
                <CardTitle>Empowerment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Strengthen your FPO with modern farming tools and technologies
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-sky-100 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-sky-600" />
                </div>
                <CardTitle>Training & Onboarding</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Comprehensive training programs for your members
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-beige-200 flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-beige-700" />
                </div>
                <CardTitle>Carbon Credit Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Generate additional revenue through carbon credit programs
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-forest-100 flex items-center justify-center mb-4">
                  <ShoppingCart className="h-6 w-6 text-forest-600" />
                </div>
                <CardTitle>Buy-Back Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Direct procurement from your FPO members
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Collaboration Workflow */}
      <section className="py-20 bg-beige-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
                Collaboration Workflow
              </h2>
              <p className="text-lg text-muted-foreground">
                How we work together
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: "FPO Registration",
                  description: "Register your FPO and provide member details"
                },
                {
                  step: 2,
                  title: "Training Program",
                  description: "Organize training sessions for residue-free farming"
                },
                {
                  step: 3,
                  title: "Onboarding Members",
                  description: "Onboard farmers to the rupiya.app platform"
                },
                {
                  step: 4,
                  title: "Carbon Credit Setup",
                  description: "Set up carbon credit generation for your members"
                },
                {
                  step: 5,
                  title: "Buy-Back Agreement",
                  description: "Establish direct procurement agreements"
                },
                {
                  step: 6,
                  title: "Revenue Sharing",
                  description: "Track and manage carbon credit revenue pipeline"
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

      {/* Revenue Pipeline */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
                Carbon Credit Revenue Pipeline
              </h2>
              <p className="text-lg text-muted-foreground">
                Multiple revenue streams for your FPO
              </p>
            </div>

            <Card className="bg-gradient-to-br from-forest-50 to-beige-50">
              <CardHeader>
                <CardTitle>Revenue Sources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                    <div>
                      <p className="font-semibold">Member Carbon Credits</p>
                      <p className="text-sm text-muted-foreground">Revenue from verified carbon credits</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-forest-600">₹800</p>
                      <p className="text-sm text-muted-foreground">per credit</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                    <div>
                      <p className="font-semibold">Buy-Back Premium</p>
                      <p className="text-sm text-muted-foreground">Direct procurement benefits</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-forest-600">10-15%</p>
                      <p className="text-sm text-muted-foreground">above market</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                    <div>
                      <p className="font-semibold">Training Programs</p>
                      <p className="text-sm text-muted-foreground">Subsidized training support</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-forest-600">100%</p>
                      <p className="text-sm text-muted-foreground">subsidized</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-beige-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
              FPO Success Stories
            </h2>
            <p className="text-lg text-muted-foreground">
              Real results from partner FPOs
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                name: "Green Farmers FPO",
                location: "Punjab",
                members: "500+",
                result: "Generated ₹12 lakhs in carbon credits, 30% yield increase across members"
              },
              {
                name: "Sustainable Agriculture Co-op",
                location: "Maharashtra",
                members: "750+",
                result: "Direct buy-back worth ₹50 lakhs, reduced input costs by 25%"
              }
            ].map((story, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>{story.name}</CardTitle>
                  <CardDescription>{story.location} • {story.members} Members</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{story.result}</p>
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
            Ready to Empower Your FPO?
          </h2>
          <Button size="lg" variant="secondary" className="bg-white text-forest-600 hover:bg-beige-50">
            Partner With Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}

