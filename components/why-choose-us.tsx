import { Users, BookOpen, TrendingUp } from "lucide-react"

const highlights = [
  {
    icon: Users,
    title: "Friendly + Professional Team",
    description: "We take the time to understand your unique business needs.",
  },
  {
    icon: BookOpen,
    title: "Strong Research + Planning",
    description: "Data-driven insights that inform every recommendation.",
  },
  {
    icon: TrendingUp,
    title: "Proven Growth Results",
    description: "Track record of helping businesses achieve measurable success.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
              Why Us
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
              A Team That Works With Your Budget
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We believe every small business deserves access to professional consulting. 
              Our team sits down with each client to understand their unique challenges and 
              works within their budget to deliver real results. We go above and beyond 
              because your success is our success.
            </p>
          </div>

          {/* Highlights */}
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex gap-5 p-6 bg-card rounded-lg border border-border"
              >
                <div className="h-12 w-12 shrink-0 rounded bg-primary flex items-center justify-center">
                  <highlight.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
