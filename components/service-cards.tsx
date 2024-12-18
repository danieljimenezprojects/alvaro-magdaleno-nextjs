'use client'

import Link from "next/link"
import { AnimatedButton } from '@/components/ui/animated-button'
import { Card, CardContent } from "@/components/ui/card"
import { UserCircle, Brain } from 'lucide-react'

export function ServiceCards() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
        <CardContent className="p-6 flex flex-col h-full relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-400 to-blue-500 rounded-bl-full transform translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-300"></div>
          <UserCircle className="w-12 h-12 text-primary mb-4 relative z-10" />
          <h2 className="text-2xl font-bold mb-4 relative z-10">Sobre mí</h2>
          <p className="text-muted-foreground mb-6 flex-grow relative z-10">
            Soy psicólogo clínico especializado en terapia individual. Mi enfoque se centra en proporcionar un espacio seguro y profesional para el desarrollo personal.
          </p>
          <AnimatedButton variant="gradient" asChild>
            <Link href="/sobre-mi" className="relative z-10 inline-block w-full">Conocer más</Link>
          </AnimatedButton>
        </CardContent>
      </Card>
      <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
        <CardContent className="p-6 flex flex-col h-full relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-bl-full transform translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-300"></div>
          <Brain className="w-12 h-12 text-primary mb-4 relative z-10" />
          <h2 className="text-2xl font-bold mb-4 relative z-10">Psicoterapia</h2>
          <p className="text-muted-foreground mb-6 flex-grow relative z-10">
            Ofrezco un servicio profesional y personalizado, adaptado a las necesidades específicas de cada persona.
          </p>
          <AnimatedButton variant="gradient" asChild>
            <Link href="/psicoterapia" className="relative z-10 inline-block w-full">Ver servicios</Link>
          </AnimatedButton>
        </CardContent>
      </Card>
    </div>
  )
}

