import Image from "next/image"

export function SkullsSection() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-[#93c5fd] to-[#bfdbfe]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16">
          <div className="flex-1">
            <div className="minecraft-box p-4 inline-block float-animation">
              <div className="relative w-48 h-48 md:w-64 md:h-64">
                <Image
                  src="/images/planet-logo.png"
                  alt="Planet artifact"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h3 className="font-mono text-2xl md:text-3xl text-[#1e40af] mb-4">
              Collect 10 Legendary Artifacts
            </h3>
            <p className="font-sans text-xl md:text-2xl text-[#1a365d] leading-relaxed">
              Embark on an epic quest to collect all the legendary cosmic artifacts, from the 
              electrifying Storm Crystal that crackles with lightning to the elusive Nebula Core 
              that pulses with cosmic energy. Each artifact grants unique powers and abilities!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
