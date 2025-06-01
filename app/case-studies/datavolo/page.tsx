import React from 'react';
import Image from 'next/image'; // Keep Image import for potential future use
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { RiFlashlightFill } from '@remixicon/react';

export default function DatavoloCaseStudy() {
  return (
    <main className="flex flex-col items-center">
      {/* Case Study Hero */}
      <section className="w-full flex flex-col items-center justify-center px-6 md:px-24 pb-6 md:pb-24 pt-24 md:pt-52">
        <div className="w-full max-w-6xl text-left">
          {/* Project Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-balance mb-4 leading-tight">
            Designing Datavolo's AI Copilot & Brand for Acquisition by Snowflake.
          </h1>
          {/* Benefit-Oriented Subtitle */}
          <p className="text-1xl md:text-2xl text-muted-foreground max-w-[65ch] mb-6 leading-normal">
            Datavolo needed to integrate AI thoughtfully into their Apache NiFi-based dataflow platform. As their design partner, we dove deep into data engineer workflows, designed a targeted AI copilot, unified their brand, and built their marketing presence, ultimately contributing to their <span className="bg-gradient-to-tl from-amber-500 to-amber-600 bg-clip-text text-transparent">strategic acquisition by Snowflake.</span>
          </p>

          {/* --- Restructured Metadata Grid --- */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 mt-12 pt-8 border-t border-gray-200">
            <div>
              <span className="block text-sm text-muted-foreground mb-1">Client</span>
              <p className="font-medium text-primary">Datavolo</p>
            </div>
            <div>
              <span className="block text-sm text-muted-foreground mb-1">Industry</span>
              <Badge variant="secondary">Data & Analytics</Badge> {/* Or use plain text if preferred */}
            </div>
            <div>
              <span className="block text-sm text-muted-foreground mb-1">Timeline</span>
              <p className="font-medium text-primary">12 Weeks</p>
            </div>
            <div>
              <span className="block text-sm text-muted-foreground mb-1">Services</span>
              {/* Use multiple badges or a list if needed */}
              <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">UI/UX Design</Badge>
                  <Badge variant="secondary">Product Strategy</Badge>
                  <Badge variant="secondary">AI Integration</Badge>
                  <Badge variant="secondary">Branding</Badge>
                  <Badge variant="secondary">Web Development</Badge>
              </div>
            </div>
          </div>
          {/* --- End Metadata Grid --- */}

        </div>
      </section>

      {/* --- Image Grid --- */}
      <section className="w-full max-w-6xl mx-auto py-12 md:py-16 px-6 md:px-0">
        {/* 2-column grid. First item spans full width, next 4 are 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Item 1 (16:9, spans 2 columns on md+) */}
          <div className="relative aspect-video rounded-lg overflow-hidden md:col-span-2">
            <Image 
              src="/images/case-studies/datavolo/illustration-03.png"
              alt="Datavolo project showcase"
              fill
              className="object-cover object-top"
            />
          </div>
          {/* Item 2 (4:3) */}
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
            <Image 
              src="/images/case-studies/datavolo/dark-hero-web.png"
              alt="Datavolo project showcase"
              fill
              className="object-cover object-top"
            />
          </div>
          {/* Item 3 (4:3) */}
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
            <Image 
              src="/images/case-studies/datavolo/ligh-hero-web.png"
              alt="Datavolo project showcase"
              fill
              className="object-cover object-top"
            />
          </div>
          {/* Item 4 (4:3) */}
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
            <Image 
              src="/images/case-studies/datavolo/copilot-01.png"
              alt="Datavolo project showcase"
              fill
              className="object-cover object-top"
            />
          </div>
          {/* Item 5 (4:3) */}
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
            <Image 
              src="/images/case-studies/datavolo/copilot-02.png"
              alt="Datavolo project showcase"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>
      {/* --- End Image Grid --- */}
    </main>
  );
} 