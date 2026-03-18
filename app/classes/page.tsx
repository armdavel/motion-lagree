import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check, Clock, Users, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Classes & Memberships | Motion Lagree Studio',
  description: 'Explore our class offerings and membership options. From first-timers to devoted practitioners, find the perfect way to experience Motion.',
}

const classTypes = [
  {
    name: 'Motion Signature',
    duration: '50 min',
    level: 'All Levels',
    description: 'Our flagship class that takes you through the full Lagree experience. A complete full-body workout that builds strength, endurance, and flexibility.',
    highlights: ['Full body workout', 'All fitness levels', 'Core-focused sequences'],
  },
  {
    name: 'Motion Foundations',
    duration: '50 min',
    level: 'Beginner',
    description: 'Perfect for newcomers. Learn the fundamentals of the Megaformer and Lagree method with extra attention to form and technique.',
    highlights: ['Beginner-friendly pace', 'Form instruction', 'Smaller class size'],
  },
  {
    name: 'Motion Intensity',
    duration: '50 min',
    level: 'Advanced',
    description: 'For experienced practitioners ready to push further. Advanced sequences, longer holds, and increased spring tension.',
    highlights: ['Advanced sequences', 'Higher intensity', 'Experienced practitioners'],
  },
]

const memberships = [
  {
    name: 'Drop-In',
    price: '$38',
    period: 'per class',
    description: 'Perfect for trying us out or occasional visits.',
    features: [
      'Single class access',
      'Full studio amenities',
      'Towel service included',
    ],
    cta: 'Book a Class',
    featured: false,
  },
  {
    name: 'Starter Pack',
    price: '$99',
    period: 'for 3 classes',
    description: 'New to Motion? This intro pack is the perfect way to begin.',
    features: [
      '3 classes to use within 30 days',
      'Complimentary grip socks',
      'Full studio amenities',
      'First class orientation',
    ],
    cta: 'Get Started',
    featured: true,
    badge: 'New Client Special',
  },
  {
    name: '8-Class Pack',
    price: '$240',
    period: 'for 8 classes',
    description: 'For the committed practitioner building a consistent routine.',
    features: [
      '8 classes to use within 60 days',
      'Full studio amenities',
      'Towel service included',
      'Priority booking',
    ],
    cta: 'Purchase Pack',
    featured: false,
  },
  {
    name: 'Unlimited Monthly',
    price: '$299',
    period: 'per month',
    description: 'For those who want to make Motion a daily practice.',
    features: [
      'Unlimited classes',
      'Early booking access',
      'Guest passes (2/month)',
      'Retail discounts',
      'Complimentary grip socks monthly',
    ],
    cta: 'Join Now',
    featured: false,
  },
]

