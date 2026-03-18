import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
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
  description:
    'Join the founding list for Motion Lagree Studio and get opening details plus early access to special founding rates.',
  keywords: [
    'Lagree',
    'Lagree Fitness',
    'boutique fitness',
    'strength training',
    'Megaformer',
    'founding list',
  ],
  openGraph: {
    title: 'Motion Lagree Studio',
    description:
      'Move with intention. Build lasting strength. Join the founding list for opening details and special rates.',
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
        <Analytics />
      </body>
    </html>
  )
}
