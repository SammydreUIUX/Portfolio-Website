'use client';

import Link from 'next/link';
import { useState } from 'react';

const SW_BG = '#FAFAF8';
const SW_INK = '#111111';
const SW_GRAY = '#6E6E6B';
const SW_LINE = '#E4E3DE';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/design-lab', label: 'Design Lab' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b" style={{ backgroundColor: `${SW_BG}E6`, borderBottomColor: SW_LINE, backdropFilter: 'blur(8px)' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Wordmark */}
          <Link href="/" className="flex items-center gap-2 text-base font-medium tracking-tight" style={{ color: SW_INK }}>
            <img src="/images/sf-logo-new.png" alt="" className="h-7 w-7 object-contain" />
            Samuel Funmilayo
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="sw-label hover:opacity-60 transition-opacity duration-300"
                style={{ color: SW_GRAY }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            style={{ color: SW_INK }}
            aria-label="Toggle menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t" style={{ borderTopColor: SW_LINE }}>
            <div className="py-4 space-y-1">
              {navItems.slice(1).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-1 py-3 sw-label"
                  style={{ color: SW_INK }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
