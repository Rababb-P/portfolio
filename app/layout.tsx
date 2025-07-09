import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rababb Pannu | Portfolio',
  description: 'Computer Engineering student at UWaterloo',
  icons: {
    icon: '/portfolio/logo.svg',
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
