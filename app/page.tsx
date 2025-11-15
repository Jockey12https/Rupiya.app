import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Leaf, TrendingUp, Shield, Users, Award, Star } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section 1 */}
      <section className="relative bg-gradient-to-br from-forest-50 via-beige-50 to-sky-50 py-20 md:py-32">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-forest-900 leading-tight">
                किसान की हर जरुरत<br />
                <span className="text-forest-600">का Digital साथी!</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-forest-700">
                Empowering Farmers
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl">
                From your fields to your future, rupiya.app stands with the hands that feed the nation. Let's grow together, sustainably and successfully.
              </p>
              <Button size="lg" className="bg-forest-600 hover:bg-forest-700 text-white">
                <Download className="mr-2 h-5 w-5" />
                Download Now
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=800&fit=crop"
                  alt="Farmer using smartphone in field"
                  width={800}
                  height={800}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section 2 - Regenerative Farming */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://www.cropin.com/wp-content/uploads/2021/09/Regenerative-Agriculture-1.jpg"
                  alt="Regenerative farming - healthy soil and crops"
                  width={800}
                  height={800}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-forest-900">
                बेहतर कल की नीव!<br />
                <span className="text-forest-600">rupiya.app के साथ।</span>
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-forest-700">
                Regenerative Farming
              </h3>
              <p className="text-lg text-muted-foreground max-w-xl">
                Regenerative farming isn't just a method—it's a promise to your land, your family, and the generations ahead.
              </p>
              <Button size="lg" className="bg-forest-600 hover:bg-forest-700 text-white">
                <Download className="mr-2 h-5 w-5" />
                Download Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section 3 - Quick Services */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-forest-50">
        <div className="container">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-900">
              एक Click,<br />
              <span className="text-forest-600">सब कुछ Quick!</span>
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-forest-700">
              Every Time Cashback Possible!
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From recharges to loans, insurance to gold, rupiya.app puts everything you need right at your fingertips.
            </p>
            <Button size="lg" className="bg-forest-600 hover:bg-forest-700 text-white">
              <Download className="mr-2 h-5 w-5" />
              Download Now
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-900">
              किसानों का भरोसेमंद साथी
            </h2>
            <p className="text-lg text-muted-foreground">
              We empower farmers with high-quality fertilizers, advanced satellite-based soil analysis, and reliable crop insurance.
            </p>
            <Button size="lg" className="bg-forest-600 hover:bg-forest-700 text-white">
              <Download className="mr-2 h-5 w-5" />
              Download Now
            </Button>
          </div>
        </div>
      </section>

      {/* Carbon Credits Highlight */}
      <section className="py-20 bg-gradient-to-br from-forest-600 to-forest-800 text-white">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold">
                पर्यावरण बचाओ पैसे कमाओ
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                CARBON CREDITS
              </h2>
              <p className="text-lg text-white/90 max-w-xl">
                One app, endless possibilities! From recharges to loans, bookings to insurance — rupiya.app makes finances effortless. Plus, enjoy exciting cashback on every spend!
              </p>
              <Link href="/carbon-credits">
                <Button size="lg" variant="secondary">
                  Learn More
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&h=800&fit=crop"
                  alt="Carbon credits and environmental sustainability"
                  width={800}
                  height={800}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-beige-50">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2 hover:border-forest-300 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-sky-100 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-sky-600" />
                </div>
                <CardTitle>Recharge</CardTitle>
                <CardDescription>
                  Enjoy! Cashback On Recharges & No Platform fees
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Mobile top-ups, DTH recharges, and FASTag refills are made fast, secure, and hassle-free with rupiya.app.
                </p>
                <Link href="/wallet/recharge">
                  <Button variant="outline" size="sm">Know More</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-forest-300 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-forest-100 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-forest-600" />
                </div>
                <CardTitle>Bookings</CardTitle>
                <CardDescription>
                  Save More While Travelling, Get the Best Deals!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Enjoy instant bookings for flights, buses, trains, and hotels with ease. Experience smooth travel and luxurious stays.
                </p>
                <Link href="/wallet/bookings">
                  <Button variant="outline" size="sm">Know More</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-forest-300 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-sky-100 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-sky-600" />
                </div>
                <CardTitle>Insurance</CardTitle>
                <CardDescription>
                  Drive Confidently, Stay Insured, and Live Life Stress-Free.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Providing comprehensive insurance solutions for passenger cars, two-wheelers, and more. With affordable plans and easy claims.
                </p>
                <Link href="/wallet/insurance">
                  <Button variant="outline" size="sm">Know More</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-forest-300 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-beige-200 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-beige-700" />
                </div>
                <CardTitle>Gold Solutions</CardTitle>
                <CardDescription>
                  Digital Gold, jewellery, Gold Loans, and More!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  rupiya.app offers a complete gold solution, including gold loans, digital gold, and jewellery at the Lowest Making Charges.
                </p>
                <Link href="/wallet/gold">
                  <Button variant="outline" size="sm">Know More</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-forest-300 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-forest-100 flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-forest-600" />
                </div>
                <CardTitle>Loan Service</CardTitle>
                <CardDescription>
                  Quick Loans, Simple Solutions, Anytime You Need.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  rupiya.app offers quick and easy loan solutions to meet your financial needs. Whether it's for personal, agricultural, or business purposes.
                </p>
                <Link href="/wallet/loans">
                  <Button variant="outline" size="sm">Know More</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-forest-300 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-sky-100 flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-sky-600" />
                </div>
                <CardTitle>Smart Farming</CardTitle>
                <CardDescription>
                  Complete Digital Solution for Modern Farmers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Satellite monitoring, soil testing, advisory, and more. Everything you need for residue-free farming.
                </p>
                <Link href="/smart-farming">
                  <Button variant="outline" size="sm">Know More</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
              Our Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              35+ residue-free agricultural inputs for sustainable farming
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {[
              "Rupiya Kuber",
              "Grow Shakti",
              "N.P.K. Shakti",
              "Rupiya ORGO",
              "Cereal Shakti",
            ].map((product, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-forest-100">
                    <Image
                      src={`https://images.unsplash.com/photo-1611095973763-414019e72400?w=400&h=400&fit=crop&sig=${i}`}
                      alt={`${product} - Agricultural product`}
                      width={400}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardTitle className="text-lg">{product}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Link href="/products">
                    <Button variant="outline" size="sm" className="w-full">
                      View Product
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-beige-50">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Ramesh Yadav",
                rating: 5,
                text: "All financial services in one app, making transactions super easy! No need for multiple apps anymore. The cashback offers are the best part!",
              },
              {
                name: "Pooja Sharma",
                rating: 5,
                text: "Fast, secure, and convenient! Everything from recharges to bill payments is available in one place. The cashback rewards make it even better!",
              },
              {
                name: "Amit Verma",
                rating: 5,
                text: "A must-have app for hassle-free transactions. All services are integrated into one platform, and the cashback deals are amazing!",
              },
              {
                name: "Sunil Chaudhary",
                rating: 5,
                text: "Super easy to use with great features! I love that everything is on a single platform, and the cashback offers are truly rewarding.",
              },
            ].map((testimonial, i) => (
              <Card key={i}>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden bg-forest-100 flex-shrink-0">
                      <Image
                        src={`https://i.pravatar.cc/150?img=${i + 10}`}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">{testimonial.name}</p>
                      <div className="flex items-center space-x-1">
                        {[...Array(testimonial.rating)].map((_, j) => (
                          <Star key={j} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <CardDescription>{testimonial.text}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
              Awards & Recognition
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {[
              {
                title: "Fintech Achiever (2023)",
                org: "HT Media Group",
              },
              {
                title: "Blood Donation Camp",
                org: "Indian Red Cross Society (2023)",
              },
              {
                title: "Fintech Excellence",
                org: "HT Media & Radio One",
              },
              {
                title: "Startup India Recognised",
                org: "Government of India",
              },
              {
                title: "Best Fintech Startup (2022)",
                org: "Times Gujarat Icons",
              },
            ].map((award, i) => (
              <Card key={i} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-20 w-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-forest-100 to-forest-200 flex items-center justify-center">
                    <Award className="h-10 w-10 text-forest-600" />
                  </div>
                  <CardTitle className="text-base">{award.title}</CardTitle>
                  <CardDescription>{award.org}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-forest-600 to-forest-800 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Grow your money<br />
            with rupiya.app
          </h2>
          <Button size="lg" variant="secondary" className="bg-white text-forest-600 hover:bg-beige-50">
            <Download className="mr-2 h-5 w-5" />
            Download Now
          </Button>
        </div>
      </section>
    </div>
  )
}

