"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Updated image configurations based on the screenshot layout
const peopleImages = [
  // Mobile: Top-left, smaller. Desktop: Large top-left.
  { src: "/images/people/person-1.jpeg", alt: "Person 1", className: "w-24 h-32 top-[8%] left-[5%] md:w-48 md:h-60 md:top-[5%] md:left-[3%]" },
  // Hidden on mobile. Desktop: Tiny, below and to the right of Person 1.
  { src: "/images/people/person-2.jpeg", alt: "Person 2", className: "hidden md:block md:w-16 md:h-16 md:top-[25%] md:left-[26%]" },
  // Hidden on mobile. Desktop: Medium bottom-left.
  { src: "/images/people/person-3.jpeg", alt: "Person 3", className: "hidden md:block md:w-24 md:h-32 md:bottom-[2%] md:left-[30%]" },
  // Mobile: Bottom-left, smaller. Desktop: Medium, above and to the right of Person 3.
  { src: "/images/people/person-4.jpeg", alt: "Person 4", className: "w-20 h-28 bottom-[8%] left-[10%] md:w-28 md:h-36 md:bottom-[20%] md:left-[15%]" },
  // Mobile: Top-right, smaller. Desktop: Medium top-right.
  { src: "/images/people/person-5.jpeg", alt: "Person 5", className: "w-20 h-28 top-[10%] right-[8%] md:w-32 md:h-40 md:top-[8%] md:right-[8%]" },
  // Hidden on mobile. Desktop: Small portrait, below and left of Person 5.
  { src: "/images/people/person-6.jpeg", alt: "Person 6", className: "hidden md:block md:w-24 md:h-28 md:top-[18%] md:right-[28%]" },
  // Hidden on mobile. Desktop: Tiny, mid-right.
  { src: "/images/people/person-7.jpeg", alt: "Person 7", className: "hidden md:block md:w-14 md:h-14 md:top-[45%] md:right-[20%]" },
  // Mobile: Bottom-right, smaller. Desktop: Large bottom-right.
  { src: "/images/people/person-8.jpeg", alt: "Person 8", className: "w-24 h-36 bottom-[5%] right-[5%] md:w-48 md:h-60 md:bottom-[5%] md:right-[3%]" },
];

const UsersSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 }); // Adjusted amount for earlier trigger

  const slideInDelayBase = 0.15;
  const slideInDuration = 0.6;

  return (
    <motion.section
      ref={sectionRef}
      className="relative w-full min-h-[75vh] md:min-h-[100vh] flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 overflow-hidden bg-white"
    >
      <div className="relative z-10 text-center px-4">
        <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-1 md:mb-2">And at the heart of it all,</p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary">
          It's about your users.
        </h2>
      </div>

      {peopleImages.map((image, index) => {
        const isActuallyVisibleOnMobile = !image.className.includes("hidden");
        // Initial check for window to avoid SSR errors, then use a state for actual screen width if needed for more complex logic
        const isLikelyMobile = typeof window !== "undefined" ? window.innerWidth < 768 : false; 

        const animateCondition = isInView && (isActuallyVisibleOnMobile || !isLikelyMobile);
        
        const getInitialX = () => {
          if (isLikelyMobile) {
            // For mobile, assign based on odd/even index for those that are visible
            // This assumes the 4 visible images on mobile are at even/odd positions that make sense for left/right alternation
            // A more robust way might be to tag them 'left-mobile', 'right-mobile' in the config
            const mobileVisibleOrder = [0,3,4,7]; // Example indices visible on mobile
            const isLeftOnMobile = mobileVisibleOrder.indexOf(index) !== -1 && mobileVisibleOrder.indexOf(index) % 2 === 0;
            return isLeftOnMobile ? -15 : 15;
          } else {
            return index < 4 ? -30 : 30; // Desktop logic: first 4 are left, rest are right
          }
        };
        const initialX = getInitialX();
        const itemSlideInDelay = index * slideInDelayBase;

        return (
          <motion.div
            key={index}
            className={`absolute rounded-md shadow-md overflow-hidden ${image.className}`}
            initial={{ opacity: 0, x: initialX, y: 0 }}
            animate={animateCondition ? { 
              opacity: 1,
              x: 0,
              y: [0, -3, 0, 3, 0],
            } : { opacity: 0, x: initialX, y:0 }} // Ensure y is also reset if not animating
            transition={{
              opacity: { duration: slideInDuration, ease: "easeOut", delay: itemSlideInDelay },
              x: { duration: slideInDuration, ease: "easeOut", delay: itemSlideInDelay },
              y: {
                duration: 8 + index * 0.6,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                delay: itemSlideInDelay + slideInDuration,
              },
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={192} 
              height={240} 
              className="object-cover w-full h-full"
              priority={index === 0 || index === 7} 
            />
          </motion.div>
        );
      })}
    </motion.section>
  );
};

export default UsersSection; 