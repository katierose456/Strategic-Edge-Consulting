import { Star } from "lucide-react"

const reviews = [
  {
    quote: "They went above and beyond helping me with my logos and brand identity. Couldn't be happier with the results!",
    author: "Sarah M.",
    role: "Local Business Owner",
  },
  {
    quote: "Very effective team for business plans and research. They really understood our market.",
    author: "Michael T.",
    role: "Startup Founder",
  },
  {
    quote: "Very knowledgeable on advertisement algorithms and market analysis. Our ad performance improved dramatically.",
    author: "Jennifer L.",
    role: "E-commerce Owner",
  },
  {
    quote: "Professional, friendly, and helped us tremendously. They truly care about their clients' success.",
    author: "David K.",
    role: "Restaurant Owner",
  },
]

function StarRating() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
      ))}
    </div>
  )
}

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
            Testimonials
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            What Clients Say
          </h2>
          <div className="flex items-center justify-center gap-2 mt-6">
            <StarRating />
            <span className="text-muted-foreground ml-2">5.0 Stars on Google Reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-8 bg-card border border-border rounded-lg"
            >
              <StarRating />
              <blockquote className="mt-6 text-lg text-foreground leading-relaxed">
                {`"${review.quote}"`}
              </blockquote>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-semibold text-foreground">{review.author}</p>
                <p className="text-sm text-muted-foreground">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
