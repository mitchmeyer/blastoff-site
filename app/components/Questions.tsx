import { School } from 'lucide-react'

const questions = [
  {
    university: "UNC Chapel Hill",
    title: "What's the engineering program like?",
    description: "I'm interested in applying to the engineering program and wanted to know more about the specific concentrations and research opportunities available."
  },
  {
    university: "NC State",
    title: "How's the campus culture?",
    description: "I've heard great things about student life at NC State. Can you tell me more about clubs, events, and what makes the community special?"
  },
  {
    university: "Duke University",
    title: "Pre-med track experiences?",
    description: "Looking to hear from current pre-med students about their experiences, course load, and research opportunities. What should I expect?"
  }
]

export default function Questions() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Questions like...</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {questions.map((question, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border">
              <div className="flex items-center gap-2 mb-4">
                <School className="h-5 w-5 text-[#FF5C28]" />
                <span className="text-sm text-gray-600">{question.university}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{question.title}</h3>
              <p className="text-gray-600">{question.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

