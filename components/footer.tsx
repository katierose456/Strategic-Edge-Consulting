import Link from "next/link"

const footerLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Tagline */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded bg-primary-foreground flex items-center justify-center">
                <span className="text-primary font-bold text-sm">SE</span>
              </div>
              <span className="font-semibold">Strategic Edge Consulting</span>
            </div>
            <p className="text-primary-foreground/70 text-sm">
              Helping small businesses grow smarter and faster with budget-friendly 
              consulting and research-backed strategies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-primary-foreground/70">
              <p>400 N Main St #101</p>
              <p>Rolla, MO 65401</p>
              <a
                href="tel:+14172175633"
                className="block hover:text-primary-foreground transition-colors"
              >
                (417) 217-5633
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>
            © {new Date().getFullYear()} Strategic Edge Consulting LLC | Rolla, MO
          </p>
        </div>
      </div>
    </footer>
  )
}
