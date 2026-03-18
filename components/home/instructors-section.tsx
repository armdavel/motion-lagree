import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const instructors = [
  {
    name: 'Maya Chen',
    role: 'Lead Instructor',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/happy-plus-size-model-in-beige-underwear-posing-wi-2026-01-09-12-33-41-utc-PMGmgtsoX3Gfh8ohdX9FwyXCvI69U0.jpg',
    bio: 'Certified Lagree instructor with 8+ years of experience. Known for her precise cueing and warm energy.',
  },
  {
    name: 'Jordan Rivera',
    role: 'Senior Instructor',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MOTION%20PIL%D0%B0%D0%B2%D1%8B%D0%B0%D0%B2%D1%8B%D0%B0ATES-BRANDING-1FGkgpv62fppJk1cNCXrrDzfMjyn4M.jpg',
    bio: 'Former dancer turned Lagree devotee. Brings a deep understanding of body mechanics to every class.',
  },
  {
    name: 'Taylor Brooks',
    role: 'Instructor',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MOTION%20PILATES%D0%B0%D0%B2%D1%8B%D0%B0%D0%B2%D1%8B%D0%B0-BRANDING-QWxJVU8jPPKZiPiBARE5qWJ8v8D74U.jpg',
    bio: 'Specializes in helping beginners build confidence. Her classes are challenging yet approachable.',
  },
]

export function InstructorsSection() {
  return (
    <section className="py-24 lg:py-32 bg-minimal-mist">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <p className="text-balanced-brick font-medium tracking-widest text-sm uppercase mb-4">
              Our Instructors
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-midnight-moss leading-tight">
              Guided by{' '}
              <span className="italic">Experts</span>
            </h2>
            <p className="mt-6 text-midnight-moss/70 leading-relaxed">
              Our instructors are more than coaches. They are trained professionals who 
              understand the Lagree method deeply and care about your progress personally.
            </p>
          </div>
          <Button 
            asChild
            variant="outline"
            className="border-midnight-moss/30 text-midnight-moss hover:bg-midnight-moss hover:text-minimal-mist font-medium tracking-wide w-fit"
          >
            <Link href="/about#team">Meet the Full Team</Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {instructors.map((instructor) => (
            <div key={instructor.name} className="group">
              <div className="relative aspect-[3/4] mb-6 overflow-hidden rounded-sm">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-midnight-moss/0 group-hover:bg-midnight-moss/20 transition-colors duration-500" />
              </div>
              <h3 className="font-serif text-xl text-midnight-moss">{instructor.name}</h3>
              <p className="text-balanced-brick text-sm mt-1">{instructor.role}</p>
              <p className="text-midnight-moss/60 text-sm mt-3 leading-relaxed">{instructor.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
