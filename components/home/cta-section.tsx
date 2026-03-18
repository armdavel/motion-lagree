import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function CTASection() {
  return (
    <section id="founding-list" className="py-24 lg:py-32 bg-balanced-brick">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="order-2 lg:order-1">
            <p className="text-sm uppercase tracking-[0.24em] text-white/70">
              Join the Movement
            </p>
            <h2 className="mt-5 font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
              Be First to Experience Motion
            </h2>
            <p className="mt-8 text-white/80 text-sm uppercase tracking-[0.22em]">
              Be the first to receive opening details and special founding rates
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                size="lg"
                className="bg-white text-balanced-brick hover:bg-minimal-mist font-medium tracking-wide px-8 h-14 text-base"
              >
                <Link href="/contact">
                  Join the Founding List
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 font-medium tracking-wide px-8 h-14 text-base"
              >
                <Link href="/method">
                  Learn the Method
                </Link>
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src="/images/landing/cta-facetune.webp"
                alt="Woman stretching in a warm studio with mirrored lighting"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
