export function IntroSection() {
  return (
    <section className="py-24 lg:py-32 bg-minimal-mist">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-midnight-moss leading-tight">
            More Than a Workout
          </h2>
          <p className="mt-8 text-lg text-midnight-moss/70 leading-relaxed">
            Motion is a boutique Lagree Fitness studio where movement, energy, and
            community come together to create a powerful workout experience. Each class on
            the Megaformer is led by certified Lagree instructors and paired with
            energizing music that keeps you fully present and connected to your body. From
            the moment you walk in, the space is designed to help you feel empowered,
            supported, and ready to push beyond your limits leaving each class stronger
            than when you arrived.
          </p>
        </div>

        {/* Brand Values */}
        <div className="mt-20 grid md:grid-cols-3 gap-12 lg:gap-16">
          <div className="text-center">
            <div className="w-12 h-px bg-balanced-brick mx-auto mb-6" />
            <h3 className="font-serif text-xl text-midnight-moss mb-3">Certified Guidance</h3>
            <p className="text-midnight-moss/60 text-sm leading-relaxed">
              Every class is led by certified Lagree instructors who coach with precision,
              clarity, and purpose.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-px bg-balanced-brick mx-auto mb-6" />
            <h3 className="font-serif text-xl text-midnight-moss mb-3">Energizing Atmosphere</h3>
            <p className="text-midnight-moss/60 text-sm leading-relaxed">
              Music, movement, and the pace of class are designed to keep you fully present
              and connected to your body.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-px bg-balanced-brick mx-auto mb-6" />
            <h3 className="font-serif text-xl text-midnight-moss mb-3">Supportive Space</h3>
            <p className="text-midnight-moss/60 text-sm leading-relaxed">
              The studio is built to help you feel empowered, supported, and ready to push
              beyond your limits.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
