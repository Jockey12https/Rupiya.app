import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Briefcase, Users, Heart, TrendingUp, MapPin, DollarSign, Award, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "3+ years",
      skills: ["TypeScript", "React", "Node.js", "AWS"],
      salary: "₹20-30L"
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Delhi, India",
      type: "Full-time",
      experience: "4+ years",
      skills: ["Product Strategy", "Analytics", "Agile", "Fintech"],
      salary: "₹18-28L"
    },
    {
      title: "Data Scientist",
      department: "Data & AI",
      location: "Pune, India",
      type: "Full-time",
      experience: "2+ years",
      skills: ["Python", "ML", "Statistics", "Agriculture Domain"],
      salary: "₹15-25L"
    },
    {
      title: "Business Development Executive",
      department: "Business",
      location: "Pan-India",
      type: "Full-time",
      experience: "2+ years",
      skills: ["Sales", "Negotiation", "Relationship Building", "Agriculture"],
      salary: "₹12-20L"
    },
    {
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "1.5+ years",
      skills: ["Next.js", "JavaScript", "SQL", "Git"],
      salary: "₹12-18L"
    },
    {
      title: "Farmer Success Manager",
      department: "Operations",
      location: "Multiple Locations",
      type: "Full-time",
      experience: "1+ year",
      skills: ["Customer Service", "Agriculture Knowledge", "Field Experience"],
      salary: "₹8-15L"
    }
  ]

  const benefits = [
    { icon: Heart, title: "Health & Wellness", description: "Comprehensive health insurance + wellness programs" },
    { icon: TrendingUp, title: "Growth Opportunities", description: "Professional development and career growth" },
    { icon: Users, title: "Diverse Team", description: "Work with talented individuals from diverse backgrounds" },
    { icon: Award, title: "Competitive Salary", description: "Competitive compensation and performance bonus" },
    { icon: Briefcase, title: "Flexible Work", description: "Remote work options and flexible timings" },
    { icon: Heart, title: "Work-Life Balance", description: "Generous leave policy and paid time off" }
  ]

  const values = [
    {
      title: "Farmer First",
      description: "Every decision we make is to empower and support farmers. Their success is our success."
    },
    {
      title: "Innovation",
      description: "We embrace cutting-edge technology to solve real-world agricultural challenges."
    },
    {
      title: "Integrity",
      description: "We operate with complete transparency and honesty in all our dealings."
    },
    {
      title: "Community",
      description: "We build a collaborative environment where everyone's voice matters."
    },
    {
      title: "Impact",
      description: "We measure success by the positive impact we create for farmers and communities."
    },
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, from products to customer service."
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-forest-600 to-forest-800 text-white py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              Join Our Mission
            </h1>
            <p className="text-xl text-white/90">
              Be part of India's agricultural revolution. Help us empower 50,000+ farmers with technology and financial inclusion.
            </p>

            <Link href="#open-positions">
              <Button size="lg" variant="secondary" className="bg-white text-forest-600 hover:bg-gray-100 mt-8">
                Explore Opportunities
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Rupiya */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-6 text-center">
              Why Join Rupiya.app?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're not just building an app—we're transforming agriculture in India. Rupiya.app serves 50,000+ farmers across the country, providing smart farming solutions, carbon credits, digital payments, and financial services. With ₹500Cr+ revenue and 300% YoY growth, we're at the forefront of agritech innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-forest-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-12 text-center">
            Why You'll Love Working Here
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon
              return (
                <div key={i} className="flex gap-4 p-6 rounded-lg border border-gray-200 hover:border-forest-300 transition-colors">
                  <div className="flex-shrink-0">
                    <Icon className="h-6 w-6 text-forest-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest-900 mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-12 text-center">
            Open Positions
          </h2>
          <div className="space-y-4">
            {openPositions.map((position, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow hover:border-forest-300">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{position.title}</CardTitle>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          {position.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          {position.salary}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {position.skills.map((skill, j) => (
                      <span key={j} className="px-3 py-1 bg-forest-50 text-forest-700 rounded-full text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <Button className="bg-forest-600 hover:bg-forest-700">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
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
            Ready to Make an Impact?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Send us your resume and let's discuss how you can help us revolutionize agriculture in India.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-forest-600 hover:bg-gray-100">
            Send Your Resume
          </Button>
        </div>
      </section>
    </div>
  )
}
