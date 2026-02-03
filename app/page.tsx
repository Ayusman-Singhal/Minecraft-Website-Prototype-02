import { HeroSection } from "@/components/hero-section"
import { WelcomeSection } from "@/components/welcome-section"
import { FeatureCardsSection } from "@/components/feature-cards-section"
import { ExploreSection } from "@/components/explore-section"
import { PageWrapper } from "@/components/page-wrapper"

export default function Home() {
  return (
    <PageWrapper>
      <HeroSection />
      <WelcomeSection />
      <FeatureCardsSection />
      <ExploreSection />
    </PageWrapper>
  )
}
