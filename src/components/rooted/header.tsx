'use client';

import React from 'react';
import Link from 'next/link';

export function RootedHeader() {
  return (
    <header className="bg-white border-b border-[hsl(var(--border))]">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Botanical leaf logo */}
              <path
                d="M12 2C12 2 8 6 8 12C8 15 10 18 12 20C14 18 16 15 16 12C16 6 12 2 12 2Z"
                fill="hsl(var(--rooted-sage))"
              />
              <path
                d="M12 2C12 2 13 4 14 6"
                stroke="hsl(var(--rooted-brown))"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <span className="font-serif text-xl font-semibold text-[hsl(var(--rooted-text))]">
              Rooted
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/features"
              className="text-[hsl(var(--rooted-text))] hover:text-[hsl(var(--rooted-terracotta))] transition-colors font-medium"
            >
              Features
            </Link>
            <Link
              href="/community"
              className="text-[hsl(var(--rooted-text))] hover:text-[hsl(var(--rooted-terracotta))] transition-colors font-medium"
            >
              Community
            </Link>
            <Link
              href="/blog"
              className="text-[hsl(var(--rooted-text))] hover:text-[hsl(var(--rooted-terracotta))] transition-colors font-medium"
            >
              Blog
            </Link>
            <Link
              href="/pricing"
              className="text-[hsl(var(--rooted-text))] hover:text-[hsl(var(--rooted-terracotta))] transition-colors font-medium"
            >
              Pricing
            </Link>
          </div>

          {/* Sign Up Button */}
          <Link
            href="/signup"
            className="btn-primary text-sm"
          >
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
}
