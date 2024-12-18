import React from 'react'
import { MapPin, Mail, Phone } from 'lucide-react'

export const ContactSection = React.forwardRef<HTMLDivElement>(
(props, ref) => {
  return (
    <section ref={ref} id="contact-section" className="py-12 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Contacte conmigo para más información
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <div className="space-y-4">
            <div className="flex items-center gap-3 group">
              <Mail className="h-5 w-5 text-primary transition-transform group-hover:scale-110" />
              <a 
                href="mailto:amagdalenoflorez@gmail.com" 
                className="hover:text-primary transition-colors"
              >
                amagdalenoflorez@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 group">
              <Phone className="h-5 w-5 text-primary transition-transform group-hover:scale-110" />
              <a 
                href="tel:665826392" 
                className="hover:text-primary transition-colors"
              >
                665826392
              </a>
            </div>
            <div className="flex items-center gap-3 group">
              <MapPin className="h-5 w-5 text-primary transition-transform group-hover:scale-110" />
              <p>C/ La Princesa 25 - Edificio Hexágono - Planta 2. Oficina 2 (Madrid)</p>
            </div>
          </div>
          <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.2866280650983!2d-3.7141248842854896!3d40.42737007936409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228624d86f77b%3A0x2a9a1ddb7bb6c4e!2sC.%20de%20la%20Princesa%2C%2025%2C%2028008%20Madrid%2C%20Spain!5e0!3m2!1sen!2sus!4v1639967913173!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
})

ContactSection.displayName = 'ContactSection'

