const testimonials = [
  {
    quote: "I have tried every boutique fitness class in the city, and Motion is truly different. The instructors actually know what they are doing, and the vibe is challenging without being intimidating.",
    author: "Amanda K.",
    detail: "Member for 2 years",
  },
  {
    quote: "As someone who was nervous about trying Lagree, Motion made me feel welcome from day one. Now I am here four times a week and stronger than I have ever been.",
    author: "Michael T.",
    detail: "Started January 2024",
  },
  {
    quote: "The attention to detail here is remarkable. From the studio design to the instructor cues to the genuine community, everything feels intentional and elevated.",
    author: "Rachel S.",
    detail: "Member for 3 years",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 bg-clouded-pearl/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-balanced-brick font-medium tracking-widest text-sm uppercase mb-4">
            What Members Say
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-midnight-moss leading-tight">
            Trusted by Those Who{' '}
            <span className="italic">Show Up</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.author}
              className="bg-minimal-mist p-8 lg:p-10 rounded-sm relative"
            >
              {/* Decorative Quote Mark */}
              <div className="absolute top-6 left-8 font-serif text-6xl text-balanced-brick/20 leading-none">
                {'"'}
              </div>
              <blockquote className="relative pt-8">
                <p className="text-midnight-moss/80 leading-relaxed italic">
                  {testimonial.quote}
                </p>
                <footer className="mt-6 pt-6 border-t border-balanced-beige/30">
                  <p className="font-serif text-midnight-moss">{testimonial.author}</p>
                  <p className="text-sm text-balanced-brick mt-1">{testimonial.detail}</p>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
