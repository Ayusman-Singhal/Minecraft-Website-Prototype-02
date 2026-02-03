import { PageWrapper } from "@/components/page-wrapper"
import { PageHeader } from "@/components/page-header"
import { FeaturesSection } from "@/components/features-section"
import { MoreSection } from "@/components/more-section"

export const metadata = {
  title: "Features - SpaceBox",
  description: "Discover all the amazing features of SpaceBox - expand your space station, explore the galaxy, and conquer cosmic challenges!",
}

export default function FeaturesPage() {
  return (
    <PageWrapper>
      <PageHeader 
        title="Features" 
        subtitle="Discover everything SpaceBox has to offer"
      />
      <FeaturesSection />
      <MoreSection />
    </PageWrapper>
  )
}
