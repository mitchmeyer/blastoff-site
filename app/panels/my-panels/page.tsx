import Link from 'next/link'
import PanelsSidebar from '../../components/PanelsSidebar'
import { Button } from '@/components/ui/button'

export default function MyPanelsPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <PanelsSidebar />
      <div className="flex-1 ml-64">
        <header className="bg-white shadow">
          <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-gray-900">My Panels</h1>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          <p className="text-lg mb-4">Sign up to start tracking your panels and get personalized recommendations!</p>
          <Link href="/signup">
            <Button className="bg-[#FF5C28] hover:bg-[#FF5C28]/90">
              Sign Up Now
            </Button>
          </Link>
        </main>
      </div>
    </div>
  )
}

