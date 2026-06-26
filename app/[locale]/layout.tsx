import { ReactNode } from "react"
import "../globals.css"
import { Inter } from "next/font/google"
import { hasLocale, NextIntlClientProvider } from "next-intl"
import { routing } from "@/i18n/routing"
import { notFound } from "next/navigation"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "next-themes"

interface RootLayoutProps {
  children: ReactNode
  params: Promise<{
    locale: string
  }>
}

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(inter.variable, "antialiased", "font-sans")}
    >
      <body>
        <NextIntlClientProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
