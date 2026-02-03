"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Minecraft Adventure Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e40af]/40 via-transparent to-[#e8f4fc]/90" />
      </div>

      {/* Floating planets/decorations */}
      <div className="absolute top-32 right-10 md:right-20 w-24 h-24 md:w-32 md:h-32 float-animation z-10" style={{ animationDelay: "0.5s" }}>
        <Image
          src="/images/planet-logo.png"
          alt="Space planet"
          fill
          className="object-contain"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 lg:px-12 xl:px-16 pt-24 md:pt-32">
        {/* Main Title */}
        <div className="text-center mb-8">
          <h1 className="font-mono text-4xl md:text-6xl lg:text-7xl text-[#1e40af] mb-4" style={{ textShadow: "4px 4px 0 rgba(59,130,246,0.3)" }}>
            Join the
          </h1>
          <h1 className="font-mono text-5xl md:text-7xl lg:text-8xl text-[#3b82f6] mb-6" style={{ textShadow: "4px 4px 0 rgba(30,64,175,0.4)" }}>
            Adventure
          </h1>
        </div>

        {/* Mascot and Chest */}
        <div className="relative flex items-end justify-center gap-4 mb-8">
          <div className="relative w-48 h-48 md:w-64 md:h-64 float-animation">
            <Image
              src="/images/mascot.png"
              alt="SpaceBox Mascot"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button className="minecraft-btn px-8 py-4 text-white font-sans text-2xl">
            Play Now
          </button>
          <Link href="/features" className="minecraft-btn minecraft-btn-blue px-8 py-4 text-white font-sans text-2xl text-center">
            Learn More
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce mt-8">
          <svg className="w-8 h-8 text-[#1e40af]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
