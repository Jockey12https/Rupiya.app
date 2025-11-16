import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Users, TrendingUp, Heart, Globe, Leaf, Award, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AboutUsPage() {
  const team = [
    {
      name: "Founder & CEO",
      role: "Vision & Strategy",
      bio: "Leading India's agritech revolution with a mission to empower farmers through technology"
    },
    {
      name: "Chief Technology Officer",
      role: "Technology & Innovation",
      bio: "Building cutting-edge solutions for real-time satellite monitoring and AI-powered agriculture"
    },
    {
      name: "Chief Operating Officer",
      role: "Operations & Growth",
      bio: "Scaling operations across India to reach 1 million+ farmers in the next 3 years"
    }
  ]

  const milestones = [
    {
      year: "2019",
      title: "Foundation",
      description: "Rupiya.app founded with mission to empower Indian farmers"
    },
    {
      year: "2020",
      title: "First 1,000 Farmers",
      description: "Reached 1,000+ farmers across Maharashtra and Karnataka"
    },
    {
      year: "2021",
      title: "₹50Cr Revenue",
      description: "Scaled to ₹50 crore annual revenue with 10,000+ farmers"
    },
    {
      year: "2022",
      title: "Carbon Credits Launch",
      description: "Launched carbon credit program, onboarded 20,000+ farmers"
    },
    {
      year: "2023",
      title: "₹250Cr Milestone",
      description: "Reached ₹250 crore revenue, 40,000+ farmers active"
    },
    {
      year: "2024",
      title: "₹500Cr Achievement",
      description: "Crossed ₹500 crore revenue, 50,000+ farmers, 300% YoY growth"
    }
  ]

  const impact = [
    {
      icon: Users,
      number: "50,000+",
      label: "Farmers Empowered",
      description: "Active farmers across India using our services"
    },
    {
      icon: TrendingUp,
      number: "300%",
      label: "YoY Growth",
      description: "Consistent year-on-year revenue growth"
    },
    {
      icon: Globe,
      number: "5,00,000",
      label: "Hectares Covered",
      description: "Agricultural land under regenerative farming"
    },
    {
      icon: Leaf,
      number: "₹500Cr+",
      label: "Annual Revenue",
      description: "Sustainable and profitable business model"
    }
  ]

  const values = [
    {
      icon: Heart,
      title: "Farmer First",
      description: "Every decision is centered around empowering farmers and improving their livelihoods"
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Committed to regenerative agriculture and environmental conservation"
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "Leveraging technology to solve real agricultural challenges"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Striving for the highest standards in every aspect of our work"
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-forest-600 to-forest-800 text-white py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              About Rupiya.app
            </h1>
            <p className="text-xl text-white/90">
              Empowering Indian farmers with technology, financial inclusion, and sustainable practices
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-900">
              Our Story
            </h2>
            <p className="text-lg text-muted-foreground">
              Rupiya.app was founded with a simple yet powerful vision: to bridge the gap between modern technology and traditional farming. We recognized that Indian farmers, who feed the nation, often lack access to:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-forest-600 font-bold">•</span>
                <span>Advanced agricultural technology for better yield and sustainability</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-forest-600 font-bold">•</span>
                <span>Fair pricing and direct market access for their produce</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-forest-600 font-bold">•</span>
                <span>Financial services and emergency funding options</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-forest-600 font-bold">•</span>
                <span>Rewards for sustainable and regenerative farming practices</span>
              </li>
            </ul>
            <p className="text-lg text-muted-foreground">
              Today, we serve 50,000+ farmers with an integrated platform that combines smart farming, financial services, carbon credits, and direct market access.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-forest-50">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 max-w-3xl mx-auto">
            <Card className="border-2 border-forest-200 hover:border-forest-400 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-8 w-8 text-forest-600" />
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To empower every Indian farmer with access to cutting-edge technology, financial inclusion, and fair market practices, enabling them to achieve sustainable livelihoods and contribute to India's agricultural revolution.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-forest-200 hover:border-forest-400 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Leaf className="h-8 w-8 text-forest-600" />
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To create a future where every farmer in India has access to technology, financial services, and sustainable practices, resulting in doubled incomes, healthier soil, and environmental conservation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-12 text-center">
            Our Impact
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {impact.map((item, i) => {
              const Icon = item.icon
              return (
                <Card key={i} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex justify-center mb-4">
                      <Icon className="h-10 w-10 text-forest-600" />
                    </div>
                    <CardTitle className="text-3xl font-bold text-forest-900 mb-2">
                      {item.number}
                    </CardTitle>
                    <CardDescription className="text-base font-semibold text-forest-700">
                      {item.label}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-forest-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-12 text-center">
            Our Values
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <Card key={i} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="h-6 w-6 text-forest-600" />
                      <CardTitle>{value.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-12 text-center">
            Our Journey
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {milestones.map((milestone, i) => (
              <div key={i} className="flex gap-6 pb-8 border-b border-gray-200 last:border-b-0">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-forest-600 text-white flex items-center justify-center font-bold text-xl">
                    {milestone.year}
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-lg font-bold text-forest-900 mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="py-20 bg-forest-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-12 text-center">
            Our Partnerships
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Carboneg (Europe)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Strategic partnership for carbon credit verification and international standards compliance
                </p>
                <p className="text-sm font-semibold text-forest-600">✓ Verified Standards | ✓ Global Market Access</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>ITC & Reliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Partnerships for direct market access and bulk procurement of agricultural products
                </p>
                <p className="text-sm font-semibold text-forest-600">✓ Fair Pricing | ✓ Volume Growth</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-forest-600 to-forest-800 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Movement
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Be part of India's agricultural transformation. Download the app today and start your journey with Rupiya.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
           <a href="https://play.google.com/store/apps/details?id=rupiya.app&pli=1" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="secondary" className="bg-white text-forest-600 hover:bg-gray-100">
              Download App
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            </a>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-forest-600 hover:bg-gray-100">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
