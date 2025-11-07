import { RootedHeader } from '@/components/rooted/header';
import { CycleIcon } from '@/components/icons/cycle-icon';
import { NutritionIcon } from '@/components/icons/nutrition-icon';
import { StrengthIcon } from '@/components/icons/strength-icon';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

export default function Index() {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <RootedHeader />

      {/* Hero Section - Sage Green Background with Phone Mockup */}
      <section className="relative overflow-hidden" style={{ backgroundColor: 'hsl(var(--rooted-sage))' }}>
        {/* Decorative Botanical Leaves */}
        <div className="absolute left-8 top-1/4 opacity-60">
          <Image src="/assets/botanical/leaf-left.svg" alt="" width={120} height={180} />
        </div>
        <div className="absolute right-8 top-1/4 opacity-60">
          <Image src="/assets/botanical/leaf-right.svg" alt="" width={120} height={180} />
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Hero Text */}
            <div>
              <h1 className="font-serif text-5xl md:text-6xl font-semibold text-[hsl(var(--rooted-text))] leading-tight mb-6">
                Nurture Your Cycle.
                <br />
                Empower Your Life
              </h1>
              <p className="text-lg text-[hsl(var(--rooted-text))] mb-8 leading-relaxed">
                Your hormones called—they want a better app. Rooted helps you sync your wellness with your cycle, so you can thrive in every phase.
              </p>
              <button className="btn-primary text-base px-8 py-3">
                Download the App
              </button>
            </div>

            {/* Right: Phone Mockup */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Phone frame */}
                <div className="w-72 h-[600px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="w-full h-full bg-[hsl(var(--rooted-cream))] rounded-[2.5rem] overflow-hidden flex flex-col items-center justify-center">
                    {/* App preview content */}
                    <div className="text-center p-8">
                      <div className="w-24 h-24 rounded-full bg-[hsl(var(--rooted-sage))] mx-auto mb-6 flex items-center justify-center">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                          <circle cx="24" cy="24" r="18" stroke="hsl(var(--rooted-brown))" strokeWidth="2" />
                          <path d="M24 12C24 12 20 16 20 22C20 25 22 28 24 30C26 28 28 25 28 22C28 16 24 12 24 12Z" fill="hsl(var(--rooted-terracotta))" />
                        </svg>
                      </div>
                      <h3 className="font-serif text-2xl font-semibold text-[hsl(var(--rooted-text))] mb-2">
                        Rooted
                      </h3>
                      <p className="text-sm text-[hsl(var(--rooted-text))] opacity-75">
                        Cycle-Synced Wellness
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Three Cards */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-4xl font-semibold text-[hsl(var(--rooted-text))] text-center mb-4">
            Discover a Holistic Approach to Wellness
          </h2>
          <p className="text-center text-[hsl(var(--muted-foreground))] mb-12 max-w-2xl mx-auto">
            The lifestyle every smart woman wants to be a part of
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Cycle Wisdom */}
            <div className="card text-center">
              <div className="flex justify-center mb-6">
                <CycleIcon className="w-16 h-16" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[hsl(var(--rooted-text))] mb-3">
                Cycle Wisdom
              </h3>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                Understand your body's rhythms with intelligent tracking that learns your patterns.
              </p>
            </div>

            {/* Card 2: Smart Nutrition */}
            <div className="card text-center">
              <div className="flex justify-center mb-6">
                <NutritionIcon className="w-16 h-16" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[hsl(var(--rooted-text))] mb-3">
                Smart Nutrition
              </h3>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                Fuel smarter with AI-powered food insights and cycle-adjusted meal planning.
              </p>
            </div>

            {/* Card 3: Strength & Serenity */}
            <div className="card text-center">
              <div className="flex justify-center mb-6">
                <StrengthIcon className="w-16 h-16" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[hsl(var(--rooted-text))] mb-3">
                Strength & Serenity
              </h3>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                Workout intuitively with energy-synced recommendations for every cycle phase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section - Horizontal Layout with Devices */}
      <section className="py-20" style={{ backgroundColor: 'hsl(var(--rooted-sage))' }}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Device Mockups */}
            <div className="relative">
              {/* Tablet mockup */}
              <div className="w-full max-w-lg bg-gray-900 rounded-3xl p-4 shadow-2xl">
                <div className="w-full h-96 bg-white rounded-2xl overflow-hidden">
                  <div className="p-8">
                    <h4 className="font-serif text-2xl font-semibold text-[hsl(var(--rooted-text))] mb-4">
                      Community Feed
                    </h4>
                    <div className="space-y-4">
                      {/* Sample community post */}
                      <div className="border border-[hsl(var(--border))] rounded-xl p-4">
                        <p className="text-sm text-[hsl(var(--rooted-text))]">
                          "Just finished a gentle yoga session during my menstrual phase. Listening to my body feels amazing! 🌸"
                        </p>
                        <div className="mt-3 flex items-center text-xs text-[hsl(var(--muted-foreground))]">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="hsl(var(--rooted-terracotta))">
                            <path d="M8 2C5 2 2 4.5 2 8C2 10 3 12 5 13.5L8 15L11 13.5C13 12 14 10 14 8C14 4.5 11 2 8 2Z" />
                          </svg>
                          <span className="ml-2">Supported by your sisterhood</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Text Content */}
            <div>
              <h2 className="font-serif text-4xl font-semibold text-[hsl(var(--rooted-text))] mb-6">
                Join the Sisterhood
              </h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-[hsl(var(--rooted-terracotta))] mr-3 text-xl">•</span>
                  <p className="text-[hsl(var(--rooted-text))]">
                    <strong>Personalized Insights:</strong> Connect, share, and grow with a supportive network.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-[hsl(var(--rooted-terracotta))] mr-3 text-xl">•</span>
                  <p className="text-[hsl(var(--rooted-text))]">
                    <strong>Community Support:</strong> Body-positive space moderated for empowerment.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-[hsl(var(--rooted-terracotta))] mr-3 text-xl">•</span>
                  <p className="text-[hsl(var(--rooted-text))]">
                    <strong>Real Sisterhood:</strong> Share meals, progress, and reflections in a safe environment.
                  </p>
                </li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <button className="btn-primary">
                  Get Started
                </button>
                <button className="btn-secondary">
                  Explore Features
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12" style={{ backgroundColor: 'hsl(var(--rooted-brown))' }}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Column 1: Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C12 2 8 6 8 12C8 15 10 18 12 20C14 18 16 15 16 12C16 6 12 2 12 2Z" fill="white" opacity="0.8" />
                </svg>
                <span className="font-serif text-xl font-semibold text-white">Rooted</span>
              </div>
              <p className="text-white opacity-75 text-sm">
                Wellness rooted in self-compassion
              </p>
            </div>

            {/* Column 2: Company */}
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/about" className="text-white opacity-75 hover:opacity-100 transition-opacity">About</a></li>
                <li><a href="/blog" className="text-white opacity-75 hover:opacity-100 transition-opacity">Blog</a></li>
                <li><a href="/careers" className="text-white opacity-75 hover:opacity-100 transition-opacity">Careers</a></li>
              </ul>
            </div>

            {/* Column 3: Support */}
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/help" className="text-white opacity-75 hover:opacity-100 transition-opacity">Help Center</a></li>
                <li><a href="/contact" className="text-white opacity-75 hover:opacity-100 transition-opacity">Contact</a></li>
                <li><a href="/faq" className="text-white opacity-75 hover:opacity-100 transition-opacity">FAQ</a></li>
              </ul>
            </div>

            {/* Column 4: Legal */}
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/terms" className="text-white opacity-75 hover:opacity-100 transition-opacity">Terms</a></li>
                <li><a href="/privacy" className="text-white opacity-75 hover:opacity-100 transition-opacity">Privacy</a></li>
              </ul>
            </div>
          </div>

          {/* Social Icons */}
          <div className="border-t border-white/20 pt-8 flex justify-between items-center">
            <p className="text-white opacity-75 text-sm">
              © 2025 Rooted Wellness. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                <span className="text-white text-sm">f</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                <span className="text-white text-sm">t</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                <span className="text-white text-sm">in</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}