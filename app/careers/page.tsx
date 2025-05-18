// import Link from "next/link"
// import Image from "next/image"
// import { Building2, Briefcase, GraduationCap, Heart, Users } from "lucide-react"
// import { Button } from "@/components/ui/button"

// export default function CareersPage() {
//   return (
//     <div className="flex min-h-screen flex-col">
//       {/* Header */}
//       <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//         <div className="container flex h-16 items-center justify-between">
//           <div className="flex items-center gap-2">
//             <Building2 className="h-6 w-6 text-primary" />
//             <span className="text-xl font-bold">StructureWorks</span>
//           </div>
//           <nav className="hidden md:flex gap-6">
//             <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
//               Home
//             </Link>
//             <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
//               About
//             </Link>
//             <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary">
//               Services
//             </Link>
//             <Link href="/projects" className="text-sm font-medium transition-colors hover:text-primary">
//               Projects
//             </Link>
//             <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
//               Contact
//             </Link>
//           </nav>
//           <Button className="hidden md:inline-flex">Get a Quote</Button>
//           <Button variant="outline" size="icon" className="md:hidden">
//             <span className="sr-only">Toggle menu</span>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="h-6 w-6"
//             >
//               <line x1="4" x2="20" y1="12" y2="12" />
//               <line x1="4" x2="20" y1="6" y2="6" />
//               <line x1="4" x2="20" y1="18" y2="18" />
//             </svg>
//           </Button>
//         </div>
//       </header>

//       <main className="flex-1">
//         {/* Hero Section */}
//         <section className="relative">
//           <div className="absolute inset-0 z-0">
//             <Image
//               src="/placeholder.svg?height=600&width=1920"
//               alt="Careers at StructureWorks"
//               fill
//               className="object-cover brightness-[0.4]"
//               priority
//             />
//           </div>
//           <div className="container relative z-10 py-24 md:py-32">
//             <div className="flex flex-col items-start gap-4 text-white max-w-2xl">
//               <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Join Our Team</h1>
//               <p className="text-lg text-gray-200 md:text-xl">
//                 Build your career with a company that values innovation, excellence, and professional growth.
//               </p>
//               <Button size="lg" className="mt-4">
//                 View Open Positions
//               </Button>
//             </div>
//           </div>
//         </section>

//         {/* Why Work With Us */}
//         <section className="py-16 md:py-24">
//           <div className="container">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Why Work With Us</h2>
//               <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
//                 At StructureWorks, we're committed to creating an environment where talented professionals can thrive
//                 and make a meaningful impact.
//               </p>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               <div className="bg-white p-8 rounded-lg shadow-sm border flex flex-col items-start">
//                 <div className="p-3 rounded-full bg-primary/10 mb-4">
//                   <Briefcase className="h-6 w-6 text-primary" />
//                 </div>
//                 <h3 className="text-xl font-bold mb-2">Challenging Projects</h3>
//                 <p className="text-muted-foreground">
//                   Work on diverse and complex engineering projects that push the boundaries of innovation and make a
//                   lasting impact on communities.
//                 </p>
//               </div>
//               <div className="bg-white p-8 rounded-lg shadow-sm border flex flex-col items-start">
//                 <div className="p-3 rounded-full bg-primary/10 mb-4">
//                   <GraduationCap className="h-6 w-6 text-primary" />
//                 </div>
//                 <h3 className="text-xl font-bold mb-2">Professional Development</h3>
//                 <p className="text-muted-foreground">
//                   Access continuous learning opportunities, mentorship programs, and support for professional
//                   certifications and advanced degrees.
//                 </p>
//               </div>
//               <div className="bg-white p-8 rounded-lg shadow-sm border flex flex-col items-start">
//                 <div className="p-3 rounded-full bg-primary/10 mb-4">
//                   <Heart className="h-6 w-6 text-primary" />
//                 </div>
//                 <h3 className="text-xl font-bold mb-2">Comprehensive Benefits</h3>
//                 <p className="text-muted-foreground">
//                   Enjoy competitive compensation, health and retirement benefits, flexible work arrangements, and a
//                   healthy work-life balance.
//                 </p>
//               </div>
//               <div className="bg-white p-8 rounded-lg shadow-sm border flex flex-col items-start">
//                 <div className="p-3 rounded-full bg-primary/10 mb-4">
//                   <Users className="h-6 w-6 text-primary" />
//                 </div>
//                 <h3 className="text-xl font-bold mb-2">Collaborative Culture</h3>
//                 <p className="text-muted-foreground">
//                   Be part of a supportive team that values collaboration, diversity of thought, and mutual respect in
//                   all interactions.
//                 </p>
//               </div>
//               <div className="bg-white p-8 rounded-lg shadow-sm border flex flex-col items-start">
//                 <div className="p-3 rounded-full bg-primary/10 mb-4">
//                   <svg
//                     className="h-6 w-6 text-primary"
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M2 12h20" />
//                     <path d="M12 2v20" />
//                     <path d="m4.93 4.93 14.14 14.14" />
//                     <path d="m19.07 4.93-14.14 14.14" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-bold mb-2">Innovation Focus</h3>
//                 <p className="text-muted-foreground">
//                   Contribute to cutting-edge solutions using the latest technologies and methodologies in the
//                   engineering field.
//                 </p>
//               </div>
//               <div className="bg-white p-8 rounded-lg shadow-sm border flex flex-col items-start">
//                 <div className="p-3 rounded-full bg-primary/10 mb-4">
//                   <svg
//                     className="h-6 w-6 text-primary"
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
//                     <path d="m7 10 3 3 7-7" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-bold mb-2">Career Advancement</h3>
//                 <p className="text-muted-foreground">

