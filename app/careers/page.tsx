import Link from "next/link"
import Image from "next/image"
import { Building2, Briefcase, GraduationCap, Heart, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CareersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">StructureWorks</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary">
              Services
            </Link>
            <Link href="/projects" className="text-sm font-medium transition-colors hover:text-primary">
              Projects
            </Link>
            <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <Button className="hidden md:inline-flex">Get a Quote</Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=600&width=1920"
              alt="Careers at StructureWorks"
              fill
              className="object-cover brightness-[0.4]"
              priority
            />
          </div>
          <div className="container relative z-10 py-24 md:py-32">
            <div className="flex flex-col items-start gap-4 text-white max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Join Our Team</h1>
              <p className="text-lg text-gray-200 md:text-xl">
                Build your career with a company that values innovation, excellence, and professional growth.
              </p>
              <Button size="lg" className="mt-4">
                View Open Positions
              </Button>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Why Work With Us</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                At StructureWorks, we're committed to creating an environment where talented professionals can thrive
                and make a meaningful impact.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border flex flex-col items-start">
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Challenging Projects</h3>
                <p className="text-muted-foreground">
                  Work on diverse and complex engineering projects that push the boundaries of innovation and make a
                  lasting impact on communities.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border flex flex-col items-start">
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Professional Development</h3>
                <p className="text-muted-foreground">
                  Access continuous learning opportunities, mentorship programs, and support for professional
                  certifications and advanced degrees.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border flex flex-col items-start">
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Comprehensive Benefits</h3>
                <p className="text-muted-foreground">
                  Enjoy competitive compensation, health and retirement benefits, flexible work arrangements, and a
                  healthy work-life balance.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border flex flex-col items-start">
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Collaborative Culture</h3>
                <p className="text-muted-foreground">
                  Be part of a supportive team that values collaboration, diversity of thought, and mutual respect in
                  all interactions.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border flex flex-col items-start">
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  <svg
                    className="h-6 w-6 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 12h20" />
                    <path d="M12 2v20" />
                    <path d="m4.93 4.93 14.14 14.14" />
                    <path d="m19.07 4.93-14.14 14.14" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation Focus</h3>
                <p className="text-muted-foreground">
                  Contribute to cutting-edge solutions using the latest technologies and methodologies in the
                  engineering field.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border flex flex-col items-start">
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  <svg
                    className="h-6 w-6 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m7 10 3 3 7-7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Career Advancement</h3>
                <p className="text-muted-foreground">
                \
