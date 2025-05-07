"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '../ui/button';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose
} from "@/components/ui/sheet";

const Nav = () => {
    const router = useRouter();
    const pathname = usePathname();
    
    const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        
        // If not on homepage, navigate to homepage first, then scroll
        if (pathname !== '/') {
            router.push(`/#${sectionId}`);
            return;
        }
        
        // If already on homepage, just scroll to the section
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 100, // Offset for the fixed header
                behavior: 'smooth'
            });
        }
    };

    const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
        // If already on homepage, just scroll to top
        if (pathname === '/') {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        // If not on homepage, Link will navigate to home
    };

    return (
        <nav className="fixed top-4 z-50 w-full px-4">
            <div className="mx-auto flex justify-between items-center max-w-6xl w-full backdrop-blur-md bg-white/90 border border-gray-200 p-2 sm:p-2 rounded-full">
                <Link 
                    href="/" 
                    className="flex items-center"
                    onClick={handleScrollToTop}
                >
                    <Image src="/gp-logos/gp-logo-full.svg" alt="Ghost Pixel Logo" height={40} width={140} className="ml-2" />
                </Link>

                {/* Desktop Navigation - Hidden on mobile */}
                <div className="hidden md:block">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink 
                                    className={navigationMenuTriggerStyle()}
                                    onClick={(e) => handleScrollToSection(e as React.MouseEvent<HTMLAnchorElement>, 'capabilities')}
                                    href="#capabilities"
                                >
                                    What we do
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink 
                                    className={navigationMenuTriggerStyle()}
                                    onClick={(e) => handleScrollToSection(e as React.MouseEvent<HTMLAnchorElement>, 'pricing')}
                                    href="#pricing"
                                >
                                    Pricing
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink 
                                    className={navigationMenuTriggerStyle()}
                                    onClick={(e) => handleScrollToSection(e as React.MouseEvent<HTMLAnchorElement>, 'faqs')}
                                    href="#faqs"
                                >
                                    FAQs
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink 
                                    className={navigationMenuTriggerStyle()}
                                    onClick={(e) => handleScrollToSection(e as React.MouseEvent<HTMLAnchorElement>, 'case-studies')}
                                    href="#case-studies"
                                >
                                    Case Studies
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Desktop CTA - Hidden on mobile */}
                <div className="hidden md:block">
                    <Button variant="default" size="lg">
                        <Link href="https://cal.com/dylan-dotolo/20min" target="_blank" rel="noopener noreferrer">
                            Book a call with Dylan
                        </Link>
                    </Button>
                </div>

                {/* Mobile Navigation - Shown only on mobile */}
                <div className="block md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[80vw] sm:w-[400px] max-w-md">
                            <div className="flex flex-col gap-6 p-6">
                                <SheetClose asChild>
                                    <Link 
                                        href="/" 
                                        className="flex items-center gap-2"
                                        onClick={handleScrollToTop}
                                    >
                                        <Image src="/gp-logos/gp-logo-full.svg" alt="Ghost Pixel Logo" height={30} width={100} />
                                    </Link>
                                </SheetClose>
                                
                                <div className="flex flex-col gap-4">
                                    <SheetClose asChild>
                                        <Link 
                                            href="#capabilities" 
                                            className="text-lg font-medium py-2 hover:text-primary"
                                            onClick={(e) => handleScrollToSection(e, 'capabilities')}
                                        >
                                            What we do
                                        </Link>
                                    </SheetClose>
                                    
                                    <SheetClose asChild>
                                        <Link 
                                            href="#pricing" 
                                            className="text-lg font-medium py-2 hover:text-primary"
                                            onClick={(e) => handleScrollToSection(e, 'pricing')}
                                        >
                                            Pricing
                                        </Link>
                                    </SheetClose>
                                    
                                    <SheetClose asChild>
                                        <Link 
                                            href="#faqs" 
                                            className="text-lg font-medium py-2 hover:text-primary"
                                            onClick={(e) => handleScrollToSection(e, 'faqs')}
                                        >
                                            FAQs
                                        </Link>
                                    </SheetClose>
                                    
                                    <SheetClose asChild>
                                        <Link 
                                            href="#case-studies" 
                                            className="text-lg font-medium py-2 hover:text-primary"
                                            onClick={(e) => handleScrollToSection(e, 'case-studies')}
                                        >
                                            Case Studies
                                        </Link>
                                    </SheetClose>
                                </div>
                                
                                <SheetClose asChild>
                                    <Button variant="default" size="lg" className="mt-4">
                                        <Link href="https://cal.com/dylan-dotolo/20min" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base">
                                            Book a call with Dylan
                                        </Link>
                                    </Button>
                                </SheetClose>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
};

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

export default Nav; 