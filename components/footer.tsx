import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Álvaro Magdaleno</h3>
            <p className="text-sm text-muted-foreground">
              Psicólogo Clínico
              <br />
              Atención presencial en Madrid
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Enlaces</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/sobre-mi" className="text-sm text-muted-foreground hover:text-foreground">
                Sobre mí
              </Link>
              <Link href="/psicoterapia" className="text-sm text-muted-foreground hover:text-foreground">
                Psicoterapia
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Email: amagdalenoflorez@gmail.com</p>
              <p>Teléfono: 665 826 392</p>
              <p>Instagram: @alvaromagdalenof</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Álvaro Magdaleno. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

