import { PageWrapper } from "@/components/page-wrapper"
import { PageHeader } from "@/components/page-header"
import Image from "next/image"

export const metadata = {
  title: "Spaceships - SpaceBox",
  description: "Build and customize your own spaceship fleet in SpaceBox!",
}

const ships = [
  {
    name: "Scout Pod",
    description: "A nimble single-pilot craft perfect for exploration and resource gathering.",
    speed: 90,
    cargo: 20,
    armor: 30,
    tier: "Starter",
    image: "spaceship-scout.png",
  },
  {
    name: "Cargo Hauler",
    description: "Massive cargo capacity for serious space traders and miners.",
    speed: 40,
    cargo: 95,
    armor: 60,
    tier: "Common",
    image: "spaceship-cargo.png",
  },
  {
    name: "Stellar Cruiser",
    description: "Balanced ship for adventurers who want it all.",
    speed: 70,
    cargo: 50,
    armor: 70,
    tier: "Rare",
    image: "spaceship-cruiser.png",
  },
  {
    name: "Void Runner",
    description: "The fastest ship in the galaxy. Outrun anything.",
    speed: 100,
    cargo: 25,
    armor: 40,
    tier: "Epic",
    image: "spaceship-runner.png",
  },
  {
    name: "Galactic Fortress",
    description: "A mobile space station. Practically indestructible.",
    speed: 20,
    cargo: 80,
    armor: 100,
    tier: "Legendary",
    image: "spaceship-fortress.png",
  },
  {
    name: "Cosmic Phoenix",
    description: "Mythical ship said to be forged in the heart of a dying star.",
    speed: 85,
    cargo: 60,
    armor: 90,
    tier: "Mythic",
    image: "spaceship-phoenix.png",
  },
]

const tierColors: Record<string, string> = {
  Starter: "border-gray-400 bg-gray-50",
  Common: "border-green-400 bg-green-50",
  Rare: "border-blue-400 bg-blue-50",
  Epic: "border-purple-400 bg-purple-50",
  Legendary: "border-orange-400 bg-orange-50",
  Mythic: "border-red-400 bg-red-50",
}

const tierTextColors: Record<string, string> = {
  Starter: "text-gray-600",
  Common: "text-green-600",
  Rare: "text-blue-600",
  Epic: "text-purple-600",
  Legendary: "text-orange-600",
  Mythic: "text-red-600",
}

function StatBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="mb-2">
      <div className="flex justify-between text-sm font-sans mb-1">
        <span className="text-[#475569]">{label}</span>
        <span className="text-[#1e40af]">{value}%</span>
      </div>
      <div className="h-3 bg-gray-200 border-2 border-gray-300">
        <div 
          className="h-full bg-gradient-to-r from-[#3b82f6] to-[#1e40af]"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}

export default function ShipsPage() {
  return (
    <PageWrapper>
      <PageHeader 
        title="Spaceships" 
        subtitle="Build, upgrade, and command your fleet"
      />
      
      {/* Ship Gallery */}
      <section className="py-16 bg-gradient-to-b from-[#87CEEB] to-[#e8f4fc]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ships.map((ship) => (
              <div 
                key={ship.name}
                className={`minecraft-box p-6 border-4 ${tierColors[ship.tier]} hover:translate-y-[-4px] transition-transform`}
              >
                {/* Ship Image */}
                <div className="relative w-full h-40 mb-4 bg-gradient-to-b from-[#1e40af]/10 to-transparent flex items-center justify-center">
                  <Image
                    src={`/images/${ship.image}`}
                    alt={ship.name}
                    width={120}
                    height={120}
                    className="object-contain float-animation"
                  />
                </div>
                
                {/* Ship Info */}
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-mono text-xl text-[#1e40af]">{ship.name}</h3>
                  <span className={`font-mono text-sm ${tierTextColors[ship.tier]}`}>
                    {ship.tier}
                  </span>
                </div>
                <p className="font-sans text-lg text-[#475569] mb-4">{ship.description}</p>
                
                {/* Stats */}
                <StatBar label="Speed" value={ship.speed} />
                <StatBar label="Cargo" value={ship.cargo} />
                <StatBar label="Armor" value={ship.armor} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ship Building Info */}
      <section className="py-16 bg-[#e8f4fc]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="minecraft-box p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative w-48 h-48 flex-shrink-0">
                <Image
                  src="/images/spaceship-scout.png"
                  alt="Ship builder"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h2 className="font-mono text-2xl md:text-3xl text-[#1e40af] mb-4">
                  Build Your Dream Ship
                </h2>
                <p className="font-sans text-xl text-[#475569] mb-4">
                  Collect blueprints, gather resources, and construct your perfect spaceship. 
                  Each ship can be customized with unique modules and upgrades.
                </p>
                <button className="minecraft-btn px-6 py-3 text-white font-sans text-xl">
                  Start Building
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
