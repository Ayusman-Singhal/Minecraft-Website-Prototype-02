import Image from "next/image"

export function WelcomeSection() {
  return (
    <section className="relative py-20 px-6 lg:px-12 xl:px-16 bg-gradient-to-b from-[#e8f4fc] to-[#dbeafe]">
      <div className="max-w-screen-2xl mx-auto">
        <div className="minecraft-box p-8 md:p-12">
          <h2 className="font-mono text-3xl md:text-4xl text-[#1e40af] text-center mb-6">
            Welcome to SpaceBox
          </h2>
          <p className="font-sans text-xl md:text-2xl text-[#1a365d] text-center leading-relaxed max-w-4xl mx-auto mb-8">
            Start on a small asteroid and transform it into your own cosmic kingdom, block by block! 
            SpaceBox combines MMORPG, skyblock, and space exploration: discover uncharted planets, 
            gather rare cosmic resources, and face powerful alien creatures to level up both your 
            character and your space station. Build, progress, and become the master of the universe.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <span className="font-sans text-lg text-[#475569]">Available in:</span>
            {["English", "Français", "Português", "中文", "Español", "Deutsch", "Русский", "Polski", "Italiano", "日本語"].map((lang) => (
              <span key={lang} className="font-sans text-lg text-[#3b82f6] hover:text-[#1e40af] cursor-pointer transition-colors">
                {lang}
              </span>
            ))}
          </div>

          <div className="flex justify-center">
            <button className="minecraft-btn px-10 py-4 text-white font-sans text-2xl">
              Start Playing
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
