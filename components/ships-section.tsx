import Image from "next/image"

export function ShipsSection() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-[#87CEEB] to-[#93c5fd]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="flex-1">
            <div className="minecraft-box p-4 inline-block">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <Image
                  src="/images/golden-chest.png"
                  alt="Space ship"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h3 className="font-mono text-2xl md:text-3xl text-[#1e40af] mb-4">
              Fly with Spaceships
            </h3>
            <p className="font-sans text-xl md:text-2xl text-[#1a365d] leading-relaxed">
              Explore an endless variety of spaceships of all sizes and classes. Set up workshops 
              on board, store your cosmic treasures in cargo holds, and send your ships on expeditions 
              to uncover hidden galaxies. The faster your ship, the shorter your warp delays. Create 
              and customize your fleet to maximize your adventures across the universe.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
