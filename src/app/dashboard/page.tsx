'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Dashboard() {
  const [currentPhase] = useState<'menstrual' | 'follicular' | 'ovulatory' | 'luteal'>('follicular');

  const phaseColors = {
    menstrual: 'hsl(0, 70%, 85%)',
    follicular: 'hsl(110, 18%, 80%)',
    ovulatory: 'hsl(20, 42%, 75%)',
    luteal: 'hsl(28, 30%, 80%)',
  };

  const phaseDescriptions = {
    menstrual: 'Rest & Restore - Your body needs gentle movement and extra care',
    follicular: 'Energy Rising - Great time for strength training and new challenges',
    ovulatory: 'Peak Power - Your energy is at its highest, push your limits!',
    luteal: 'Gentle Flow - Focus on low-impact workouts and self-care',
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      {/* Header */}
      <header className="bg-white border-b border-[hsl(var(--border))]">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C12 2 8 6 8 12C8 15 10 18 12 20C14 18 16 15 16 12C16 6 12 2 12 2Z" fill="hsl(var(--rooted-sage))" />
              </svg>
              <span className="font-serif text-xl font-semibold text-[hsl(var(--rooted-text))]">Rooted</span>
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/dashboard" className="text-[hsl(var(--rooted-terracotta))] font-medium">Dashboard</Link>
              <Link href="/dashboard/cycle" className="text-[hsl(var(--rooted-text))] hover:text-[hsl(var(--rooted-terracotta))]">Cycle</Link>
              <Link href="/dashboard/nutrition" className="text-[hsl(var(--rooted-text))] hover:text-[hsl(var(--rooted-terracotta))]">Nutrition</Link>
              <Link href="/dashboard/workouts" className="text-[hsl(var(--rooted-text))] hover:text-[hsl(var(--rooted-terracotta))]">Workouts</Link>
              <Link href="/dashboard/community" className="text-[hsl(var(--rooted-text))] hover:text-[hsl(var(--rooted-terracotta))]">Community</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="font-serif text-4xl font-semibold text-[hsl(var(--rooted-text))] mb-2">
            Welcome back, friend 🌸
          </h1>
          <p className="text-[hsl(var(--muted-foreground))]">
            Here's how your body is doing today
          </p>
        </div>

        {/* Current Cycle Phase Card */}
        <div
          className="card mb-8"
          style={{ backgroundColor: phaseColors[currentPhase] }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-[hsl(var(--rooted-text))] mb-2">
                {currentPhase.charAt(0).toUpperCase() + currentPhase.slice(1)} Phase
              </h2>
              <p className="text-[hsl(var(--rooted-text))] opacity-90 mb-4">
                {phaseDescriptions[currentPhase]}
              </p>
              <button className="btn-primary text-sm">
                View Cycle Details
              </button>
            </div>
            <div className="w-32 h-32 rounded-full bg-white/40 flex items-center justify-center">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="28" stroke="hsl(var(--rooted-brown))" strokeWidth="2" />
                <path d="M32 16C32 16 26 20 26 28C26 32 28 36 32 40C36 36 38 32 38 28C38 20 32 16 32 16Z" fill="hsl(var(--rooted-terracotta))" />
              </svg>
            </div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Today's Nutrition */}
          <div className="card">
            <h3 className="font-serif text-xl font-semibold text-[hsl(var(--rooted-text))] mb-4">
              Today's Nutrition
            </h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-[hsl(var(--muted-foreground))]">Calories</span>
                  <span className="font-medium text-[hsl(var(--rooted-text))]">1,450 / 1,800</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-[hsl(var(--rooted-terracotta))]" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-[hsl(var(--muted-foreground))]">Protein</span>
                  <span className="font-medium text-[hsl(var(--rooted-text))]">85g / 100g</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-[hsl(var(--rooted-sage))]" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
            <button className="btn-secondary w-full mt-4 text-sm">
              Log Meal
            </button>
          </div>

          {/* Workout Recommendation */}
          <div className="card">
            <h3 className="font-serif text-xl font-semibold text-[hsl(var(--rooted-text))] mb-4">
              Today's Workout
            </h3>
            <p className="text-[hsl(var(--muted-foreground))] mb-4">
              Light strength training + HIIT
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <span className="text-[hsl(var(--rooted-terracotta))] mr-2">•</span>
                <span>Duration: 30-40 minutes</span>
              </div>
              <div className="flex items-center">
                <span className="text-[hsl(var(--rooted-terracotta))] mr-2">•</span>
                <span>Intensity: Moderate</span>
              </div>
              <div className="flex items-center">
                <span className="text-[hsl(var(--rooted-terracotta))] mr-2">•</span>
                <span>Energy: Medium-High</span>
              </div>
            </div>
            <button className="btn-primary w-full mt-4 text-sm">
              Start Workout
            </button>
          </div>

          {/* Mood Check-in */}
          <div className="card">
            <h3 className="font-serif text-xl font-semibold text-[hsl(var(--rooted-text))] mb-4">
              How are you feeling?
            </h3>
            <p className="text-[hsl(var(--muted-foreground))] mb-4 text-sm">
              Quick check-in to track your energy and mood
            </p>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-[hsl(var(--rooted-text))] mb-2 block">
                  Energy Level
                </label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <button
                      key={level}
                      className="w-10 h-10 rounded-full border-2 border-[hsl(var(--border))] hover:border-[hsl(var(--rooted-terracotta))] transition-colors"
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>
              <button className="btn-secondary w-full text-sm">
                Save Check-in
              </button>
            </div>
          </div>
        </div>

        {/* Community Highlights */}
        <div className="mt-8 card">
          <h3 className="font-serif text-2xl font-semibold text-[hsl(var(--rooted-text))] mb-6">
            Community Highlights
          </h3>
          <div className="space-y-4">
            {/* Sample post */}
            <div className="border border-[hsl(var(--border))] rounded-lg p-4">
              <p className="text-[hsl(var(--rooted-text))] mb-3">
                "Tried the cycle-synced meal plan this week and I'm feeling so much more energized! This approach really works 💚"
              </p>
              <div className="flex items-center text-sm text-[hsl(var(--muted-foreground))]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="hsl(var(--rooted-terracotta))" className="mr-2">
                  <path d="M8 2C5 2 2 4.5 2 8C2 10 3 12 5 13.5L8 15L11 13.5C13 12 14 10 14 8C14 4.5 11 2 8 2Z" />
                </svg>
                <span>Loved by your sisterhood</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
