import { IoShieldCheckmark } from "react-icons/io5";
import { FaAward } from "react-icons/fa";
import { FaPeopleLine } from "react-icons/fa6";
import { SiGoogleclassroom } from "react-icons/si";
const stats = [
  { name: 'Registered Students', value: '6.3+ Crore', icon:<IoShieldCheckmark className="text-[#00b5ce] bg-orange-100 p-2 rounded-md" /> },
  { name: 'Student Selections', value: '4+ Lacs', icon:<FaAward  className="text-[#00b5ce] bg-orange-100 p-2 rounded-md"/> },
  { name: 'Tests Attempted', value: '242+ Crore', icon:<FaPeopleLine className="text-[#00b5ce] bg-orange-100 p-2 rounded-md" /> },
  { name: 'Classes Attended', value: '5.5+ Crore', icon:<SiGoogleclassroom  className="text-[#00b5ce] bg-orange-100 p-2 rounded-md"/> },
]

export default function HomepageStats() {
  return (
    <div className="relative  isolate overflow-hidden py-16 sm:py-16">
      
      <div className="mx-auto max-w-7xl rounded-sm shadow-xl shadow-slate-100 py-7 px-6 lg:px-8">
        
      <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex items-center gap-5">
                <div className="text-6xl">
                  {stat.icon}
                </div>
                <div className="flex flex-col-reverse">
                  <dt className="text-xl font-bold leading-9 font-mono tracking-wide text-gray-900" >{stat.value}</dt>
                  <dd className="leading-7 text-[18px] font-medium tracking-wide text-gray-900">{stat.name}</dd>
                </div>
                
              </div>
            ))}
          </dl>
      </div>
    </div>
  )
}
