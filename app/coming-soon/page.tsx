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
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/coming%20soon%20hero%202-xjMJtc3GVP0nejuvhletXjYJ2grNMT.png"
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
              A premium Lagree studio for those who want more than another workout—slow, controlled, high-intensity training that strengthens your body, sharpens your focus, and keeps you coming back for more.
            </p>

            {/* Waitlist Form */}
            <div className="max-w-sm mx-auto animate-fade-up animation-delay-200">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-3">
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
                        Get Early Access to Classes
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                  <p className="text-sm text-minimal-mist/60">
                    Be the first to know when Motion opens and get early access to book your first class.
                  </p>
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
                Motion is a boutique Lagree studio built for people who want to feel stronger, more grounded, and more connected to the way they move. With premium Megaformers, intentional coaching, and a warm, elevated atmosphere, every class is designed to challenge you with care.
              </p>
              <p className="text-lg text-midnight-moss/70 leading-relaxed">
                From the energy in the room to the details of the space, everything is designed to help you focus, feel supported, and come back stronger.
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
                Lagree is a high-intensity, low-impact method performed on the Megaformer. It combines strength, endurance, core, balance, and control into one efficient full-body workout.
              </p>
              <p className="text-lg text-midnight-moss/70 leading-relaxed">
                The difference is in the tempo: slow, precise movement keeps your muscles under constant tension, so every rep works harder—without the joint stress of high-impact training.
              </p>
            </div>
            
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gfsd-bLDae8AJUfOcglNchnWSKrbrrl1nkY.jpg"
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
            <p className="text-lg text-balanced-beige max-w-2xl mx-auto">
              From your first class on, Motion is designed to make every visit feel personal, polished, and worth returning to.
            </p>
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/coming%20soon%20hero-CcYYdmqku70dEMKB6WUiZ6crw2mHBF.png"
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
              <p className="text-lg text-midnight-moss/70 mb-8 max-w-lg mx-auto lg:mx-0">
                Join the list to get early access to classes, opening updates, and special launch offers before bookings open to the public.
              </p>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="max-w-sm mx-auto lg:mx-0 space-y-3">
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
                    {isLoading ? "Joining..." : "Get Early Access"}
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
    description: "The slower you move, the harder your muscles work. No rushing. No wasted reps.",
  },
  {
    title: "High Intensity",
    description: "Expect deep muscle fatigue, serious challenge, and a full-body burn—without the pounding of high-impact workouts.",
  },
  {
    title: "Time Under Tension",
    description: "Constant tension builds real strength, endurance, and control that lasts beyond class.",
  },
  {
    title: "Full-Body Results",
    description: "Core, legs, arms, balance, and stamina work together in one smart, efficient session.",
  },
]

const studioHighlights = [
  {
    title: "Intimate Class Sizes",
    description: "Small classes mean more coaching, better corrections, and more confidence on the machine.",
  },
  {
    title: "Premium Equipment",
    description: "Train on state-of-the-art Megaformers built for the Lagree Method.",
  },
  {
    title: "Expert Instructors",
    description: "Certified instructors who coach with precision, clarity, and encouragement.",
  },
  {
    title: "Curated Atmosphere",
    description: "Warm, minimal, and calming, so you can lock in and move with purpose.",
  },
  {
    title: "Flexible Scheduling",
    description: "Classes designed to fit real routines, from early mornings to evenings.",
  },
  {
    title: "Community Focus",
    description: "A welcoming studio culture where every body feels supported, challenged, and seen.",
  },
]
