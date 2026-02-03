export function EventsSection() {
  const events = [
    {
      title: "Dynamic Events & Cosmic Weather",
      description: "Solar cycles and cosmic weather influence the environment, such as station closures or events like secret asteroid auctions.",
      icon: "🌟",
    },
    {
      title: "An Exceptional Immersion",
      description: "Engage in dialogues with quirky alien characters, collect cosmic coins throughout the worlds, and listen to distant stars humming at night.",
      icon: "🚀",
    },
  ]

  return (
    <section className="relative py-16 px-4 bg-gradient-to-b from-[#bfdbfe] to-[#dbeafe]">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div key={index} className="minecraft-box p-6 text-center">
              <div className="text-4xl mb-4">{event.icon}</div>
              <h4 className="font-mono text-xl text-[#1e40af] mb-3">{event.title}</h4>
              <p className="font-sans text-lg text-[#1a365d]">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
