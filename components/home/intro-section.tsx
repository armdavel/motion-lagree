export function IntroSection() {
  return (
    <section className="py-24 lg:py-32 bg-minimal-mist">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-midnight-moss leading-tight">
            More Than a Workout.{' '}
            <span className="text-balanced-brick italic">A Practice.</span>
          </h2>
          <p className="mt-8 text-lg text-midnight-moss/70 leading-relaxed">
            Motion is a boutique Lagree studio grounded in intentional movement, consistency, 
            and community. We believe that real strength is built slowly, through mindful repetition 
            and unwavering support. This is where lasting transformation begins.
          </p>
        </div>

        {/* Brand Values */}
        <div className="mt-20 grid md:grid-cols-3 gap-12 lg:gap-16">
          <div className="text-center">
            <div className="w-12 h-px bg-balanced-brick mx-auto mb-6" />
            <h3 className="font-serif text-xl text-midnight-moss mb-3">Intentional</h3>
            <p className="text-midnight-moss/60 text-sm leading-relaxed">
              Every movement is purposeful. We focus on quality over quantity, 
              building strength through precision and control.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-px bg-balanced-brick mx-auto mb-6" />
            <h3 className="font-serif text-xl text-midnight-moss mb-3">Inclusive</h3>
            <p className="text-midnight-moss/60 text-sm leading-relaxed">
              All bodies are welcome here. Our instructors meet you where you are, 
              offering modifications and guidance for every level.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-px bg-balanced-brick mx-auto mb-6" />
            <h3 className="font-serif text-xl text-midnight-moss mb-3">Consistent</h3>
            <p className="text-midnight-moss/60 text-sm leading-relaxed">
              Real results come from showing up. We create a space that makes 
              you want to return, week after week.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
