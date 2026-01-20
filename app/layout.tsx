import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Fira_Code } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const firaCode = Fira_Code({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "John Doe | Full Stack Developer",
  description:
    "Personal portfolio of John Doe - Full Stack Developer specializing in React, Next.js, and modern web technologies.",
  keywords: ["developer", "portfolio", "react", "nextjs", "typescript", "full stack"],
  authors: [{ name: "John Doe" }],
  creator: "John Doe",
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
