import React from 'react';
import Image from 'next/image'; // Keep Image import for potential future use
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { RiFlashlightFill } from '@remixicon/react';

export default function SynthesisCaseStudy() {
    return (
        <main className="flex flex-col items-center">
            {/* Case Study Hero */}
            <section className="w-full flex flex-col items-center justify-center px-6 md:px-24 pb-6 md:pb-24 pt-24 md:pt-52">
                <div className="w-full max-w-6xl text-left">
                    {/* Project Title */}
                    <h1 className="text-5xl md:text-7xl font-bold text-balance mb-4 leading-tight">
                        Scaling a design system for AWS service teams.
                    </h1>
                    {/* Benefit-Oriented Subtitle */}
                    <p className="text-1xl md:text-2xl text-muted-foreground max-w-[65ch] mb-6 leading-normal">
                        Synthesis was a new design system I created to help unify the experiences of AWS service teams building outside of the console. Born from my work on Amazon Bedrock Studio, I grew the system to support other teams. Eventually becoming a full system with a dedicated team of designers and engineers.
                    </p>

                    {/* --- Restructured Metadata Grid --- */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 mt-12 pt-8 border-t border-gray-200">
                        <div>
                            <span className="block text-sm text-muted-foreground mb-1">Client</span>
                            <p className="font-medium text-primary">AWS</p>
                        </div>
                        <div>
                            <span className="block text-sm text-muted-foreground mb-1">Industry</span>
                            <Badge variant="secondary">Cloud Computing</Badge>
                        </div>
                        <div>
                            <span className="block text-sm text-muted-foreground mb-1">Timeline</span>
                            <p className="font-medium text-primary">Jan. 2024 – Aug. 2024</p>
                        </div>
                        <div>
                            <span className="block text-sm text-muted-foreground mb-1">Services</span>
                            <div className="flex flex-wrap gap-2">
                                <Badge variant="secondary">Design System</Badge>
                                <Badge variant="secondary">Component Design</Badge>
                                <Badge variant="secondary">Pattern Library</Badge>
                                <Badge variant="secondary">Governance</Badge>
                            </div>
                        </div>
                    </div>
                    {/* --- End Metadata Grid --- */}
                </div>
            </section>

            {/* --- Consolidated Image/Video Grid --- */}
            <section className="w-full max-w-6xl mx-auto py-12 md:py-16 px-6 md:px-0"> {/* Added padding for consistency */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Item 1: Figma Embed (Spans 2 columns) */}
                    <div className="aspect-[16/9] relative w-full rounded-lg overflow-hidden bg-muted border border-border md:col-span-2">
                        <iframe
                            src="https://embed.figma.com/design/31qMj7tj7MWJvdgRbFbTum/%5BBETA%5D-Synthesis-Design-System?node-id=4662-14&embed-host=share"
                            className="absolute inset-0 w-full h-full"
                            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                            allowFullScreen
                        />
                    </div>
                    {/* Item 2 */}
                    <div className="aspect-[16/9] rounded-lg relative overflow-hidden border border-border md:col-span-2">
                        <Image
                            src="/images/case-studies/synthesis/whiteboard-1.png"
                            alt="Synthesis Whiteboard Sketch 1"
                            fill
                            className="object-cover"
                        />
                    </div>
                    {/* Item 3 */}
                    <div className="aspect-[16/9] rounded-lg relative overflow-hidden border border-border md:col-span-2">
                        <Image
                            src="/images/case-studies/synthesis/whiteboard-2.png"
                            alt="Synthesis Whiteboard Sketch 2"
                            fill
                            className="object-cover"
                        />
                    </div>
                    {/* Item 4 */}
                    <div className="aspect-[16/9] rounded-lg relative overflow-hidden border border-border">
                        <Image
                            src="/images/case-studies/synthesis/component-preview-1.png"
                            alt="Synthesis Component Preview 1"
                            fill
                            className="object-cover"
                        />
                    </div>
                    {/* Item 5 */}
                    <div className="aspect-[16/9] rounded-lg relative overflow-hidden border border-border">
                        <Image
                            src="/images/case-studies/synthesis/ui-shell.png"
                            alt="Synthesis UI Shell Example"
                            fill
                            className="object-cover"
                        />
                    </div>
                    {/* Item 7 (Moved from Solution/Principles Section) */}
                    <div className="aspect-[4/3] rounded-lg relative overflow-hidden border border-border md:col-span-2">
                       <Image
                           src="/images/case-studies/synthesis/component-preview-2.png"
                           alt="Synthesis Components Showcase - Preview 2"
                           fill
                           className="object-cover"
                       />
                    </div>
                    {/* Item 6 (Moved from Challenge Section) */}
                    <div className="aspect-[16/9] rounded-lg relative overflow-hidden border border-border">
                       <Image
                           src="/images/case-studies/synthesis/whiteboard-3.png"
                           alt="Visualizing Fragmented vs. Unified AWS Experiences - Whiteboard 3"
                           fill
                           className="object-cover"
                       />
                    </div>
                    {/* Item 8 (Moved from Solution/Principles Section) */}
                    <div className="aspect-[16/9] rounded-lg relative overflow-hidden border border-border">
                       <Image
                           src="/images/case-studies/synthesis/background-texture-01.png"
                           alt="Synthesis Design Pattern Example - Background Texture 1"
                           fill
                           className="object-cover"
                       />
                    </div>
                    {/* Item 9 (Moved from Design Tokens Section) */}
                    <div className="aspect-[16/9] rounded-lg relative overflow-hidden border border-border">
                        <Image
                            src="/images/case-studies/synthesis/background-texture-04.png"
                            alt="Synthesis Service-Specific Color Palette Inspiration - Background Texture 4"
                            fill
                            className="object-cover"
                        />
                    </div>
                    {/* Item 10 (Moved from Design Tokens Section) */}
                    <div className="aspect-[16/9] rounded-lg relative overflow-hidden border border-border">
                        <Image
                            src="/images/case-studies/synthesis/empty-state-slot.png"
                            alt="Synthesis Background System Layers Example - Empty State Slot"
                            fill
                            className="object-cover"
                        />
                    </div>
                    {/* Item 11 (Moved from Design Tokens Section) */}
                    <div className="aspect-[16/9] rounded-lg relative overflow-hidden border border-border">
                       <Image
                           src="/images/case-studies/synthesis/ui-shell-sidepanel.png"
                           alt="Synthesis UI Shell with Design Tokens Applied - Sidepanel"
                           fill
                           className="object-cover"
                       />
                    </div>
                    {/* Item 12 (Moved from Delivery Method Section) */}
                    <div className="aspect-[16/9] rounded-lg relative overflow-hidden border border-border">
                        <Image
                            src="/images/case-studies/synthesis/empty-state-stars.png"
                            alt="Illustrating Synthesis Core and PALs Structure - Empty State Stars"
                            fill
                            className="object-cover"
                        />
                    </div>
                    {/* Item 13 (Moved from Delivery Method Section) */}
                    <div className="aspect-[4/3] rounded-lg relative overflow-hidden border border-border md:col-span-2">
                        <Image
                            src="/images/case-studies/synthesis/ui-shell-slot.png"
                            alt="Synthesis Communication Cadence Visual - UI Shell Slot"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>
            {/* --- End Consolidated Image/Video Grid --- */}
        </main>
    );
}
