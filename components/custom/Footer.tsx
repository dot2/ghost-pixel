import Link from 'next/link';
import Image from 'next/image';
import { RiLinkedinBoxFill, RiAtLine, RiMailFill } from '@remixicon/react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Define social links here for easy management
  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/dylandotolo/', icon: RiLinkedinBoxFill },
    { name: 'Threads', href: 'https://www.threads.com/@dylandotolo', icon: RiAtLine },
    { name: 'Email', href: 'mailto:dylan@ghostpixel.co', icon: RiMailFill },
  ];

  // Define navigation links
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Work', href: '/#case-studies' }, // Assuming case studies are on the homepage
    { name: 'Pricing', href: '/#pricing' }, // Assuming pricing is on the homepage
    // Add more links as needed, e.g., { name: 'Contact', href: '/contact' }
  ];

  return (
    <footer className="w-full flex flex-col items-center bg-black text-white py-12 md:py-20">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-10">
          {/* Column 1: Brand and Copyright */}
          <div className="space-y-2">
            <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
              <Image 
                src="/gp-logos/gp-logo-spot.svg" 
                alt="Ghost Pixel Logo" 
                width={32} 
                height={32}
                className="w-8 h-8 brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-gray-400 text-balance">
              Transforming complex ideas into beautiful, usable software.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h5 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Navigate</h5>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h5 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Connect</h5>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center md:text-left">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Ghost Pixel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 