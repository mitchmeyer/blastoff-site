'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export default function SessionPopup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-4 transition-transform duration-300 ease-in-out transform translate-y-0">
      <div className="max-w-4xl mx-auto bg-[#FF5C28] text-white p-4 rounded-lg shadow-lg flex items-center justify-between">
        <p className="text-sm md:text-base font-medium">
          Join us for our next session with students at the University of North Carolina on February 6th!
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="ml-4 text-white hover:text-gray-200 focus:outline-none"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}

