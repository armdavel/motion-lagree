import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Visit Us | Motion Lagree Studio',
  description: 'Find Motion Lagree Studio, get directions, view our hours, and contact us with any questions. We would love to welcome you to the studio.',
}

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    value: '123 Wellness Boulevard, Suite 200',
    detail: 'Downtown Arts District',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '(555) 123-4567',
    detail: 'Call or text',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@motionlagree.com',
    detail: 'We respond within 24 hours',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon-Fri: 6AM - 8PM',
    detail: 'Sat-Sun: 8AM - 2PM',
  },
]

const arrivalNotes = [
  {
    title: 'First-time visitors',
    description: 'Please arrive 10 minutes early. We will give you a tour, help you set up your Megaformer, and answer any questions.',
  },
  {
    title: 'Parking',
    description: 'Street parking is available on Wellness Boulevard. There is also a parking garage on 2nd Street with validation available.',
  },
  {
    title: 'What to bring',
    description: 'Wear form-fitting workout clothes. Grip socks are required and available for purchase. Bring water if you prefer your own.',
  },
  {
    title: 'Accessibility',
    description: 'Our studio is fully accessible with elevator access and ADA-compliant facilities. Please contact us with any specific needs.',
  },
]

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-minimal-mist">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-balanced-brick font-medium tracking-widest text-sm uppercase mb-6">
                Visit Us
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-midnight-moss leading-[1.1]">
                We Would Love to{' '}
                <span className="italic text-balanced-brick">Meet You</span>
              </h1>
              <p className="mt-8 text-lg text-midnight-moss/70 leading-relaxed">
                Whether you are ready to book your first class or just have questions, 
                we are here to help. Come see what makes Motion special.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-20 lg:py-28 bg-clouded-pearl/40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Contact Info */}
              <div>
                <h2 className="font-serif text-3xl text-midnight-moss mb-10">
                  Get in{' '}
                  <span className="italic">Touch</span>
                </h2>
                <div className="space-y-8">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-balanced-brick/10 flex items-center justify-center shrink-0">
                        <item.icon className="h-5 w-5 text-balanced-brick" />
                      </div>
                      <div>
                        <p className="text-sm text-midnight-moss/60 mb-1">{item.label}</p>
                        <p className="font-medium text-midnight-moss">{item.value}</p>
                        <p className="text-sm text-midnight-moss/60">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map Placeholder */}
                <div className="mt-12 aspect-video bg-clouded-pearl rounded-sm overflow-hidden relative">
                  <Image
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop"
                    alt="Map showing Motion Lagree Studio location"
                    fill
                    className="object-cover opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button 
                      asChild
                      className="bg-midnight-moss hover:bg-midnight-moss/90 text-minimal-mist"
                    >
                      <a 
                        href="https://maps.google.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <MapPin className="h-4 w-4 mr-2" />
                        Get Directions
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div className="bg-minimal-mist p-8 lg:p-10 rounded-sm">
                  <h2 className="font-serif text-2xl text-midnight-moss mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-midnight-moss/60 mb-8">
                    Have a question? We will get back to you within 24 hours.
                  </p>
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-midnight-moss mb-2">
                          First Name
                        </label>
                        <Input 
                          id="firstName"
                          name="firstName"
                          placeholder="Jane"
                          className="bg-white border-balanced-beige/50 focus:border-balanced-brick"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-midnight-moss mb-2">
                          Last Name
                        </label>
                        <Input 
                          id="lastName"
                          name="lastName"
                          placeholder="Smith"
                          className="bg-white border-balanced-beige/50 focus:border-balanced-brick"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-midnight-moss mb-2">
                        Email
                      </label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        placeholder="jane@example.com"
                        className="bg-white border-balanced-beige/50 focus:border-balanced-brick"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-midnight-moss mb-2">
                        Phone (optional)
                      </label>
                      <Input 
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        className="bg-white border-balanced-beige/50 focus:border-balanced-brick"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-midnight-moss mb-2">
                        Subject
                      </label>
                      <Input 
                        id="subject"
                        name="subject"
                        placeholder="First class inquiry"
                        className="bg-white border-balanced-beige/50 focus:border-balanced-brick"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-midnight-moss mb-2">
                        Message
                      </label>
                      <Textarea 
                        id="message"
                        name="message"
                        placeholder="Tell us how we can help..."
                        rows={4}
                        className="bg-white border-balanced-beige/50 focus:border-balanced-brick resize-none"
                      />
                    </div>
                    <Button 
                      type="submit"
                      className="w-full bg-balanced-brick hover:bg-balanced-brick/90 text-white font-medium"
                    >
                      Send Message
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Arrival Notes */}
        <section className="py-20 lg:py-28 bg-minimal-mist">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-balanced-brick font-medium tracking-widest text-sm uppercase mb-4">
                Before You Arrive
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-midnight-moss leading-tight">
                What to{' '}
                <span className="italic">Know</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {arrivalNotes.map((note) => (
                <div key={note.title} className="p-6 bg-clouded-pearl/30 rounded-sm">
                  <h3 className="font-serif text-lg text-midnight-moss mb-3">{note.title}</h3>
                  <p className="text-midnight-moss/60 text-sm leading-relaxed">{note.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Studio Image */}
        <section className="py-20 lg:py-28 bg-clouded-pearl/40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative aspect-[21/9] rounded-sm overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2075&auto=format&fit=crop"
                alt="Motion Lagree Studio interior"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-midnight-moss/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4">
                    Ready to Start?
                  </h2>
                  <p className="text-white/80 mb-8 max-w-md mx-auto">
                    Book your first class and experience the Motion difference for yourself.
                  </p>
                  <Button 
                    asChild
                    size="lg"
                    className="bg-balanced-brick hover:bg-balanced-brick/90 text-white font-medium tracking-wide px-8"
                  >
                    <Link href="/classes">
                      Book a Class
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="py-20 lg:py-28 bg-minimal-mist">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-2xl text-midnight-moss mb-4">
                Still Have Questions?
              </h2>
              <p className="text-midnight-moss/60 mb-8">
                Check out our FAQ for answers to common questions about classes, 
                memberships, and the Lagree method.
              </p>
              <Button 
                asChild
                variant="outline"
                className="border-midnight-moss/30 text-midnight-moss hover:bg-midnight-moss hover:text-minimal-mist font-medium tracking-wide"
              >
                <Link href="/method#faq">View FAQ</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
