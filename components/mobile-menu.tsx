"use client"

import React, { useState, useCallback, useRef } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { AnimatePresence, motion } from "framer-motion"

interface MobileMenuProps {
  scrollToContact: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function MobileMenu({ scrollToContact }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), [])

  const closeMenu = useCallback(() => setIsOpen(false), [])

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="md:hidden" ref={menuRef}>
      <Button
        variant="ghost"
        size="icon"
        className="hover:bg-primary/10 transition-colors"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        <span className="sr-only">{isOpen ? 'Cerrar menú' : 'Abrir menú'}</span>
      </Button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            id="mobile-menu"
            className="absolute top-16 right-4 w-64 bg-background border border-border rounded-lg shadow-lg overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación"
          >
            <nav className="py-2">
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/sobre-mi"
                    onClick={closeMenu}
                    className="block px-4 py-2 transition-colors hover:bg-primary/10 hover:text-primary"
                  >
                    Sobre mí
                  </Link>
                </li>
                <li>
                  <Link
                    href="/psicoterapia"
                    onClick={closeMenu}
                    className="block px-4 py-2 transition-colors hover:bg-primary/10 hover:text-primary"
                  >
                    Psicoterapia
                  </Link>
                </li>
                <li>
                  <a
                    href="#contact-section"
                    onClick={(e) => {
                      closeMenu()
                      scrollToContact(e)
                    }}
                    className="block px-4 py-2 transition-colors hover:bg-primary/10 hover:text-primary"
                  >
                    Contacta Conmigo
                  </a>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

