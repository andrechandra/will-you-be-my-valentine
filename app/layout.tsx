import './globals.css'
import { Poppins } from 'next/font/google'
import type React from 'react' // Import React

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: '400'
})

export const metadata = {
  title: 'Will You Be My Valentine Beee?',
  description: 'A valentine invitation for Kezia Taslim!'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>{children}</body>
    </html>
  )
}
