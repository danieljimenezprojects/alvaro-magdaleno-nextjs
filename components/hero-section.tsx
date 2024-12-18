'use client'

import { AnimatedButton } from '@/components/ui/animated-button'

export function HeroSection() {
  return (
    <div className="flex-1 text-center lg:text-left">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
        Psicólogo Clínico
      </h1>
      <p className="mt-4 text-xl text-muted-foreground">
        Atención presencial en Madrid
      </p>
      <div className="mt-8">
        <AnimatedButton 
          onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })} 
          size="lg" 
          variant="gradient"
        >
          Solicitar Cita
        </AnimatedButton>
      </div>
    </div>
  )
}

