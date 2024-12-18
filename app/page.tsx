import Image from "next/image"
import Script from 'next/script'
import { ContactSection } from '@/components/contact-section'
import { HeroSection } from '@/components/hero-section'
import { ServiceCards } from '@/components/service-cards'

export default function Home() {
  return (
    <>
      <section className="relative bg-gradient-to-b from-teal-50/50 to-white">
        <div className="container flex flex-col lg:flex-row items-center gap-8 py-20">
          <HeroSection />
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-700 rounded-2xl transform rotate-3"></div>
            <Image
              src="/profile-image.jpg"
              alt="Álvaro Magdaleno - Psicólogo en consulta"
              width={500}
              height={600}
              className="relative rounded-2xl object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-teal-50/30 to-blue-50/30 py-20">
        <div className="container">
          <blockquote className="text-2xl md:text-3xl lg:text-4xl text-center italic max-w-4xl mx-auto text-gray-700 font-light">
            &ldquo;La psicoterapia es un aclararse mediante la ayuda de otro para que la vida marche bien&rdquo;
          </blockquote>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-teal-50/50">
        <div className="container">
          <ServiceCards />
        </div>
      </section>

      <ContactSection />

      <Script id="schema-markup" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Álvaro Magdaleno - Psicólogo Clínico",
          "image": "https://alvaromagdaleno.es/profile-image.jpg",
          "url": "https://alvaromagdaleno.es",
          "telephone": "+34665826392",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "C/ La Princesa 25 - Edificio Hexágono - Planta 2. Oficina 2",
            "addressLocality": "Madrid",
            "postalCode": "28008",
            "addressCountry": "ES"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 40.427370,
            "longitude": -3.714125
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "09:00",
            "closes": "20:00"
          },
          "sameAs": [
            "https://www.linkedin.com/in/alvaromagdaleno/",
            "https://www.instagram.com/alvaromagdaleno_psicologo/"
          ]
        })}
      </Script>
    </>
  )
}

