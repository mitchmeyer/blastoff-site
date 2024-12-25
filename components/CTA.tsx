import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24 bg-[#FF5C28] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Give Your Students an Edge?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join schools across the country in providing valuable insights and opportunities to your students.
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="text-lg bg-white text-[#FF5C28] hover:bg-gray-100">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <p className="mt-6 opacity-90">
            Questions? Contact Mitchell Meyer at{" "}
            <a href="mailto:Mitchell@blastoff.org" className="underline hover:no-underline">
              Mitchell@blastoff.org
            </a>
            {" "}or call{" "}
            <a href="tel:5165921319" className="underline hover:no-underline">
              (516) 592-1319
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

