import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-balanced-brick">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
            Your Strength Journey{' '}
            <span className="italic">Starts Here</span>
          </h2>
          <p className="mt-6 text-white/80 text-lg leading-relaxed">
            Step onto the Megaformer and discover what intentional movement can do for your 
            body and mind. Book your first class and experience the Motion difference.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              asChild
              size="lg"
              className="bg-white text-balanced-brick hover:bg-minimal-mist font-medium tracking-wide px-8 h-14 text-base"
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
              className="border-white/30 text-white hover:bg-white/10 font-medium tracking-wide px-8 h-14 text-base"
            >
              <Link href="/classes#schedule">
                View Schedule
              </Link>
            </Button>
          </div>
          <p className="mt-8 text-white/60 text-sm">
            First class special available for new members
          </p>
        </div>
      </div>
    </section>
  )
}
