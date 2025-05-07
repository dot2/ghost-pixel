import React from 'react';
// Import Remix Icons
import { 
  RiBubbleChartLine, 
  RiShuffleLine, 
  RiChatQuoteLine, 
  RiRouteFill, 
  RiHandCoinFill, 
  RiUserHeartFill,
  RiPencilRuler2Fill,
  RiSwap2Fill,
  RiChatSmile2Fill,
} from '@remixicon/react';

const benefits = [
    {
        icon: RiPencilRuler2Fill, // Use component directly
        title: 'We speak "Product"',
        description:
            "Speed is great — but what matters is clarity, usability, and growth. We design with purpose, so your product doesn't just look good — it works better.",
    },
    {
        icon: RiSwap2Fill, // Use component directly
        title: 'Flexible to fit your flow',
        description:
            "Need a sprint? A full system? Ongoing design leadership? We flex to your roadmap — with project-based or monthly options that meet you where you are.",
    },
    {
        icon: RiChatSmile2Fill, // Use component directly
        title: 'Fast, collaborative feedback loops',
        description:
            "We work fast — but never in a black box. Regular async updates and live reviews keep you in the loop and the work in motion.",
    },
    {
        icon: RiRouteFill, // Use component directly
        title: 'End-to-end product thinking',
        description:
            "Beyond pixels, we bring structure, systems, and strategy. From UX architecture to scalable components — it's all connected, and we build it that way.",
    },
    {
        icon: RiHandCoinFill, // Use component directly
        title: 'No scope creep. No surprise costs.',
        description:
            "You'll always know what's included and what you're paying for. We keep it lean, clear, and aligned from day one.",
    },
    {
        icon: RiUserHeartFill, // Use component directly
        title: 'Human-first, founder-friendly',
        description:
            "We keep it personal. Face-to-face check-ins every two weeks. Real humans building real things — together.",
    },
];

const BenefitsSection = () => {
    return (
        <section className="w-full flex flex-col items-center justify-start p-6 md:p-20">
            <div className="w-full max-w-6xl">
                <div className="space-y-2"> {/* space-y-2 adds margin-top: 0.5rem (8px) between children */}
                    <span className="text-muted-foreground">Benefits</span>
                    {/* Removed mt-6 as space-y-2 handles the spacing */}
                    <h2 className="text-4xl md:text-5xl text-primary font-bold leading-tight mb-12 max-w-[15ch]">
                        Because results matter.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {benefits.map((benefit, index) => {
                        const IconComponent = benefit.icon; // Assign component to an uppercase variable
                        return (
                            <div key={index} className="flex flex-col items-start">
                                <div className="mb-6 rounded-full flex items-center justify-center text-primary">
                                    {/* Render the dynamic icon component */}
                                    <IconComponent className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg md:text-xl font-semibold mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-muted-foreground text-base leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection; 