const schedule = [
  { day: 'Monday', classes: ['6:00 AM', '7:00 AM', '9:30 AM', '12:00 PM', '5:30 PM', '6:30 PM'] },
  { day: 'Tuesday', classes: ['6:00 AM', '7:00 AM', '9:30 AM', '12:00 PM', '5:30 PM', '6:30 PM'] },
  { day: 'Wednesday', classes: ['6:00 AM', '7:00 AM', '9:30 AM', '12:00 PM', '5:30 PM', '6:30 PM'] },
  { day: 'Thursday', classes: ['6:00 AM', '7:00 AM', '9:30 AM', '12:00 PM', '5:30 PM', '6:30 PM'] },
  { day: 'Friday', classes: ['6:00 AM', '7:00 AM', '9:30 AM', '12:00 PM', '5:00 PM'] },
  { day: 'Saturday', classes: ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM'] },
  { day: 'Sunday', classes: ['9:00 AM', '10:00 AM', '11:00 AM'] },
]

export default function ClassesPage() {
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
                  Classes & Memberships
                </p>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-midnight-moss leading-[1.1]">
                  Find Your{' '}
                  <span className="italic text-balanced-brick">Practice</span>
                </h1>
                <p className="mt-8 text-lg text-midnight-moss/70 leading-relaxed">
                  Whether you are stepping onto the Megaformer for the first time or making 
                  Lagree a daily ritual, we have options designed for every stage of your journey.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Button 
                    asChild
                    size="lg"
                    className="bg-balanced-brick hover:bg-balanced-brick/90 text-white font-medium tracking-wide px-8"
                  >
                    <Link href="#memberships">
                      View Memberships
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button 
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-midnight-moss/30 text-midnight-moss hover:bg-midnight-moss hover:text-minimal-mist font-medium tracking-wide"
                  >
                    <Link href="#schedule">View Schedule</Link>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=2075&auto=format&fit=crop"
                  alt="Motion studio interior with Megaformer machines"
                  fill
                  className="object-cover rounded-sm"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Class Types */}
        <section className="py-20 lg:py-28 bg-clouded-pearl/40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <p className="text-balanced-brick font-medium tracking-widest text-sm uppercase mb-4">
                Our Classes
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-midnight-moss leading-tight">
                Every Class, Same{' '}
                <span className="italic">Standards</span>
              </h2>
              <p className="mt-6 text-midnight-moss/70 leading-relaxed">
                No matter which class you choose, you will experience the same commitment to 
                method integrity, expert instruction, and transformative movement.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {classTypes.map((classType) => (
                <div 
                  key={classType.name}
                  className="bg-minimal-mist p-8 rounded-sm"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-midnight-moss/60">
                      <Clock className="h-4 w-4" />
                      {classType.duration}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-midnight-moss/60">
                      <Users className="h-4 w-4" />
                      {classType.level}
                    </div>
                  </div>
                  <h3 className="font-serif text-2xl text-midnight-moss mb-4">{classType.name}</h3>
                  <p className="text-midnight-moss/70 leading-relaxed mb-6">{classType.description}</p>
                  <ul className="space-y-2">
                    {classType.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2 text-sm text-midnight-moss/60">
                        <Check className="h-4 w-4 text-balanced-brick" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* First Class */}
        <section id="first-class" className="py-20 lg:py-28 bg-midnight-moss">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-balanced-brick font-medium tracking-widest text-sm uppercase mb-4">
                  Your First Class
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-minimal-mist leading-tight">
                  What to{' '}
                  <span className="italic text-balanced-beige">Expect</span>
                </h2>
                <p className="mt-6 text-balanced-beige/70 leading-relaxed">
                  We know the first class can feel nerve-wracking. Here is everything you 
                  need to know to feel prepared and confident.
                </p>
                <div className="mt-10 space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-balanced-brick/20 flex items-center justify-center shrink-0">
                      <span className="text-balanced-brick font-serif">1</span>
                    </div>
                    <div>
                      <h3 className="text-minimal-mist font-medium">Arrive 10 minutes early</h3>
                      <p className="text-balanced-beige/60 text-sm mt-1">
                        We will show you the machine and answer any questions before class begins.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-balanced-brick/20 flex items-center justify-center shrink-0">
                      <span className="text-balanced-brick font-serif">2</span>
                    </div>
                    <div>
                      <h3 className="text-minimal-mist font-medium">Wear form-fitting clothes</h3>
                      <p className="text-balanced-beige/60 text-sm mt-1">
                        This helps instructors see your form. Grip socks are required (we sell them).
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-balanced-brick/20 flex items-center justify-center shrink-0">
                      <span className="text-balanced-brick font-serif">3</span>
                    </div>
                    <div>
                      <h3 className="text-minimal-mist font-medium">Focus on form, not speed</h3>
                      <p className="text-balanced-beige/60 text-sm mt-1">
                        Your instructor will guide you. Take your time and ask questions.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-balanced-brick/20 flex items-center justify-center shrink-0">
                      <span className="text-balanced-brick font-serif">4</span>
                    </div>
                    <div>
                      <h3 className="text-minimal-mist font-medium">Embrace the shake</h3>
                      <p className="text-balanced-beige/60 text-sm mt-1">
                        Muscle trembling is normal and means you are working. It gets easier.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop"
                  alt="Person learning on the Megaformer"
                  fill
                  className="object-cover rounded-sm"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Memberships */}
        <section id="memberships" className="py-20 lg:py-28 bg-minimal-mist">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-balanced-brick font-medium tracking-widest text-sm uppercase mb-4">
                Memberships & Pricing
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-midnight-moss leading-tight">
                Choose Your{' '}
                <span className="italic">Path</span>
              </h2>
              <p className="mt-6 text-midnight-moss/70 leading-relaxed">
                Flexible options designed to fit your lifestyle and goals. All memberships 
                include access to our full schedule and premium amenities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {memberships.map((membership) => (
                <div 
                  key={membership.name}
                  className={`relative rounded-sm p-8 ${
                    membership.featured 
                      ? 'bg-midnight-moss text-minimal-mist' 
                      : 'bg-clouded-pearl/40'
                  }`}
                >
                  {membership.badge && (
                    <div className="absolute -top-3 left-8 bg-balanced-brick text-white text-xs font-medium tracking-wide px-3 py-1 rounded-sm">
                      {membership.badge}
                    </div>
                  )}
                  <h3 className={`font-serif text-xl ${
                    membership.featured ? 'text-minimal-mist' : 'text-midnight-moss'
                  }`}>
                    {membership.name}
                  </h3>
                  <div className="mt-4 mb-6">
                    <span className={`font-serif text-4xl ${
                      membership.featured ? 'text-minimal-mist' : 'text-midnight-moss'
                    }`}>
                      {membership.price}
                    </span>
                    <span className={`text-sm ml-2 ${
                      membership.featured ? 'text-balanced-beige/60' : 'text-midnight-moss/60'
                    }`}>
                      {membership.period}
                    </span>
                  </div>
                  <p className={`text-sm leading-relaxed mb-6 ${
                    membership.featured ? 'text-balanced-beige/70' : 'text-midnight-moss/70'
                  }`}>
                    {membership.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {membership.features.map((feature) => (
                      <li 
                        key={feature} 
                        className={`flex items-start gap-2 text-sm ${
                          membership.featured ? 'text-balanced-beige/70' : 'text-midnight-moss/60'
                        }`}
                      >
                        <Check className={`h-4 w-4 mt-0.5 shrink-0 ${
                          membership.featured ? 'text-balanced-brick' : 'text-balanced-brick'
                        }`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild
                    className={`w-full ${
                      membership.featured 
                        ? 'bg-balanced-brick hover:bg-balanced-brick/90 text-white' 
                        : 'bg-midnight-moss hover:bg-midnight-moss/90 text-minimal-mist'
                    }`}
                  >
                    <Link href="/contact">{membership.cta}</Link>
                  </Button>
                </div>
              ))}
            </div>

            <p className="text-center text-midnight-moss/60 text-sm mt-8">
              Questions about memberships? <Link href="/contact" className="text-balanced-brick hover:underline">Contact us</Link>
            </p>
          </div>
        </section>

        {/* Schedule */}
        <section id="schedule" className="py-20 lg:py-28 bg-clouded-pearl/40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-balanced-brick font-medium tracking-widest text-sm uppercase mb-4">
                Class Schedule
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-midnight-moss leading-tight">
                Find Your{' '}
                <span className="italic">Time</span>
              </h2>
              <p className="mt-6 text-midnight-moss/70 leading-relaxed">
                We offer classes throughout the day to fit your schedule. Book in advance 
                to secure your spot.
              </p>
            </div>

            <div className="bg-minimal-mist rounded-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-balanced-beige/30">
                      <th className="text-left font-serif text-midnight-moss p-6">Day</th>
                      <th className="text-left font-serif text-midnight-moss p-6">Class Times</th>
                    </tr>
                  </thead>
                  <tbody>
                    {schedule.map((day, index) => (
                      <tr 
                        key={day.day} 
                        className={index !== schedule.length - 1 ? 'border-b border-balanced-beige/20' : ''}
                      >
                        <td className="p-6 font-medium text-midnight-moss">{day.day}</td>
                        <td className="p-6">
                          <div className="flex flex-wrap gap-2">
                            {day.classes.map((time) => (
                              <span 
                                key={time}
                                className="inline-block px-3 py-1 bg-clouded-pearl/50 text-midnight-moss/70 text-sm rounded-sm"
                              >
                                {time}
                              </span>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="text-center mt-10">
              <Button 
                asChild
                size="lg"
                className="bg-balanced-brick hover:bg-balanced-brick/90 text-white font-medium tracking-wide px-8"
              >
                <Link href="/contact">
                  Book a Class
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Policies */}
        <section className="py-20 lg:py-28 bg-minimal-mist">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-2xl text-midnight-moss mb-8 text-center">
                Studio Policies
              </h2>
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-medium text-midnight-moss mb-2">Cancellation Policy</h3>
                  <p className="text-midnight-moss/60 text-sm leading-relaxed">
                    Classes can be cancelled up to 12 hours before the scheduled start time. 
                    Late cancellations or no-shows will result in the loss of that class from your package.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-midnight-moss mb-2">Waitlist</h3>
                  <p className="text-midnight-moss/60 text-sm leading-relaxed">
                    If a class is full, you can join the waitlist. You will be notified 
                    automatically if a spot opens up.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-midnight-moss mb-2">Late Arrival</h3>
                  <p className="text-midnight-moss/60 text-sm leading-relaxed">
                    Please arrive at least 5 minutes before class. For safety reasons, 
                    we cannot admit latecomers once class has begun.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-midnight-moss mb-2">Package Expiration</h3>
                  <p className="text-midnight-moss/60 text-sm leading-relaxed">
                    Class packages have expiration dates. Please check your package terms 
                    or contact us if you have questions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
