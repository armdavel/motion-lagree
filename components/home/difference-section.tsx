import { Check } from 'lucide-react'

const differentiators = [
  {
    title: 'True to the Lagree Method',
    description: 'We stay faithful to the original Lagree methodology, ensuring you get the authentic experience with proper form, tempo, and sequencing that delivers real results.',
  },
  {
    title: 'Instructors Who Know & Care',
    description: 'Our instructors are rigorously trained, deeply knowledgeable, and genuinely invested in your progress. They remember your name, your goals, and your journey.',
  },
  {
    title: 'Elevated Yet Welcoming',
    description: 'Our space is designed to inspire, not intimidate. Premium aesthetics meet warm hospitality in a studio where you feel both challenged and supported.',
  },
  {
    title: 'Real Community, Real Consistency',
    description: 'This is not a drop-in gym. We foster genuine connections and celebrate showing up. Your consistency is honored here.',
  },
]

export function DifferenceSection() {
  return (
    <section className="py-24 lg:py-32 bg-midnight-moss">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-balanced-brick font-medium tracking-widest text-sm uppercase mb-4">
            The Motion Difference
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-minimal-mist leading-tight">
            Why This Studio{' '}
            <span className="italic text-balanced-beige">Feels Different</span>
          </h2>
          <p className="mt-6 text-balanced-beige/70 leading-relaxed">
            Not all Lagree studios are created equal. At Motion, we combine method integrity, 
            exceptional instructors, and intentional design to create an experience that 
            transforms how you move and feel.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-x-16 gap-y-12">
          {differentiators.map((item, index) => (
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
