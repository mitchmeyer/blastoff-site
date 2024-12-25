'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import moment from 'moment'

// Dynamically import the Calendar component
const Calendar = dynamic(() => import('react-big-calendar').then((mod) => mod.Calendar), {
  ssr: false,
})

// Dynamically import the localizer
const momentLocalizer = dynamic(() => 
  import('react-big-calendar').then((mod) => mod.momentLocalizer),
  { ssr: false }
)

// Ensure moment is configured to use your preferred locale
moment.locale('en-US')

interface Panel {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  imageUrl: string;
  link: string;
}

const panels: Panel[] = [
  {
    id: 1,
    title: "UNC Student Panel",
    description: "Interactive Q&A with current students from UNC. Learn about campus life, academics, and extracurricular activities.",
    date: "2023-06-15",
    time: "19:00",
    imageUrl: "/placeholder.svg?height=400&width=600",
    link: "https://zoom.us/j/123456789",
  },
  {
    id: 2,
    title: "Navigating Life as a First-Generation College Student",
    description: "Hear from experienced first-gen students about their college journey, challenges, and successes.",
    date: "2023-06-22",
    time: "18:30",
    imageUrl: "/placeholder.svg?height=400&width=600",
    link: "https://zoom.us/j/987654321",
  },
  // Add more panel data as needed
]

export default function CalendarPage() {
  const [localizer, setLocalizer] = useState<any>(null)

  useEffect(() => {
    momentLocalizer(moment).then((localizer) => {
      setLocalizer(localizer)
    })
  }, [])

  if (!localizer) {
    return <div>Loading calendar...</div>
  }

  const events = panels.map(panel => ({
    title: panel.title,
    start: new Date(`${panel.date}T${panel.time}`),
    end: new Date(`${panel.date}T${panel.time}`),
    resource: panel,
  }))

  return (
    <div style={{ height: '100vh' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%' }}
      />
    </div>
  )
}

