import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrustSection } from "@/components/trust-section"
import { ServicesSection } from "@/components/services-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ReviewsSection } from "@/components/reviews-section"
import { ProcessSection } from "@/components/process-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustSection />
        <ServicesSection />
        <WhyChooseUs />
        <ReviewsSection />
        <ProcessSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
