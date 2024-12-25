import { Panel } from '../types'

const panels: Panel[] = [
  {
    id: 1,
    title: "UNC Student Panel",
    date: "2023-06-15",
    time: "19:00",
  },
  {
    id: 2,
    title: "Navigating Life as a First-Generation College Student",
    date: "2023-06-22",
    time: "18:30",
  },
  // Add more upcoming panel data as needed
]

export default function Calendar() {
  return (
    <section id="calendar" className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Upcoming Sessions</h2>
      <ul className="space-y-2">
        {panels.map((panel) => (
          <li key={panel.id} className="flex justify-between items-center">
            <span>{new Date(`${panel.date}T${panel.time}`).toLocaleDateString()}</span>
            <span className="font-semibold">{panel.title}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

