import Image from "next/image"

export function Footer() {
  return (
    <footer id="community" className="relative py-12 px-6 lg:px-12 xl:px-16 bg-gradient-to-b from-[#e8f4fc] to-[#c4e5f7]">
      <div className="max-w-screen-2xl mx-auto">
        <div className="minecraft-box p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo and info */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 relative">
                <Image
                  src="/images/planet-logo.png"
                  alt="SpaceBox Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-mono text-2xl text-[#1e40af]">SpaceBox</h3>
                <p className="font-sans text-lg text-[#475569]">Minecraft Space Adventure</p>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="font-sans text-lg text-[#3b82f6] hover:text-[#1e40af] transition-colors">
                Discord
              </a>
              <a href="#" className="font-sans text-lg text-[#3b82f6] hover:text-[#1e40af] transition-colors">
                Twitter
              </a>
              <a href="#" className="font-sans text-lg text-[#3b82f6] hover:text-[#1e40af] transition-colors">
                YouTube
              </a>
              <a href="#" className="font-sans text-lg text-[#3b82f6] hover:text-[#1e40af] transition-colors">
                Wiki
              </a>
            </div>

            {/* Server info */}
            <div className="text-center md:text-right">
              <div className="minecraft-box px-4 py-2 inline-block bg-[#dbeafe]">
                <span className="font-sans text-lg text-[#1e40af]">play.spacebox.co</span>
              </div>
              <div className="mt-2 flex items-center justify-center md:justify-end gap-2">
                <div className="w-3 h-3 bg-[#4ade80] rounded-full animate-pulse"></div>
                <span className="font-sans text-sm text-[#475569]">Online</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t-4 border-[#93c5fd]">
            <p className="font-sans text-center text-[#475569]">
              © 2026 SpaceBox. Not affiliated with Mojang or Microsoft.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
