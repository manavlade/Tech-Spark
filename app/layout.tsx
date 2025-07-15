import type { Metadata } from 'next'
import './globals.css'
import logo from "@/assets/techSpring.png"

export const metadata: Metadata = {
  title: 'TechSpring',
  description: 'TechSpring IT solutions for your business',
  generator: 'TechSpring',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href={logo.src} type="image/x-icon" />
      </head>
      <body>{children}</body>
    </html>
  )
}
