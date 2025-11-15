import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Users, Shield, CreditCard, ShoppingCart, Plane, Phone, Gem, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function WalletPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-forest-50 to-beige-50 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-forest-900">
              Digital Wallet
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-forest-700">
              एक Click, सब कुछ Quick!
            </h2>
            <p className="text-lg text-muted-foreground">
              All financial services in one app. Enjoy cashback on every transaction!
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Recharge */}
            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-forest-300">
              <CardHeader>
                <div className="h-16 w-16 rounded-lg bg-sky-100 flex items-center justify-center mb-4">
                  <Phone className="h-8 w-8 text-sky-600" />
                </div>
                <CardTitle>Recharge</CardTitle>
                <CardDescription>
                  Enjoy! Cashback On Recharges & No Platform fees
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Mobile top-ups, DTH recharges, and FASTag refills. Fast, secure, and hassle-free.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                  <li>• Mobile recharge</li>
                  <li>• DTH recharge</li>
                  <li>• FASTag refill</li>
                  <li>• Bill payments</li>
                </ul>
                <Link href="/wallet/recharge">
                  <Button className="w-full bg-forest-600 hover:bg-forest-700">
                    Know More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Bookings */}
            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-forest-300">
              <CardHeader>
                <div className="h-16 w-16 rounded-lg bg-forest-100 flex items-center justify-center mb-4">
                  <Plane className="h-8 w-8 text-forest-600" />
                </div>
                <CardTitle>Bookings</CardTitle>
                <CardDescription>
                  Save More While Travelling, Get the Best Deals!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Instant bookings for flights, buses, trains, and hotels. Smooth travel and luxurious stays.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                  <li>• Flight bookings</li>
                  <li>• Train reservations</li>
                  <li>• Bus tickets</li>
                  <li>• Hotel bookings</li>
                </ul>
                <Link href="/wallet/bookings">
                  <Button className="w-full bg-forest-600 hover:bg-forest-700">
                    Know More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Insurance */}
            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-forest-300">
              <CardHeader>
                <div className="h-16 w-16 rounded-lg bg-sky-100 flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-sky-600" />
                </div>
                <CardTitle>Insurance</CardTitle>
                <CardDescription>
                  Drive Confidently, Stay Insured, and Live Life Stress-Free.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Comprehensive insurance for cars, two-wheelers, and more. Affordable plans and easy claims.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                  <li>• Car insurance</li>
                  <li>• Two-wheeler insurance</li>
                  <li>• Health insurance</li>
                  <li>• Life insurance</li>
                </ul>
                <Link href="/wallet/insurance">
                  <Button className="w-full bg-forest-600 hover:bg-forest-700">
                    Know More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Gold Solutions */}
            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-forest-300">
              <CardHeader>
                <div className="h-16 w-16 rounded-lg bg-beige-200 flex items-center justify-center mb-4">
                  <Gem className="h-8 w-8 text-beige-700" />
                </div>
                <CardTitle>Gold Solutions</CardTitle>
                <CardDescription>
                  Digital Gold, jewellery, Gold Loans, and More!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Complete gold solution including gold loans, digital gold, and jewellery at lowest making charges.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                  <li>• Digital gold</li>
                  <li>• Gold loans</li>
                  <li>• Jewellery</li>
                  <li>• Gold investment</li>
                </ul>
                <Link href="/wallet/gold">
                  <Button className="w-full bg-forest-600 hover:bg-forest-700">
                    Know More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Loans */}
            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-forest-300">
              <CardHeader>
                <div className="h-16 w-16 rounded-lg bg-forest-100 flex items-center justify-center mb-4">
                  <CreditCard className="h-8 w-8 text-forest-600" />
                </div>
                <CardTitle>Loan Service</CardTitle>
                <CardDescription>
                  Quick Loans, Simple Solutions, Anytime You Need.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Quick and easy loans for personal, agricultural, or business purposes. Simple process.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                  <li>• Personal loans</li>
                  <li>• Agricultural loans</li>
                  <li>• Business loans</li>
                  <li>• Quick approval</li>
                </ul>
                <Link href="/wallet/loans">
                  <Button className="w-full bg-forest-600 hover:bg-forest-700">
                    Know More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* More Services */}
            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-forest-300">
              <CardHeader>
                <div className="h-16 w-16 rounded-lg bg-sky-100 flex items-center justify-center mb-4">
                  <ShoppingCart className="h-8 w-8 text-sky-600" />
                </div>
                <CardTitle>More Services</CardTitle>
                <CardDescription>
                  Everything you need in one place
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Additional farmer-centric services and financial solutions.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                  <li>• Bill payments</li>
                  <li>• Money transfer</li>
                  <li>• Savings account</li>
                  <li>• Investment options</li>
                </ul>
                <Button variant="outline" className="w-full">
                  Explore
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cashback Highlight */}
      <section className="py-20 bg-gradient-to-br from-forest-600 to-forest-800 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Every Time Cashback Possible!
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Enjoy exciting cashback on every transaction. From recharges to bookings, insurance to loans - get rewarded for every spend!
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardHeader>
                  <CardTitle className="text-2xl">1%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-white/90">Cashback on Recharges</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardHeader>
                  <CardTitle className="text-2xl">2%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-white/90">Cashback on Bookings</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardHeader>
                  <CardTitle className="text-2xl">Up to 5%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-white/90">Cashback on Premium Services</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-beige-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
                Why Choose rupiya.app Wallet?
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-6 w-6 text-forest-600" />
                    <span>One-Stop Solution</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    All financial services in one app. No need for multiple apps anymore.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-6 w-6 text-forest-600" />
                    <span>Secure & Fast</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Bank-level security with instant transactions. Your money is safe with us.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-6 w-6 text-forest-600" />
                    <span>24/7 Support</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Round-the-clock customer support. We're always here to help.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CreditCard className="h-6 w-6 text-forest-600" />
                    <span>No Hidden Fees</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Transparent pricing. No platform fees on most services.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-6">
            Start Using Digital Wallet Today
          </h2>
          <Button size="lg" className="bg-forest-600 hover:bg-forest-700">
            Download App
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}

