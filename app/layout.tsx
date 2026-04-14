import type { Metadata, Viewport } from 'next'
import { Inter, Libre_Baskerville } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const libreBaskerville = Libre_Baskerville({ 
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: '--font-libre-baskerville',
});

export const metadata: Metadata = {
  title: 'Strategic Edge Consulting LLC | Business Consulting in Rolla, MO',
  description: 'Budget-friendly business consulting, marketing strategy, and research-based planning for small businesses. Serving Rolla, Missouri and surrounding areas.',
  keywords: ['business consulting', 'marketing strategy', 'market research', 'business plans', 'Rolla MO', 'small business'],
  authors: [{ name: 'Strategic Edge Consulting LLC' }],
  openGraph: {
    title: 'Strategic Edge Consulting LLC',
    description: 'Helping Small Businesses Grow Smarter and Faster',
    type: 'website',
    locale: 'en_US',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${libreBaskerville.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
