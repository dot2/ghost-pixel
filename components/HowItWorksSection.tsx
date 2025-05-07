import React from 'react';
import { RiAlignLeft, RiAlignItemLeftFill, RiBrushFill, RiRuler2Fill } from "@remixicon/react";


const HowItWorksSection = () => {
  return (
    <section className="w-full flex flex-col items-center justify-start p-6 md:p-20"> {/* Consistent light theme */}
      <div className="w-full max-w-6xl">
        <div className="space-y-2 mb-12">
          <span className="text-muted-foreground">How it works</span>
          <h2 className="text-4xl md:text-5xl text-primary font-bold leading-tight">
            A simple, effective process.
          </h2>
        </div>

        {/* Remove map and hardcode each card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8">
          {/* Card 1: Align */}
          <div
            className="aspect-square rounded-lg bg-linear-to-br from-[#ffffff] to-[#f4f4f4] flex flex-col items-start justify-between overflow-hidden p-6 relative min-h-[200px] border border-gray-200"
          >
            <div className="flex flex-col items-start z-10">
              <h3 className="text-lg md:text-2xl font-semibold mb-2 text-primary">
                Align
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                We'll align on your goals, product vision, and what success
                looks like — fast and founder-friendly.
              </p>
            </div>
            <RiAlignItemLeftFill className="text-primary text-4xl mt-4" />
          </div>

          {/* Card 2: Design */}
          <div
            className="aspect-square rounded-lg bg-linear-to-br from-[#ffffff] to-[#f4f4f4] flex flex-col items-start justify-between overflow-hidden p-6 relative min-h-[200px] border border-gray-200"
          >
            <div className="flex flex-col items-start z-10">
              <h3 className="text-lg md:text-2xl font-semibold mb-2 text-primary">
                Design
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                You get beautifully crafted UX flows, scalable components, and
                ready-to-build designs — delivered with clarity and speed.
              </p>
            </div>
            <RiBrushFill className="text-primary text-4xl mt-4" />
          </div>

          {/* Card 3: Refine */}
          <div
            className="aspect-square rounded-lg bg-linear-to-br from-[#ffffff] to-[#f4f4f4] flex flex-col items-start justify-between overflow-hidden p-6 relative min-h-[200px] border border-gray-200"
          >
            <div className="flex flex-col items-start z-10">
              <h3 className="text-lg md:text-2xl font-semibold mb-2 text-primary">
                Refine
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                We refine together, ship confidently, and move on to what's
                next. Whether it's a sprint or ongoing support, we keep the
                momentum.
              </p>
            </div>
            <RiRuler2Fill className="text-primary text-4xl mt-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection; 