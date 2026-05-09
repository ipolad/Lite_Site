import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import './globals.css'

export const metadata: Metadata = {
  title: 'LITE — Data Retention Platform | Minimize Risk, Maximize Performance',
  description:
    'LITE automatically enforces data retention policies — reducing compliance fines, cutting storage costs, and accelerating performance. Built for CISOs, CIOs, and data leaders.',
  keywords: [
    'data retention',
    'compliance automation',
    'GDPR',
    'data archiving',
    'CISO',
    'data governance',
    'storage cost reduction',
  ],
  openGraph: {
    title: 'LITE — Data Retention Platform',
    description:
      'Minimize risk, maximize performance, and optimize costs by making data retention seamless across your entire ecosystem.',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'LITE Platform' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LITE — Data Retention Platform',
    description: 'Automated data retention. Zero compliance exposure. Lower costs.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body>{children}</body>
    </html>
  )
}
