import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SectionHeading } from "@/components/section-heading"
import { FreeQuoteModal } from "@/components/free-quote-modal"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-background.png"
              alt="Contact Us"
              fill
              className="object-cover brightness-[0.4]"
              priority
            />
          </div>
          <div className="container relative z-10 py-24 md:py-32">
            <div className="flex flex-col items-start gap-4 text-white max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Contact Us</h1>
              <p className="text-lg text-gray-200 md:text-xl">
                Get in touch with our team of engineering experts to discuss your project needs.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information and Form */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Get in Touch</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We're here to answer any questions you have about our engineering services. Reach out to us and we'll
                  respond as soon as we can.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mr-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Phone</h3>
                      <p className="text-muted-foreground">(555) 123-4567</p>
                      <p className="text-muted-foreground">(555) 987-6543</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mr-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-muted-foreground">info@structureworks.com</p>
                      <p className="text-muted-foreground">projects@structureworks.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mr-4">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Business Hours</h3>
                      <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p className="text-muted-foreground">Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-4">Our Offices</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                      <h4 className="font-bold mb-2">Headquarters</h4>
                      <div className="flex items-start mb-2">
                        <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <p className="text-muted-foreground">
                          123 Engineering Blvd, Suite 400
                          <br />
                          Metropolis, CA 90001
                        </p>
                      </div>
                      <Button variant="outline" size="sm" className="mt-2">
                        Get Directions
                      </Button>
                    </div>
                    <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                      <h4 className="font-bold mb-2">Regional Office</h4>
                      <div className="flex items-start mb-2">
                        <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <p className="text-muted-foreground">
                          456 Innovation Way
                          <br />
                          Tech City, NY 10001
                        </p>
                      </div>
                      <Button variant="outline" size="sm" className="mt-2">
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div className="bg-gray-50 p-8 rounded-lg border hover:shadow-md transition-shadow">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="first-name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          First Name
                        </label>
                        <input
                          id="first-name"
                          type="text"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="last-name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Last Name
                        </label>
                        <input
                          id="last-name"
                          type="text"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="john.doe@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Phone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="service"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select a service</option>
                        <option value="structural">Structural Engineering</option>
                        <option value="transportation">Transportation Engineering</option>
                        <option value="geotechnical">Geotechnical Engineering</option>
                        <option value="water-resources">Water Resources Engineering</option>
                        <option value="construction">Construction Management</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Tell us about your project and requirements..."
                      ></textarea>
                    </div>

                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="privacy"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label htmlFor="privacy" className="text-sm text-muted-foreground">
                        I agree to the{" "}
                        <Link href="/privacy" className="text-primary hover:underline">
                          privacy policy
                        </Link>
                      </label>
                    </div>

                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <SectionHeading
              title="Find Us"
              subtitle="Visit our offices to meet with our engineering team and discuss your project in person."
              centered
            />
            <div className="aspect-[16/9] w-full overflow-hidden rounded-lg border hover:shadow-md transition-shadow">
              <Image
                src="/images/office-map.png"
                alt="Office Location Map"
                width={1200}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <SectionHeading
              title="Frequently Asked Questions"
              subtitle="Find answers to common questions about our engineering services and project process."
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-2">What is the typical timeline for a project?</h3>
                <p className="text-muted-foreground">
                  Project timelines vary based on complexity and scope. Small projects may take a few weeks, while
                  larger infrastructure projects can span several months to years. We provide detailed timelines during
                  the initial consultation.
                </p>
              </div>
              <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-2">Do you work on residential projects?</h3>
                <p className="text-muted-foreground">
                  Yes, we provide engineering services for residential projects, including structural design for custom
                  homes, renovations, and multi-family residential complexes.
                </p>
              </div>
              <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-2">What information do I need for an initial consultation?</h3>
                <p className="text-muted-foreground">
                  For an initial consultation, it's helpful to have a general project description, location, budget
                  constraints, and any existing plans or documentation. We can guide you through the specific
                  requirements during our first meeting.
                </p>
              </div>
              <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-2">Are your engineers licensed?</h3>
                <p className="text-muted-foreground">
                  Yes, our engineering team consists of licensed Professional Engineers (PE) with extensive experience
                  in their respective fields. We maintain all necessary certifications and stay current with industry
                  standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Ready to Start Your Project?</h2>
              <p className="text-lg mb-8 text-primary-foreground/90">
                Contact us today for a consultation and discover how our engineering expertise can bring your vision to
                life.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <FreeQuoteModal buttonVariant="secondary" buttonSize="lg" />
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Call Us Now
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
