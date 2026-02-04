import { PageWrapper } from "@/components/page-wrapper"
import { PageHeader } from "@/components/page-header"
import { ItemsSection } from "@/components/items-section"
import Image from "next/image"

export const metadata = {
  title: "Items & Jobs - SpaceBox",
  description: "Explore the unique items, resources, and space jobs available in SpaceBox!",
}

const itemCategories = [
  {
    name: "Space Crystals",
    description: "Rare crystals found on distant asteroids. Used for advanced crafting.",
    rarity: "Legendary",
    color: "from-purple-400 to-blue-500",
    image: "space-crystal.png",
  },
  {
    name: "Cosmic Ore",
    description: "Basic building material harvested from space rocks.",
    rarity: "Common",
    color: "from-gray-400 to-gray-600",
    image: "cosmic-ore.png",
  },
  {
    name: "Nebula Dust",
    description: "Magical dust collected from passing nebulae. Powers special abilities.",
    rarity: "Rare",
    color: "from-pink-400 to-purple-500",
    image: "nebula-dust.png",
  },
  {
    name: "Solar Fragments",
    description: "Energy-rich fragments from nearby stars. Essential for fuel.",
    rarity: "Uncommon",
    color: "from-yellow-400 to-orange-500",
    image: "solar-fragments.png",
  },
  {
    name: "Void Essence",
    description: "Mysterious substance from the edges of black holes.",
    rarity: "Mythic",
    color: "from-indigo-600 to-black",
    image: "void-essence.png",
  },
  {
    name: "Alien Artifacts",
    description: "Ancient relics left behind by cosmic civilizations.",
    rarity: "Epic",
    color: "from-cyan-400 to-teal-500",
    image: "alien-artifact.png",
  },
]

const rarityColors: Record<string, string> = {
  Common: "bg-gray-500",
  Uncommon: "bg-green-500",
  Rare: "bg-blue-500",
  Epic: "bg-purple-500",
  Legendary: "bg-orange-500",
  Mythic: "bg-red-500",
}

export default function ItemsPage() {
  return (
    <PageWrapper>
      <PageHeader 
        title="Items & Jobs" 
        subtitle="Collect resources and master your cosmic profession"
      />
      
      {/* Items Section */}
      <section className="py-16 bg-gradient-to-b from-[#87CEEB] to-[#e8f4fc]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-mono text-3xl md:text-4xl text-[#1e40af] text-center mb-12">
            Collectible Items
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {itemCategories.map((item) => (
              <div 
                key={item.name}
                className="minecraft-box p-6 hover:translate-y-[-4px] transition-transform"
              >
                <div className="relative w-20 h-20 mb-4 mx-auto">
                  <div className={`w-full h-full flex items-center justify-center p-2`}>
                    <Image
                      src={`/images/${item.image}`}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-mono text-xl text-[#1e40af]">{item.name}</h3>
                  <span className={`text-xs text-white px-2 py-1 ${rarityColors[item.rarity]}`}>
                    {item.rarity}
                  </span>
                </div>
                <p className="font-sans text-lg text-[#475569]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs Section from original component */}
      <ItemsSection />

      {/* Crafting Preview */}
      <section className="py-16 bg-[#e8f4fc]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-mono text-3xl md:text-4xl text-[#1e40af] mb-6">
            Crafting System
          </h2>
          <p className="font-sans text-xl text-[#475569] mb-8">
            Combine items to create powerful equipment, space vehicles, and station upgrades. 
            Master the art of cosmic crafting!
          </p>
          <div className="minecraft-box p-8 inline-block">
            <div className="relative w-48 h-48 mx-auto">
              <Image
                src="/images/inventory-ui.png"
                alt="Crafting interface"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
