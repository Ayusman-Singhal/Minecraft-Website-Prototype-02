import { PageWrapper } from "@/components/page-wrapper"
import { PageHeader } from "@/components/page-header"
import { SkullsSection } from "@/components/skulls-section"
import Image from "next/image"

export const metadata = {
  title: "Legendary Artifacts - SpaceBox",
  description: "Discover and collect legendary cosmic artifacts in SpaceBox!",
}

const artifacts = [
  {
    name: "Crystal of Andromeda",
    description: "A shimmering crystal said to contain the light of a thousand stars.",
    power: "Grants infinite energy regeneration",
    location: "Andromeda Nebula",
    discovered: false,
  },
  {
    name: "Void Heart",
    description: "A pulsing orb of pure darkness extracted from a black hole's core.",
    power: "Allows travel through wormholes",
    location: "The Great Void",
    discovered: false,
  },
  {
    name: "Solar Crown",
    description: "An ancient headpiece forged in the corona of a dying sun.",
    power: "Immunity to all heat damage",
    location: "Solaris Prime",
    discovered: true,
  },
  {
    name: "Cosmic Compass",
    description: "Points the way to hidden treasures across the universe.",
    power: "Reveals secret locations",
    location: "Wanderer's Rest",
    discovered: true,
  },
  {
    name: "Nebula's Breath",
    description: "A swirling vial containing the essence of creation itself.",
    power: "Allows terraforming of planets",
    location: "Genesis Cloud",
    discovered: false,
  },
  {
    name: "Star Forge Hammer",
    description: "The legendary tool used by ancient cosmic smiths.",
    power: "Craft legendary-tier items",
    location: "Unknown",
    discovered: false,
  },
]

export default function ArtifactsPage() {
  return (
    <PageWrapper>
      <PageHeader 
        title="Legendary Artifacts" 
        subtitle="Ancient relics of immense cosmic power"
      />
      
      {/* Artifacts Grid */}
      <section className="py-16 bg-gradient-to-b from-[#87CEEB] to-[#e8f4fc]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="font-sans text-xl text-[#475569]">
              Scattered across the universe are artifacts of unimaginable power. 
              Will you be the one to find them all?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {artifacts.map((artifact) => (
              <div 
                key={artifact.name}
                className={`minecraft-box p-6 ${artifact.discovered ? 'bg-gradient-to-br from-white to-[#fef3c7]' : 'bg-gradient-to-br from-gray-100 to-gray-200'}`}
              >
                <div className="flex items-start gap-4">
                  {/* Artifact Icon */}
                  <div className={`relative w-20 h-20 flex-shrink-0 ${artifact.discovered ? '' : 'grayscale opacity-50'}`}>
                    <Image
                      src="/images/planet-logo.png"
                      alt={artifact.name}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-mono text-xl text-[#1e40af]">{artifact.name}</h3>
                      {artifact.discovered ? (
                        <span className="text-xs bg-green-500 text-white px-2 py-1">DISCOVERED</span>
                      ) : (
                        <span className="text-xs bg-gray-500 text-white px-2 py-1">UNDISCOVERED</span>
                      )}
                    </div>
                    <p className="font-sans text-lg text-[#475569] mb-3">{artifact.description}</p>
                    
                    <div className="space-y-1 text-sm font-sans">
                      <p className="text-[#1e40af]">
                        <span className="text-[#475569]">Power:</span> {artifact.discovered ? artifact.power : '???'}
                      </p>
                      <p className="text-[#1e40af]">
                        <span className="text-[#475569]">Location:</span> {artifact.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Original Skulls Section with slight modification */}
      <SkullsSection />

      {/* Quest Info */}
      <section className="py-16 bg-[#e8f4fc]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="minecraft-box p-8">
            <h2 className="font-mono text-2xl md:text-3xl text-[#1e40af] mb-4">
              Begin Your Quest
            </h2>
            <p className="font-sans text-xl text-[#475569] mb-6">
              Each artifact requires completing challenging quests, defeating powerful bosses, 
              and solving ancient cosmic puzzles. Are you ready for the ultimate adventure?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="minecraft-btn px-6 py-3 text-white font-sans text-xl">
                View Quest Log
              </button>
              <button className="minecraft-btn minecraft-btn-blue px-6 py-3 text-white font-sans text-xl">
                Join Expedition
              </button>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
