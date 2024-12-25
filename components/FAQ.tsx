import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How can students participate?",
    answer: "Students can join sessions through a unique link shared by their school. The link becomes active 15 minutes before the session begins."
  },
  {
    question: "What makes these sessions different?",
    answer: "Students hear directly from peers and professionals living these experiences now, offering authentic, relatable advice tailored to their aspirations."
  },
  {
    question: "Does it give students an edge in the admissions process?",
    answer: "Yes! Students gain insider knowledge from current college students, and if schools opt in, attendance information can be sent to respective admissions offices to demonstrate interest, a factor some schools consider in their admissions decisions."
  },
  {
    question: "How often are sessions offered?",
    answer: "Live sessions are hosted weekly, with a rotating range of topics to ensure inclusivity and relevance for all students."
  },
  {
    question: "Can schools request specific topics?",
    answer: "Schools can suggest topics or request tailored sessions, such as panels featuring students from particular universities or professionals in specific career fields."
  }
]

export default function FAQ({ id }: { id?: string }) {
  return (
    <section id={id} className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Blastoff Live Sessions
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-white rounded-xl shadow-sm">
            {faqs.map((faq, index) => (
   <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">{faq.question}</AccordionTrigger>
                <AccordionContent className="px-6 py-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

