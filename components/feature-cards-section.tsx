import Image from "next/image"
import Link from "next/link"

interface SmallFeatureCardProps {
  title: string
  bgColor: string
  textColor: string
  href: string
}

function SmallFeatureCard({ title, bgColor, textColor, href }: SmallFeatureCardProps) {
  return (
    <Link href={href}>
      <div 
        className="relative p-6 minecraft-box overflow-hidden group cursor-pointer transition-transform hover:scale-105"
        style={{ backgroundColor: bgColor }}
      >
        <h4 className="font-mono text-xl md:text-2xl mb-2" style={{ color: textColor }}>
          {title}
        </h4>
        <div className="absolute bottom-2 right-2 w-16 h-16 opacity-80">
          <Image
            src="/images/mascot.png"
            alt="Mascot"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </Link>
  )
}

export function FeatureCardsSection() {
  const cards = [
    { title: "Community Maps", bgColor: "#4ade80", textColor: "#1e40af", href: "/features" },
    { title: "Unlock Cosmetics", bgColor: "#22d3ee", textColor: "#1e40af", href: "/items" },
    { title: "Analytics", bgColor: "#64748b", textColor: "#1e40af", href: "/features" },
  ]

  return (
    <section className="relative py-16 px-6 lg:px-12 xl:px-16 bg-gradient-to-b from-[#c4e5f7] to-[#b4e0fa]">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="font-mono text-3xl md:text-4xl text-[#1e40af] text-center mb-12">
          Discover More Features
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <SmallFeatureCard key={index} {...card} />
          ))}
        </div>

        {/* Reference image showcase */}
        <div className="mt-12 flex justify-center">
          <div className="minecraft-box p-2 inline-block">
            <Image
              src="/images/feature-cards.png"
              alt="Feature showcase"
              width={400}
              height={200}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
