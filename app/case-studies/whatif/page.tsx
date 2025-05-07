import React from 'react';
import Image from 'next/image'; // Keep Image import for potential future use
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { RiFlashlightFill } from '@remixicon/react';

export default function WhatIfCaseStudy() {
  return (
    <main className="flex flex-col items-center">
      {/* Case Study Hero */}
      <section className="w-full flex flex-col items-center justify-center px-6 md:px-24 pb-6 md:pb-24 pt-24 md:pt-52">
        <div className="w-full max-w-6xl text-left">
          {/* Project Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-balance mb-4 leading-tight">
            Exploring the Future of What IBM Cloud Could Be.
          </h1>
          {/* Benefit-Oriented Subtitle */}
          <p className="text-1xl md:text-2xl text-muted-foreground max-w-[65ch] mb-6 leading-normal">
            What if_ is a design program co-created to explore the future experiences of IBM Cloud. Bringing together over 200 IBMers, it established a north star, pushing innovation and using storytelling to inspire.
          </p>

          {/* --- Restructured Metadata Grid --- */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 mt-12 pt-8 border-t border-gray-200">
            <div>
              <span className="block text-sm text-muted-foreground mb-1">Client</span>
              <p className="font-medium text-primary">IBM</p>
            </div>
            <div>
              <span className="block text-sm text-muted-foreground mb-1">Industry</span>
              <Badge variant="secondary">Cloud Computing</Badge>
            </div>
            <div>
              <span className="block text-sm text-muted-foreground mb-1">Timeline</span>
              <p className="font-medium text-primary">Ongoing Program</p>
            </div>
            <div>
              <span className="block text-sm text-muted-foreground mb-1">Services</span>
              <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Strategy</Badge>
                  <Badge variant="secondary">Design</Badge>
                  <Badge variant="secondary">Storytelling</Badge>
                  <Badge variant="secondary">Innovation</Badge>
              </div>
            </div>
          </div>
          {/* --- End Metadata Grid --- */}

        </div>
      </section>

      {/* --- Image/Video Grid Placeholder --- */}
      <section className="w-full max-w-6xl mx-auto py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Item 1 (16:9, spans 2 columns on md+) */}
          <div className="bg-muted aspect-video rounded-lg flex items-center justify-center md:col-span-2">
            <p className="text-muted-foreground">[Video Placeholder 1 (IBM Cloud Future)]</p>
          </div>
          {/* Item 2 (4:3) */}
          <div className="bg-muted aspect-[4/3] rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">[Video/Image Placeholder 2 (Mutiny Concept)]</p>
          </div>
          {/* Item 3 (4:3) */}
          <div className="bg-muted aspect-[4/3] rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">[Video/Image Placeholder 3 (Mutiny Concept)]</p>
          </div>
          {/* Item 4 (4:3) */}
          <div className="bg-muted aspect-[4/3] rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">[Image Placeholder 4 (What If_ Submissions)]</p>
          </div>
           {/* Item 5 (4:3) */}
           <div className="bg-muted aspect-[4/3] rounded-lg flex items-center justify-center">
             <p className="text-muted-foreground">[Video Placeholder 5 (Voltron Concept)]</p>
           </div>
        </div>
      </section>
      {/* --- End Image/Video Grid --- */}

      {/* Main Content Area */}
      <section className="w-full flex flex-col items-center justify-start px-6 md:px-20 pb-12 md:pb-24">
        <div className="w-full max-w-6xl space-y-12 md:space-y-16">

          {/* Section: Project Overview */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Mission: Exploring the Future of IBM Cloud</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-[65ch]">
              The What if_ program aimed to capture and explore diverse ideas, providing guideposts to shape IBM Cloud into a market-leading platform. The core idea was inspired by James Cameron's philosophy: "Imagination feeds exploration, you have to imagine the possible before you can go and do it." This initiative sought to harness collective imagination for tangible innovation.
            </p>
          </div>

          {/* Section: The Spark */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Spark: From Kubernetes to a Cloud-Wide Vision</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-[65ch]">
              The concept for What if_ originated from "Mutiny," a project exploring the future of IBM Kubernetes. Mutiny began with simple yet powerful questions: What if you could follow Kubernetes resources seamlessly? What if a collaborative terminal could enhance teamwork? We prototyped these ideas, exploring how to turn them into reality and laying the groundwork for a broader innovation program.
            </p>
             {/* Placeholder for Image/Diagram */}
             <div className="bg-muted aspect-video rounded-lg flex items-center justify-center mt-8">
                <p className="text-muted-foreground">[Mutiny Concepts Visualization Placeholder]</p>
             </div>
          </div>

          {/* Section: Our Solution */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Approach: Capturing Ideas and Building a North Star</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-[65ch]">
              To capture a wide array of ideas, we organized a 3-day Design Jam. Over 200 IBMers participated, sharing their insights and voting on the most promising concepts. Behind the scenes, a dedicated team grouped these submissions into "emerging themes." These themes became the foundation for "Voltron," an effort to create a north star vision for IBM Cloud, focusing on next-generation design and layout.
            </p>
             {/* Placeholder for Solution Screenshots/Mockups */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                 <div className="bg-muted aspect-video rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">[Design Jam/Theme Grouping Placeholder]</p>
                 </div>
                 <div className="bg-muted aspect-video rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">[Voltron Vision Placeholder]</p>
                 </div>
             </div>
          </div>

          {/* Section: Key Results */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Outcome: A North Star and a New Way of Working</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-[65ch]">
              The What if_ program successfully established a north star vision for IBM Cloud and introduced a new operational model for innovation within the organization. An internal website was developed, allowing teams to submit ideas, collaborate on existing ones, and track their progress from conception to launch. This platform fostered a continuous cycle of ideation and development, shaping the future of IBM Cloud.
            </p>
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
