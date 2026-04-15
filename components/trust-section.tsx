import { DollarSign, BarChart3, Target } from "lucide-react"

const trustPoints = [
  {
    icon: DollarSign,
    title: "Affordable Consulting",
    description: "Budget-friendly options designed specifically for small businesses.",
  },
  {
    icon: BarChart3,
    title: "Research-Backed Strategy",
    description: "Business plans and market research that actually work.",
  },
  {
    icon: Target,
    title: "Growth Expertise",
    description: "Experts in advertising algorithms and data-driven growth strategy.",
  },
]

export function TrustSection() {
  return (
    <section className="py-16 sm:py-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="h-14 w-14 rounded-full bg-primary flex items-center justify-center mb-4">
                <point.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {point.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
