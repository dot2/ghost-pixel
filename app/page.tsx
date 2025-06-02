"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RiFlashlightFill, RiFigmaLine, RiLinkedinFill } from "@remixicon/react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import WorkCard from "@/components/custom/WorkCard";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FAQsSection from "@/components/FAQsSection";
import Footer from "@/components/custom/Footer";
import Testimonial from "@/components/custom/Testimonial";
import UsersSection from "@/components/UsersSection";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ghost Pixel Studios",
  "url": "https://www.ghostpixel.studio", // Replace with your actual domain
  "logo": "https://www.ghostpixel.studio/logo.png", // Replace with your actual logo URL
  "sameAs": [
    // Add links to your social media profiles here, e.g.:
    // "https://www.linkedin.com/company/ghost-pixel-studios",
    // "https://twitter.com/yourtwitterhandle"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-XXX-XXX-XXXX", // Optional: Add your phone number
    "contactType": "Customer Service" // Or "Sales", "Technical Support" etc.
  },
  "address": { // Optional: if you have a physical address or want to specify service area
    "@type": "PostalAddress",
    "streetAddress": "123 Design Lane",
    "addressLocality": "Digital City",
    "addressRegion": "CA",
    "postalCode": "90210",
    "addressCountry": "US"
  },
  "description": "Ghost Pixel Studios is a design studio that specializes in creating beautiful, functional, and user-friendly websites and applications, helping founders and product teams transform complex ideas into scalable, intuitive software."
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Ghost Pixel Studios",
  "url": "https://www.ghostpixel.studio", // Replace with your actual domain
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.ghostpixel.studio/search?q={search_term_string}" // Replace with your actual search page URL structure if you have one
    },
    "query-input": "required name=search_term_string"
  }
};

