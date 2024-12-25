import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Link from 'next/link'

export default function Pricing({ id }: { id?: string }) {
  return (
    <section id={id} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600">
            Affordable access to invaluable college insights
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 rounded-2xl shadow-lg p-8 border border-gray-200">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">School Subscription</h3>
              <div className="flex justify-center items-baseline mb-2">
                <span className="text-5xl font-bold">$100</span>
                <span className="text-gray-600 ml-2">/month</span>
              </div>
              <p className="text-gray-600">First school in district</p>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                "Access to all live sessions",
                "Session recordings library",
                "Monthly schedule of sessions",
                "Custom topic requests",
                "Attendance tracking for admissions",
                "$50/month for additional schools"
              ].map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-[#FF5C28] mr-3" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link href="/signup">
              <Button className="w-full bg-[#FF5C28] hover:bg-[#FF5C28]/90">
                Sign Up Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

