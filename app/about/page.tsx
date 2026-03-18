import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Motion | Motion Lagree Studio',
  description: 'Learn about Motion Lagree Studio - our story, mission, values, and the passionate team dedicated to helping you build lasting strength.',
}

const values = [
  {
    title: 'Intentional Movement',
    description: 'Every rep matters. We believe that mindful, purposeful movement creates deeper results than mindless repetition.',
  },
  {
    title: 'Consistency Over Perfection',
    description: 'Progress is built through showing up, not through being perfect. We celebrate the commitment to the practice.',
  },
  {
    title: 'Inclusive Excellence',
    description: 'High standards and welcoming energy coexist. We push you to be better while meeting you exactly where you are.',
  },
  {
    title: 'Community as Foundation',
    description: 'Fitness is better together. The connections made here extend beyond the studio walls.',
  },
  {
    title: 'Method Integrity',
    description: 'We stay true to the Lagree Method. Proper form, authentic technique, and evidence-based practice guide everything we do.',
  },
  {
    title: 'Long-Term Strength',
    description: 'We are not interested in quick fixes. We build bodies and minds that are strong for life.',
  },
]

const team = [
  {
    name: 'Maya Chen',
    role: 'Lead Instructor & Studio Director',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/happy-plus-size-model-in-beige-underwear-posing-wi-2026-01-09-12-33-41-utc-PMGmgtsoX3Gfh8ohdX9FwyXCvI69U0.jpg',
    bio: 'Maya discovered Lagree after years of dance training and immediately fell in love with the method. With 8+ years of teaching experience and advanced Lagree certifications, she brings precision, warmth, and deep expertise to every class.',
  },
  {
    name: 'Jordan Rivera',
    role: 'Senior Instructor',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MOTION%20PIL%D0%B0%D0%B2%D1%8B%D0%B0%D0%B2%D1%8B%D0%B0ATES-BRANDING-1FGkgpv62fppJk1cNCXrrDzfMjyn4M.jpg',
    bio: 'A former professional dancer, Jordan brings an unparalleled understanding of body mechanics to their teaching. Known for creative sequences and attention to detail, Jordan helps clients discover muscles they never knew they had.',
  },
  {
    name: 'Taylor Brooks',
    role: 'Instructor',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MOTION%20PILATES%D0%B0%D0%B2%D1%8B%D0%B0%D0%B2%D1%8B%D0%B0-BRANDING-QWxJVU8jPPKZiPiBARE5qWJ8v8D74U.jpg',
    bio: 'Taylor specializes in making the Megaformer accessible to everyone. Whether you are a nervous beginner or seasoned practitioner, Taylor creates a supportive environment where everyone can thrive.',
  },
  {
    name: 'Alex Kim',
    role: 'Instructor',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MOTION%D0%B0%D0%B2%D1%8B%D0%B0%D0%B2%D1%8B%D0%B0%20PILATES-BRANDING-4MsxCQeZZSU5F07tPFuvrM5CVXNCBm.jpg',
    bio: 'With a background in physical therapy, Alex brings a unique perspective to Lagree instruction. Known for detailed cueing and thoughtful modifications, Alex helps clients work with their bodies, not against them.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-minimal-mist">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <p className="text-balanced-brick font-medium tracking-widest text-sm uppercase mb-6">
                  About Motion
                </p>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-midnight-moss leading-[1.1]">
                  Built with{' '}
                  <span className="italic text-balanced-brick">Intention</span>
                </h1>
                <p className="mt-8 text-lg text-midnight-moss/70 leading-relaxed">
                  Motion was founded on a simple belief: that fitness should be transformative, 
                  welcoming, and sustainable. We created a space where method integrity meets 
                  genuine community, and where lasting strength is built one intentional 
                  movement at a time.
                </p>
              </div>
              <div className="relative aspect-[4/5]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/happy-plus-size-model-in-beige-underwear-posing-wi-2026-01-09-12-33-41-utc-PMGmgtsoX3Gfh8ohdX9FwyXCvI69U0.jpg"
                  alt="Person in beige workout set celebrating movement with arms raised"
                  fill
                  className="object-cover rounded-sm"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 lg:py-28 bg-clouded-pearl/40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl text-midnight-moss leading-tight text-center mb-12">
                Our{' '}
                <span className="italic">Story</span>
              </h2>
              <div className="prose prose-lg mx-auto text-midnight-moss/70">
                <p className="leading-relaxed">
                  Motion began with a frustration: the gap between what Lagree could be and 
                  what most studios were offering. Too many places prioritized volume over 
                  quality, growth over connection, and trends over method integrity.
                </p>
                <p className="leading-relaxed mt-6">
                  We wanted something different. A studio where every instructor was deeply 
                  trained, where the space itself inspired focus, and where clients felt 
                  genuinely known and supported. A place that held high standards without 
                  being intimidating, that pushed you without breaking you down.
                </p>
                <p className="leading-relaxed mt-6">
                  Motion opened its doors in 2019 with eight Megaformers and a small team 
                  united by a shared vision. Since then, we have grown not by compromising 
                  that vision, but by proving it right. Our members stay because they feel 
                  the difference. They become stronger, more confident, and more connected 
                  to their bodies and to each other.
                </p>
                <p className="leading-relaxed mt-6">
                  This is what we mean by intentional movement. It is not just about the 
                  workout. It is about building a practice, a community, and a relationship 
                  with your body that lasts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 lg:py-28 bg-midnight-moss">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <p className="text-balanced-brick font-medium tracking-widest text-sm uppercase mb-4">
                  Our Mission
                </p>
                <h2 className="font-serif text-3xl text-minimal-mist leading-tight mb-6">
                  To create a space where intentional movement builds lasting strength, 
                  confidence, and community.
                </h2>
                <p className="text-balanced-beige/70 leading-relaxed">
                  Every decision we make, from instructor training to studio design to the 
                  music we play, serves this mission. We are here to help you become the 
                  strongest version of yourself, in body and mind.
                </p>
              </div>
              <div>
                <p className="text-balanced-brick font-medium tracking-widest text-sm uppercase mb-4">
                  Our Vision
                </p>
                <h2 className="font-serif text-3xl text-minimal-mist leading-tight mb-6">
                  To redefine what boutique fitness can be: premium without pretension, 
                  challenging without cruelty.
                </h2>
                <p className="text-balanced-beige/70 leading-relaxed">
                  We envision a fitness culture where high standards and warm welcomes 
                  coexist, where excellence is expected but ego is left at the door, and 
                  where every person who walks through our doors feels they belong.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 lg:py-28 bg-minimal-mist">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-balanced-brick font-medium tracking-widest text-sm uppercase mb-4">
                What We Stand For
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-midnight-moss leading-tight">
                Our{' '}
                <span className="italic">Values</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value) => (
                <div 
                  key={value.title}
                  className="p-8 border border-balanced-beige/30 rounded-sm"
                >
                  <h3 className="font-serif text-xl text-midnight-moss mb-3">{value.title}</h3>
                  <p className="text-midnight-moss/60 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="py-20 lg:py-28 bg-clouded-pearl/40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-balanced-brick font-medium tracking-widest text-sm uppercase mb-4">
                The Team
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-midnight-moss leading-tight">
                Meet Your{' '}
                <span className="italic">Instructors</span>
              </h2>
              <p className="mt-6 text-midnight-moss/70 leading-relaxed">
                Every instructor at Motion is rigorously trained, deeply knowledgeable, 
                and genuinely invested in your success. They are the heart of what makes 
                this studio special.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member) => (
                <div key={member.name} className="group">
                  <div className="relative aspect-[3/4] mb-6 overflow-hidden rounded-sm">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-serif text-xl text-midnight-moss">{member.name}</h3>
                  <p className="text-balanced-brick text-sm mt-1">{member.role}</p>
                  <p className="text-midnight-moss/60 text-sm mt-3 leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Studio Philosophy */}
        <section className="py-20 lg:py-28 bg-minimal-mist">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="relative">
                <div className="relative aspect-square">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MOTION%20PILATE%D0%BA%D0%BA%D0%BAS-BRANDING-9DbbDNdkzdxMb2l3uvkP5StHKgpATe.jpg"
                    alt="Rolled yoga mat and dumbbells in warm natural light"
                    fill
                    className="object-cover rounded-sm"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-balanced-brick p-8 rounded-sm hidden lg:block max-w-xs">
                  <p className="font-serif text-xl text-white leading-snug">
                    {'"'}A space designed to support your practice, not distract from it.{'"'}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-balanced-brick font-medium tracking-widest text-sm uppercase mb-4">
                  Studio Philosophy
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-midnight-moss leading-tight">
                  Every Detail{' '}
                  <span className="italic">Matters</span>
                </h2>
                <p className="mt-6 text-midnight-moss/70 leading-relaxed">
                  From the warm neutrals of our walls to the quality of our equipment, 
                  every element of Motion has been thoughtfully chosen to support your practice.
                </p>
                <p className="mt-4 text-midnight-moss/70 leading-relaxed">
                  Our space is designed to feel elevated without being cold, focused without 
                  being austere. We want you to feel inspired the moment you walk in and 
                  grounded throughout your practice. Natural light, premium materials, and 
                  intentional acoustics create an environment where you can fully immerse 
                  yourself in the work.
                </p>
                <p className="mt-4 text-midnight-moss/70 leading-relaxed">
                  We believe your environment shapes your experience. That is why we invest 
                  in the details others overlook: the weight of our towels, the warmth of 
                  our lighting, the care of our staff. It all matters.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-balanced-brick">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-white leading-tight">
              Experience Motion{' '}
              <span className="italic">Yourself</span>
            </h2>
            <p className="mt-6 text-white/80 max-w-xl mx-auto">
              The best way to understand what makes us different is to feel it. 
              Book your first class and become part of our community.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                asChild
                size="lg"
                className="bg-white text-balanced-brick hover:bg-minimal-mist font-medium tracking-wide px-8 h-14"
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
                className="border-white/30 text-white hover:bg-white/10 font-medium tracking-wide px-8 h-14"
              >
                <Link href="/contact">Visit the Studio</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
