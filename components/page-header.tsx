import Image from "next/image"

interface PageHeaderProps {
  title: string
  subtitle?: string
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-b from-[#1e40af] via-[#3b82f6] to-[#87CEEB]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      {/* Floating decorations */}
      <div className="absolute top-20 left-10 w-16 h-16 float-animation opacity-60">
        <Image
          src="/images/planet-logo.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-10 right-20 w-20 h-20 float-animation opacity-40" style={{ animationDelay: "1s" }}>
        <Image
          src="/images/planet-logo.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 
          className="font-mono text-4xl md:text-6xl text-white mb-4"
          style={{ textShadow: "4px 4px 0 rgba(0,0,0,0.3)" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="font-sans text-xl md:text-2xl text-white/90">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
