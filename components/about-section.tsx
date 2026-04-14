import { MapPin } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
            Who We Are
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-8 text-balance">
            About Strategic Edge Consulting
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Strategic Edge Consulting was founded with a simple mission: to make professional 
              business consulting accessible to small businesses and entrepreneurs who are ready 
              to take their ventures to the next level.
            </p>
            <p>
              Our team combines deep expertise in market research, marketing strategy, and 
              business development with a genuine passion for helping local businesses thrive. 
              We believe that with the right guidance and research-backed strategies, any 
              business can achieve sustainable growth.
            </p>
          </div>

          <div className="mt-10 flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="h-5 w-5" />
            <span>Serving Rolla, Missouri and surrounding areas</span>
          </div>
        </div>
      </div>
    </section>
  )
}
