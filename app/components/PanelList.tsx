import { Panel } from '../types'
import Image from 'next/image'

const panels: Panel[] = [
  {
    id: 1,
    title: "UNC Student Panel",
    description: "Interactive Q&A with current students from UNC",
    date: "2023-06-15",
    time: "19:00",
    link: "https://zoom.us/j/123456789",
    imageUrl: "/images/unc-panel.jpg",
  },
  {
    id: 2,
    title: "Navigating Life as a First-Generation College Student",
    description: "Learn from experienced first-gen students about their college journey",
    date: "2023-06-22",
    time: "18:30",
    link: "https://zoom.us/j/987654321",
    imageUrl: "/images/first-gen-panel.jpg",
  },
  // Add more panel data as needed
]

export default function PanelList() {
  return (
    <section id="panels" className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Upcoming and Past Panels</h2>
      <ul className="space-y-4">
        {panels.map((panel) => (
          <li key={panel.id} className="border-b pb-4">
            <h3 className="text-xl font-semibold">{panel.title}</h3>
            <div className="flex flex-col md:flex-row md:space-x-4 mt-2">
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
                <p className="text-gray-600">{panel.description}</p>
                <p className="text-sm text-gray-500 mt-2">
                  {new Date(`${panel.date}T${panel.time}`).toLocaleString()}
                </p>
                <a
                  href={panel.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline mt-2 inline-block"
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

