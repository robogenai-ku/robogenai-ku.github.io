import Link from "next/link"
import { Mail, Linkedin, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* About */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">About RoboGenAI</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Advancing underwater robotics through the integration of Generative AI and Vision Language Models for
              marine exploration and monitoring.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/work-packages" className="text-muted-foreground transition-colors hover:text-foreground">
                  Work Packages
                </Link>
              </li>
              <li>
                <Link href="/publications" className="text-muted-foreground transition-colors hover:text-foreground">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-muted-foreground transition-colors hover:text-foreground">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground transition-colors hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Connect</h3>
            <div className="flex gap-4">
              <a
                href="mailto:contact@robogenai.eu"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/robogenai"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border/40 pt-8">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} RoboGenAI Consortium. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
