
import PageContainer from '@/components/layout/page-container'
import { NextPage } from 'next'
import Image from 'next/image'
import JobBox from './components/JobCard'
import { ScrollArea } from '@/components/ui/scroll-area'

interface Props { }

const DashboardPage: NextPage<Props> = ({ }) => {
  return (
    <div className="flex justify-center ">
      <div className="w-4/5 h-screen flex border-none rounded shadow overflow-hidden">

        <div className="flex w-full gap-4">

          {/* Left Sidebar */}
          <aside className="w-3/12 p-4  shadow-sm overflow-y-auto">
            <div className="max-w-sm w-full rounded-2xl p-6">
              <div className="flex flex-col items-center text-center space-y-3">
                <img
                  className="w-24 h-24 rounded-full border-4 border-zinc-800 object-cover"
                  src="/avatar.png" // Replace with actual image
                  alt="User Avatar"
                />
                <div>
                  <h2 className="text-lg font-semibold">John Doe</h2>
                  <p className="text-zinc-400 text-sm">Product Designer</p>
                </div>
                <span className="text-xs bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full">Pro Member</span>

                <button className="flex items-center gap-2 text-white bg-primary px-4 py-2 rounded-lg w-full justify-center">
                  {/* <Mail size={16} /> */}
                  Message
                </button>

                <div className="w-full text-sm text-zinc-400 mt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Member since</span>
                    <span className="text-white">Jan 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Last active</span>
                    <span className="text-white">2 hours ago</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Role</span>
                    <span className="text-white font-medium">Admin</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Center Content (3/4 of screen centered) */}
          <main className="w-6/12   overflow-y-auto">
            <ScrollArea className='h-[calc(100dvh-52px)]'>
              <div className="w-full">
                <h2 className="text-xl font-semibold">More jobs for you</h2>
                <p className="text-sm text-zinc-500">
                  Based on your profile, preferences, and activity.
                </p>

                {Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 border-b rounded-0 shadow-none hover:shadow-md transition my-4"
                  >
                    <div className="w-14 h-14 relative">
      <Image
        src="https://via.placeholder.com/56x56.png?text=Logo"
        alt="Company Logo"
        fill
        className="rounded-md object-cover"
        sizes="56px"
      />
    </div>
                    <div className="flex-1">
                      <h3 className="font-medium cursor-pointer hover:underline">
                        Full Stack Developer (React + Node)
                      </h3>
                      <p className="text-sm text-zinc-600">Bizoforce is looking for a talented Web Application Developer to build a web platform that</p>
                      <div className="flex items-center gap-2 mt-2 text-xs text-green-600">
                        ✅ Actively reviewing · 🟦 Easy Apply
                      </div>
                    </div>
                    {/* Right: Apply & Close */}

                    {/* <div className="flex flex-col items-end gap-2">
                      <button className="px-4 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                        Apply Now
                      </button>
                    </div> */}
                  </div>

                ))}
              </div>

            </ScrollArea>
          </main>

          {/* Right Panel */}
          <aside className="w-3/12 p-4  shadow-sm overflow-y-auto max-h-screen">
            <h2 className="text-sm font-semibold mb-2">Top job picks for you</h2>
            <ul className="space-y-3 text-sm">
              <li>
                <strong>Remote Sr React Native Developer</strong> <br />
                <span className="text-gray-500 text-xs">MAG INFOTECH</span>
              </li>
              <li>
                <strong>Remote Full Stack Developer</strong> <br />
                <span className="text-gray-500 text-xs">HYI.AI</span>
              </li>
              <li>
                <strong>AI & Full Stack Engineer</strong> <br />
                <span className="text-gray-500 text-xs">HYrEzy Tech</span>
              </li>
            </ul>
          </aside>

        </div>

      </div>
    </div>
  )
}

export default DashboardPage