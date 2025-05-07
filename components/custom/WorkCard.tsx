import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
interface WorkCardProps {
  videoSrc: string;
  title: string;
  description: string;
  tags?: string[];
  href: string;
  aspectRatio?: string;
}

export default function WorkCard({ videoSrc, title, description, tags = [], href, aspectRatio = 'aspect-square' }: WorkCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Link href={href} className="block group">
      <div className="flex flex-col">
        <motion.div 
          className={`relative ${aspectRatio} rounded-2xl overflow-hidden shadow-lg bg-gray-100 cursor-pointer`}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <video
            className="absolute w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          <motion.div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm hidden md:block"
            initial={{ y: '100%' }}
            animate={{ y: isHovered ? 0 : '100%' }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />

          <motion.div 
            className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end hidden md:flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">{title}</h3>
              <p className="text-white/80">{description}</p>
              
              <div className="flex flex-row justify-between items-end mt-4">
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <Badge key={index} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-white font-medium">View Case Study</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Mobile View */}
        <div className="p-0 md:hidden">
          <div className="flex flex-wrap gap-2 my-4">
            {tags.map((tag, index) => (
              <Badge key={index} variant="outline">{tag}</Badge>
            ))}
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{description}</p>
          
          
          <div className="flex items-center gap-2 mt-3 text-primary">
            <span className="font-medium text-sm group-hover:underline">View Case Study</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:translate-x-1">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
} 