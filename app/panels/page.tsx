import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, Home } from 'lucide-react'
import PanelsSidebar from '@/components/PanelsSidebar'

interface Panel {
  id: number
  title: string
  description: string
  date: string
  time: string
  imageUrl: string
  link: string
}

const PanelCard = ({ panel }: { panel: Panel }) => {
  const isPastPanel = new Date(panel.date) < new Date();
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${isPastPanel ? 'opacity-75' : ''}`}>
      <Image
        src={panel.imageUrl}
        alt={panel.title}
        width={400}
        height={225}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2 line-clamp-1">{panel.title}</h2>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{panel.description}</p>
        <div className="flex items-center text-gray-500 text-xs mb-3">
          <Calendar className="w-4 h-4 mr-1" />
          <span>{new Date(panel.date).toLocaleDateString()}</span>
          <Clock className="w-4 h-4 ml-3 mr-1" />
          <span>{panel.time}</span>
        </div>
        <Button className={`w-full text-sm ${isPastPanel ? 'bg-gray-500 hover:bg-gray-600' : 'bg-[#FF5C28] hover:bg-[#FF5C28]/90'}`}>
          {isPastPanel ? 'View Recording' : 'Join Session'}
        </Button>
      </div>
    </div>
  )
}

export default function Page() {
  const panels: Panel[] = [
    {
      id: 1,
      title: "Appalachian State University Student Panel",
      description: "Interactive Q&A with current students from App State. Learn about campus life, academics, and extracurricular activities in the beautiful Blue Ridge Mountains.",
      date: "2024-06-15",
      time: "19:00",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3u79YwWy5WJxi09jj9fxxU3efPrJtz7wZqA&s",
      link: "https://zoom.us/j/123456789",
    },
    {
      id: 2,
      title: "Navigating Life as a First-Generation College Student",
      description: "Hear from experienced first-gen students about their college journey, challenges, and successes.",
      date: "2024-06-22",
      time: "18:30",
      imageUrl: "https://marvel-b1-cdn.bc0a.com/f00000000297652/eloncdn.blob.core.windows.net/eu3/sites/74/2022/11/DSC_9514.jpg",
      link: "https://zoom.us/j/987654321",
    },
    {
      id: 3,
      title: "Engineering at NC State",
      description: "Discover the innovative engineering programs at NC State with current students and faculty.",
      date: "2024-07-10",
      time: "14:00",
      imageUrl: "https://www.wnct.com/wp-content/uploads/sites/99/2017/06/nc-state-logo_37575088_ver1.0.jpg",
      link: "https://zoom.us/j/111222333",
    },
    {
      id: 4,
      title: "University of Rhode Island Student Panel",
      description: "Join current URI students for an in-depth look at life on campus, academic programs, and student experiences in Kingston.",
      date: "2024-07-15",
      time: "18:00",
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/University_of_Rhode_Island_seal.svg/800px-University_of_Rhode_Island_seal.svg.png",
      link: "https://zoom.us/j/444555666",
    },
    {
      id: 5,
      title: "University of Virginia Student Panel",
      description: "Explore the University of Virginia through the eyes of current students. Learn about academics, campus culture, and life in Charlottesville.",
      date: "2024-07-22",
      time: "19:00",
      imageUrl: "https://bloximages.newyork1.vip.townnews.com/dailyprogress.com/content/tncms/assets/v3/editorial/8/3b/83b060b6-c10a-11ec-8141-1f3ece9bc8ed/6260a62f4ab55.image.jpg",
      link: "https://zoom.us/j/777888999",
    },
    {
      id: 6,
      title: "Managing Finances in College",
      description: "Expert advice on budgeting, financial aid, part-time jobs, and money management skills for college students.",
      date: "2024-07-29",
      time: "17:30",
      imageUrl: "https://woc.aises.org/sites/default/files/styles/image730x495/public/January2019-Student-Illo-BLOGPOST-FNL.jpg?itok=2WVPU9CM",
      link: "https://zoom.us/j/000111222",
    },
    {
      id: 7,
      title: "Pre-Med Track at Duke University",
      description: "Learn about the pre-med program at Duke, research opportunities, and tips for medical school applications.",
      date: "2024-08-05",
      time: "18:00",
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Duke_University_seal.svg/800px-Duke_University_seal.svg.png",
      link: "https://zoom.us/j/333444555",
    },
    {
      id: 8,
      title: "Liberal Arts Education at Williams College",
      description: "Discover the benefits of a liberal arts education and life at a top-ranked small college.",
      date: "2024-08-12",
      time: "19:00",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNnuW6vl-oPHRfDjKpr3TSskdZe7SEm7wD6w&s",
      link: "https://zoom.us/j/666777888",
    },
    {
      id: 9,
      title: "Computer Science at Stanford",
      description: "Explore the cutting-edge CS program at Stanford and learn about tech opportunities in Silicon Valley.",
      date: "2024-08-19",
      time: "20:00",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwHMT7C6XJHzICYwZ9AdgNmli-SvPiII_F4w&s",
      link: "https://zoom.us/j/999000111",
    },
    {
      id: 10,
      title: "Study Abroad Experiences",
      description: "Hear from students who have studied abroad about their experiences, challenges, and personal growth.",
      date: "2024-08-26",
      time: "18:30",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4e6XeZIupdZYhUmRWO2CNuqKzyHUP2vMCpA&s",
      link: "https://zoom.us/j/222333444",
    },
    {
      id: 11,
      title: "Entrepreneurship in College",
      description: "Learn how to balance academics with starting your own business from successful student entrepreneurs.",
      date: "2024-09-19",
      time: "20:00",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_AuATBdG_qQMWg_ZmNXfuiVPDEYmjflOz8A&s",
      link: "https://zoom.us/j/777888999",
    },
    {
      id: 12,
      title: "Historically Black Colleges and Universities (HBCUs) Spotlight",
      description: "Discover the unique experiences and opportunities offered by HBCUs from current students and alumni.",
      date: "2024-09-26",
      time: "18:30",
      imageUrl: "https://i0.wp.com/amsterdamnews.com/wp-content/uploads/2014/09/hbcu-schools-scaled.jpg?fit=1200%2C927&ssl=1",
      link: "https://zoom.us/j/000111222",
    },
    {
      id: 13,
      title: "Navigating College with a Disability",
      description: "Gain insights on resources, accommodations, and strategies for success in college with a disability.",
      date: "2024-10-03",
      time: "19:00",
      imageUrl: "https://www.csmd.edu/student-services/disability-support/wheelchair-photo.jpg",
      link: "https://zoom.us/j/333444555",
    },
    {
      id: 14,
      title: "UNC Chapel Hill Student Panel",
      description: "Get an insider's perspective on life at UNC Chapel Hill. Learn about academics, campus culture, and student opportunities.",
      date: "2025-01-15",
      time: "19:00",
      imageUrl: "https://uncnews.unc.edu/wp-content/uploads/sites/933/2021/10/003421_campus_scenes137.jpg",
      link: "https://zoom.us/j/123456789",
    },
    {
      id: 15,
      title: "NC State University Student Panel",
      description: "Discover what it's like to be a part of the Wolfpack. Explore academic programs, research opportunities, and campus life at NC State.",
      date: "2025-01-29",
      time: "18:30",
      imageUrl: "https://www.wnct.com/wp-content/uploads/sites/99/2017/06/nc-state-logo_37575088_ver1.0.jpg",
      link: "https://zoom.us/j/987654321",
    },
    {
      id: 16,
      title: "Boston College Student Panel",
      description: "Join current Eagles to learn about the BC experience. Discuss academics, extracurriculars, and life in Chestnut Hill.",
      date: "2025-02-12",
      time: "20:00",
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/9/96/Boston_College_Eagles_logo.svg/1200px-Boston_College_Eagles_logo.svg.png",
      link: "https://zoom.us/j/111222333",
    },
    {
      id: 17,
      title: "Northeastern University Student Panel",
      description: "Explore Northeastern's unique co-op program and urban campus life. Hear from students about their experiences in Boston and beyond.",
      date: "2025-02-26",
      time: "19:00",
      imageUrl: "https://www.sparkadmissions.com/wp-content/uploads/2022/07/northeastern-logo.svg",
      link: "https://zoom.us/j/444555666",
    },
    {
      id: 18,
      title: "University of Michigan Student Panel",
      description: "Learn what it means to be a Wolverine. Discuss academics, Big Ten athletics, and the vibrant Ann Arbor community.",
      date: "2025-03-12",
      time: "18:00",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Seal_of_the_University_of_Michigan.svg/640px-Seal_of_the_University_of_Michigan.svg.png",
      link: "https://zoom.us/j/777888999",
    },
    {
      id: 19,
      title: "Club Sports in College Panel",
      description: "Discover the world of collegiate club sports. Learn about opportunities for competition, leadership, and community building outside of varsity athletics.",
      date: "2025-03-26",
      time: "20:30",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/51/Boston_College_Rugby_Match.jpg",
      link: "https://zoom.us/j/000111222",
    }
  ]

  const currentDate = new Date()
  currentDate.setHours(0, 0, 0, 0)

  const upcomingPanels = panels.filter(panel => {
    const panelDate = new Date(panel.date)
    panelDate.setHours(0, 0, 0, 0)
    return panelDate >= currentDate
  })

  const pastPanels = panels.filter(panel => {
    const panelDate = new Date(panel.date)
    panelDate.setHours(0, 0, 0, 0)
    return panelDate < currentDate
  })

  upcomingPanels.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  pastPanels.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <PanelsSidebar />
      <div className="flex-1 ml-64">
        <header className="bg-white shadow">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">All Panels</h1>
            <Link href="/">
              <Button variant="outline" className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                Home
              </Button>
            </Link>
          </div>
        </header>
        <main className="container mx-auto px-4 py-6">
          <section className="mb-12 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-[#FF5C28]">Upcoming Panels</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingPanels.map(panel => (
                <PanelCard key={panel.id} panel={panel} />
              ))}
            </div>
          </section>
          <section className="bg-gray-100 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-700">Past Panels</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastPanels.map(panel => (
                <PanelCard key={panel.id} panel={panel} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

