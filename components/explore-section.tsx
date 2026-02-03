import Link from "next/link"
import { text } from "stream/consumers"

interface ExploreCardProps {
  title: string
  bgColor: string
  href: string
  textColor: string
}

function ExploreCard({ title, bgColor, href, textColor }: ExploreCardProps) {
  return (
    <Link href={href}>
      <div 
        className="minecraft-box p-6 text-center cursor-pointer transition-transform hover:scale-105 hover:-translate-y-2"
        style={{ backgroundColor: bgColor }}
      >
        <h4 className="font-mono text-lg md:text-xl" style={{ color: textColor }}>{title}</h4>
      </div>
    </Link>
  )
}

export function ExploreSection() {
  const cards = [
    { title: "Items & Recipes", bgColor: "#3b82f6", textColor: "#1e40af", href: "/items" },
    { title: "Spaceships", bgColor: "#22d3ee", textColor: "#1e40af", href: "/ships" },
    { title: "Events", bgColor: "#4ade80", textColor: "#1e40af", href: "/events" },
  ]

  return (
    <section id="explore" className="relative py-20 px-6 lg:px-12 xl:px-16 bg-[#e8f4fc]">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-mono text-3xl md:text-4xl text-[#1e40af] text-center mb-4">
          Explore our Universe
        </h2>
        <p className="font-sans text-xl text-[#475569] text-center mb-12">
          Check all the items, recipes, galaxy map and more!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <ExploreCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
