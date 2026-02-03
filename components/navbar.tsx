"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/items", label: "Items" },
  { href: "/ships", label: "Ships" },
  { href: "/events", label: "Events" },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1e40af]/90 backdrop-blur-sm border-b-4 border-[#3b82f6]">
      <div className="mx-auto px-6 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 relative">
              <Image
                src="/images/planet-logo.png"
                alt="SpaceBox Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-mono text-lg md:text-xl text-white">SpaceBox</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans text-xl px-4 py-2 transition-colors ${
                  pathname === link.href
                    ? "text-[#4ade80] bg-[#1e3a8a]"
                    : "text-white hover:text-[#4ade80] hover:bg-[#1e3a8a]/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:block minecraft-btn px-4 py-2 text-white font-sans text-lg">
              Join Discord
            </button>
            <div className="hidden lg:block minecraft-box px-3 py-1 text-sm font-sans text-[#1e40af]">
              play.spacebox.co
            </div>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block font-sans text-xl px-4 py-3 transition-colors ${
                  pathname === link.href
                    ? "text-[#4ade80] bg-[#1e3a8a]"
                    : "text-white hover:text-[#4ade80] hover:bg-[#1e3a8a]/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
