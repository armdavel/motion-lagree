"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ComingSoonPage() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  return (
    <main className="overflow-x-hidden bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-midnight-moss text-minimal-mist">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/landing/hero-dsc02946.webp"
            alt="Woman in white workout set performing a seated side stretch on a Megaformer reformer in a serene studio"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-midnight-moss/60" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(45,46,40,0.72)_0%,rgba(45,46,40,0.10)_42%,rgba(45,46,40,0.92)_100%),linear-gradient(90deg,rgba(45,46,40,0.40)_0%,transparent_50%,rgba(45,46,40,0.40)_100%)]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[78rem] flex-col px-6 pb-8 pt-5 md:px-12 md:pb-10 md:pt-6">
          {/* Minimal Header */}
          <header className="flex items-center">
            <div className="relative h-12 w-40">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CDmtFBx9LVXxGuDSNF7uKJgwNp2cEj.png"
                alt="Motion Lagree Studio"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </header>

          {/* Main Content */}
          <div className="flex flex-1 flex-col items-center justify-center py-6 text-center md:py-8">
            <div className="mx-auto max-w-3xl">
              {/* Coming Soon Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-minimal-mist/20 bg-minimal-mist/10 px-4 py-2 backdrop-blur-sm animate-fade-in">
                <span className="h-2 w-2 rounded-full bg-balanced-brick animate-pulse" />
                <span className="text-sm font-medium tracking-[0.18em] uppercase text-minimal-mist/90">
                  Opening Soon
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="mt-6 font-serif text-4xl font-medium leading-[1.1] tracking-[-0.045em] text-minimal-mist animate-fade-up sm:text-5xl md:text-6xl lg:text-7xl">
                Move with intention.
                <span className="block text-balanced-brick">Build lasting strength.</span>
              </h1>

              {/* Subheadline */}
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-[1.8] text-minimal-mist/80 animate-fade-up animation-delay-100 md:text-xl">
                A premium Lagree Fitness studio for those who want more than just another workout. Experience a high-intensity, low-impact, full-body workout that strengthens and challenges both body and mind, leaving you coming back for more.
              </p>
            </div>

            {/* Waitlist Form */}
            <div className="mt-9 w-full max-w-[38rem] animate-fade-up animation-delay-200">
              {!isSubmitted ? (
                <div className="rounded-[1.7rem] border border-minimal-mist/20 bg-[rgba(57,58,52,0.78)] p-5 shadow-[0_20px_45px_rgba(17,17,15,0.25)] backdrop-blur-md md:px-8 md:pb-7 md:pt-8">
                  <form onSubmit={handleSubmit} className="grid gap-4">
                    <p className="text-center text-base leading-[1.5] text-minimal-mist/80 md:text-[1.12rem]">
                      Join the Founding List for opening details and early access to special rates
                    </p>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-auto min-h-[3.85rem] rounded-[0.9rem] border-minimal-mist/20 bg-minimal-mist/10 px-6 text-minimal-mist placeholder:text-minimal-mist/50 focus-visible:border-balanced-brick focus-visible:ring-balanced-brick/25"
                    />
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="h-auto min-h-[3.9rem] rounded-[0.9rem] bg-balanced-brick text-white shadow-none hover:bg-[#b35d3e]"
                    >
                      {isLoading ? (
                        "Joining..."
                      ) : (
                        <>
                          Join the Founding List
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              ) : (
                <div className="flex gap-4 rounded-[1.7rem] border border-minimal-mist/20 bg-[rgba(57,58,52,0.78)] p-6 text-left shadow-[0_20px_45px_rgba(17,17,15,0.25)] backdrop-blur-md">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-balanced-brick/20">
                    <Check className="h-6 w-6 text-balanced-brick" />
                  </div>
                  <div>
                    <p className="mb-1 font-medium text-minimal-mist">{"You're on the list!"}</p>
                    <p className="text-sm leading-relaxed text-minimal-mist/70">
                      {"We'll be in touch soon with exclusive updates and early access details."}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-0 right-0 hidden justify-center md:flex">
            <div className="flex h-10 w-6 justify-center rounded-full border-2 border-minimal-mist/30 pt-2 animate-bounce">
              <div className="h-2 w-1 rounded-full bg-minimal-mist/50" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/happy-plus-size-model-in-beige-underwear-posing-wi-2026-01-09-12-33-41-utc-PMGmgtsoX3Gfh8ohdX9FwyXCvI69U0.jpg"
                  alt="Person in beige workout set with arms raised, welcoming and joyful"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-balanced-brick/10 rounded-sm -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-balanced-beige/40 rounded-sm -z-10" />
            </div>
            
            {/* Content */}
            <div className="lg:pl-8">
              <p className="text-balanced-brick font-medium tracking-widest text-sm uppercase mb-4">
                The Studio
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-6 text-midnight-moss">
                More Than a Workout
              </h2>
              <p className="text-lg text-midnight-moss/70 leading-relaxed mb-6">
                Motion is a boutique Lagree Fitness studio where movement, energy, and community come together to create a powerful workout experience. Each class on the Megaformer is led by certified Lagree instructors and paired with energizing music that keeps you fully present and connected to your body.
              </p>
              <p className="text-lg text-midnight-moss/70 leading-relaxed">
                From the moment you walk in, the space is designed to help you feel empowered, supported, and ready to push beyond your limits leaving each class stronger than when you arrived.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Lagree Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Content */}
            <div>
              <p className="text-sm font-medium tracking-widest uppercase text-balanced-brick mb-4">
                The Method
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-6 text-midnight-moss">
                What is Lagree?
              </h2>
              <p className="text-lg text-midnight-moss/70 leading-relaxed mb-6">
                Lagree is a high-intensity, low-impact, full-body workout performed on the Megaformer. Through slow, controlled movements and constant muscle tension, it engages hundreds of muscles at once to build strength, core stability, endurance, flexibility, and balance. Built on principles of bodybuilding, the Lagree Method creates deep muscular activation while minimizing stress on the joints.
              </p>
            </div>
            
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                <Image
                  src="/images/landing/method-dsc03127.webp"
                  alt="Close-up of reformer machine hardware and wood detail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden mt-8">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MOTION%D0%B0%D0%B2%D1%8B%D0%B0%D0%B2%D1%8B%D0%B0%20PILATES-BRANDING-4MsxCQeZZSU5F07tPFuvrM5CVXNCBm.jpg"
                  alt="Person in white leggings seated in a mindful meditation pose"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Lagree Points */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lagreePoints.map((point, index) => (
              <div 
                key={point.title}
                className="group p-8 bg-card border border-border rounded-sm hover:border-balanced-brick/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-balanced-brick/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-balanced-brick/20 transition-colors">
                  <span className="text-2xl font-serif text-balanced-brick">{index + 1}</span>
                </div>
                <h3 className="text-xl font-serif font-medium mb-3 text-midnight-moss">{point.title}</h3>
                <p className="text-midnight-moss/70 leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Highlights */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 bg-midnight-moss text-minimal-mist overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MOTION%20PILATE%D0%BA%D0%BA%D0%BAS-BRANDING-9DbbDNdkzdxMb2l3uvkP5StHKgpATe.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest uppercase text-balanced-brick mb-4">
              The Experience
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-6">
              What to Expect
            </h2>
            <div className="max-w-2xl mx-auto space-y-4 text-lg text-balanced-beige">
              <p>
                Each class is a 45-minute Lagree workout performed on the Megaformer. Expect slow, controlled movements that build strength, endurance, and core stability through exercises like planks, squats, lunges, and more.
              </p>
              <p>
                At Motion, every class is designed to feel intentional, transformative, and confidence-building from start to finish.
              </p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {studioHighlights.map((highlight) => (
              <div 
                key={highlight.title}
                className="p-6 bg-minimal-mist/5 backdrop-blur-sm border border-balanced-beige/20 rounded-sm text-left hover:bg-minimal-mist/10 transition-colors"
              >
                <h3 className="font-medium mb-2 text-minimal-mist">{highlight.title}</h3>
                <p className="text-balanced-beige text-sm leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-square rounded-sm overflow-hidden">
                <Image
                  src="/images/landing/cta-facetune.webp"
                  alt="Woman in terracotta workout set performing a lunge on a Megaformer reformer in a warm sunlit studio"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-balanced-brick/10 rounded-sm" />
            </div>
            
            {/* Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <p className="text-balanced-brick font-medium tracking-widest text-sm uppercase mb-4">
                Join the Movement
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-6 text-midnight-moss">
                Be First to Experience Motion
              </h2>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="max-w-sm mx-auto lg:mx-0 space-y-3">
                  <p className="text-lg text-midnight-moss/70">
                    Be the first to receive opening details and special founding rates
                  </p>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full h-12 bg-card border-border"
                  />
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full h-12 px-6 bg-balanced-brick hover:bg-balanced-brick/90 text-white font-medium"
                  >
                    {isLoading ? "Joining..." : "Join the Founding List"}
                  </Button>
                </form>
              ) : (
                <div className="inline-flex items-center gap-2 text-balanced-brick font-medium">
                  <Check className="h-5 w-5" />
                  {"You're already on the list!"}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-8 px-6 md:px-12 border-t border-border">
        <div className="max-w-6xl mx-auto flex items-center justify-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Motion Lagree Studio. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}

const lagreePoints = [
  {
    title: "Slow & Controlled",
    description: "Slow, controlled movement keeps your muscles working longer with no momentum, creating deeper muscle engagement.",
  },
  {
    title: "High-Intensity, Low-Impact",
    description: "Expect muscle fatigue and a challenge without stressing your joints.",
  },
  {
    title: "Time Under Tension",
    description: "Time under tension keeps muscles engaged longer during each movement to maximize muscle activation.",
  },
  {
    title: "Full-Body Results",
    description: "Multiple muscle groups work together to build strength, core stability, endurance, flexibility, and balance in one efficient workout.",
  },
]

const studioHighlights = [
  {
    title: "Intimate Class Sizes",
    description: "Small classes allow for personalized guidance every step of the way.",
  },
  {
    title: "Innovative MegaPros",
    description: "Move on the Megaformer built specifically for the Lagree Method.",
  },
  {
    title: "Lagree Certified Instructors",
    description: "Instructors who provide clear guidance, precise corrections, and encouragement throughout every class.",
  },
  {
    title: "Curated Atmosphere",
    description: "A warm, minimal space designed to help you focus and move with purpose.",
  },
  {
    title: "Flexible Scheduling",
    description: "A schedule designed to fit your routine, from early mornings to evenings.",
  },
  {
    title: "Community Focus",
    description: "A welcoming community where you feel supported, encouraged, and inspired every step of the way.",
  },
]
