import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import SessionPopup from '@/components/SessionPopup'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features id="features" />
        <Pricing id="pricing" />
        <FAQ id="faq" />
        <CTA />
      </main>
      <Footer />
      <SessionPopup />
    </div>
  )
}

