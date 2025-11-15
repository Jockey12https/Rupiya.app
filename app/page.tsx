"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Leaf, TrendingUp, Shield, Users, Award, Star } from "lucide-react"
import { motion } from "framer-motion"

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function HomePage() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Hero Section 1 */}
      <section className="relative bg-gradient-to-br from-forest-50 via-beige-50 to-sky-50 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div 
              className="space-y-6"
              initial="initial"
              animate="animate"
              variants={fadeInLeft}
            >
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-forest-900 leading-tight"
                variants={fadeInUp}
              >
                किसान की हर जरुरत<br />
                <span className="text-forest-600">का Digital साथी!</span>
              </motion.h1>
              <motion.h2 
                className="text-2xl md:text-3xl font-semibold text-forest-700"
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
              >
                Empowering Farmers
              </motion.h2>
              <motion.p 
                className="text-lg text-muted-foreground max-w-xl"
                variants={fadeInUp}
                transition={{ delay: 0.3 }}
              >
                From your fields to your future, rupiya.app stands with the hands that feed the nation. Let's grow together, sustainably and successfully.
              </motion.p>
              <motion.div 
                className="pt-4"
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
              >
                <a href="https://play.google.com/store/apps/details?id=rupiya.app&pli=1" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-forest-600 hover:bg-forest-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <Download className="mr-2 h-5 w-5" />
                    Download Now
                  </Button>
                </a>
              </motion.div>
            </motion.div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <Image
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=800&fit=crop"
                  alt="Farmer using smartphone in field"
                  width={800}
                  height={800}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hero Section 2 - Regenerative Farming */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div 
              className="relative order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <Image
                  src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=800&fit=crop&q=80"
                  alt="Regenerative farming - healthy soil and crops"
                  width={800}
                  height={800}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </motion.div>
            <motion.div 
              className="space-y-6 order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
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
              
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hero Section 3 - Quick Services */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-forest-50 relative overflow-hidden">
        <div className="container">
          <motion.div 
            className="text-center space-y-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
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
           
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div 
            className="text-center space-y-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-forest-900">
              किसानों का भरोसेमंद साथी
            </h2>
            <p className="text-lg text-muted-foreground">
              We empower farmers with high-quality fertilizers, advanced satellite-based soil analysis, and reliable crop insurance.
            </p>
           
          </motion.div>
        </div>
      </section>

      {/* Carbon Credits Highlight */}
      <section className="py-20 bg-gradient-to-br from-forest-600 to-forest-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
        <div className="container relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                पर्यावरण बचाओ पैसे कमाओ
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold">
                CARBON CREDITS
              </h2>
              <p className="text-lg text-white/90 max-w-xl">
                One app, endless possibilities! From recharges to loans, bookings to insurance — rupiya.app makes finances effortless. Plus, enjoy exciting cashback on every spend!
              </p>
              <Link href="/carbon-credits">
                <Button size="lg" variant="secondary" className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Learn More
                </Button>
              </Link>
            </motion.div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <Image
                  src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&h=800&fit=crop"
                  alt="Carbon credits and environmental sustainability"
                  width={800}
                  height={800}
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-beige-50">
        <div className="container">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {[
              { icon: TrendingUp, title: "Recharge", desc: "Enjoy! Cashback On Recharges & No Platform fees", link: "/wallet/recharge", color: "sky" },
              { icon: Users, title: "Bookings", desc: "Save More While Travelling, Get the Best Deals!", link: "/wallet/bookings", color: "forest" },
              { icon: Shield, title: "Insurance", desc: "Drive Confidently, Stay Insured, and Live Life Stress-Free.", link: "/wallet/insurance", color: "sky" },
              { icon: TrendingUp, title: "Gold Solutions", desc: "Digital Gold, jewellery, Gold Loans, and More!", link: "/wallet/gold", color: "beige" },
              { icon: Leaf, title: "Loan Service", desc: "Quick Loans, Simple Solutions, Anytime You Need.", link: "/wallet/loans", color: "forest" },
              { icon: Leaf, title: "Smart Farming", desc: "Complete Digital Solution for Modern Farmers", link: "/smart-farming", color: "sky" },
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="border-2 hover:border-forest-300 transition-all duration-300 hover:shadow-xl h-full">
                  <CardHeader>
                    <motion.div 
                      className={`h-12 w-12 rounded-lg bg-${service.color}-100 flex items-center justify-center mb-4`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <service.icon className={`h-6 w-6 text-${service.color}-600`} />
                    </motion.div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {service.title === "Recharge" && "Mobile top-ups, DTH recharges, and FASTag refills are made fast, secure, and hassle-free with rupiya.app."}
                      {service.title === "Bookings" && "Enjoy instant bookings for flights, buses, trains, and hotels with ease. Experience smooth travel and luxurious stays."}
                      {service.title === "Insurance" && "Providing comprehensive insurance solutions for passenger cars, two-wheelers, and more. With affordable plans and easy claims."}
                      {service.title === "Gold Solutions" && "rupiya.app offers a complete gold solution, including gold loans, digital gold, and jewellery at the Lowest Making Charges."}
                      {service.title === "Loan Service" && "rupiya.app offers quick and easy loan solutions to meet your financial needs. Whether it's for personal, agricultural, or business purposes."}
                      {service.title === "Smart Farming" && "Satellite monitoring, soil testing, advisory, and more. Everything you need for residue-free farming."}
                    </p>
                    <Link href={service.link}>
                      <Button variant="outline" size="sm" className="w-full hover:bg-forest-50 transition-colors">
                        Know More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Showcase */}
<section className="py-20 bg-white">
  <div className="container">
    <motion.div 
      className="text-center mb-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
        Our Products
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        35+ residue-free agricultural inputs for sustainable farming
      </p>
    </motion.div>
    
    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-5"
    >
      {[
        {
          name: "Rupiya Kuber",
          image: "/images/kuber.jpg",
        },
        {
          name: "Grow Shakti",
          image: "/images/grow.jpg",
        },
        {
          name: "Cereal Shakti",
          image: "/images/cereal.jpg",
        },
        {
          name: "Nitro Shakti",
          image: "/images/nitro.jpg",
        },
        {
          name: "Root Shakti",
          image: "/images/root.jpg",
        },
      ].map((product, i) => (
        <motion.div
          key={i}
          variants={fadeInUp}
          whileHover={{ y: -10, scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="hover:shadow-xl transition-all duration-300 h-full">
            <CardHeader>
              <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-forest-100">
                <Image
                  src={product.image}
                  alt={`${product.name} - Agricultural product`}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardTitle className="text-lg">{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <Link href="/products">
                <Button variant="outline" size="sm" className="w-full hover:bg-forest-50 transition-colors">
                  View Product
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

      {/* Testimonials */}
      <section className="py-20 bg-beige-50">
        <div className="container">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
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
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="h-12 w-12 rounded-full overflow-hidden bg-forest-100 flex-shrink-0 ring-2 ring-forest-200">
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
              Awards & Recognition
            </h2>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-5"
          >
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
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="text-center hover:shadow-xl transition-all duration-300 h-full">
                  <CardHeader>
                    <motion.div 
                      className="h-20 w-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-forest-100 to-forest-200 flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Award className="h-10 w-10 text-forest-600" />
                    </motion.div>
                    <CardTitle className="text-base">{award.title}</CardTitle>
                    <CardDescription>{award.org}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-forest-600 to-forest-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
        <motion.div 
          className="container text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Grow your money<br />
            with rupiya.app
          </h2>
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-white text-forest-600 hover:bg-beige-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Now
          </Button>
        </motion.div>
      </section>
    </div>
  )
}