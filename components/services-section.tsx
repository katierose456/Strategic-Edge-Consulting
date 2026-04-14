import Link from "next/link"
import { FileText, Search, TrendingUp, MonitorPlay, Palette, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: FileText,
    title: "Business Plans",
    description: "Professional plans for growth, funding, and structure that help you achieve your goals.",
  },
  {
    icon: Search,
    title: "Market Research",
    description: "Research-backed strategy to understand your audience and stay ahead of competition.",
  },
  {
    icon: TrendingUp,
    title: "Marketing Strategy",
    description: "Smarter marketing decisions built around real data and proven methodologies.",
  },
  {
    icon: MonitorPlay,
    title: "Advertising & Algorithms",
    description: "Targeted ad optimization and digital growth strategy for maximum ROI.",
  },
  {
    icon: Palette,
    title: "Branding Support",
    description: "Logo and brand identity help for new or expanding businesses.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
            What We Offer
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
            What We Help With
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 border border-border rounded-lg bg-card hover:border-foreground/20 transition-colors"
            >
              <div className="h-12 w-12 rounded bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}

          {/* CTA Card */}
          <div className="p-8 border border-dashed border-border rounded-lg bg-muted/50 flex flex-col items-center justify-center text-center">
            <p className="text-lg font-medium text-foreground mb-4">
              Not sure what you need?
            </p>
            <Button asChild variant="outline">
              <Link href="#contact">
                {"Let's Talk"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
