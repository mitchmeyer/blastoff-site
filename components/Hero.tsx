import { Button } from '@/components/ui/button'
import { ArrowRight, Users, Lightbulb, Star } from 'lucide-react'
import Link from 'next/link'
import AnimatedBackground from './AnimatedBackground'
import RocketAnimation from './RocketAnimation'

export default function Hero() {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-br from-[#FF5C28] via-[#FF8C28] to-[#FFB728] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white text-center animate-fade-in-up relative z-10">
              Learn from those living it.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 text-center max-w-3xl mx-auto mb-12 animate-fade-in-up animation-delay-200 relative z-10">
              Live panels with college students: Gain insights, ask questions, and show universities you care.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-12 animate-fade-in-up animation-delay-400">
              {[
                { icon: Lightbulb, title: "Live Insights", description: "Real-time Q&A with current students" },
                { icon: Users, title: "Diverse Perspectives", description: "Hear from students across various universities" },
                { icon: Star, title: "Demonstrated Interest", description: "Show schools you're engaged and interested" }
              ].map((box, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white flex flex-col items-center text-center transition-all duration-300 hover:bg-white/20">
                  <box.icon className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{box.title}</h3>
                  <p className="text-sm">{box.description}</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animation-delay-600">
              <Link href="/panels">
                <Button size="lg" className="text-lg bg-[#FF5C28] text-white hover:bg-[#FF5C28]/90 transition-all duration-300 ease-in-out transform hover:scale-105">
                  View our panels
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg text-[#FF5C28] border-[#FF5C28] hover:bg-[#FF5C28]/10 transition-all duration-300 ease-in-out transform hover:scale-105">
                Book a call
              </Button>
            </div>
            
            <p className="text-sm text-white/70 animate-fade-in-up animation-delay-800">
              Join thousands of students making more informed decisions about their future
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-white/5 rounded-full filter blur-3xl"></div>
      <RocketAnimation />
    </section>
  )
}

