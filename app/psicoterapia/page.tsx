import { ContactSection } from '@/components/contact-section'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Psicoterapia',
  description: 'Descubre mi enfoque en psicoterapia. Ofrezco tratamiento para ansiedad, depresión, problemas de relación y más.',
}

export default function Psicoterapia() {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto space-y-12 bg-gradient-to-br from-blue-50/20 to-teal-50/20 p-8 rounded-lg shadow-sm">
          <h1 className="text-4xl font-bold mb-8">Mi enfoque en psicoterapia</h1>

          <div className="space-y-6">
            <p className="text-lg">
              Si tienes la sensación de que algo no marcha bien en tu vida podemos valorar la posibilidad de iniciar una psicoterapia. Aquí incluyo cualquier tipo de malestar psicológico como pueden ser los problemas de ansiedad, depresión, alimentación, comportamiento, insatisfacción vital, etc.
            </p>

            <p className="text-lg">
              La forma en la que trabajo consiste en conversar desde un lugar distinto, algo poco habitual en nuestra vida cotidiana y, mediante una relación de confianza, comprender mejor aquello que te pasa y cómo solucionarlo.
            </p>

            <div className="bg-white/50 p-6 rounded-lg">
              <p className="text-lg italic">
                Uno de los aspectos más importantes para mí a lo largo de mi trayectoria es darle prioridad a la psicoterapia y supervisión propias, pretendiendo así garantizar que la relación terapéutica que mantengo con quien solicita ayuda sea lo más honesta posible.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ContactSection />
    </>
  )
}

