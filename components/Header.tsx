'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useEffect } from 'react'

export default function Header() {
  useEffect(() => {
    const handleScroll = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const buttons = ['features', 'pricing', 'faq'];
    buttons.forEach(id => {
      const button = document.getElementById(`scroll-to-${id}`);
      if (button) {
        button.addEventListener('click', () => handleScroll(id));
      }
    });

    return () => {
      buttons.forEach(id => {
        const button = document.getElementById(`scroll-to-${id}`);
        if (button) {
          button.removeEventListener('click', () => handleScroll(id));
        }
      });
    };
  }, []);

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="https://blastoff.org/_static/logo.png" 
                alt="Blastoff Logo" 
                width={40} 
                height={40} 
                className="w-10 h-10 object-contain"
              />
              <span className="text-[#1E1E1E] text-2xl font-bold">Blastoff</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="/panels" className="text-gray-600 hover:text-[#1E1E1E]">
                Panels
              </Link>
              <button
                id="scroll-to-features"
                className="text-gray-600 hover:text-[#1E1E1E]"
              >
                Features
              </button>
              <button
                id="scroll-to-pricing"
                className="text-gray-600 hover:text-[#1E1E1E]"
              >
                Pricing
              </button>
              <button
                id="scroll-to-faq"
                className="text-gray-600 hover:text-[#1E1E1E]"
              >
                FAQ
              </button>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/signup">
              <Button className="bg-[#FF5C28] hover:bg-[#FF5C28]/90">Sign Up</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

