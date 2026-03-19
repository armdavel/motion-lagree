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
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
              src="/images/landing/hero-dsc02946.webp"
              alt="Woman in white workout set performing a seated side stretch on a Megaformer reformer in a serene studio"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-midnight-moss/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-midnight-moss/80 via-transparent to-midnight-moss/90" />
        </div>
        
        {/* Minimal Header */}
        <header className="relative z-10 w-full px-6 md:px-12 py-6 flex items-center">
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
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 md:px-12 pb-12">
          <div className="max-w-3xl mx-auto text-center">
            {/* Coming Soon Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-minimal-mist/10 backdrop-blur-sm border border-minimal-mist/20 rounded-full mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-balanced-brick rounded-full animate-pulse" />
              <span className="text-sm font-medium tracking-wide uppercase text-minimal-mist/90">
                Opening Soon
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.1] mb-6 text-minimal-mist animate-fade-up">
              Move with intention.{" "}
              <span className="text-balanced-brick">Build lasting strength.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-minimal-mist/80 max-w-xl mx-auto mb-12 animate-fade-up animation-delay-100">
              A premium Lagree Fitness studio for those who want more than just another workout. Experience a high-intensity, low-impact, full-body workout that strengthens and challenges both body and mind, leaving you coming back for more.
            </p>

            {/* Waitlist Form */}
            <div className="max-w-sm mx-auto animate-fade-up animation-delay-200">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <p className="text-sm text-minimal-mist/60">
                    Join the Founding List for opening details and early access to special rates
                  </p>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full h-12 bg-minimal-mist/10 backdrop-blur-sm border-minimal-mist/20 text-minimal-mist placeholder:text-minimal-mist/50 focus:ring-balanced-brick focus:border-balanced-brick"
                  />
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full h-12 px-6 bg-balanced-brick hover:bg-balanced-brick/90 text-white font-medium"
                  >
                    {isLoading ? (
                      "Joining..."
                    ) : (
                      <>
                        Join the Founding List
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              ) : (
                <div className="flex flex-col items-center gap-4 p-6 bg-minimal-mist/10 backdrop-blur-sm border border-minimal-mist/20 rounded-lg">
                  <div className="w-12 h-12 bg-balanced-brick/20 rounded-full flex items-center justify-center">
                    <Check className="h-6 w-6 text-balanced-brick" />
                  </div>
                  <div className="text-center">
                    <p className="font-medium text-minimal-mist mb-1">{"You're on the list!"}</p>
                    <p className="text-sm text-minimal-mist/70">
                      {"We'll be in touch soon with exclusive updates and early access details."}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute z-10 bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <div className="w-6 h-10 border-2 border-minimal-mist/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-minimal-mist/50 rounded-full" />
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
