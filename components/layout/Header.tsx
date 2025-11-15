"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, Download, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

// Import auth context
import { useAuth } from "@/lib/auth-context"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [expandedMenu, setExpandedMenu] = React.useState<string | null>(null)
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isHovered, setIsHovered] = React.useState(false)
  const [logoError, setLogoError] = React.useState(false)
  
  // Use auth context
  const { user, loading, logout } = useAuth()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link 
          href="/" 
          className="flex items-center space-x-2 relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative flex items-center">
            <motion.div
              className="relative w-10 h-10 md:w-12 md:h-12"
              animate={{ 
                scale: isHovered ? 1.1 : 1,
                rotate: isHovered ? [0, -5, 5, -5, 0] : 0
              }}
              transition={{ duration: 0.3 }}
            >
              {!logoError ? (
                <Image
                  src="/logo.png"
                  alt="Rupiya.app Logo"
                  width={48}
                  height={48}
                  className="object-contain w-full h-full"
                  priority
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="w-full h-full rounded-full bg-gradient-to-br from-forest-500 to-forest-700 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  ₹
                </div>
              )}
            </motion.div>
            <AnimatePresence>
              {(isHovered || isScrolled) && (
                <motion.span
                  initial={{ opacity: 0, x: -10, width: 0 }}
                  animate={{ opacity: 1, x: 0, width: "auto" }}
                  exit={{ opacity: 0, x: -10, width: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="text-2xl font-bold text-forest-600 ml-2 whitespace-nowrap overflow-hidden"
                >
                  rupiya.app
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <div className="flex items-center space-x-1">
            {/* Smart Farming */}
            <div className="relative group">
              <Link href="/smart-farming">
                <button
                  className="inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
                  onMouseEnter={() => setActiveDropdown('smart-farming')}
                >
                  Smart Farming
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </Link>
              {activeDropdown === 'smart-farming' && (
                <div 
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[700px]"
                  onMouseEnter={() => setActiveDropdown('smart-farming')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="rounded-md border bg-popover p-4 shadow-md">
                    <ul className="grid grid-cols-3 gap-3">
                      <li>
                        <Link
                          href="/smart-farming#soil-testing"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Satellite Soil Testing
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            AI-powered soil analysis
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/smart-farming#crop-monitoring"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            AI Crop Monitoring
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Real-time satellite monitoring
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/smart-farming#advisory"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Agronomy Advisory
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Expert guidance & support
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/smart-farming#inputs"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Residue-Free Inputs
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            35+ certified products
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/smart-farming#insurance"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Parametric Insurance
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Weather-based protection
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/smart-farming#buyback"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Buy-Back Program
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Direct from farm gate
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Carbon Credits */}
            <div className="relative group">
              <Link href="/carbon-credits">
                <button
                  className="inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
                  onMouseEnter={() => setActiveDropdown('carbon-credits')}
                >
                  Carbon Credits
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </Link>
              {activeDropdown === 'carbon-credits' && (
                <div 
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[700px]"
                  onMouseEnter={() => setActiveDropdown('carbon-credits')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="rounded-md border bg-popover p-4 shadow-md">
                    <ul className="grid grid-cols-3 gap-3">
                      <li>
                        <Link
                          href="/carbon-credits#what-are-credits"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            What are Carbon Credits?
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/carbon-credits#how-it-works"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            How It Works
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/carbon-credits#rewards"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Rewards & Partnership
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Products */}
            <Link href="/products">
              <button className="inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none">
                Products
              </button>
            </Link>

            {/* Digital Wallet */}
            <div className="relative group">
              <Link href="/wallet">
                <button
                  className="inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
                  onMouseEnter={() => setActiveDropdown('wallet')}
                >
                  Digital Wallet
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </Link>
              {activeDropdown === 'wallet' && (
                <div 
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[700px]"
                  onMouseEnter={() => setActiveDropdown('wallet')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="rounded-md border bg-popover p-4 shadow-md">
                    <ul className="grid grid-cols-3 gap-3">
                      <li>
                        <Link
                          href="/wallet/recharge"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Recharge
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/wallet/bookings"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Bookings
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/wallet/insurance"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Insurance
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/wallet/gold-tech"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Gold Tech
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/wallet/loans"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Loans
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Resources */}
            <div className="relative group">
              <button
                className="inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
                onMouseEnter={() => setActiveDropdown('resources')}
              >
                Resources
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'resources' && (
                <div 
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[700px]"
                  onMouseEnter={() => setActiveDropdown('resources')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="rounded-md border bg-popover p-4 shadow-md">
                    <ul className="grid grid-cols-2 gap-3">
                      <li>
                        <Link
                          href="/careers"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Careers
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Join our team and grow with us
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/about-us"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            About Us
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Our mission and vision
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/contact"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Contact Us
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Get in touch with our team
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/blogs"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Blog
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Latest articles and insights
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          {loading ? (
            <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse" />
          ) : user ? (
            <div className="flex items-center space-x-2">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">
                  {user.displayName || user.email?.split('@')[0]}
                </p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
              <button
                onClick={logout}
                className="p-2 rounded-full hover:bg-gray-100 transition"
                title="Logout"
              >
                <LogOut className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          ) : (
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
          )}
          <a href="https://play.google.com/store/apps/details?id=rupiya.app&pli=1" target="_blank" rel="noopener noreferrer">
            <Button className="bg-forest-600 hover:bg-forest-700">
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background max-h-[calc(100vh-64px)] overflow-y-auto">
          <nav className="container py-4 space-y-2">
            {/* Smart Farming with Dropdown */}
            <div>
              <div className="flex items-center justify-between py-2">
                <Link
                  href="/smart-farming"
                  className="flex-1 text-sm font-medium hover:text-forest-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Smart Farming
                </Link>
                <button
                  onClick={() => setExpandedMenu(expandedMenu === "smart-farming" ? null : "smart-farming")}
                  className="flex items-center justify-center px-2"
                >
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      expandedMenu === "smart-farming" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
              {expandedMenu === "smart-farming" && (
                <div className="pl-4 space-y-2 py-2">
                  <Link
                    href="/smart-farming#soil-testing"
                    className="block py-2 text-sm text-muted-foreground hover:text-forest-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Satellite Soil Testing
                  </Link>
                  <Link
                    href="/smart-farming#crop-monitoring"
                    className="block py-2 text-sm text-muted-foreground hover:text-forest-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    AI Crop Monitoring
                  </Link>
                  <Link
                    href="/smart-farming#advisory"
                    className="block py-2 text-sm text-muted-foreground hover:text-forest-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Agronomy Advisory
                  </Link>
                  <Link
                    href="/smart-farming#inputs"
                    className="block py-2 text-sm text-muted-foreground hover:text-forest-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Residue-Free Inputs
                  </Link>
                  <Link
                    href="/smart-farming#insurance"
                    className="block py-2 text-sm text-muted-foreground hover:text-forest-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Parametric Insurance
                  </Link>
                  <Link
                    href="/smart-farming#buyback"
                    className="block py-2 text-sm text-muted-foreground hover:text-forest-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Buy-Back Program
                  </Link>
                </div>
              )}
            </div>

            {/* Carbon Credits with Dropdown */}
            <div>
              <div className="flex items-center justify-between py-2">
                <Link
                  href="/carbon-credits"
                  className="flex-1 text-sm font-medium hover:text-forest-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Carbon Credits
                </Link>
                <button
                  onClick={() => setExpandedMenu(expandedMenu === "carbon-credits" ? null : "carbon-credits")}
                  className="flex items-center justify-center px-2"
                >
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      expandedMenu === "carbon-credits" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
              {expandedMenu === "carbon-credits" && (
                <div className="pl-4 space-y-2 py-2">
                  <Link
                    href="/carbon-credits#what-are-credits"
                    className="block py-2 text-sm text-muted-foreground hover:text-forest-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    What are Carbon Credits?
                  </Link>
                  <Link
                    href="/carbon-credits#how-it-works"
                    className="block py-2 text-sm text-muted-foreground hover:text-forest-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    How It Works
                  </Link>
                  <Link
                    href="/carbon-credits#rewards"
                    className="block py-2 text-sm text-muted-foreground hover:text-forest-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Rewards & Partnership
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/products"
              className="block py-2 text-sm font-medium hover:text-forest-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>

            {/* Digital Wallet with Dropdown */}
            <div>
              <div className="flex items-center justify-between py-2">
                <Link
                  href="/wallet"
                  className="flex-1 text-sm font-medium hover:text-forest-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Digital Wallet
                </Link>
                <button
                  onClick={() => setExpandedMenu(expandedMenu === "wallet" ? null : "wallet")}
                  className="flex items-center justify-center px-2"
                >
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      expandedMenu === "wallet" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
              {expandedMenu === "wallet" && (
                <div className="pl-4 space-y-2 py-2">
                  <Link
                    href="/wallet/recharge"
                    className="block py-2 text-sm text-muted-foreground hover:text-forest-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Recharge
                  </Link>
                  <Link
                    href="/wallet/bookings"
                    className="block py-2 text-sm text-muted-foreground hover:text-forest-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Bookings
                  </Link>
                  <Link
                    href="/wallet/insurance"
                    className="block py-2 text-sm text-muted-foreground hover:text-forest-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Insurance
                  </Link>
                  <Link
                    href="/wallet/gold-tech"
                    className="block py-2 text-sm text-muted-foreground hover:text-forest-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Gold Tech
                  </Link>
                  <Link
                    href="/wallet/loans"
                    className="block py-2 text-sm text-muted-foreground hover:text-forest-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Loans
                  </Link>
                </div>
              )}
            </div>

            {/* Resources with Dropdown */}
            <div>
              <div className="flex items-center justify-between py-2">
                <button
                  className="flex-1 text-sm font-medium hover:text-forest-600 text-left"
                  onClick={() => setExpandedMenu(expandedMenu === "resources" ? null : "resources")}
                >
                  Resources
                </button>
                <button
                  onClick={() => setExpandedMenu(expandedMenu === "resources" ? null : "resources")}
                  className="flex items-center justify-center px-2"
                >
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      expandedMenu === "resources" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
              {expandedMenu === "resources" && (
                <div className="pl-4 space-y-2 py-2">
                  <Link
                    href="/careers"
                    className="block py-2 text-sm text-muted-foreground hover:text-forest-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Careers
                  </Link>
                  <Link
                    href="/about-us"
                    className="block py-2 text-sm text-muted-foreground hover:text-forest-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/contact"
                    className="block py-2 text-sm text-muted-foreground hover:text-forest-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/blogs"
                    className="block py-2 text-sm text-muted-foreground hover:text-forest-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Blog
                  </Link>
                </div>
              )}
            </div>
            <div className="pt-4 space-y-2">
              {loading ? (
                <div className="w-full h-10 bg-gray-200 rounded animate-pulse" />
              ) : user ? (
                <>
                  <div className="px-4 py-2 bg-gray-50 rounded text-sm">
                    <p className="font-medium text-gray-900">
                      {user.displayName || user.email?.split('@')[0]}
                    </p>
                    <p className="text-xs text-gray-600">{user.email}</p>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      logout()
                      setMobileMenuOpen(false)
                    }}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </Button>
                </>
              ) : (
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Login
                  </Button>
                </Link>
              )}
              <a href="https://play.google.com/store/apps/details?id=rupiya.app&pli=1" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="w-full bg-forest-600 hover:bg-forest-700">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}