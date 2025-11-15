import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { AuthProvider } from "@/lib/auth-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "rupiya.app - किसान की हर जरुरत का Digital साथी",
  description: "India's largest platform for residue-free farming, regenerative agriculture-based carbon credit generation, and farmer financial inclusivity.",
  icons: {
    icon: "/logo.png",
    // You can also add other icon sizes if needed:
    // icon: [
    //   { url: "/logo.png", sizes: "32x32", type: "image/png" },
    //   { url: "/logo-16x16.png", sizes: "16x16", type: "image/png" },
    // ],
    // shortcut: "/logo.png",
    // apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}