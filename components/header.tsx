"use client"

import Link from "next/link"
import { useCallback } from "react"
import { usePathname } from 'next/navigation'
import { MobileMenu } from './mobile-menu'

export function Header() {
  const pathname = usePathname()

  const scrollToContact = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const contactSection = document.getElementById('contact-section')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.href = '/#contact-section'
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold text-lg hover:text-primary transition-colors">
          Álvaro Magdaleno
        </Link>
        
        <nav className="hidden md:flex gap-6">
          <Link 
            href="/sobre-mi" 
            className="text-foreground/60 transition-all hover:text-primary hover:scale-105"
          >
            Sobre mí
          </Link>
          <Link 
            href="/psicoterapia" 
            className="text-foreground/60 transition-all hover:text-primary hover:scale-105"
          >
            Psicoterapia
          </Link>
          <a
            href="#contact-section"
            onClick={scrollToContact}
            className="text-foreground/60 transition-all hover:text-primary hover:scale-105"
          >
            Contacta Conmigo
          </a>
        </nav>

        <MobileMenu scrollToContact={scrollToContact} />
      </div>
    </header>
  )
}

