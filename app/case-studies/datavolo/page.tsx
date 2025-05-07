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

      {/* --- Image Grid Placeholder --- */}
      <section className="w-full max-w-6xl mx-auto py-12 md:py-16">
        {/* 2-column grid. First item spans full width, next 4 are 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Item 1 (16:9, spans 2 columns on md+) */}
          <div className="bg-muted aspect-video rounded-lg flex items-center justify-center md:col-span-2">
            <p className="text-muted-foreground">[Image 1 Placeholder (16:9)]</p>
          </div>
          {/* Item 2 (4:3) */}
          <div className="bg-muted aspect-[4/3] rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">[Image 2 Placeholder (4:3)]</p>
          </div>
          {/* Item 3 (4:3) */}
          <div className="bg-muted aspect-[4/3] rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">[Image 3 Placeholder (4:3)]</p>
          </div>
          {/* Item 4 (4:3) */}
          <div className="bg-muted aspect-[4/3] rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">[Image 4 Placeholder (4:3)]</p>
          </div>
           {/* Item 5 (4:3) */}
           <div className="bg-muted aspect-[4/3] rounded-lg flex items-center justify-center">
             <p className="text-muted-foreground">[Image 5 Placeholder (4:3)]</p>
           </div>
           {/* Removed Item 6 */}
        </div>
      </section>
      {/* --- End Image Grid --- */}

      {/* Main Content Area */}
      <section className="w-full flex flex-col items-center justify-start px-6 md:px-20 pb-12 md:pb-24">
        <div className="w-full max-w-6xl space-y-12 md:space-y-16">

          {/* Section: Project Overview */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Mission: Infusing AI into Data Engineering</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-[65ch]">
              Datavolo, built on the foundation of Apache NiFi, aimed to empower organizations with flexible data pipelines for the AI era. They engaged us as their dedicated design partner to tackle a critical goal: seamlessly integrating AI capabilities into their core platform. The objective wasn't just to add features, but to genuinely enhance the data engineering workflow, making complex tasks simpler and faster, ultimately accelerating their path to market leadership and investment.
            </p>
          </div>

          {/* Section: The Challenge */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Challenge: Beyond the AI Hype</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-[65ch]">
              Integrating AI meaningfully is harder than it looks. We needed to avoid the pitfall of creating generic "AI slop" or a tacked-on chatbot. First, we had to deeply understand the world of Apache NiFi and the day-to-day realities of data engineers. What were their biggest bottlenecks? Where could AI provide *specific*, high-value assistance? The core challenges became:
            </p>
            <ol className="list-decimal list-outside space-y-4 pl-6 text-lg text-muted-foreground max-w-[65ch] mt-8">
              <li>Identifying the most painful parts of pipeline management suitable for AI intervention</li>
              <li>Designing an AI interaction model that felt intuitive and integrated, not intrusive</li>
            </ol>
             {/* Placeholder for Image/Diagram */}
             <div className="bg-muted aspect-video rounded-lg flex items-center justify-center mt-8">
                <p className="text-muted-foreground">[Challenge Visualization Placeholder]</p>
             </div>
          </div>

          {/* Section: Our Solution */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Solution: Targeted AI Copilot & Unified Brand</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-[65ch]">
              Our process started with deep immersion. By working closely with Datavolo's engineers, we pinpointed two key pain points where AI could shine:
            </p>
            <ul className="list-disc list-outside space-y-4 pl-6 text-lg text-muted-foreground max-w-[65ch]">
              <li><strong>Pipeline Troubleshooting:</strong> Deciphering errors and pinpointing root causes in active pipelines was a major time sink. We envisioned an AI copilot capable of analyzing logs and configurations to provide clear explanations and actionable suggestions.</li>
              <li><strong>Starting from Scratch:</strong> The blank canvas is intimidating. We designed the AI to help generate initial pipeline drafts based on user goals, turning seconds into a functional starting point.</li>
            </ul>
            <p className="text-lg text-muted-foreground leading-relaxed my-6 max-w-[65ch]">
              We then prototyped and iterated on the AI copilot experience, ensuring it surfaced helpful insights directly within the user's workflow, rather than through a separate chat interface. After handing off the AI designs, we shifted focus to creating a cohesive identity. We developed a new brand system, wrote new marketing copy, re-themed the product's UI for consistency, and built a brand new marketing website to clearly communicate Datavolo's value.
            </p>
             {/* Placeholder for Solution Screenshots/Mockups */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                 <div className="bg-muted aspect-video rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">[Solution UI Mockup 1]</p>
                 </div>
                 <div className="bg-muted aspect-video rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">[Solution UI Mockup 2]</p>
                 </div>
             </div>
          </div>

          {/* Section: Key Results */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Impact: Clarity, Velocity, and a Snowflake Acquisition</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-[65ch]">
              Our focused design efforts delivered tangible results for Datavolo:
            </p>
            <ul className="list-disc list-outside space-y-4 pl-6 text-lg text-muted-foreground max-w-[65ch]">
              <li><strong>Targeted AI Value:</strong> The AI copilot design directly addressed key data engineer pain points, promising faster troubleshooting and pipeline creation.</li>
              <li><strong>Unified Brand Experience:</strong> The consistent design system across product and marketing created a professional, cohesive identity, strengthening their market position.</li>
              <li><strong>Clear Market Messaging:</strong> The new website and copy effectively articulated Datavolo's unique value proposition in the competitive GenAI landscape.</li>
              <li><strong>Acquisition Ready:</strong> This combination of a thoughtfully designed AI experience and a strong, unified brand significantly enhanced Datavolo's appeal, playing a crucial role in their successful <a href="https://www.snowflake.com/en/news/press-releases/snowflake-agrees-to-acquire-open-data-integration-platform-datavolo/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary transition-colors">acquisition by Snowflake</a>.</li>
            </ul>
          </div>

          {/* Section: Call to Action */}
          <div className="text-center pt-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your complex idea?</h2>
            <Button variant="default" size="lg" asChild>
              <Link href="/#pricing" className="flex flex-row items-center gap-2">
                Get your designs fast
                <RiFlashlightFill className="text-xl" />
              </Link>
            </Button>
          </div>

        </div>
      </section>
    </main>
  );
} 