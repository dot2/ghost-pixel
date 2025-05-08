import { RiStarFill } from "@remixicon/react";

interface TestimonialProps {
  quote: string;
  name: string;
  rating?: number; // Optional, defaults to 5
  variant?: 'default' | 'inverse'; // Added variant prop
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  name,
  rating = 5,
  variant = 'default', // Default to 'default'
}) => {
  const isInverse = variant === 'inverse';

  // Define colors based on variant
  const textColor = isInverse ? "text-gray-300" : "text-gray-700";
  const nameColor = isInverse ? "text-gray-200" : "text-gray-800"; // Adjusted from user's text-gray-600 for better inverse contrast
  const roleColor = isInverse ? "text-gray-400" : "text-gray-600";
  const quoteColor = isInverse ? "text-gray-300" : "text-gray-700"; // User had this as part of main div color or implicit

  return (
    <div className={`max-w-md ${textColor}`}>
      <div className="flex items-center">
        {[...Array(rating)].map((_, i) => (
          <RiStarFill key={i} className="w-5 h-5 text-amber-400" />
        ))}
        {[...Array(5 - rating)].map((_, i) => (
          <RiStarFill key={i + rating} className="w-5 h-5 text-gray-300" />
        ))}
      </div>
      <blockquote className={`text-sm mt-4 mb-1 max-w-[40ch] ${quoteColor}`}>{quote}</blockquote>
      <div className="flex flex-row gap-4 items-center">
        <div>
          <p className={`font-semibold text-sm ${nameColor}`}>{name}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial; 