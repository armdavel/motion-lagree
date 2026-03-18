import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Clock, Flame, Heart, Zap } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export const metadata: Metadata = {
  title: 'The Lagree Method | Motion Lagree Studio',
  description: 'Discover the Lagree Method - a revolutionary high-intensity, low-impact workout that builds strength, endurance, and flexibility through slow, controlled movements.',
}

const benefits = [
  {
    icon: Flame,
    title: 'Burn & Build',
    description: 'Torch calories while building lean muscle. The constant tension keeps your metabolism elevated long after class ends.',
  },
  {
    icon: Clock,
    title: 'Time Efficient',
    description: 'Get a full-body workout in just 50 minutes. Every second on the Megaformer counts.',
  },
  {
    icon: Heart,
    title: 'Low Impact',
    description: 'Spring-based resistance is gentle on joints, making it ideal for all ages and fitness levels.',
  },
  {
    icon: Zap,
    title: 'Fast Results',
    description: 'Clients typically see and feel changes within 2-3 weeks of consistent practice.',
  },
]

const principles = [
  {
    number: '01',
    title: 'Slow Tempo',
    description: 'Movements are performed at a controlled 4-count pace, eliminating momentum and maximizing muscle engagement throughout each exercise.',
  },
  {
    number: '02',
    title: 'Constant Tension',
    description: 'You never fully rest between movements. This continuous load creates deep muscle fatigue that builds endurance and strength simultaneously.',
  },
  {
    number: '03',
    title: 'Core Integration',
    description: 'Every exercise requires core engagement. Your midsection works constantly, building functional strength that supports everything you do.',
  },
  {
    number: '04',
    title: 'Mind-Body Focus',
    description: 'The precision required keeps you present and focused. This is moving meditation as much as it is physical training.',
  },
]

const faqs = [
  {
    question: 'What is Lagree and how is it different from Pilates?',
    answer: 'While both emphasize controlled movement, Lagree is performed on the patented Megaformer machine (not a reformer) and uses a unique spring-based resistance system. Lagree emphasizes constant tension through slow transitions with no rest between exercises, making it more cardiovascularly demanding. The method targets slow-twitch muscle fibers, building muscular endurance in a way traditional Pilates does not.',
  },
  {
    question: 'Who invented the Lagree Method?',
    answer: 'The Lagree Method was created by Sebastian Lagree in 1998. After years of refining the technique and developing the Megaformer machine, Lagree has become a global fitness phenomenon known for its efficiency and effectiveness.',
  },
  {
    question: 'Is Lagree suitable for beginners?',
    answer: 'Absolutely. While Lagree is challenging, every exercise can be modified for any fitness level. Our instructors are trained to guide beginners through the basics and offer alternatives that build foundational strength safely. We recommend starting with our fundamentals-focused classes.',
  },
  {
    question: 'How often should I do Lagree?',
    answer: 'For optimal results, we recommend 3-4 classes per week with rest days in between. The method creates micro-tears in muscle fibers that need time to repair and strengthen. Beginners might start with 2 classes per week and build up as their body adapts.',
  },
  {
    question: 'What results can I expect from Lagree?',
    answer: 'With consistent practice, clients typically experience improved muscle tone and definition, increased endurance and stamina, better posture and core strength, enhanced flexibility, and mental clarity from the focused nature of the workout. Most people notice changes within 2-3 weeks of regular practice.',
  },
  {
    question: 'What is a Megaformer?',
    answer: 'The Megaformer is the patented machine used in Lagree workouts. It features a gliding carriage, adjustable springs for resistance, and multiple platforms and handles that allow for hundreds of exercise variations. The machine is designed to keep your body in constant tension throughout the entire workout.',
  },
  {
    question: 'Will Lagree help me lose weight?',
    answer: 'Lagree is excellent for body composition changes. The combination of strength training and cardiovascular conditioning builds lean muscle mass, which increases your resting metabolic rate. Combined with proper nutrition, many clients see significant changes in their body composition and overall fitness.',
  },
  {
    question: 'I have injuries or physical limitations. Can I still do Lagree?',
    answer: 'The low-impact nature of Lagree makes it accessible for many people with injuries or limitations. However, we always recommend consulting with your healthcare provider before starting. Please inform your instructor of any concerns so they can offer appropriate modifications.',
  },
]

