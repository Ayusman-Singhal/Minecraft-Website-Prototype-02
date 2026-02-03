import React from "react"
import type { Metadata } from 'next'
import { Inter, Press_Start_2P } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const pressStart = Press_Start_2P({ subsets: ["latin"], weight: "400", variable: "--font-press-start" });

export const metadata: Metadata = {
  title: 'SpaceBox - Minecraft Space Adventure',
  description: 'Explore the cosmos in this epic Minecraft space adventure! Build your space station, conquer alien planets, and become the master of the universe.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${pressStart.variable} font-sans antialiased`}> 
        <div className="min-h-screen pt-16">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}
