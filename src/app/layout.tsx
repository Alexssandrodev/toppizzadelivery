import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Motoboy from '@/components/Motoboy'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Top Pizza Delivery',
  description: 'Pizzas deliciosas na sua casa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Motoboy />
        <Footer />
      </body>
    </html>
  )
}
