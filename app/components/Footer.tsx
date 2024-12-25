import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Blastoff</h3>
            <p className="text-sm">
              Weekly moderated webinars designed to help students explore post-graduate options
              directly from those living them.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Session Types</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white">University Panels</Link></li>
              <li><Link href="#" className="hover:text-white">College Experience</Link></li>
              <li><Link href="#" className="hover:text-white">Career Paths</Link></li>
              <li><Link href="#" className="hover:text-white">Trade Skills</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white">Schedule</Link></li>
              <li><Link href="#" className="hover:text-white">Past Sessions</Link></li>
              <li><Link href="#" className="hover:text-white">FAQ</Link></li>
              <li><Link href="#" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>Mitchell Meyer</li>
              <li>
                <a href="mailto:Mitchell@blastoff.org" className="hover:text-white">
                  Mitchell@blastoff.org
                </a>
              </li>
              <li>
                <a href="tel:5165921319" className="hover:text-white">
                  (516) 592-1319
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Blastoff Live Sessions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

