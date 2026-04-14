const steps = [
  {
    number: "1",
    title: "Free Consultation Call",
    description: "We start with a conversation to understand your business, goals, and challenges.",
  },
  {
    number: "2",
    title: "Strategy + Research",
    description: "Our team conducts thorough research and develops a customized strategy.",
  },
  {
    number: "3",
    title: "Plan Development",
    description: "We create actionable plans with clear milestones and deliverables.",
  },
  {
    number: "4",
    title: "Growth & Optimization",
    description: "Ongoing support to implement, measure, and optimize for continued success.",
  },
]

export function ProcessSection() {
  return (
    <section className="py-20 sm:py-28 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary-foreground/60 mb-3">
            How It Works
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-balance">
            Our Process
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-primary-foreground/20 -translate-x-1/2" />
              )}
              
              <div className="text-center">
                <div className="h-16 w-16 rounded-full border-2 border-primary-foreground/30 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold">{step.number}</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
