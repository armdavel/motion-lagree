import Link from 'next/link'

const footerLinks = {
  studio: [
    { href: '/method', label: 'The Lagree Method' },
    { href: '/classes', label: 'Classes & Memberships' },
    { href: '/about', label: 'About Motion' },
    { href: '/contact', label: 'Visit Us' },
  ],
  support: [
    { href: '/classes#first-class', label: 'Your First Class' },
    { href: '/method#faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-midnight-moss text-minimal-mist">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="font-serif text-3xl tracking-wide text-minimal-mist">
              Motion
            </Link>
            <p className="mt-4 text-balanced-beige/80 max-w-md leading-relaxed">
              Intentional movement. Lasting strength. A boutique Lagree studio 
              where community and transformation go hand in hand.
            </p>
          </div>

          {/* Studio Links */}
          <div>
            <h3 className="font-serif text-lg mb-4 text-minimal-mist">Studio</h3>
            <ul className="space-y-3">
              {footerLinks.studio.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-balanced-beige/70 hover:text-balanced-brick transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-serif text-lg mb-4 text-minimal-mist">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-balanced-beige/70 hover:text-balanced-brick transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-balanced-beige/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-balanced-beige/50 text-sm">
              {new Date().getFullYear()} Motion Lagree Studio. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-balanced-beige/50">
              <Link href="/privacy" className="hover:text-balanced-brick transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-balanced-brick transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
