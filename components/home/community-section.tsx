import Image from 'next/image'

export function CommunitySection() {
  return (
    <section className="py-24 lg:py-32 bg-clouded-pearl/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <p className="text-balanced-brick font-medium tracking-widest text-sm uppercase mb-4">
              Our Community
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-midnight-moss leading-tight">
              More Than Classes.{' '}
              <span className="italic">Connection.</span>
            </h2>
            <p className="mt-6 text-midnight-moss/70 leading-relaxed">
              At Motion, you will find more than a workout. You will find people who show up 
              for themselves and for each other. Our community is built on shared commitment, 
              mutual encouragement, and the understanding that real growth happens together.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-8 border-t border-balanced-beige/30 pt-10">
              <div>
                <p className="font-serif text-4xl text-balanced-brick">92%</p>
                <p className="text-sm text-midnight-moss/60 mt-1">Member retention</p>
              </div>
              <div>
                <p className="font-serif text-4xl text-balanced-brick">4.9</p>
                <p className="text-sm text-midnight-moss/60 mt-1">Average rating</p>
              </div>
              <div>
                <p className="font-serif text-4xl text-balanced-brick">3x</p>
                <p className="text-sm text-midnight-moss/60 mt-1">Weekly visits avg</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/3] lg:aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop"
                alt="Community members connecting after a Lagree class"
                fill
                className="object-cover rounded-sm"
              />
            </div>
            {/* Quote Overlay */}
            <div className="absolute -bottom-6 -left-6 lg:bottom-8 lg:-left-12 bg-minimal-mist p-6 lg:p-8 rounded-sm shadow-lg max-w-xs">
              <p className="font-serif text-lg text-midnight-moss italic leading-relaxed">
                {'"'}This studio changed how I think about fitness. It is my anchor.{'"'}
              </p>
              <p className="text-sm text-balanced-brick mt-3">Sarah, Member since 2022</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
