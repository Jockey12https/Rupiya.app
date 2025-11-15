"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, DollarSign, CheckCircle, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function BookingsPage() {
  const services = [
    { title: "Travel & Transport", description: "Flight & bus bookings" },
    { title: "Hotels & Lodging", description: "Comfortable stays" },
    { title: "Restaurants", description: "Table reservations" },
    { title: "Event Tickets", description: "Concerts & shows" },
    { title: "Movie Tickets", description: "Book seats instantly" },
    { title: "Entertainment", description: "Theme parks & more" }
  ]

  const benefits = [
    "Instant booking confirmation",
    "Secure payment gateway",
    "Multiple payment options",
    "Exclusive partner discounts",
    "Early bird offers",
    "Loyalty points on every booking"
  ]

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 to-forest-600 text-white py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4">
              Book Anything, Anytime
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              All Your Bookings in One Place
            </h1>
            <p className="text-xl text-white/90">
              Travel, hotels, restaurants, movies, and more. Everything you need to plan your perfect experience.
            </p>
            <Button size="lg" variant="secondary" className="mt-6 bg-white text-purple-600 hover:bg-purple-50">
              Start Booking
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
              What You Can Book
            </h2>
            <p className="text-lg text-muted-foreground">
              Wide range of services all in one app
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-purple-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
                Easy 3-Step Booking Process
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3 mb-12">
              {[
                {
                  step: 1,
                  title: "Search",
                  description: "Find what you're looking for with advanced filters and recommendations"
                },
                {
                  step: 2,
                  title: "Compare",
                  description: "View prices, ratings, and reviews from trusted sources"
                },
                {
                  step: 3,
                  title: "Book & Pay",
                  description: "Secure payment with instant confirmation"
                }
              ].map((item) => (
                <Card key={item.step} className="bg-white">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-full bg-purple-600 text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {item.step}
                    </div>
                    <CardTitle className="text-center">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-center text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-6">
                  Why Book With Us?
                </h2>
                <ul className="space-y-4">
                  {benefits.map((item, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Card className="bg-gradient-to-br from-purple-50 to-forest-50 border-2 border-purple-200">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Star className="h-6 w-6 text-purple-600" />
                    <span>Exclusive Benefits</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-semibold text-forest-900">First Booking Offer</p>
                    <p className="text-sm text-muted-foreground">Get ₹500 cashback on your first booking</p>
                  </div>
                  <div>
                    <p className="font-semibold text-forest-900">Loyalty Program</p>
                    <p className="text-sm text-muted-foreground">Earn points on every booking, redeem for discounts</p>
                  </div>
                  <div>
                    <p className="font-semibold text-forest-900">Referral Rewards</p>
                    <p className="text-sm text-muted-foreground">Share with friends and earn referral bonuses</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 bg-purple-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
              Popular Destinations
            </h2>
            <p className="text-lg text-muted-foreground">
              Trending bookings this month
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {["Dubai", "Goa", "Bangkok", "Singapore", "Kerala", "Jaipur", "Paris", "Bali"].map((dest, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow text-center cursor-pointer">
                <CardHeader>
                  <CardTitle>{dest}</CardTitle>
                  <CardDescription>Explore & Book Now</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="w-full">
                    View Offers
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Plan Your Perfect Trip Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Everything you need to book travel, stay, and entertainment in one app
          </p>
          <a href="https://play.google.com/store/apps/details?id=rupiya.app&pli=1" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-purple-50">
              Download App
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}
