import { CheckCircle, Users, Calendar, School, Award, Lightbulb } from 'lucide-react'

const features = [
  {
    icon: Users,
    title: "Direct Student Connections",
    description: "Interactive Q&A with current students from top universities like UNC, NC State, Michigan, and UVA."
  },
  {
    icon: Calendar,
    title: "Weekly Live Sessions",
    description: "Regular webinars covering everything from campus life to specific majors and career paths."
  },
  {
    icon: School,
    title: "Demonstrated Interest",
    description: "Attendance information sent to admissions offices, boosting your application through demonstrated interest."
  },
  {
    icon: Award,
    title: "Insider Knowledge",
    description: "Gain unique insights about campus life, academics, and opportunities not available anywhere else."
  },
  {
    icon: CheckCircle,
    title: "Diverse Perspectives",
    description: "Learn about various post-graduate options including military careers, trade skills, and entrepreneurship."
  },
  {
    icon: Lightbulb,
    title: "Customized Sessions",
    description: "Schools can request specific topics or universities for tailored panel discussions."
  }
]

export default function Features({ id }: { id?: string }) {
  return (
    <section id={id} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1E1E1E]">
            Why Choose Blastoff Live Sessions?
          </h2>
          <p className="text-xl text-gray-600">
            Get the insights and connections you need for your future
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <feature.icon className="h-12 w-12 text-[#FF5C28] mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-[#1E1E1E]">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

