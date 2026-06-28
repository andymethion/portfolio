import "../globals.css"
import { ReactNode } from "react"
import { Inter } from "next/font/google"
import { hasLocale, NextIntlClientProvider } from "next-intl"
import { routing } from "@/i18n/routing"
import { notFound } from "next/navigation"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"

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
      lang={locale}
      suppressHydrationWarning
      className={cn(inter.variable, "antialiased", "font-sans")}
    >
      <body>
        <NextIntlClientProvider>
          <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
