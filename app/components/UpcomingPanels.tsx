import Image from 'next/image'
import { Panel } from '../types'

const upcomingPanels: Panel[] = [
  {
    id: 1,
    title: "UNC Student Panel",
    description: "Interactive Q&A with current students from UNC",
    date: "2023-06-15",
    time: "19:00",
    link: "https://zoom.us/j/123456789",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Navigating Life as a First-Generation College Student",
    description: "Learn from experienced first-gen students about their college journey",
    date: "2023-06-22",
    time: "18:30",
    link: "https://zoom.us/j/987654321",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  // Add more upcoming panel data as needed
]

export default function UpcomingPanels() {
  return (
    <section id="upcoming-panels" className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-4">Upcoming Panels</h2>
      <ul className="space-y-6">
        {upcomingPanels.map((panel) => (
          <li key={panel.id} className="border-b pb-6">
            <h3 className="text-xl font-semibold mb-2">{panel.title}</h3>
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="mb-4 md:mb-0">
                <Image
                  src={panel.imageUrl}
                  alt={`Preview for ${panel.title}`}
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </div>
              <div className="flex-1">
                <p className="text-gray-600 mb-2">{panel.description}</p>
                <p className="text-sm text-gray-500 mb-2">
                  {new Date(`${panel.date}T${panel.time}`).toLocaleString()}
                </p>
                <a
                  href={panel.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  Join Session
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

