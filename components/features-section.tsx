import Image from "next/image"

interface FeatureCardProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  reverse?: boolean
}

function FeatureCard({ title, description, imageSrc, imageAlt, reverse }: FeatureCardProps) {
  // Make inventory UI larger
  const isInventoryUI = imageSrc.includes('inventory-ui')
  const imageSize = isInventoryUI ? "w-80 h-80 md:w-96 md:h-96" : "w-64 h-64 md:w-80 md:h-80"
  
  return (
    <div className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-8 lg:gap-16`}>
      <div className="flex-1 text-center lg:text-left">
        <h3 className="font-mono text-2xl md:text-3xl text-[#1e40af] mb-4">
          {title}
        </h3>
        <p className="font-sans text-xl md:text-2xl text-[#1a365d] leading-relaxed">
          {description}
        </p>
      </div>
      <div className="flex-1 relative flex justify-center">
        <div className={`relative ${imageSize}`}>
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={imageAlt}
            fill
            className="object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </div>
  )
}

export function FeaturesSection() {
  const features = [
    {
      title: "Expand your own space station and harvest resources",
      description: "Your adventure begins on a modest 4x4 asteroid. As you level up and master the cosmos, watch your domain grow. Engage in space farming and resource harvesting to sustain and enhance your station. Build, craft, and create your ideal cosmic paradise.",
      imageSrc: "/images/steve-chest.png",
      imageAlt: "Steve with treasure chest",
    },
    {
      title: "Explore a boundless galaxy",
      description: "Launch your own spaceship and explore planets brimming with friendly aliens and hidden secrets. Delight in a cosmic, cartoon-inspired universe where each planet promises discovery and adventure.",
      imageSrc: "/images/elytra-character.png",
      imageAlt: "Character with elytra",
      reverse: true,
    },
    {
      title: "Embark on quests, conquer foes, and customize your character",
      description: "Battle through hordes of space monsters and formidable cosmic bosses, each more challenging than the last. Level up to gain character points, allowing you to customize and enhance your abilities. Embark on a quest for the legendary cosmic artifacts.",
      imageSrc: "/images/inventory-ui.png",
      imageAlt: "Game inventory interface",
    },
  ]

  return (
    <section id="features" className="relative py-20 px-4 bg-gradient-to-b from-[#87CEEB] to-[#e8f4fc]">
      <div className="max-w-6xl mx-auto space-y-20">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} reverse={feature.reverse} />
        ))}
      </div>
    </section>
  )
}
