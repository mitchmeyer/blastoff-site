'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { Button } from '@/components/ui/button'
import { CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react'
import moment from 'moment'
import PanelsSidebar from '@/components/PanelsSidebar'

// Dynamically import the Calendar component
const Calendar = dynamic(() => import('react-big-calendar').then((mod) => mod.Calendar), {
  ssr: false,
})

// Dynamically import the localizer
const momentLocalizer = dynamic(() => 
  import('react-big-calendar').then((mod) => mod.momentLocalizer(moment)),
  { ssr: false }
)

// Import styles for react-big-calendar
import 'react-big-calendar/lib/css/react-big-calendar.css'

moment.locale('en-US')

const events = [
  {
    title: 'UNC Student Panel',
    start: new Date(2024, 5, 15, 19, 0),
    end: new Date(2024, 5, 15, 20, 0),
  },
  {
    title: 'Appalachian State University Student Panel',
    start: new Date(2024, 5, 15, 19, 0),
    end: new Date(2024, 5, 15, 20, 0),
  },
  {
    title: 'Navigating Life as a First-Generation College Student',
    start: new Date(2024, 5, 22, 18, 30),
    end: new Date(2024, 5, 22, 19, 30),
  },
  {
    title: 'Engineering at NC State',
    start: new Date(2024, 6, 10, 14, 0),
    end: new Date(2024, 6, 10, 15, 0),
  },
  {
    title: 'University of Rhode Island Student Panel',
    start: new Date(2024, 6, 15, 18, 0),
    end: new Date(2024, 6, 15, 19, 0),
  },
  {
    title: 'University of Virginia Student Panel',
    start: new Date(2024, 6, 22, 19, 0),
    end: new Date(2024, 6, 22, 20, 0),
  },
  {
    title: 'Managing Finances in College',
    start: new Date(2024, 6, 29, 17, 30),
    end: new Date(2024, 6, 29, 18, 30),
  },
  {
    title: 'Pre-Med Track at Duke University',
    start: new Date(2024, 7, 5, 18, 0),
    end: new Date(2024, 7, 5, 19, 0),
  },
  {
    title: 'Liberal Arts Education at Williams College',
    start: new Date(2024, 7, 12, 19, 0),
    end: new Date(2024, 7, 12, 20, 0),
  },
  {
    title: 'Computer Science at Stanford',
    start: new Date(2024, 7, 19, 20, 0),
    end: new Date(2024, 7, 19, 21, 0),
  },
  {
    title: 'Study Abroad Experiences',
    start: new Date(2024, 7, 26, 18, 30),
    end: new Date(2024, 7, 26, 19, 30),
  },
]

export default function CalendarPage() {
  const [localizer, setLocalizer] = useState(null)

  useEffect(() => {
    import('react-big-calendar').then((mod) => {
      setLocalizer(mod.momentLocalizer(moment))
    })
  }, [])

  if (!localizer) {
    return (
      <div className="min-h-screen bg-gray-50 flex">
        <PanelsSidebar />
        <div className="flex-1 ml-64 flex items-center justify-center">
          <div className="text-2xl font-semibold text-gray-600">Loading calendar...</div>
        </div>
      </div>
    )
  }

  const CustomToolbar = (toolbar) => {
    const goToBack = () => {
      toolbar.onNavigate('PREV')
    }
    const goToNext = () => {
      toolbar.onNavigate('NEXT')
    }
    const goToCurrent = () => {
      toolbar.onNavigate('TODAY')
    }

    const label = () => {
      const date = moment(toolbar.date)
      return (
        <span className="text-lg font-semibold">{date.format('MMMM YYYY')}</span>
      )
    }

    return (
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <Button onClick={goToBack} variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button onClick={goToNext} variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="text-xl font-bold">{label()}</div>
        <Button onClick={goToCurrent} variant="outline" className="flex items-center space-x-2">
          <CalendarIcon className="h-4 w-4" />
          <span>Today</span>
        </Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <PanelsSidebar />
      <div className="flex-1 ml-64">
        <header className="bg-white shadow">
          <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-gray-900">Panel Calendar</h1>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          <div style={{ height: 'calc(100vh - 200px)' }}>
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: '100%' }}
              views={['month', 'week', 'day']}
              components={{
                toolbar: CustomToolbar,
              }}
              eventPropGetter={(event) => ({
                style: {
                  backgroundColor: '#FF5C28',
                  borderRadius: '4px',
                  color: 'white',
                  border: 'none',
                },
              })}
            />
          </div>
        </main>
      </div>
    </div>
  )
}

