import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'What is Lagree?',
    answer: 'Lagree is a high-intensity, low-impact workout method performed on the patented Megaformer machine. It combines strength, cardio, and flexibility training through slow, controlled movements that create constant muscle tension for maximum results.',
  },
  {
    question: 'Is Lagree beginner-friendly?',
    answer: 'Absolutely. While Lagree is challenging, our instructors are trained to offer modifications for every exercise. We welcome all fitness levels and will guide you through your first class with extra attention and care.',
  },
  {
    question: 'What should I expect in my first class?',
    answer: 'Arrive 10 minutes early so we can show you the machine and answer questions. Wear form-fitting workout clothes and grip socks (we have some if you need them). Your instructor will guide you through every movement and check in with you throughout.',
  },
  {
    question: 'What should I wear?',
    answer: 'Wear comfortable, form-fitting athletic wear. We recommend leggings or fitted shorts and a fitted top so instructors can see your form. You will need grip socks, which we sell in studio or you can bring your own.',
  },
  {
    question: 'How is Lagree different from Pilates?',
    answer: 'While both focus on controlled movement, Lagree is performed on the Megaformer (not a reformer) and emphasizes constant tension through slow transitions. Lagree is typically more cardiovascularly demanding and builds muscular endurance differently than traditional Pilates.',
  },
]

export function FAQSection() {
  return (
    <section className="py-24 lg:py-32 bg-minimal-mist">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Header */}
          <div>
            <p className="text-balanced-brick font-medium tracking-widest text-sm uppercase mb-4">
              Common Questions
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-midnight-moss leading-tight">
              New to Lagree?{' '}
              <span className="italic">We Have Got You.</span>
            </h2>
            <p className="mt-6 text-midnight-moss/70 leading-relaxed">
              Starting something new can feel intimidating. Here are answers to the questions 
              we hear most from first-time visitors.
            </p>
            <div className="mt-8">
              <Button 
                asChild
                variant="outline"
                className="border-midnight-moss/30 text-midnight-moss hover:bg-midnight-moss hover:text-minimal-mist font-medium tracking-wide"
              >
                <Link href="/method#faq">View All FAQs</Link>
              </Button>
            </div>
          </div>

          {/* Accordion */}
          <div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-b border-balanced-beige/30"
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
      </div>
    </section>
  )
}