export default function MethodPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-minimal-mist">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-balanced-brick font-medium tracking-widest text-sm uppercase mb-6">
                The Lagree Method
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-midnight-moss leading-[1.1]">
                Slow, Controlled,{' '}
                <span className="italic text-balanced-brick">Powerful</span>
              </h1>
              <p className="mt-8 text-lg text-midnight-moss/70 leading-relaxed">
                The Lagree Method is a revolutionary approach to fitness that transforms your body 
                through intentional, high-intensity movement. Discover why this method has become 
                the workout of choice for those who demand results.
              </p>
            </div>
          </div>
        </section>

        {/* What is Lagree */}
        <section className="py-20 lg:py-28 bg-clouded-pearl/40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="relative">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MOTION%20PILATES%D0%B0%D0%B2%D1%8B%D0%B0%D0%B2%D1%8B%D0%B0-BRANDING-QWxJVU8jPPKZiPiBARE5qWJ8v8D74U.jpg"
                    alt="Person in rust workout set demonstrating Lagree movement"
                    fill
                    className="object-cover rounded-sm"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-balanced-brick/10 w-40 h-40 rounded-sm -z-10" />
              </div>
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-midnight-moss leading-tight">
                  What is the{' '}
                  <span className="italic">Lagree Method?</span>
                </h2>
                <p className="mt-6 text-midnight-moss/70 leading-relaxed">
                  Developed by fitness visionary Sebastian Lagree, the Lagree Method combines the 
                  best elements of Pilates, strength training, and cardio into one efficient, 
                  transformative workout.
                </p>
                <p className="mt-4 text-midnight-moss/70 leading-relaxed">
                  Performed on the patented Megaformer machine, each class targets all major muscle 
                  groups through slow, controlled movements that maximize time under tension. The 
                  result? A workout that builds strength, improves flexibility, and elevates your 
                  cardiovascular fitness simultaneously.
                </p>
                <p className="mt-4 text-midnight-moss/70 leading-relaxed">
                  Unlike traditional workouts that rely on momentum, Lagree forces your muscles to 
                  work through every inch of movement. This slow tempo is what makes the method both 
                  challenging and uniquely effective.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="py-20 lg:py-28 bg-midnight-moss">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <p className="text-balanced-brick font-medium tracking-widest text-sm uppercase mb-4">
                Core Principles
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-minimal-mist leading-tight">
                The Science of{' '}
                <span className="italic text-balanced-beige">Slow</span>
              </h2>
              <p className="mt-6 text-balanced-beige/70 leading-relaxed">
                Every element of the Lagree Method is designed with purpose. These four principles 
                work together to create a uniquely effective workout.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {principles.map((principle) => (
                <div key={principle.number} className="flex gap-6">
                  <span className="font-serif text-4xl text-balanced-brick/40">
                    {principle.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl text-minimal-mist mb-3">
                      {principle.title}
                    </h3>
                    <p className="text-balanced-beige/60 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 lg:py-28 bg-minimal-mist">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-balanced-brick font-medium tracking-widest text-sm uppercase mb-4">
                The Benefits
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-midnight-moss leading-tight">
                Why Lagree{' '}
                <span className="italic">Works</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="text-center p-8 bg-clouded-pearl/30 rounded-sm">
                  <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-balanced-brick/10 flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-balanced-brick" />
                  </div>
                  <h3 className="font-serif text-xl text-midnight-moss mb-3">{benefit.title}</h3>
                  <p className="text-midnight-moss/60 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How Motion Teaches */}
        <section className="py-20 lg:py-28 bg-clouded-pearl/40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="order-2 lg:order-1">
                <p className="text-balanced-brick font-medium tracking-widest text-sm uppercase mb-4">
                  The Motion Approach
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-midnight-moss leading-tight">
                  How We Teach{' '}
                  <span className="italic">the Method</span>
                </h2>
                <p className="mt-6 text-midnight-moss/70 leading-relaxed">
                  At Motion, we are committed to teaching the Lagree Method with integrity. Our 
                  instructors are rigorously trained and continuously educated to ensure you 
                  receive the authentic Lagree experience.
                </p>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 mt-2 bg-balanced-brick rounded-full" />
                    <span className="text-midnight-moss/70">
                      <strong className="text-midnight-moss">Proper form first.</strong> We prioritize 
                      technique over intensity, building a foundation for safe, effective practice.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 mt-2 bg-balanced-brick rounded-full" />
                    <span className="text-midnight-moss/70">
                      <strong className="text-midnight-moss">Clear, precise cueing.</strong> Our 
                      instructors guide you through every movement with detailed instructions.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 mt-2 bg-balanced-brick rounded-full" />
                    <span className="text-midnight-moss/70">
                      <strong className="text-midnight-moss">Modifications always available.</strong> Every 
                      body is different. We meet you where you are and help you progress.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 mt-2 bg-balanced-brick rounded-full" />
                    <span className="text-midnight-moss/70">
                      <strong className="text-midnight-moss">Hands-on adjustments.</strong> With your 
                      permission, we offer tactile guidance to help you find proper alignment.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MOTION%20PIL%D0%B0%D0%B2%D1%8B%D0%B0%D0%B2%D1%8B%D0%B0ATES-BRANDING-1FGkgpv62fppJk1cNCXrrDzfMjyn4M.jpg"
                    alt="Close-up of person in tan bodysuit demonstrating controlled Lagree form"
                    fill
                    className="object-cover rounded-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Beginner Section */}
        <section className="py-20 lg:py-28 bg-minimal-mist">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="bg-midnight-moss rounded-sm p-10 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl text-minimal-mist leading-tight">
                    New to Lagree?{' '}
                    <span className="italic text-balanced-beige">Start Here.</span>
                  </h2>
                  <p className="mt-6 text-balanced-beige/70 leading-relaxed">
                    We know starting something new can feel intimidating. That is why we have 
                    designed our intro experience to make you feel welcomed and prepared.
                  </p>
                  <ul className="mt-6 space-y-3 text-balanced-beige/70">
                    <li>Arrive 10 minutes early for orientation</li>
                    <li>Wear form-fitting workout clothes</li>
                    <li>Grip socks required (we sell them too)</li>
                    <li>Bring water and an open mind</li>
                  </ul>
                  <div className="mt-8">
                    <Button 
                      asChild
                      className="bg-balanced-brick hover:bg-balanced-brick/90 text-white font-medium tracking-wide"
                    >
                      <Link href="/classes">
                        Book Your First Class
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="relative aspect-video lg:aspect-square">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MOTION%D0%B0%D0%B2%D1%8B%D0%B0%D0%B2%D1%8B%D0%B0%20PILATES-BRANDING-4MsxCQeZZSU5F07tPFuvrM5CVXNCBm.jpg"
                    alt="Person in meditative seated position on mat"
                    fill
                    className="object-cover rounded-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 lg:py-28 bg-clouded-pearl/40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <p className="text-balanced-brick font-medium tracking-widest text-sm uppercase mb-4">
                Frequently Asked Questions
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-midnight-moss leading-tight">
                Everything You Need{' '}
                <span className="italic">to Know</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border-b border-balanced-beige/30 bg-minimal-mist/50 px-6 mb-3 rounded-sm"
                  >
                    <AccordionTrigger className="text-left font-serif text-lg text-midnight-moss hover:text-balanced-brick hover:no-underline py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-midnight-moss/70 leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-balanced-brick">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-white leading-tight">
              Ready to Experience the{' '}
              <span className="italic">Method?</span>
            </h2>
            <p className="mt-6 text-white/80 max-w-xl mx-auto">
              Book your first class and discover why the Lagree Method has transformed 
              how thousands of people approach fitness.
            </p>
            <div className="mt-10">
              <Button 
                asChild
                size="lg"
                className="bg-white text-balanced-brick hover:bg-minimal-mist font-medium tracking-wide px-8 h-14"
              >
                <Link href="/classes">
                  Book a Class
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
