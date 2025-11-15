import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight, Search, Filter } from "lucide-react"
import Link from "next/link"

export default function BlogsPage() {
  const blogs = [
    {
      id: 1,
      title: "How Carbon Credits Are Helping Indian Farmers Earn Extra Income",
      excerpt: "Discover how regenerative farming practices can generate additional revenue through carbon credit programs. Learn about the science behind soil carbon sequestration.",
      category: "Carbon Credits",
      author: "Priya Sharma",
      date: "Nov 15, 2024",
      readTime: "8 min read",
      image: "🌍",
      featured: true
    },
    {
      id: 2,
      title: "Smart Farming 101: Using AI and Satellites for Better Crop Management",
      excerpt: "Explore how artificial intelligence and satellite monitoring can help you make better farming decisions. Real-time data for real farming challenges.",
      category: "Smart Farming",
      author: "Rajesh Kumar",
      date: "Nov 12, 2024",
      readTime: "10 min read",
      image: "🛰️",
      featured: true
    },
    {
      id: 3,
      title: "Regenerative Agriculture: The Future of Sustainable Farming in India",
      excerpt: "Learn about regenerative farming practices that improve soil health, increase yields, and contribute to environmental conservation.",
      category: "Sustainability",
      author: "Dr. Amit Patel",
      date: "Nov 10, 2024",
      readTime: "12 min read",
      image: "🌱"
    },
    {
      id: 4,
      title: "Digital Payments for Farmers: Financial Inclusion Through Technology",
      excerpt: "Understanding how digital wallets and payment systems are revolutionizing how farmers transact, save, and access credit.",
      category: "Financial Services",
      author: "Neha Desai",
      date: "Nov 8, 2024",
      readTime: "7 min read",
      image: "💳"
    },
    {
      id: 5,
      title: "Success Story: How Farmer Suresh Increased His Yield by 40% with Rupiya",
      excerpt: "Real story of a Maharashtra farmer who doubled his income using smart farming tools and carbon credit programs. From ₹2L to ₹4L annually.",
      category: "Success Stories",
      author: "Guest Post",
      date: "Nov 5, 2024",
      readTime: "6 min read",
      image: "👨‍🌾"
    },
    {
      id: 6,
      title: "Crop Insurance Made Simple: Protecting Your Investment",
      excerpt: "Understand parametric insurance, how it works, and why it's crucial for modern farmers. Weather-based protection without paperwork.",
      category: "Insurance",
      author: "Vikram Singh",
      date: "Nov 1, 2024",
      readTime: "9 min read",
      image: "🛡️"
    },
    {
      id: 7,
      title: "The Role of Soil Testing in Achieving Higher Yields",
      excerpt: "Why satellite-based soil testing is revolutionizing agriculture. Data-driven decisions lead to better harvests.",
      category: "Smart Farming",
      author: "Dr. Meena Verma",
      date: "Oct 28, 2024",
      readTime: "8 min read",
      image: "🔬"
    },
    {
      id: 8,
      title: "Sustainable Agriculture Practices: Farmers Share Their Journey",
      excerpt: "Insights from 50,000+ farmers practicing regenerative farming. How they're saving costs while improving their land.",
      category: "Sustainability",
      author: "Rupiya Research Team",
      date: "Oct 25, 2024",
      readTime: "15 min read",
      image: "🌾"
    }
  ]

  const categories = [
    "All",
    "Smart Farming",
    "Carbon Credits",
    "Financial Services",
    "Sustainability",
    "Success Stories",
    "Insurance"
  ]

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-forest-600 to-forest-800 text-white py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              Rupiya Blog
            </h1>
            <p className="text-xl text-white/90">
              Latest insights, success stories, and tips for modern farming. Learn from experts and farmers across India.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-forest-900 mb-8">Featured</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {blogs.filter(b => b.featured).map((blog) => (
              <Card key={blog.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer hover:border-forest-300">
                <div className="p-6">
                  <div className="text-5xl mb-4">{blog.image}</div>
                  <div className="inline-block px-3 py-1 bg-forest-100 text-forest-700 rounded-full text-xs font-semibold mb-3">
                    {blog.category}
                  </div>
                  <h3 className="text-xl font-bold text-forest-900 mb-3 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {blog.date}
                      </span>
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full border-forest-300 text-forest-600 hover:bg-forest-50">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-forest-900 mb-6">All Articles</h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    cat === "All"
                      ? "bg-forest-600 text-white"
                      : "bg-white text-gray-700 border border-gray-300 hover:border-forest-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            {blogs.map((blog) => (
              <Card key={blog.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer hover:border-forest-300 grid md:grid-cols-4">
                <div className="p-6 md:col-span-1 flex items-center justify-center bg-forest-50">
                  <span className="text-4xl">{blog.image}</span>
                </div>
                <CardContent className="p-6 md:col-span-3 flex flex-col justify-between">
                  <div>
                    <div className="inline-block px-3 py-1 bg-forest-100 text-forest-700 rounded-full text-xs font-semibold mb-3">
                      {blog.category}
                    </div>
                    <h3 className="text-lg font-bold text-forest-900 mb-2">
                      {blog.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {blog.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {blog.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {blog.date}
                      </span>
                      <span>{blog.readTime}</span>
                    </div>
                    <Button variant="outline" size="sm" className="border-forest-300 text-forest-600 hover:bg-forest-50">
                      Read
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-forest-600 hover:bg-forest-700">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-br from-forest-600 to-forest-800 text-white">
        <div className="container max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Get the latest farming tips, success stories, and industry insights delivered to your inbox every week.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 outline-none"
              placeholder="Enter your email"
            />
            <Button size="lg" variant="secondary" className="bg-white text-forest-600 hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-white/70 mt-4">
            Join 50,000+ farmers receiving weekly insights and resources
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-6">
            Ready to Transform Your Farming?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Apply the insights from our blog. Download Rupiya and start your journey toward sustainable, profitable farming.
          </p>
          <Button size="lg" className="bg-forest-600 hover:bg-forest-700">
            Download App Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}
