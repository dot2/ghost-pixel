import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button'; // Although not used in final structure, kept for consistency if CTA is added later
import { Badge } from '@/components/ui/badge';
import Link from 'next/link'; // Although not used in final structure, kept for consistency if CTA is added later
import { RiFlashlightFill } from '@remixicon/react'; // Although not used in final structure, kept for consistency if CTA is added later

export default function HowserCaseStudy() {
    return (
        <main className="flex flex-col items-center">
            {/* Case Study Hero */}
            <section className="w-full flex flex-col items-center justify-center px-6 md:px-24 pb-6 md:pb-24 pt-24 md:pt-52">
                <div className="w-full max-w-6xl text-left">
                    {/* Project Title */}
                    <h1 className="text-5xl md:text-7xl font-bold text-balance mb-4 leading-tight">
                        Guided onboarding experiences for AWS services.
                    </h1>
                    {/* Benefit-Oriented Subtitle */}
                    <p className="text-1xl md:text-2xl text-muted-foreground max-w-[65ch] mb-6 leading-normal">
                        Project Howser was apart of the MLTL (machine learning and thought leadership) team at AWS I was apart of. We revamped the onboarding experiences for 3 AWS services: Amazon Bedrock, SageMaker Canvas, and Amazon Transcribe. Increasing user adoption by 30-60% and reducing time to value to only 24 hours.
                    </p>

                    {/* --- Restructured Metadata Grid --- */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 mt-12 pt-8 border-t border-gray-200">
                        <div>
                            <span className="block text-sm text-muted-foreground mb-1">Client</span>
                            <p className="font-medium text-primary">AWS</p>
                        </div>
                        <div>
                            <span className="block text-sm text-muted-foreground mb-1">Industry</span>
                            <div className="flex flex-wrap gap-2">
                                <Badge variant="secondary">Cloud Computing</Badge>
                                <Badge variant="secondary">Machine Learning</Badge>
                            </div>
                        </div>
                        <div>
                            <span className="block text-sm text-muted-foreground mb-1">Timeline</span>
                            <p className="font-medium text-primary">Sept. 2023 – Jan. 2024</p>
                        </div>
                        <div>
                            <span className="block text-sm text-muted-foreground mb-1">Services</span>
                            <div className="flex flex-wrap gap-2">
                                <Badge variant="secondary">Onboarding</Badge>
                                <Badge variant="secondary">UX Design</Badge>
                                <Badge variant="secondary">Strategy</Badge>
                            </div>
                        </div>
                    </div>
                    {/* --- End Metadata Grid --- */}
                </div>
            </section>

            {/* --- Consolidated Image/Video Grid --- */}
            <section className="w-full max-w-6xl mx-auto py-12 md:py-16 px-6 md:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Item 1: Main Video (Spans 2 columns) */}
                    <div className="aspect-[16/9] relative w-full rounded-lg overflow-hidden bg-muted border border-border md:col-span-2">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover"
                        >
                            <source src="/images/case-studies/howser/howser-intro-reel.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    {/* Item 2: Context Image 1 */}
                    <div className="aspect-[16/9] rounded-lg relative overflow-hidden border border-border">
                        <Image
                            src="/images/case-studies/howser/context-2.png"
                            alt="Howser Service Onboarding Journey Overview"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Item 3: Context Image 2 */}
                    <div className="aspect-[16/9] rounded-lg relative overflow-hidden border border-border">
                        <Image
                            src="/images/case-studies/howser/context-1.png"
                            alt="Howser Onboarding Framework Visual"
                            fill
                            className="object-cover"
                        />
                    </div>
                    
                    {/* Item 4: Figma Embed - Bedrock Whiteboard (Spans 2 columns) */}
                    <div className="aspect-[16/9] relative w-full rounded-lg overflow-hidden bg-background border border-border md:col-span-2">
                        <iframe
                            src="https://embed.figma.com/board/wZdzxGuG8Zw7W6CozdyTpX/Bedrock-Whiteboard-(1)?node-id=11-3785&embed-host=share"
                            className="absolute inset-0 w-full h-full"
                            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                            allowFullScreen
                        />
                    </div>

                    {/* Item 5: Figma Embed - Bedrock UX Demo (Spans 2 columns) */}
                    <div className="aspect-[16/9] relative w-full rounded-lg overflow-hidden bg-background border border-border md:col-span-2">
                        <iframe
                            src="https://embed.figma.com/design/EtRANurH0a4Ewtq72oq5P3/Bedrock-Demo-UX?node-id=252-10250&embed-host=share"
                            className="absolute inset-0 w-full h-full"
                            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                            allowFullScreen
                        />
                    </div>

                    {/* Item 6: Figma Embed - Bedrock Demo (Spans 2 columns) */}
                    <div className="aspect-[16/9] relative w-full rounded-lg overflow-hidden bg-background border border-border md:col-span-2">
                        <iframe
                            src="https://embed.figma.com/design/jzidp5tjoAoBpbOFUgCiVY/Bedrock-Demo?node-id=2537-43897&embed-host=share"
                            className="absolute inset-0 w-full h-full"
                            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                            allowFullScreen
                        />
                    </div>
                </div>
            </section>
            {/* --- End Consolidated Image/Video Grid --- */}
        </main>
    );
}
