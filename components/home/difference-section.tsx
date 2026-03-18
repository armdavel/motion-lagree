import { Check } from 'lucide-react'

const differentiators = [
  {
    title: 'Intimate Class Sizes',
    description: 'Small classes allow for personalized guidance every step of the way.',
  },
  {
    title: 'Innovative MegaPros',
    description: 'Move on the Megaformer built specifically for the Lagree Method.',
  },
  {
    title: 'Lagree Certified Instructors',
    description: 'Instructors who provide clear guidance, precise corrections, and encouragement throughout every class.',
  },
  {
    title: 'Curated Atmosphere',
    description: 'A warm, minimal space designed to help you focus and move with purpose.',
  },
  {
    title: 'Flexible Scheduling',
    description: 'A schedule designed to fit your routine, from early mornings to evenings.',
  },
  {
    title: 'Community Focus',
    description: 'A welcoming community where you feel supported, encouraged, and inspired every step of the way.',
  },
]

export function DifferenceSection() {
  return (
    <section className="py-24 lg:py-32 bg-midnight-moss">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-balanced-brick font-medium tracking-widest text-sm uppercase mb-4">
            The Experience
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-minimal-mist leading-tight">
            What to <span className="italic text-balanced-beige">Expect</span>
          </h2>
          <p className="mt-6 text-balanced-beige/70 leading-relaxed">
            Each class is a 45-minute Lagree workout performed on the Megaformer. Expect
            slow, controlled movements that build strength, endurance, and core stability
            through exercises like planks, squats, lunges, and more.
          </p>
          <p className="mt-4 text-balanced-beige/70 leading-relaxed">
            At Motion, every class is designed to feel intentional, transformative, and
            confidence-building from start to finish.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-x-16 gap-y-12 xl:grid-cols-3">
          {differentiators.map((item) => (
            <div key={item.title} className="relative pl-12">
              <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-balanced-brick/20 flex items-center justify-center">
                <Check className="h-4 w-4 text-balanced-brick" />
              </div>
              <h3 className="font-serif text-xl text-minimal-mist mb-3">{item.title}</h3>
              <p className="text-balanced-beige/60 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
