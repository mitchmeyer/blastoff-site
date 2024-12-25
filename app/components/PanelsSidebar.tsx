import Link from 'next/link'
import { Calendar, Users, Star } from 'lucide-react'

export default function PanelsSidebar() {
  return (
    <aside className="w-64 bg-white h-screen fixed left-0 top-0 pt-20 border-r">
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <Link href="/panels" className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-md">
              <Users className="mr-2 h-5 w-5" />
              All Panels
            </Link>
          </li>
          <li>
            <Link href="/panels/my-panels" className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-md">
              <Star className="mr-2 h-5 w-5" />
              My Panels
            </Link>
          </li>
          <li>
            <Link href="/panels/calendar" className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-md">
              <Calendar className="mr-2 h-5 w-5" />
              Calendar
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

