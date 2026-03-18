import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function StudioSection() {
  return (
    <section className="py-24 lg:py-32 bg-minimal-mist">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-balanced-brick font-medium tracking-widest text-sm uppercase mb-4">
            Our Space
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-midnight-moss leading-tight">
            A Studio Designed for{' '}
            <span className="italic">Focus</span>
          </h2>
          <p className="mt-6 text-midnight-moss/70 leading-relaxed">
            Every detail of our space has been thoughtfully considered to support your practice. 
            Warm tones, natural light, and premium equipment create an environment where you 
            can fully immerse yourself in the work.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="col-span-2 row-span-2 relative aspect-square">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MOTION%20PIL%D0%B0%D0%B2%D1%8B%D0%B0%D0%B2%D1%8B%D0%B0ATES-BRANDING-1FGkgpv62fppJk1cNCXrrDzfMjyn4M.jpg"
              alt="Motion studio with Megaformer equipment detail"
              fill
              className="object-cover rounded-sm"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/images/landing/method-dsc03127.webp"
              alt="Woman stretching in a white workout set"
              fill
              className="object-cover rounded-sm"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MOTION%20PILATES%D0%B0%D0%B2%D1%8B%D0%B0%D0%B2%D1%8B%D0%B0-BRANDING-QWxJVU8jPPKZiPiBARE5qWJ8v8D74U.jpg"
              alt="Person in rust workout set in a movement pose"
              fill
              className="object-cover rounded-sm"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/happy-plus-size-model-in-beige-underwear-posing-wi-2026-01-09-12-33-41-utc-PMGmgtsoX3Gfh8ohdX9FwyXCvI69U0.jpg"
              alt="Person in beige workout set with arms raised, celebrating movement"
              fill
              className="object-cover rounded-sm"
            />
          </div>
          <div className="relative aspect-square bg-balanced-brick flex items-center justify-center p-6 rounded-sm">
            <div className="text-center text-white">
              <p className="font-serif text-2xl mb-2">Come Visit</p>
              <Button 
                asChild
                variant="outline"
                size="sm"
                className="border-white/30 text-white hover:bg-white hover:text-balanced-brick"
              >
                <Link href="/contact">Get Directions</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
