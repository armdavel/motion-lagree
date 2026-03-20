import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ScrollToTopButton } from '@/components/scroll-to-top'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dm-sans',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Motion Lagree Studio | Intentional Movement, Lasting Strength',
  description: 'A boutique Lagree studio where slow, controlled, high-intensity movement builds lasting strength, confidence, and community. Book your first class today.',
  keywords: ['Lagree', 'Pilates', 'boutique fitness', 'strength training', 'reformer', 'mindful movement'],
  openGraph: {
    title: 'Motion Lagree Studio',
    description: 'Intentional movement. Lasting strength. A premium boutique fitness experience.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#F7F2ED',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <ScrollToTopButton />
        <Analytics />
      </body>
    </html>
  )
}
