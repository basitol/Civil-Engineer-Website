import Link from "next/link"
import Image from "next/image"
import { HardHat, Ruler, Compass, Mail, Phone, MapPin, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SectionHeading } from "@/components/section-heading"
import { FeatureCard } from "@/components/feature-card"
import { ProjectCard } from "@/components/project-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { FreeQuoteModal } from "@/components/free-quote-modal"
import { AnimatedGradientBackground } from "@/components/animated-gradient-background"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-background.png"
              alt="Civil Engineering Project"
              fill
              className="object-cover brightness-[0.4]"
              priority
            />
          </div>
          <div className="container relative z-10 py-24 md:py-32 lg:py-40">
            <div className="flex flex-col items-start gap-4 text-white max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Engineering Excellence for Your Infrastructure Projects
              </h1>
              <p className="text-lg text-gray-200 md:text-xl">
                Professional civil engineering services with a focus on quality, safety, and sustainability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/services">Our Services</Link>
                </Button>
                <FreeQuoteModal
                  buttonVariant="outline"
                  buttonSize="lg"
                  className="text-white bg-transparent border-white hover:bg-white/10"
                  buttonText="Get a Free Quote"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
          <AnimatedGradientBackground />
          <div className="container relative">
            <SectionHeading
              title="Our Engineering Services"
              subtitle="We provide comprehensive civil engineering solutions tailored to meet the unique needs of your projects."
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={HardHat}
                title="Structural Engineering"
                description="Design and analysis of structures to ensure safety, functionality, and compliance with building codes."
              />
              <FeatureCard
                icon={Ruler}
                title="Transportation Engineering"
                description="Planning, design, and maintenance of transportation infrastructure including roads, bridges, and highways."
              />
              <FeatureCard
                icon={Compass}
                title="Geotechnical Engineering"
                description="Analysis of soil and rock mechanics to determine the stability of structures and foundations."
              />
            </div>
            <div className="flex justify-center mt-12">
              <Button variant="outline" className="inline-flex items-center group">
                <Link href="/services" className="flex items-center">
                  View all services{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-16 md:py-24">
          <div className="container">
            <SectionHeading
              title="Featured Projects"
              subtitle="Explore our portfolio of successful engineering projects delivered with precision and expertise."
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                image="/images/project-bridge.png"
                title="Highway Bridge Expansion"
                category="Transportation"
                description="Design and construction oversight of a 500-meter highway bridge expansion project."
                tags={["Bridge Design", "Structural Analysis", "Traffic Management"]}
                link="/projects/highway-bridge"
              />
              <ProjectCard
                image="/images/project-tower.png"
                title="Commercial Tower Design"
                category="Structural"
                description="Structural design and analysis for a 30-story commercial building in the city center."
                tags={["High-Rise", "Sustainable Design", "Commercial"]}
                link="/projects/commercial-tower"
              />
              <ProjectCard
                image="/images/project-water.png"
                title="Water Treatment Facility"
                category="Water Resources"
                description="Design and implementation of a municipal water treatment facility serving 50,000 residents."
                tags={["Water Treatment", "Municipal", "Environmental"]}
                link="/projects/water-treatment"
              />
            </div>
            <div className="flex justify-center mt-12">
              <Button variant="outline" className="inline-flex items-center group">
                <Link href="/projects" className="flex items-center">
                  View all projects{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
          <AnimatedGradientBackground />
          <div className="container relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                  Why Choose Our Engineering Expertise
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  With over 20 years of experience in civil engineering, we bring unparalleled expertise and dedication
                  to every project.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-2 mt-0.5" />
                    <div>
                      <h3 className="font-bold">Licensed Professional Engineers</h3>
                      <p className="text-muted-foreground">
                        Our team consists of certified engineers with extensive field experience.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-2 mt-0.5" />
                    <div>
                      <h3 className="font-bold">Innovative Solutions</h3>
                      <p className="text-muted-foreground">
                        We employ cutting-edge technology and methodologies to solve complex engineering challenges.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-2 mt-0.5" />
                    <div>
                      <h3 className="font-bold">Sustainable Practices</h3>
                      <p className="text-muted-foreground">
                        Our designs prioritize environmental sustainability and resource efficiency.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-primary mr-2 mt-0.5" />
                    <div>
                      <h3 className="font-bold">On-Time, On-Budget Delivery</h3>
                      <p className="text-muted-foreground">
                        We have a proven track record of completing projects within schedule and budget constraints.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-lg"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-lg"></div>
                <div className="relative z-10 overflow-hidden rounded-lg border shadow-lg">
                  <Image
                    src="/images/team-photo.png"
                    alt="Engineering Team"
                    width={800}
                    height={600}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24">
          <div className="container">
            <SectionHeading
              title="What Our Clients Say"
              subtitle="We take pride in our client relationships and the successful outcomes of our engineering projects."
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard
                quote="The team's expertise in urban infrastructure was invaluable for our city's development project. They delivered exceptional results while maintaining budget constraints."
                name="Robert Johnson"
                title="City Infrastructure Director"
                image="/images/client-1.png"
              />
              <TestimonialCard
                quote="Working with StructureWorks has been a game-changer for our construction projects. Their structural designs are innovative, practical, and always delivered on time."
                name="Sarah Williams"
                title="Construction Company CEO"
                image="/images/client-2.png"
              />
              <TestimonialCard
                quote="The attention to detail and commitment to sustainable design principles sets this engineering firm apart. I wouldn't trust my development projects to anyone else."
                name="Michael Chen"
                title="Real Estate Developer"
                image="/images/client-3.png"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Ready to Start Your Project?</h2>
                <p className="text-lg mb-8 text-primary-foreground/90">
                  Contact us today for a consultation and discover how our engineering expertise can bring your vision
                  to life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <FreeQuoteModal buttonVariant="secondary" buttonSize="lg" />
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg text-foreground">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">info@structureworks.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Office</p>
                      <p className="text-muted-foreground">
                        123 Engineering Blvd, Suite 400
                        <br />
                        Metropolis, CA 90001
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
