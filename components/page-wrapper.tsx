import React from "react"
import { Navbar } from "./navbar"
import { Footer } from "./footer"

interface PageWrapperProps {
  children: React.ReactNode
  showNavbar?: boolean
  showFooter?: boolean
}

export function PageWrapper({ 
  children, 
  showNavbar = true, 
  showFooter = true 
}: PageWrapperProps) {
  return (
    <>
      {showNavbar && <Navbar />}
      <main className="overflow-x-hidden">
        {children}
      </main>
      {showFooter && <Footer />}
    </>
  )
}
