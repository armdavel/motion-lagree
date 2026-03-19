import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const methodBenefits = [
  {
    title: 'Slow & Controlled',
    description: 'Movements are performed slowly to maximize muscle engagement and minimize momentum.',
  },
  {
    title: 'High Intensity',
    description: 'Low-impact yet challenging, the Megaformer creates constant tension for deep muscle fatigue.',
  },
  {
    title: 'Full Body',
    description: 'Every class works your entire body, building balanced strength and endurance.',
  },
  {
    title: 'Joint-Conscious',
    description: 'The spring-based resistance is gentle on joints while still delivering powerful results.',
  },
]

export function MethodSection() {
  return (
    <section className="py-24 lg:py-32 bg-clouded-pearl/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069&auto=format&fit=crop"
                alt="Close-up of hands gripping the Megaformer during a Lagree workout"
                fill
                className="object-cover rounded-sm"
              />
            </div>
            {/* Accent Box */}
            <div className="absolute -bottom-8 -right-8 bg-balanced-brick p-8 rounded-sm hidden lg:block">
              <p className="font-serif text-2xl text-white leading-snug">
                40+ muscles<br />engaged at once
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-balanced-brick font-medium tracking-widest text-sm uppercase mb-4">
              The Lagree Method
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-midnight-moss leading-tight">
              Where Slow Meets{' '}
              <span className="italic">Strong</span>
            </h2>
            <p className="mt-6 text-midnight-moss/70 leading-relaxed">
              The Lagree Method is a revolutionary approach to fitness that combines strength, 
              cardio, and flexibility training on the patented Megaformer. Unlike traditional 
              workouts, Lagree emphasizes slow, controlled movements that create constant muscle 
              tension for maximum results.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-8">
              {methodBenefits.map((benefit) => (
                <div key={benefit.title}>
                  <h3 className="font-serif text-lg text-midnight-moss mb-2">{benefit.title}</h3>
                  <p className="text-sm text-midnight-moss/60 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button 
                asChild
                variant="outline"
                className="border-midnight-moss/30 text-midnight-moss hover:bg-midnight-moss hover:text-minimal-mist font-medium tracking-wide"
              >
                <Link href="/method">
                  Learn More About Lagree
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
