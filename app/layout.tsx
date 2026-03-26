import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CursorSpotlight from '@/components/CursorSpotlight'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arman Golmakan',
  description: 'Fullstack developer portfolio — Arman Golmakan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-navy text-slate antialiased`}>
        <CursorSpotlight />
        {children}
      </body>
    </html>
  )
}
