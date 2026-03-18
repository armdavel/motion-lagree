import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/home/hero-section'
import { IntroSection } from '@/components/home/intro-section'
import { MethodSection } from '@/components/home/method-section'
import { DifferenceSection } from '@/components/home/difference-section'
import { StudioSection } from '@/components/home/studio-section'
import { CommunitySection } from '@/components/home/community-section'
import { InstructorsSection } from '@/components/home/instructors-section'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { FAQSection } from '@/components/home/faq-section'
import { CTASection } from '@/components/home/cta-section'

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <IntroSection />
        <MethodSection />
        <DifferenceSection />
        <StudioSection />
        <CommunitySection />
        <InstructorsSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
