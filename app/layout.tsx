import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Álvaro Magdaleno - Psicólogo Clínico",
    template: "Álvaro Magdaleno - Psicólogo Clínico"
  },
  description: "Psicólogo clínico en Madrid. Atención presencial y online.",
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://alvaromagdaleno.es/',
    siteName: 'Álvaro Magdaleno - Psicólogo Clínico',
    title: 'Álvaro Magdaleno - Psicólogo Clínico',
    description: 'Psicólogo clínico en Madrid. Atención presencial y online.',
    images: [
      {
        url: '/alvaropro.webp',
        width: 1200,
        height: 630,
        alt: 'Álvaro Magdaleno - Psicólogo Clínico',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

