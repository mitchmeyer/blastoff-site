import Image from 'next/image'
import { Panel } from '../types'

const pastPanels: Panel[] = [
  {
    id: 3,
    title: "NC State Engineering Program Spotlight",
    description: "Discover the innovative engineering programs at NC State",
    date: "2023-05-25",
    time: "18:00",
    link: "https://example.com/recording-link",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "Exploring Trade Schools and Vocational Training",
    description: "Learn about alternative career paths and vocational opportunities",
    date: "2023-05-18",
    time: "19:30",
    link: "https://example.com/recording-link",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  // Add more past panel data as needed
]

export default function PastPanels() {
  return (
    <section id="past-panels" className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Past Panels</h2>
      <ul className="space-y-6">
        {pastPanels.map((panel) => (
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
                  className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                >
                  View Recording
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

