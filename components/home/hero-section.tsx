import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-minimal-mist overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-clouded-pearl/50" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-32 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <p className="text-balanced-brick font-medium tracking-widest text-sm uppercase mb-6 animate-fade-up opacity-0">
              Boutique Lagree Studio
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-midnight-moss leading-[1.1] animate-fade-up opacity-0 animation-delay-100">
              Strength in Every{' '}
              <span className="italic text-balanced-brick">Slow</span>{' '}
              Rep
            </h1>
            <p className="mt-8 text-lg text-midnight-moss/70 max-w-lg leading-relaxed animate-fade-up opacity-0 animation-delay-200">
              Intentional movement builds lasting strength. Experience the Lagree method 
              in an elevated, welcoming studio where community and transformation 
              come together.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0 animation-delay-300">
              <Button 
                asChild
                size="lg"
                className="bg-balanced-brick hover:bg-balanced-brick/90 text-white font-medium tracking-wide px-8 h-14 text-base"
              >
                <Link href="/classes">
                  Book Your First Class
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-midnight-moss/30 text-midnight-moss hover:bg-midnight-moss hover:text-minimal-mist font-medium tracking-wide px-8 h-14 text-base"
              >
                <Link href="/method">
                  Learn the Method
                </Link>
              </Button>
            </div>
          </div>

          {/* Image Composition */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/5] lg:aspect-[3/4] animate-fade-in opacity-0 animation-delay-200">
              <div className="absolute inset-0 bg-clouded-pearl rounded-sm" />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MOTION%20PILATES-BdfRdANDING-uZRVm0IXcAw995S8rlRQpRfQyFyrww.jpg"
                alt="Person in blush workout wear performing a single-leg bridge pose, demonstrating Lagree strength and control"
                fill
                className="object-cover rounded-sm"
                priority
              />
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-balanced-brick/10 rounded-sm" />
              <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-balanced-beige/40 rounded-sm" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in opacity-0 animation-delay-400">
        <div className="flex flex-col items-center gap-2 text-balanced-beige">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-balanced-beige/50" />
        </div>
      </div>
    </section>
  )
}
