import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-beige-50">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-forest-600">rupiya.app</h3>
            <p className="text-sm text-muted-foreground">
              Empowering farmers with residue-free farming, regenerative agriculture, and financial inclusivity.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/people/Rupiyaapp/61554040353126/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-forest-600">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://x.com/rupiyaonline" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-forest-600">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://www.instagram.com/rupiyaonline/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-forest-600">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://www.linkedin.com/company/rupiyaonline/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-forest-600">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://www.youtube.com/@rupiyaonline" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-forest-600">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="https://api.whatsapp.com/send/?phone=917572860606&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-forest-600">
                <MessageCircle className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/smart-farming" className="text-muted-foreground hover:text-forest-600">
                  Smart Farming
                </Link>
              </li>
              <li>
                <Link href="/carbon-credits" className="text-muted-foreground hover:text-forest-600">
                  Carbon Credit
                </Link>
              </li>
              <li>
                <Link href="/wallet/recharge" className="text-muted-foreground hover:text-forest-600">
                  Recharge
                </Link>
              </li>
              <li>
                <Link href="/wallet/bookings" className="text-muted-foreground hover:text-forest-600">
                  Bookings
                </Link>
              </li>
              <li>
                <Link href="/wallet/loans" className="text-muted-foreground hover:text-forest-600">
                  Loan Service
                </Link>
              </li>
              <li>
                <Link href="/wallet/gold-tech" className="text-muted-foreground hover:text-forest-600">
                  Gold Solutions
                </Link>
              </li>
              <li>
                <Link href="/wallet/insurance" className="text-muted-foreground hover:text-forest-600">
                  Insurance
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-forest-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-muted-foreground hover:text-forest-600">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-forest-600">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-forest-600">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/career" className="text-muted-foreground hover:text-forest-600">
                  Career
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:info@rupiya.app" className="hover:text-forest-600">
                  info@rupiya.app
                </a>
              </li>
              <li>
                <a href="tel:+917941006237" className="hover:text-forest-600">
                  +91 79 4100 6237
                </a>
              </li>
              <li className="pt-2">
                Corporate Office:<br />
                1005 - 1006 Ganesh Glory,<br />
                Jagatpur Road, Off SG Highway,<br />
                Ahmedabad 382481
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © Copyright 2025 rupiya.app | All rights reserved
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-muted-foreground hover:text-forest-600">
                Privacy Policy
              </Link>
              <Link href="/refund" className="text-muted-foreground hover:text-forest-600">
                Refund Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-forest-600">
                Terms of Use
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  )
}

