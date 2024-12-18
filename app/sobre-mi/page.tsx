import Image from 'next/image'
import { ContactSection } from '@/components/contact-section'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre mí',
  description: 'Conoce más sobre Álvaro Magdaleno, psicólogo clínico en Madrid. Formación, experiencia y enfoque terapéutico.',
}

export default function SobreMi() {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gradient-to-b from-teal-50/50 to-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Sobre mí</h1>
          
          <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
            <div className="space-y-4">
              <p>
                Mi trayecto profesional comenzó al graduarme como Psicólogo en la Universidad de Oviedo en el año 2015 para, posteriormente, realizar mi formación como Psicólogo Especialista en Psicología Clínica en el Hospital Universitario Central de Asturias.
              </p>
              <p>
                De ahí en adelante he trabajado en varios lugares del Sistema Nacional de Salud (actualmente en el Hospital Universitario Príncipe de Asturias) así como en mi consulta privada. Durante dicho recorrido pude complementar la experiencia profesional adquirida con diversas formaciones en el terreno de la psicología, la psicoterapia, la filosofía y el psicoanálisis.
              </p>
              <p>
                También he tenido la oportunidad de trabajar con personas a lo largo de todo el ciclo vital (niños, adolescentes y adultos) que sufrían de problemáticas muy distintas, lo que me ha podido ayudar a comprender mejor las cuestiones humanas.
              </p>
            </div>
            <div>
              <Image
                src="/alvaropro.webp"
                alt="Álvaro Magdaleno"
                width={500}
                height={600}
                className="rounded-lg shadow-lg transition-transform hover:scale-[1.02]"
              />
            </div>
          </div>

          <div className="bg-gradient-to-r from-teal-50/30 to-blue-50/30 py-8 px-6 rounded-lg mb-12">
            <p className="text-xl text-center italic text-gray-700">
              La forma en la que trabajo consiste en conversar desde un lugar distinto, algo poco habitual en nuestra vida cotidiana y, mediante una relación de confianza, comprender mejor aquello que te pasa y cómo solucionarlo
            </p>
          </div>
        </div>
      </div>
      <ContactSection />
    </>
  )
}