export default function Home() {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100, // Offset for the fixed header
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <main className="flex flex-col justify-center items-center sm:items-start">
        {/* Hero section */}
        <section className="w-full min-h-dvh flex flex-col items-center justify-center px-6 md:px-24 pb-6 md:pb-24 pt-24 md:pt-52">
          <div className="w-full max-w-6xl">
            <h1 className="text-5xl md:text-8xl font-bold text-balance">The Product Design Partner for Founders and Builders.</h1>
            <p className="text-2xl mt-6 text-muted-foreground max-w-[45ch]">We help founders and product teams transform complex ideas into scalable, intuitive software – fast.</p>
            <div className="mt-12 flex flex-col lg:flex-row lg:justify-between lg:items-start gap-y-6 lg:gap-x-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" size="lg" asChild>
                  <Link
                    href="#case-studies"
                    onClick={(e) => handleScrollToSection(e, 'case-studies')}
                    className="flex flex-row items-center gap-2"
                  >
                    Recent work
                    <RiFigmaLine className="text-xl" />
                  </Link>
                </Button>
                <Button variant="default" size="lg">
                  <Link href="https://cal.com/dylan-dotolo/20min" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center gap-2">
                    Get your designs fast
                    <RiFlashlightFill className="text-2xl" />
                  </Link>
                </Button>
              </div>

              <div className="w-full sm:w-auto sm:max-w-xs md:max-w-sm lg:max-w-md">
                <Testimonial
                  quote="Dylan has taste, and that taste materialized in the quality of the products he launched."
                  name="Product Manager @ AWS"
                  rating={5}
                />
              </div>
            </div>

            {/* Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              {/* Work Card */}
              <WorkCard
                videoSrc="/videos/datavolo-vid.mp4"
                title="New brand site and AI copilot integration"
                description="Refreshing the webiste and integrating AI for data engineers."
                tags={["Brand", "Website Design", "Product"]}
                href="/case-studies/datavolo"
              />

              {/* Video 2 -> Replaced with WorkCard */}
              <WorkCard
                videoSrc="/videos/whatif-edit.mp4"
                title="Exploring the future of Cloud"
                description="Establishing a north start and pushing innovation for IBM Cloud."
                tags={["Strategy", "Product", "Design System"]}
                href="/case-studies/whatif"
              />
            </div>
          </div>
        </section>
        {/* About section */}
        <section className="w-full flex flex-col items-center justify-start p-6 md:p-20 bg-gray-50">
          <div className="w-full max-w-6xl">
            <p className="md:text-5xl text-4xl mt-6 text-primary font-normal leading-tight">
              Ghost Pixel turns complex ideas into <span className="bg-gradient-to-tl from-amber-400 to-amber-600 bg-clip-text text-transparent">beautiful, usable products</span>.
              We work with founders and technical teams to design clear interfaces, scalable systems, and <span className="bg-gradient-to-tl from-amber-400 to-amber-600 bg-clip-text text-transparent">bold product visions</span> — fast.
            </p>

            {/* Profile Video and Name */}
            <div className="mt-8 flex items-start gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden relative">
                <video
                  src="/videos/profile-video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-lg font-serif text-muted-foreground font-medium mb-3">
                  Dylan Dotolo – Founder
                </p>
                <Button variant="ghost" size="sm" asChild>
                  <Link
                    href="https://www.linkedin.com/in/dylandotolo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center gap-2 text-muted-foreground"
                  >
                    <RiLinkedinFill className="text-lg" />
                    LinkedIn
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <CapabilitiesSection />
        <HowItWorksSection />
        <UsersSection />
        {/* Case Studies Section */}
        <section className="w-full flex flex-col items-center justify-start p-6 md:p-20" id="case-studies"> {/* Changed background for contrast */}
          <div className="w-full max-w-6xl">
            <div className="space-y-2 mb-12">
              <span className="text-muted-foreground">Our Work</span>
              <h2 className="text-4xl md:text-5xl text-primary font-bold leading-tight">
                Featured Case Studies
              </h2>
            </div>

            {/* Case Studies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"> {/* Changed to lg:grid-cols-3 */}
              {/* Card 1 (Copied from Hero) */}
              <WorkCard
                videoSrc="/videos/datavolo-vid.mp4"
                title="New brand site and AI copilot integration"
                description="Refreshing the webiste and integrating AI for data engineers."
                tags={["Brand", "Website Design", "Product"]}
                href="/case-studies/datavolo"
                aspectRatio="aspect-video" // Explicitly set default
              />
              {/* Card 2 (Copied from Hero) */}
              <WorkCard
                videoSrc="/videos/whatif-edit.mp4"
                title="Exploring the future of Cloud"
                description="Establishing a north start and pushing innovation for IBM Cloud."
                tags={["Strategy", "Product", "Design System"]}
                href="/case-studies/whatif"
                aspectRatio="aspect-video" // Explicitly set default
              />
              <WorkCard
                videoSrc="/videos/synthesis-video-thumbnail.mp4"
                title="Scaling a design system for AWS service teams"
                description="Created to help unify the experiences of AWS service teams building outside of the console."
                tags={["Design System", "Product"]}
                href="/case-studies/synthesis-design-system"
                aspectRatio="aspect-video" // Explicitly set default
              />
              <WorkCard
                videoSrc="/videos/howser-video-thumbnail.mp4"
                title="Guided onboarding experiences for AWS services"
                description="Revamped the onboarding experiences for 3 AWS services: Amazon Bedrock, SageMaker Canvas, and Amazon Transcribe."
                tags={["Onboarding", "Product"]}
                href="/case-studies/howser"
                aspectRatio="aspect-video" // Explicitly set default
              />
            </div>
          </div>
        </section>
        <BenefitsSection />
        <section className="w-full flex flex-col items-center justify-start p-6 md:p-20" id="pricing">
          <div className="w-full max-w-6xl">
            <div className="space-y-2"> {/* space-y-2 adds margin-top: 0.5rem (8px) between children */}
              <span className="text-muted-foreground">Pricing</span>
              {/* Removed mt-6 as space-y-2 handles the spacing */}
              <h2 className="text-4xl md:text-5xl text-primary font-bold leading-tight mb-12 max-w-[15ch]">
                Ready to build a beautiful product?
              </h2>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* One-off Card */}
              <div className="rounded-3xl bg-white text-black p-8 flex flex-col overflow-hidden border border-gray-200">
                <Badge variant="default" className="mb-6">Quick win</Badge>

                <h3 className="text-3xl md:text-4xl font-bold mb-6">One-off sprint</h3>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-sm text-gray-600">Starting at</span>
                    <span className="text-2xl md:text-3xl font-bold text-primary">$5,000</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">Final price based on project scope</p>
                </div>

                <p className="text-gray-600 mb-2">
                  For teams that need a high-impact push, fast.
                </p>
                <p className="text-black font-medium mb-8">
                  Pefect for a product vision sprint, feature flow, or design system foundation.
                </p>

                <Button asChild variant="default" size="lg" className="mb-10">
                  <Link href="https://cal.com/dylan-dotolo/20min" target="_blank" rel="noopener noreferrer">
                    Kick off your project
                    <RiFlashlightFill className="text-xl" />
                  </Link>
                </Button>

                {/* Testimonial */}
                <div className="mb-8">
                  <Testimonial
                    quote="Dylan's super-powers are ownership, earning trust, and his technical skill."
                    name="Engineering Manager @ AWS"
                    rating={5}
                    variant="default"
                  />
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Dedicated partner.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Updates Every 48 Hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Optional Webflow/Framer add-on</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Seamless workflow (Slack, Loom & Notion)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Flat price. No retainers. No surprises.</span>
                  </li>
                </ul>

                <p className="text-gray-600 mt-auto">
                  Flat price. No retainers. No surprises.
                </p>
              </div>

              {/* Retainer Card */}
              <div className="rounded-3xl bg-black text-white p-8 flex flex-col overflow-hidden shadow-lg">
                <Badge variant="secondary" className="mb-6">Design parnter</Badge>

                <h3 className="text-3xl md:text-4xl font-bold mb-6">Retainer</h3>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-2xl md:text-3xl font-bold text-amber-400">$8,000</span>
                    <span className="text-lg text-gray-400 line-through">$10,000</span>
                    <span className="text-sm text-gray-300">/ month</span>
                  </div>
                  <p className="text-sm text-amber-400 font-medium">Founding discount for first 5 clients</p>
                </div>

                <p className="text-gray-300 mb-2">
                  The fastest way to scale product design – without hiring full-time.
                </p>
                <p className="text-white font-medium mb-8">
                  Ideal for growing product teams that need consistent design execution.
                </p>

                <Button asChild variant="inverse" size="lg" className="mb-10">
                  <Link
                    href="https://cal.com/dylan-dotolo/20min"
                    target="_blank"
                    rel="noopener noreferrer" // Added for security with target="_blank"
                  >
                    Secure your spot
                    <RiFlashlightFill className="text-xl" />
                  </Link>
                </Button>

                {/* Testimonial */}
                <div className="mb-8">
                  <Testimonial
                    quote="Consistently jumping in and making a huge impact."
                    name="Design Director @ IBM"
                    rating={5}
                    variant="inverse"
                  />
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>1:1 partnership with senior designer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Weekly strategy calls.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>48-hour turnaround.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Ongoing UX & system evolution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Seamless workflow (Slack, Loom & Notion)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Pause, upgrade, or cancel anytime</span>
                  </li>
                </ul>

                <p className="font-medium text-white mt-auto">
                  Risk-Free 30-Day Trial—Try It, Love It, or Leave It
                </p>
              </div>
            </div>
          </div>
        </section>
        <FAQsSection />
        <Footer />
      </main>
    </>
  );
}

function CapabilitiesSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // For the progress line animation
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} className="w-full relative min-h-screen p-6 md:p-20 bg-gray-50" id="capabilities">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="md:sticky top-24 h-fit">
          {/* Apply the standard heading structure */}
          <div className="space-y-2">
            <span className="text-muted-foreground">Capabilities</span>
            <motion.h2
              className="text-4xl md:text-5xl text-primary font-bold leading-tight max-w-[12ch]"
              initial={{ opacity: 0.8 }} // Keep existing animation or adjust as needed
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              All your design needs handled
            </motion.h2>
            {/* Added Testimonial here */}
            <div className="pt-8">
              <Testimonial 
                quote="Dylan is willing to get started when other's might still be gathering requirements and analyzing the problem."
                name="Designer @ AWS"
                rating={5}
              />
            </div>
          </div>
        </div>
        <div className="py-12 md:py-20 space-y-12 md:space-y-20 ">
          <CapabilityItem
            title="UI/UX design"
            description="Designing intuitive, scalable interfaces that make complex products feel effortless."
            index={0}
          />

          <CapabilityItem
            title="Product strategy"
            description="Shaping product vision, user flows, and feature priorities to align with real customer needs."
            index={1}
          />

          <CapabilityItem
            title="Design systems"
            description="Building flexible, future-proof systems that keep your product consistent and fast to evolve."
            index={2}
          />

          <CapabilityItem
            title="Prototyping"
            description="Bringing ideas to life with interactive, testable prototypes — before you write a line of code."
            index={3}
          />

          <CapabilityItem
            title="AI UX & integration"
            description="Designing clear, human interfaces for AI features — from chat and LLMs to complex workflows."
            index={4}
          />

          <CapabilityItem
            title="Frontend implementation"
            description="Translating design into responsive, pixel-perfect interfaces with modern frameworks."
            index={5}
          />

        </div>
      </div>
    </section>
  );
}

function CapabilityItem({ title, description, index }: { title: string; description: string; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="space-y-2"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1.0]
      }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      <motion.h3
        className="text-2xl md:text-3xl font-medium"
        initial={{ opacity: 0, x: -10 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
      >
        {title}
      </motion.h3>
      <motion.p
        className="text-xl text-muted-foreground"
        initial={{ opacity: 0, x: -5 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -5 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
}