import Link from 'next/link';
import Image from 'next/image';
import {
  Briefcase,
  GraduationCap,
  Heart,
  Users,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {SiteHeader} from '@/components/site-header';
import {SiteFooter} from '@/components/site-footer';
import {SectionHeading} from '@/components/section-heading';

export default function CareersPage() {
  return (
    <div className='flex min-h-screen flex-col'>
      <SiteHeader />

      <main className='flex-1'>
        {/* Hero Section */}
        <section className='relative'>
          <div className='absolute inset-0 z-0'>
            <Image
              src='/images/careers-hero.png'
              alt='Careers at StructureWorks'
              fill
              className='object-cover brightness-[0.4]'
              priority
            />
          </div>
          <div className='container relative z-10 py-24 md:py-32'>
            <div className='flex flex-col items-start gap-4 text-white max-w-2xl'>
              <h1 className='text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl'>
                Join Our Team
              </h1>
              <p className='text-lg text-gray-200 md:text-xl'>
                Build your career with a company that values innovation,
                excellence, and professional growth.
              </p>
              <Button size='lg' className='mt-4'>
                <a href='#open-positions'>View Open Positions</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className='py-16 md:py-24'>
          <div className='container'>
            <SectionHeading
              title='Why Work With Us'
              subtitle="At StructureWorks, we're committed to creating an environment where talented professionals can thrive and make a meaningful impact."
              centered
            />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <div className='bg-white p-8 rounded-lg shadow-sm border flex flex-col items-start'>
                <div className='p-3 rounded-full bg-primary/10 mb-4'>
                  <Briefcase className='h-6 w-6 text-primary' />
                </div>
                <h3 className='text-xl font-bold mb-2'>Challenging Projects</h3>
                <p className='text-muted-foreground'>
                  Work on diverse and complex engineering projects that push the
                  boundaries of innovation and make a lasting impact on
                  communities.
                </p>
              </div>
              <div className='bg-white p-8 rounded-lg shadow-sm border flex flex-col items-start'>
                <div className='p-3 rounded-full bg-primary/10 mb-4'>
                  <GraduationCap className='h-6 w-6 text-primary' />
                </div>
                <h3 className='text-xl font-bold mb-2'>
                  Professional Development
                </h3>
                <p className='text-muted-foreground'>
                  Access continuous learning opportunities, mentorship programs,
                  and support for professional certifications and advanced
                  degrees.
                </p>
              </div>
              <div className='bg-white p-8 rounded-lg shadow-sm border flex flex-col items-start'>
                <div className='p-3 rounded-full bg-primary/10 mb-4'>
                  <Heart className='h-6 w-6 text-primary' />
                </div>
                <h3 className='text-xl font-bold mb-2'>
                  Comprehensive Benefits
                </h3>
                <p className='text-muted-foreground'>
                  Enjoy competitive compensation, health and retirement
                  benefits, flexible work arrangements, and a healthy work-life
                  balance.
                </p>
              </div>
              <div className='bg-white p-8 rounded-lg shadow-sm border flex flex-col items-start'>
                <div className='p-3 rounded-full bg-primary/10 mb-4'>
                  <Users className='h-6 w-6 text-primary' />
                </div>
                <h3 className='text-xl font-bold mb-2'>
                  Collaborative Culture
                </h3>
                <p className='text-muted-foreground'>
                  Be part of a supportive team that values collaboration,
                  diversity of thought, and mutual respect in all interactions.
                </p>
              </div>
              <div className='bg-white p-8 rounded-lg shadow-sm border flex flex-col items-start'>
                <div className='p-3 rounded-full bg-primary/10 mb-4'>
                  <svg
                    className='h-6 w-6 text-primary'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'>
                    <path d='M2 12h20' />
                    <path d='M12 2v20' />
                    <path d='m4.93 4.93 14.14 14.14' />
                    <path d='m19.07 4.93-14.14 14.14' />
                  </svg>
                </div>
                <h3 className='text-xl font-bold mb-2'>Innovation Focus</h3>
                <p className='text-muted-foreground'>
                  Contribute to cutting-edge solutions using the latest
                  technologies and methodologies in the engineering field.
                </p>
              </div>
              <div className='bg-white p-8 rounded-lg shadow-sm border flex flex-col items-start'>
                <div className='p-3 rounded-full bg-primary/10 mb-4'>
                  <svg
                    className='h-6 w-6 text-primary'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'>
                    <path d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z' />
                    <path d='m7 10 3 3 7-7' />
                  </svg>
                </div>
                <h3 className='text-xl font-bold mb-2'>Career Advancement</h3>
                <p className='text-muted-foreground'>
                  Clear pathways for growth and advancement within the company,
                  with opportunities to take on leadership roles and increased
                  responsibilities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Employee Testimonials */}
        <section className='py-16 md:py-24 bg-gray-50'>
          <div className='container'>
            <SectionHeading
              title='Meet Our Team'
              subtitle='Hear from our employees about their experiences working at StructureWorks.'
              centered
            />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto'>
              <div className='bg-white p-8 rounded-lg shadow-sm border'>
                <div className='flex items-center mb-6'>
                  <Image
                    src='/images/employee-1.png'
                    alt='Employee'
                    width={80}
                    height={80}
                    className='rounded-full object-cover mr-4'
                  />
                  <div>
                    <h3 className='text-xl font-bold'>Jennifer Lee, PE</h3>
                    <p className='text-primary'>Senior Structural Engineer</p>
                    <p className='text-sm text-muted-foreground'>
                      With StructureWorks for 5 years
                    </p>
                  </div>
                </div>
                <p className='text-muted-foreground italic mb-4'>
                  "Working at StructureWorks has been the highlight of my
                  career. The collaborative environment and challenging projects
                  have helped me grow both professionally and personally. The
                  company truly invests in its employees' development and
                  well-being."
                </p>
                <p className='text-muted-foreground'>
                  Jennifer has led multiple award-winning projects and mentors
                  junior engineers in our structural department.
                </p>
              </div>
              <div className='bg-white p-8 rounded-lg shadow-sm border'>
                <div className='flex items-center mb-6'>
                  <Image
                    src='/images/employee-2.png'
                    alt='Employee'
                    width={80}
                    height={80}
                    className='rounded-full object-cover mr-4'
                  />
                  <div>
                    <h3 className='text-xl font-bold'>Marcus Johnson</h3>
                    <p className='text-primary'>Transportation Engineer</p>
                    <p className='text-sm text-muted-foreground'>
                      With StructureWorks for 3 years
                    </p>
                  </div>
                </div>
                <p className='text-muted-foreground italic mb-4'>
                  "I joined StructureWorks as a recent graduate, and the
                  mentorship and training I've received have been exceptional.
                  The company provides clear paths for advancement and
                  encourages innovation. I've already had the opportunity to
                  work on major infrastructure projects that impact thousands of
                  people."
                </p>
                <p className='text-muted-foreground'>
                  Marcus recently completed his PE certification with company
                  support and is now leading his first major project.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className='py-16 md:py-24'>
          <div className='container'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
              <div>
                <h2 className='text-3xl font-bold tracking-tight sm:text-4xl mb-6'>
                  Comprehensive Benefits Package
                </h2>
                <p className='text-lg text-muted-foreground mb-8'>
                  We believe in taking care of our team members with competitive
                  compensation and benefits that support your health, wealth,
                  and well-being.
                </p>
                <ul className='space-y-4'>
                  <li className='flex items-start'>
                    <CheckCircle2 className='h-6 w-6 text-primary mr-2 mt-0.5' />
                    <div>
                      <h3 className='font-bold'>Health & Wellness</h3>
                      <p className='text-muted-foreground'>
                        Comprehensive medical, dental, and vision insurance with
                        family coverage options. Access to wellness programs and
                        gym membership discounts.
                      </p>
                    </div>
                  </li>
                  <li className='flex items-start'>
                    <CheckCircle2 className='h-6 w-6 text-primary mr-2 mt-0.5' />
                    <div>
                      <h3 className='font-bold'>Financial Security</h3>
                      <p className='text-muted-foreground'>
                        Competitive salary, 401(k) with company match, profit
                        sharing, and performance bonuses. Professional
                        certification reimbursement.
                      </p>
                    </div>
                  </li>
                  <li className='flex items-start'>
                    <CheckCircle2 className='h-6 w-6 text-primary mr-2 mt-0.5' />
                    <div>
                      <h3 className='font-bold'>Work-Life Balance</h3>
                      <p className='text-muted-foreground'>
                        Generous PTO, flexible work arrangements, parental
                        leave, and company-sponsored social events.
                      </p>
                    </div>
                  </li>
                  <li className='flex items-start'>
                    <CheckCircle2 className='h-6 w-6 text-primary mr-2 mt-0.5' />
                    <div>
                      <h3 className='font-bold'>Professional Development</h3>
                      <p className='text-muted-foreground'>
                        Continuing education allowance, conference attendance,
                        in-house training programs, and mentorship
                        opportunities.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className='relative'>
                <div className='absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-lg'></div>
                <div className='absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-lg'></div>
                <div className='relative z-10 overflow-hidden rounded-lg border shadow-lg'>
                  <Image
                    src='/images/team-meeting.png'
                    alt='Team Meeting'
                    width={800}
                    height={600}
                    className='object-cover'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id='open-positions' className='py-16 md:py-24 bg-gray-50'>
          <div className='container'>
            <SectionHeading
              title='Open Positions'
              subtitle='Explore our current job openings and find the perfect role for your skills and career goals.'
              centered
            />
            <div className='space-y-6 max-w-4xl mx-auto'>
              {/* Job 1 */}
              <div className='bg-white p-8 rounded-lg shadow-sm border hover:shadow-md transition-shadow'>
                <div className='flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4'>
                  <div>
                    <h3 className='text-xl font-bold'>
                      Senior Structural Engineer
                    </h3>
                    <p className='text-primary'>Full-time | Metropolis, CA</p>
                  </div>
                  <Button>Apply Now</Button>
                </div>
                <div className='space-y-4'>
                  <div>
                    <h4 className='font-bold text-sm uppercase text-muted-foreground'>
                      Job Description
                    </h4>
                    <p className='text-muted-foreground'>
                      We're seeking an experienced Structural Engineer to lead
                      complex projects and mentor junior team members. You'll be
                      responsible for structural analysis, design, and project
                      management for commercial and infrastructure projects.
                    </p>
                  </div>
                  <div>
                    <h4 className='font-bold text-sm uppercase text-muted-foreground'>
                      Requirements
                    </h4>
                    <ul className='list-disc pl-5 text-muted-foreground'>
                      <li>PE license required, SE license preferred</li>
                      <li>8+ years of structural engineering experience</li>
                      <li>
                        Bachelor's degree in Civil Engineering (Master's
                        preferred)
                      </li>
                      <li>Proficiency in structural analysis software</li>
                      <li>Strong project management and leadership skills</li>
                    </ul>
                  </div>
                </div>
                <div className='mt-4 pt-4 border-t'>
                  <Link
                    href='/careers/senior-structural-engineer'
                    className='text-primary font-medium inline-flex items-center group'>
                    View full job description{' '}
                    <ArrowRight className='ml-1 h-4 w-4 transition-transform group-hover:translate-x-1' />
                  </Link>
                </div>
              </div>

              {/* Job 2 */}
              <div className='bg-white p-8 rounded-lg shadow-sm border hover:shadow-md transition-shadow'>
                <div className='flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4'>
                  <div>
                    <h3 className='text-xl font-bold'>
                      Transportation Engineer
                    </h3>
                    <p className='text-primary'>Full-time | Metropolis, CA</p>
                  </div>
                  <Button>Apply Now</Button>
                </div>
                <div className='space-y-4'>
                  <div>
                    <h4 className='font-bold text-sm uppercase text-muted-foreground'>
                      Job Description
                    </h4>
                    <p className='text-muted-foreground'>
                      Join our transportation team to design and develop
                      roadway, highway, and transit infrastructure projects.
                      You'll work on traffic analysis, roadway design, and
                      coordination with public agencies.
                    </p>
                  </div>
                  <div>
                    <h4 className='font-bold text-sm uppercase text-muted-foreground'>
                      Requirements
                    </h4>
                    <ul className='list-disc pl-5 text-muted-foreground'>
                      <li>PE license or ability to obtain within 1 year</li>
                      <li>
                        3-5 years of transportation engineering experience
                      </li>
                      <li>Bachelor's degree in Civil Engineering</li>
                      <li>
                        Experience with AutoCAD Civil 3D and traffic analysis
                        software
                      </li>
                      <li>Strong technical writing and communication skills</li>
                    </ul>
                  </div>
                </div>
                <div className='mt-4 pt-4 border-t'>
                  <Link
                    href='/careers/transportation-engineer'
                    className='text-primary font-medium inline-flex items-center group'>
                    View full job description{' '}
                    <ArrowRight className='ml-1 h-4 w-4 transition-transform group-hover:translate-x-1' />
                  </Link>
                </div>
              </div>

              {/* Job 3 */}
              <div className='bg-white p-8 rounded-lg shadow-sm border hover:shadow-md transition-shadow'>
                <div className='flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4'>
                  <div>
                    <h3 className='text-xl font-bold'>
                      Civil Engineering Intern
                    </h3>
                    <p className='text-primary'>
                      Internship (Summer) | Metropolis, CA
                    </p>
                  </div>
                  <Button>Apply Now</Button>
                </div>
                <div className='space-y-4'>
                  <div>
                    <h4 className='font-bold text-sm uppercase text-muted-foreground'>
                      Job Description
                    </h4>
                    <p className='text-muted-foreground'>
                      Our summer internship program offers hands-on experience
                      in civil engineering projects. You'll work alongside
                      experienced engineers, assist with design tasks, and gain
                      valuable industry experience.
                    </p>
                  </div>
                  <div>
                    <h4 className='font-bold text-sm uppercase text-muted-foreground'>
                      Requirements
                    </h4>
                    <ul className='list-disc pl-5 text-muted-foreground'>
                      <li>
                        Currently pursuing a Bachelor's degree in Civil
                        Engineering
                      </li>
                      <li>Completed at least junior year coursework</li>
                      <li>Basic knowledge of CAD software</li>
                      <li>Strong academic record (GPA 3.0 or higher)</li>
                      <li>Excellent communication and teamwork skills</li>
                    </ul>
                  </div>
                </div>
                <div className='mt-4 pt-4 border-t'>
                  <Link
                    href='/careers/civil-engineering-intern'
                    className='text-primary font-medium inline-flex items-center group'>
                    View full job description{' '}
                    <ArrowRight className='ml-1 h-4 w-4 transition-transform group-hover:translate-x-1' />
                  </Link>
                </div>
              </div>

              {/* Job 4 */}
              <div className='bg-white p-8 rounded-lg shadow-sm border hover:shadow-md transition-shadow'>
                <div className='flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4'>
                  <div>
                    <h3 className='text-xl font-bold'>
                      Water Resources Engineer
                    </h3>
                    <p className='text-primary'>Full-time | Tech City, NY</p>
                  </div>
                  <Button>Apply Now</Button>
                </div>
                <div className='space-y-4'>
                  <div>
                    <h4 className='font-bold text-sm uppercase text-muted-foreground'>
                      Job Description
                    </h4>
                    <p className='text-muted-foreground'>
                      We're looking for a Water Resources Engineer to join our
                      growing team. You'll work on stormwater management, flood
                      control, water supply, and wastewater treatment projects
                      for municipal and private clients.
                    </p>
                  </div>
                  <div>
                    <h4 className='font-bold text-sm uppercase text-muted-foreground'>
                      Requirements
                    </h4>
                    <ul className='list-disc pl-5 text-muted-foreground'>
                      <li>PE license preferred</li>
                      <li>
                        3-7 years of water resources engineering experience
                      </li>
                      <li>
                        Bachelor's degree in Civil or Environmental Engineering
                      </li>
                      <li>
                        Experience with hydraulic and hydrologic modeling
                        software
                      </li>
                      <li>Knowledge of local and federal water regulations</li>
                    </ul>
                  </div>
                </div>
                <div className='mt-4 pt-4 border-t'>
                  <Link
                    href='/careers/water-resources-engineer'
                    className='text-primary font-medium inline-flex items-center group'>
                    View full job description{' '}
                    <ArrowRight className='ml-1 h-4 w-4 transition-transform group-hover:translate-x-1' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className='py-16 md:py-24'>
          <div className='container'>
            <SectionHeading
              title='Our Application Process'
              subtitle="We've designed a straightforward application process to help you find the right role at StructureWorks."
              centered
            />
            <div className='max-w-4xl mx-auto'>
              <div className='relative'>
                {/* Timeline Line */}
                <div className='absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2'></div>

                {/* Step 1 */}
                <div className='relative flex flex-col md:flex-row items-center mb-12'>
                  <div className='flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold z-10 md:absolute md:left-1/2 md:-translate-x-1/2'>
                    1
                  </div>
                  <div className='ml-6 md:ml-0 md:w-5/12 md:pr-8 md:text-right mt-4 md:mt-0'>
                    <h3 className='text-xl font-bold'>
                      Application Submission
                    </h3>
                    <p className='text-muted-foreground'>
                      Submit your resume, cover letter, and completed
                      application form for the position you're interested in. We
                      review all applications thoroughly.
                    </p>
                  </div>
                  <div className='hidden md:block md:w-5/12 md:pl-8'></div>
                </div>

                {/* Step 2 */}
                <div className='relative flex flex-col md:flex-row items-center mb-12 justify-end'>
                  <div className='flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold z-10 md:absolute md:left-1/2 md:-translate-x-1/2'>
                    2
                  </div>
                  <div className='hidden md:block md:w-5/12 md:pr-8'></div>
                  <div className='ml-6 md:ml-0 md:w-5/12 md:pl-8 mt-4 md:mt-0'>
                    <h3 className='text-xl font-bold'>Initial Screening</h3>
                    <p className='text-muted-foreground'>
                      Our HR team conducts an initial phone screening to discuss
                      your background, experience, and interest in the position.
                      This typically takes 20-30 minutes.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className='relative flex flex-col md:flex-row items-center mb-12'>
                  <div className='flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold z-10 md:absolute md:left-1/2 md:-translate-x-1/2'>
                    3
                  </div>
                  <div className='ml-6 md:ml-0 md:w-5/12 md:pr-8 md:text-right mt-4 md:mt-0'>
                    <h3 className='text-xl font-bold'>Technical Interview</h3>
                    <p className='text-muted-foreground'>
                      Qualified candidates are invited for a technical interview
                      with the hiring manager and team members. This may include
                      technical questions and discussion of past projects.
                    </p>
                  </div>
                  <div className='hidden md:block md:w-5/12 md:pl-8'></div>
                </div>

                {/* Step 4 */}
                <div className='relative flex flex-col md:flex-row items-center mb-12 justify-end'>
                  <div className='flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold z-10 md:absolute md:left-1/2 md:-translate-x-1/2'>
                    4
                  </div>
                  <div className='hidden md:block md:w-5/12 md:pr-8'></div>
                  <div className='ml-6 md:ml-0 md:w-5/12 md:pl-8 mt-4 md:mt-0'>
                    <h3 className='text-xl font-bold'>Final Interview</h3>
                    <p className='text-muted-foreground'>
                      Top candidates meet with senior leadership for a final
                      interview to discuss company culture, career goals, and
                      ensure mutual fit. This may be in person or virtual.
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className='relative flex flex-col md:flex-row items-center'>
                  <div className='flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold z-10 md:absolute md:left-1/2 md:-translate-x-1/2'>
                    5
                  </div>
                  <div className='ml-6 md:ml-0 md:w-5/12 md:pr-8 md:text-right mt-4 md:mt-0'>
                    <h3 className='text-xl font-bold'>Offer & Onboarding</h3>
                    <p className='text-muted-foreground'>
                      Successful candidates receive a job offer. Once accepted,
                      our HR team will guide you through the onboarding process
                      to ensure a smooth transition to your new role.
                    </p>
                  </div>
                  <div className='hidden md:block md:w-5/12 md:pl-8'></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className='py-16 md:py-24 bg-gray-50'>
          <div className='container'>
            <SectionHeading
              title='Frequently Asked Questions'
              subtitle='Find answers to common questions about careers at StructureWorks.'
              centered
            />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
              <div className='bg-white p-6 rounded-lg shadow-sm border'>
                <h3 className='text-xl font-bold mb-2'>
                  What is the work environment like?
                </h3>
                <p className='text-muted-foreground'>
                  We maintain a collaborative, supportive work environment that
                  balances professional focus with a friendly atmosphere. Our
                  offices are modern with both collaborative spaces and quiet
                  areas for focused work.
                </p>
              </div>
              <div className='bg-white p-6 rounded-lg shadow-sm border'>
                <h3 className='text-xl font-bold mb-2'>
                  Do you offer remote work options?
                </h3>
                <p className='text-muted-foreground'>
                  Yes, we offer flexible work arrangements including hybrid and
                  remote options for many positions, depending on the role and
                  project requirements. We believe in focusing on results rather
                  than location.
                </p>
              </div>
              <div className='bg-white p-6 rounded-lg shadow-sm border'>
                <h3 className='text-xl font-bold mb-2'>
                  How do you support professional development?
                </h3>
                <p className='text-muted-foreground'>
                  We provide an annual professional development allowance,
                  support for obtaining and maintaining professional licenses,
                  in-house training programs, and opportunities to attend
                  industry conferences.
                </p>
              </div>
              <div className='bg-white p-6 rounded-lg shadow-sm border'>
                <h3 className='text-xl font-bold mb-2'>
                  What is the typical career progression?
                </h3>
                <p className='text-muted-foreground'>
                  Career paths typically progress from Engineer to Project
                  Engineer, Project Manager, Senior Engineer, and potentially to
                  Department Lead or Director roles. We work with each employee
                  to create personalized development plans.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-16 md:py-24 bg-primary text-white'>
          <div className='container'>
            <div className='text-center max-w-3xl mx-auto'>
              <h2 className='text-3xl font-bold tracking-tight sm:text-4xl mb-4'>
                Ready to Join Our Team?
              </h2>
              <p className='text-lg mb-8 text-primary-foreground/90'>
                Explore our current openings and take the next step in your
                engineering career with StructureWorks.
              </p>
              <div className='flex flex-col sm:flex-row justify-center gap-4'>
                <Button size='lg' variant='secondary'>
                  <a href='#open-positions'>View Open Positions</a>
                </Button>
                <Button
                  size='lg'
                  variant='outline'
                  className='text-white border-white hover:bg-white/10'>
                  <Link href='/contact'>Contact Recruiting Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
