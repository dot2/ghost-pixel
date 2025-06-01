import React from 'react';
import Image from 'next/image'; // Keep Image import for potential future use
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { RiFlashlightFill } from '@remixicon/react';

export default function SnowflakeOpenflowCaseStudy() {
  return (
    <main className="flex flex-col items-center">
      {/* Case Study Hero */}
      <section className="w-full flex flex-col items-center justify-center px-6 md:px-24 pb-6 md:pb-24 pt-24 md:pt-52">
        <div className="w-full max-w-6xl text-left">
          {/* Project Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-balance mb-4 leading-tight">
            Designing Snowflake's data ingestion tool.
          </h1>
          {/* Benefit-Oriented Subtitle */}
          <p className="text-1xl md:text-2xl text-muted-foreground max-w-[65ch] mb-6 leading-normal">
            Snowflake Openflow is the <span className="bg-gradient-to-tl from-blue-500 to-blue-600 bg-clip-text text-transparent">acquisition of Datavolo</span>. We worked on integrating Apache Nifi to become Snowflake native to bring all your data into Snowflake with ease. Merging the two products and building out a customer journey that felt like a single product experience. 
          </p>

          {/* --- Restructured Metadata Grid --- */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 mt-12 pt-8 border-t border-gray-200">
            <div>
              <span className="block text-sm text-muted-foreground mb-1">Client</span>
              <p className="font-medium text-primary">Snowflake</p>
            </div>
            <div>
              <span className="block text-sm text-muted-foreground mb-1">Industry</span>
              <Badge variant="secondary">Data Cloud</Badge>
            </div>
            <div>
              <span className="block text-sm text-muted-foreground mb-1">Timeline</span>
              <p className="font-medium text-primary">24 Weeks</p>
            </div>
            <div>
              <span className="block text-sm text-muted-foreground mb-1">Services</span>
              {/* Use multiple badges or a list if needed */}
              <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">UI/UX Design</Badge>
                  <Badge variant="secondary">User Research</Badge>
                  <Badge variant="secondary">Frontend Development</Badge>
                  <Badge variant="secondary">Prototyping</Badge>
              </div>
            </div>
          </div>
          {/* --- End Metadata Grid --- */}

        </div>
      </section>

      {/* --- Figma Embed Section --- */}
      <section className="w-full max-w-6xl mx-auto py-12 md:py-16 px-6 md:px-0">
        <div className="aspect-[16/9] relative w-full rounded-lg overflow-hidden bg-background border border-border">
          <iframe
            src="https://embed.figma.com/deck/jB6WRdiiHTiEIIcLapLeuZ/Openflow-Deck?node-id=1-16327&viewport=-206%2C-179%2C0.92&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&embed-host=share"
            className="absolute inset-0 w-full h-full"
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
            allowFullScreen
          />
        </div>
      </section>
      {/* --- Image Grid --- */}
      <section className="w-full max-w-6xl mx-auto py-12 md:py-16 px-6 md:px-0">
        {/* 2-column grid. First item spans full width, next 4 are 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Item 1 (16:9, spans 2 columns on md+) */}
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden md:col-span-2 border border-gray-100 shadow-md">
            <Image 
              src="/images/case-studies/openflow/openflow-landing.png"
              alt="Snowflake Openflow main showcase"
              fill
              className="object-cover object-top"
            />
          </div>
          {/* Item 2 (16:9) */}
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden md:col-span-2 border border-gray-100 shadow-md">
            <Image 
              src="/images/case-studies/openflow/getting-started.png"
              alt="Snowflake Openflow project showcase"
              fill
              className="object-cover object-top"
            />
          </div>
          {/* Item 3 (16:9) */}
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden md:col-span-2 border border-gray-100 shadow-md">
            <Image 
              src="/images/case-studies/openflow/overview-page.png"
              alt="Snowflake Openflow project showcase"
              fill
              className="object-cover object-top"
            />
          </div>
          {/* Item 4 (16:9) */}
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden border border-gray-100 shadow-md">
            <Image 
              src="/images/case-studies/openflow/connectors.png"
              alt="Snowflake Openflow project showcase"
              fill
              className="object-cover object-top"
            />
          </div>
          {/* Item 5 (16:9) */}
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden border border-gray-100 shadow-md">
            <Image 
              src="/images/case-studies/openflow/connectors-overview.png"
              alt="Snowflake Openflow project showcase"
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