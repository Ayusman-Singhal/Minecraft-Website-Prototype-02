import { PageWrapper } from "@/components/page-wrapper"
import { PageHeader } from "@/components/page-header"
import { EventsSection } from "@/components/events-section"
import Image from "next/image"

export const metadata = {
  title: "Events - SpaceBox",
  description: "Join exciting seasonal events and limited-time challenges in SpaceBox!",
}

const upcomingEvents = [
  {
    name: "Cosmic Carnival",
    description: "A galaxy-wide celebration with mini-games, prizes, and exclusive cosmetics!",
    startDate: "Feb 14, 2026",
    endDate: "Feb 28, 2026",
    rewards: ["Carnival Mask", "Cosmic Confetti Trail", "Event Tokens"],
    status: "upcoming",
  },
  {
    name: "Asteroid Rush",
    description: "Race against other players to mine the most resources from a comet swarm!",
    startDate: "Mar 1, 2026",
    endDate: "Mar 15, 2026",
    rewards: ["Speed Boost Module", "Golden Pickaxe", "Asteroid Fragment"],
    status: "upcoming",
  },
  {
    name: "Void Invasion",
    description: "Defend your station against waves of void creatures. Survival mode!",
    startDate: "Mar 20, 2026",
    endDate: "Apr 5, 2026",
    rewards: ["Void Slayer Title", "Dark Matter Armor", "Invasion Trophy"],
    status: "upcoming",
  },
]

const pastEvents = [
  {
    name: "Winter Solstice",
    description: "Celebrate the cosmic winter with snow-themed challenges!",
    participants: "12,450",
    rewards: ["Ice Crystal Wings", "Snowflake Trail"],
  },
  {
    name: "Galaxy Games",
    description: "Competitive tournament across multiple game modes.",
    participants: "8,920",
    rewards: ["Champion Crown", "Galaxy Medal"],
  },
]

export default function EventsPage() {
  return (
    <PageWrapper>
      <PageHeader 
        title="Events" 
        subtitle="Limited-time adventures await!"
      />
      
      {/* Hero Banner */}
      <section className="py-12 bg-gradient-to-b from-[#b4e0fa] to-[#87CEEB]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="minecraft-box p-2 overflow-hidden">
            <div className="relative w-full h-64 md:h-80">
              <Image
                src="/images/event-banner.png"
                alt="Cosmic Events"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Current/Upcoming Events */}
      <section className="py-16 bg-gradient-to-b from-[#87CEEB] to-[#e8f4fc]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-mono text-3xl md:text-4xl text-[#1e40af] text-center mb-12">
            Upcoming Events
          </h2>

          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <div 
                key={event.name}
                className="minecraft-box p-6 bg-gradient-to-r from-white to-[#dbeafe]"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Event Image */}
                  <div className="relative w-full md:w-48 h-40 flex-shrink-0 bg-gradient-to-br from-[#4ade80]/30 to-[#22d3ee]/30 flex items-center justify-center">
                    <Image
                      src="/images/planet-logo.png"
                      alt={event.name}
                      width={100}
                      height={100}
                      className="object-contain float-animation"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="font-mono text-2xl text-[#1e40af]">{event.name}</h3>
                      <span className="text-xs bg-[#4ade80] text-[#1a365d] px-3 py-1 font-sans">
                        UPCOMING
                      </span>
                    </div>
                    <p className="font-sans text-lg text-[#475569] mb-3">{event.description}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm font-sans mb-4">
                      <span className="text-[#1e40af]">
                        Start: <span className="text-[#475569]">{event.startDate}</span>
                      </span>
                      <span className="text-[#1e40af]">
                        End: <span className="text-[#475569]">{event.endDate}</span>
                      </span>
                    </div>

                    <div>
                      <span className="font-sans text-sm text-[#1e40af]">Rewards:</span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {event.rewards.map((reward) => (
                          <span 
                            key={reward}
                            className="text-sm bg-[#fbbf24] text-[#1a365d] px-2 py-1 font-sans"
                          >
                            {reward}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex md:flex-col gap-2 justify-end">
                    <button className="minecraft-btn px-4 py-2 text-white font-sans text-lg">
                      Set Reminder
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Events from original component */}
      <EventsSection />

      {/* Past Events */}
      <section className="py-16 bg-[#e8f4fc]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-mono text-3xl md:text-4xl text-[#1e40af] text-center mb-12">
            Past Events
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastEvents.map((event) => (
              <div 
                key={event.name}
                className="minecraft-box p-6 bg-gradient-to-br from-gray-50 to-gray-100"
              >
                <h3 className="font-mono text-xl text-[#1e40af] mb-2">{event.name}</h3>
                <p className="font-sans text-lg text-[#475569] mb-3">{event.description}</p>
                <p className="font-sans text-sm text-[#1e40af] mb-2">
                  Participants: <span className="text-[#4ade80]">{event.participants}</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {event.rewards.map((reward) => (
                    <span 
                      key={reward}
                      className="text-sm bg-gray-300 text-[#475569] px-2 py-1 font-sans"
                    >
                      {reward}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Calendar CTA */}
      <section className="py-16 bg-gradient-to-b from-[#e8f4fc] to-[#87CEEB]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="minecraft-box p-8">
            <h2 className="font-mono text-2xl md:text-3xl text-[#1e40af] mb-4">
              Never Miss an Event!
            </h2>
            <p className="font-sans text-xl text-[#475569] mb-6">
              Subscribe to our event calendar and get notified about upcoming events, 
              exclusive rewards, and limited-time offers.
            </p>
            <button className="minecraft-btn minecraft-btn-blue px-8 py-4 text-white font-sans text-xl">
              Subscribe to Calendar
            </button>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
