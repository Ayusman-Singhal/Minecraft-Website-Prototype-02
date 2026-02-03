export function ItemsSection() {
  const jobs = [
    "Space Miner",
    "Asteroid Logger", 
    "Cosmic Blacksmith",
    "Planet Harvester",
    "Alien Alchemist",
    "Tech Tinkerer",
    "Bounty Hunter",
    "Galaxy Chef",
    "Nebula Fisher",
    "Star Jeweler",
    "Space Tailor",
    "Rocket Engineer",
  ]

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-[#b4e0fa] to-[#87CEEB]">
      <div className="max-w-6xl mx-auto">
        <div className="minecraft-box p-8 md:p-12">
          <h2 className="font-mono text-3xl md:text-4xl text-[#1e40af] text-center mb-6">
            Craft, master, and equip 1000+ items
          </h2>
          <p className="font-sans text-xl md:text-2xl text-[#1a365d] text-center leading-relaxed max-w-4xl mx-auto mb-8">
            Dive into a universe with countless items and space professions like asteroid mining, 
            cosmic blacksmithing, and alien cooking. Craft, trade, and master unique items from your 
            adventures, enhancing your statistics like wisdom or defense. Equip jetpacks, space rings, 
            cosmic amulets, cargo packs, and alien pets alongside your base items for further customization.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="font-sans text-xl text-[#1e40af]">All jobs:</span>
            {jobs.map((job, index) => (
              <span key={job} className="inline-block">
                <span className="font-sans text-lg text-[#3b82f6] hover:text-[#22d3ee] cursor-pointer transition-colors">
                  {job}
                </span>
                {index < jobs.length - 1 && <span className="text-[#93c5fd] mx-1">•</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
