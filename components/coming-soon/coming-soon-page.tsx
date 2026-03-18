"use client"

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const lagreePrinciples = [
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

const experienceHighlights = [
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
    description:
      'Instructors who provide clear guidance, precise corrections, and encouragement throughout every class.',
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
    description:
      'A welcoming community where you feel supported, encouraged, and inspired every step of the way.',
  },
]

type FoundingListFormProps = {
  email: string
  isLoading: boolean
  isSubmitted: boolean
  note: string
  onEmailChange: (value: string) => void
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>
}

function FoundingListForm({
  email,
  isLoading,
  isSubmitted,
  note,
  onEmailChange,
  onSubmit,
}: FoundingListFormProps) {
  if (isSubmitted) {
    return (
      <div className="rounded-sm border border-balanced-brick/20 bg-balanced-brick/10 p-5">
        <div className="flex items-center gap-3 text-balanced-brick">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-balanced-brick/15">
            <Check className="h-5 w-5" />
          </span>
          <div>
            <p className="font-medium text-current">You're on the founding list.</p>
            <p className="mt-1 text-sm text-current/80">
              We'll share opening details and special founding rates soon.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <p className="text-sm uppercase tracking-[0.24em] text-balanced-brick">{note}</p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Input
          type="email"
          name="email"
          value={email}
          onChange={(event) => onEmailChange(event.target.value)}
          placeholder="Enter your email"
          required
          className="h-12 border-balanced-beige/50 bg-white/90 text-midnight-moss placeholder:text-midnight-moss/45"
        />
        <Button
          type="submit"
          size="lg"
          disabled={isLoading}
          className="h-12 min-w-56 bg-balanced-brick px-6 text-white hover:bg-balanced-brick/90"
        >
          {isLoading ? 'Joining...' : 'Join the Founding List'}
          {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
        </Button>
      </div>
    </form>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-medium uppercase tracking-[0.28em] text-balanced-brick">
      {children}
    </p>
  )
}

export function ComingSoonPageContent() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!email) {
      return
    }

    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 800))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  return (
    <main className="bg-minimal-mist text-midnight-moss">
      <section className="relative isolate overflow-hidden bg-midnight-moss text-minimal-mist">
        <Image
          src="/images/landing/hero-dsc02946.webp"
          alt="Woman performing a controlled Lagree movement on a Mega Pro machine"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-midnight-moss/68" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight-moss via-midnight-moss/88 to-midnight-moss/40" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-midnight-moss to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6 pb-16 pt-8 lg:px-8">
          <header className="flex items-center justify-between">
            <div>
              <p className="font-serif text-4xl tracking-wide">Motion</p>
              <p className="mt-1 text-xs uppercase tracking-[0.3em] text-minimal-mist/70">
                Lagree Fitness Studio
              </p>
            </div>
            <div className="hidden rounded-full border border-minimal-mist/20 bg-minimal-mist/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-minimal-mist/75 md:block">
              Opening Soon
            </div>
          </header>

          <div className="flex flex-1 items-center py-16 lg:py-24">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-minimal-mist/20 bg-minimal-mist/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-minimal-mist/75 md:hidden">
                <span className="h-2 w-2 rounded-full bg-balanced-brick" />
                Opening Soon
              </div>
              <SectionLabel>Premium Lagree Fitness</SectionLabel>
              <h1 className="mt-6 font-serif text-5xl leading-[1.02] text-minimal-mist md:text-6xl lg:text-7xl">
                Move with intention.
                <br />
                <span className="text-balanced-brick">Build lasting strength.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-minimal-mist/80 md:text-xl">
                A premium Lagree Fitness studio for those who want more than just another workout.
                Experience a high-intensity, low-impact, full-body workout that strengthens and
                challenges both body and mind, leaving you coming back for more.
              </p>
              <div className="mt-10 max-w-2xl rounded-sm border border-minimal-mist/10 bg-minimal-mist/10 p-6 backdrop-blur-sm">
                <FoundingListForm
                  email={email}
                  isLoading={isLoading}
                  isSubmitted={isSubmitted}
                  note="Join the Founding List for opening details and early access to special rates"
                  onEmailChange={setEmail}
                  onSubmit={handleSubmit}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start lg:gap-20">
            <div className="max-w-3xl">
              <SectionLabel>The Studio</SectionLabel>
              <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
                More Than a Workout
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-midnight-moss/72">
                Motion is a boutique Lagree Fitness studio where movement, energy, and community
                come together to create a powerful workout experience. Each class on the Megaformer
                is led by certified Lagree instructors and paired with energizing music that keeps
                you fully present and connected to your body.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-midnight-moss/72">
                From the moment you walk in, the space is designed to help you feel empowered,
                supported, and ready to push beyond your limits leaving each class stronger than
                when you arrived.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-sm bg-clouded-pearl p-7">
                <p className="text-sm uppercase tracking-[0.2em] text-balanced-brick">
                  Atmosphere
                </p>
                <p className="mt-3 font-serif text-2xl leading-snug">
                  Intentional energy, warm design, and coaching that keeps you present.
                </p>
              </div>
              <div className="rounded-sm border border-balanced-beige/40 bg-white p-7">
                <p className="text-sm uppercase tracking-[0.2em] text-balanced-brick">
                  Studio Focus
                </p>
                <p className="mt-3 text-base leading-relaxed text-midnight-moss/70">
                  Movement, energy, and community are built into the experience from the first
                  class forward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-clouded-pearl/45 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
            <div className="relative mx-auto w-full max-w-md">
              <div className="relative aspect-[2/3] overflow-hidden rounded-sm">
                <Image
                  src="/images/landing/method-dsc03127.webp"
                  alt="Woman stretching in a white workout set"
                  fill
                  sizes="(min-width: 1024px) 32rem, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden rounded-sm bg-balanced-brick p-6 text-white shadow-lg lg:block">
                <p className="font-serif text-2xl leading-snug">
                  Slow control.
                  <br />
                  Strong results.
                </p>
              </div>
            </div>

            <div>
              <SectionLabel>The Method</SectionLabel>
              <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
                What is Lagree?
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-midnight-moss/72">
                Lagree is a high-intensity, low-impact, full-body workout performed on the
                Megaformer. Through slow, controlled movements and constant muscle tension, it
                engages hundreds of muscles at once to build strength, core stability, endurance,
                flexibility, and balance. Built on principles of bodybuilding, the Lagree Method
                creates deep muscular activation while minimizing stress on the joints.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {lagreePrinciples.map((principle, index) => (
              <article
                key={principle.title}
                className="rounded-sm border border-balanced-beige/40 bg-white p-7 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-balanced-brick/10 font-serif text-2xl text-balanced-brick">
                  {index + 1}
                </div>
                <h3 className="mt-5 font-serif text-2xl">{principle.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-midnight-moss/68">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-midnight-moss py-24 text-minimal-mist lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(183,104,77,0.22),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(247,242,237,0.12),_transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionLabel>The Experience</SectionLabel>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-minimal-mist md:text-5xl">
              What to Expect
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-balanced-beige">
              Each class is a 45-minute Lagree workout performed on the Megaformer. Expect slow,
              controlled movements that build strength, endurance, and core stability through
              exercises like planks, squats, lunges, and more.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-balanced-beige">
              At Motion, every class is designed to feel intentional, transformative, and
              confidence-building from start to finish.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {experienceHighlights.map((highlight) => (
              <article
                key={highlight.title}
                className="rounded-sm border border-minimal-mist/12 bg-minimal-mist/6 p-7 backdrop-blur-sm"
              >
                <h3 className="font-serif text-2xl text-minimal-mist">{highlight.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-balanced-beige/92">
                  {highlight.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-20">
            <div className="order-2 lg:order-1">
              <SectionLabel>Join the Movement</SectionLabel>
              <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
                Be First to Experience Motion
              </h2>
              <div className="mt-8 max-w-xl">
                <FoundingListForm
                  email={email}
                  isLoading={isLoading}
                  isSubmitted={isSubmitted}
                  note="Be the first to receive opening details and special founding rates"
                  onEmailChange={setEmail}
                  onSubmit={handleSubmit}
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <Image
                  src="/images/landing/cta-facetune.webp"
                  alt="Woman stretching in a warm studio with mirrored lighting"
                  fill
                  sizes="(min-width: 1024px) 38rem, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-balanced-beige/40 py-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 text-sm text-midnight-moss/60 lg:px-8">
          <p>Motion Lagree Studio</p>
          <p>{new Date().getFullYear()}</p>
        </div>
      </footer>
    </main>
  )
}
