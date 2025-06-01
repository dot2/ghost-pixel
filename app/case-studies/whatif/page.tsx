import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { RiFlashlightFill } from '@remixicon/react';

export default function WhatIfCaseStudy() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full min-h-[80vh] flex flex-col items-center justify-center px-6 md:px-24 pb-12 md:pb-24 pt-24 md:pt-32">
        <div className="w-full max-w-6xl">
          <h1 className="text-5xl md:text-8xl font-bold text-balance mb-6 leading-tight">
            Exploring the Future of IBM Cloud
          </h1>
          <p className="text-2xl text-muted-foreground max-w-[45ch] mb-12 leading-normal">
            Bringing together 252 IBMers to establish a north star vision for next-generation cloud experiences.
          </p>

          {/* Project Meta Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-gray-200">
            <div>
              <span className="block text-sm text-muted-foreground mb-2">Client</span>
              <p className="font-medium">IBM</p>
            </div>
            <div>
              <span className="block text-sm text-muted-foreground mb-2">Role</span>
              <p className="font-medium">Design Lead</p>
            </div>
            <div>
              <span className="block text-sm text-muted-foreground mb-2">Timeline</span>
              <p className="font-medium">6 months</p>
            </div>
            <div>
              <span className="block text-sm text-muted-foreground mb-2">Focus</span>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Strategy</Badge>
                <Badge variant="secondary">Innovation</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Hero Video */}
      <section className="w-full">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100">
            <video
              src="/videos/whatif-edit.mp4"
              autoPlay
              loop
              muted
              playsInline
              controls
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="w-full py-24 md:py-32">
        <div className="w-full max-w-6xl mx-auto px-6 md:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                The Challenge
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                IBM Cloud needed a bold vision for the future. How do you capture the collective imagination of 252 engineers, designers, and product leaders to shape the next generation of cloud computing?
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/images/case-studies/whatif/whatif-icon.png"
                alt="IBM Cloud challenge visualization"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="w-full py-12 md:py-16">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/images/case-studies/whatif/theme-img-13.png"
                alt="Design jam session"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/images/case-studies/whatif/theme-img-09.png"
                alt="Collaborative workshop"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/images/case-studies/whatif/theme-img-03.png"
                alt="Idea generation process"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-24 md:py-32 bg-gray-50">
        <div className="w-full max-w-6xl mx-auto px-6 md:px-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Our Approach
            </h2>
            <p className="text-xl text-muted-foreground max-w-[50ch] mx-auto">
              A structured 3-day design jam that turned diverse perspectives into actionable innovation themes.
            </p>
          </div>

          {/* Large Feature Image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 mb-16">
            <Image
              src="/images/case-studies/whatif/whatif-submissions.png"
              alt="Design jam process overview"
              fill
              className="object-cover"
            />
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/images/case-studies/whatif/slack-screenshot.png"
                alt="Mutiny project concepts"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                From Mutiny to Movement
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We established an active Slack channel where IBMers could share their ideas and comment on others. The goal was to create a place to express and cross-pollinate ideas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Grid */}
      <section className="w-full py-24 md:py-32">
        <div className="w-full max-w-6xl mx-auto px-6 md:px-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center leading-tight">
            The Impact
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="relative aspect-[2/1] rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/images/case-studies/whatif/ibmers.png"
                alt="Voltron north star vision"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[2/1] rounded-2xl overflow-hidden bg-[#121619]">
              <Image
                src="/images/case-studies/whatif/big-ideas.png"
                alt="Innovation platform interface"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">252</div>
              <p className="text-muted-foreground">IBMers contributed</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100+</div>
              <p className="text-muted-foreground">Ideas posted</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">11</div>
              <p className="text-muted-foreground">Key themes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Impact Image */}
      <section className="w-full py-12">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden bg-gray-100">
            <Image
              src="/images/case-studies/whatif/whatif-funnel.png"
              alt="Final What if program impact"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 md:py-32 bg-gray-50">
        <div className="w-full max-w-6xl mx-auto px-6 md:px-24 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to innovate?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-[50ch] mx-auto">
            Let's transform your complex ideas into breakthrough products.
          </p>
          <Button variant="default" size="lg" asChild>
            <Link href="https://cal.com/dylan-dotolo/20min" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center gap-2">
              Start your project
              <RiFlashlightFill className="text-xl" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
