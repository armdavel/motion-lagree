import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const methodBenefits = [
  {
    title: 'Slow & Controlled',
    description:
      'Slow, controlled movement keeps your muscles working longer with no momentum, creating deeper muscle engagement.',
  },
  {
    title: 'High-Intensity, Low-Impact',
    description: 'Expect muscle fatigue and a challenge without stressing your joints.',
  },
  {
    title: 'Time Under Tension',
    description:
      'Time under tension keeps muscles engaged longer during each movement to maximize muscle activation.',
  },
  {
    title: 'Full-Body Results',
    description:
      'Multiple muscle groups work together to build strength, core stability, endurance, flexibility, and balance in one efficient workout.',
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
                src="/images/landing/method-dsc03127.webp"
                alt="Woman stretching in a white workout set"
                fill
                className="object-cover rounded-sm"
              />
            </div>
            {/* Accent Box */}
            <div className="absolute -bottom-8 -right-8 bg-balanced-brick p-8 rounded-sm hidden lg:block">
              <p className="font-serif text-2xl text-white leading-snug">
                Slow control.
                <br />
                Strong results.
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-balanced-brick font-medium tracking-widest text-sm uppercase mb-4">
              The Method
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-midnight-moss leading-tight">
              What is <span className="italic">Lagree?</span>
            </h2>
            <p className="mt-6 text-midnight-moss/70 leading-relaxed">
              Lagree is a high-intensity, low-impact, full-body workout performed on the
              Megaformer. Through slow, controlled movements and constant muscle tension,
              it engages hundreds of muscles at once to build strength, core stability,
              endurance, flexibility, and balance. Built on principles of bodybuilding,
              the Lagree Method creates deep muscular activation while minimizing stress on
              the joints.
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
