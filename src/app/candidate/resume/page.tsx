import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import ResumeCard from "../components/ResumeCard";

export default function CandidateResumeListPage() {
    return (


        <div className="flex flex-1 gap-4">
            {/* Left Sidebar - User Info */}
            <aside className="w-1/4 hidden lg:block overflow-y-auto rounded-2xl my-5 bg-background">
                <div className="max-w-sm w-full rounded-2xl p-4 ">
                    <div className="flex flex-col items-center text-center space-y-4">
                        <img
                            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                            src="/img/avatar-male.png"
                            alt="User Avatar"
                        />

                        <div>
                            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">John Doe</h2>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">Product Designer</p>
                        </div>

                        <span className="text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-3 py-1 rounded-full">
                            Pro Member
                        </span>

                        <button className="w-full bg-primary text-white font-medium py-2 px-4 rounded-lg hover:bg-primary/90 transition">
                            Message
                        </button>

                        <div className="w-full text-sm text-zinc-600 dark:text-zinc-400 mt-2 space-y-2">
                            <div className="flex justify-between">
                                <span>Member since</span>
                                <span className="text-zinc-900 dark:text-white">Jan 2024</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Last active</span>
                                <span className="text-zinc-900 dark:text-white">2h ago</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Role</span>
                                <span className="text-zinc-900 dark:text-white font-medium">Candidate</span>
                            </div>
                        </div>
                    </div>
                    <div className="h-10"></div>
                    <h3 className="font-semibold mb-2">Navigation</h3>
                    <ul className="space-y-2 text-sm text-blue-600">

                        <li><a href="#">Profile</a></li>
                        <li><a href="#">Change Password</a></li>
                        <li><Link href={'/candidate/resume'}>
                            My Resume
                        </Link>
                        </li>
                        <li><a href="#">Notifications</a></li>
                        <li><a href="#">Membership</a></li>
                        <li><a href="#">Customer Care</a></li>
                    </ul>
                </div>

            </aside>

            {/* Main Content */}
            <main className="my-5 overflow-y-auto w-2/4">
                <ScrollArea className='h-[calc(100dvh-52px)]'>

                    <ResumeCard
                        title="Resume Title (auto generated)"
                    />

                    <div className="h-24 sm:h-32 md:h-40 lg:h-48" />
                </ScrollArea>
            </main>

            {/* Right Sidebar - Actions */}
            <aside className="w-1/4 hidden lg:block border-0 p-4 overflow-y-auto rounded-2xl my-5 bg-background">
                <h3 className="font-semibold mb-2">Quick Actions</h3>
                <ul className="space-y-2 text-sm text-blue-600">
                    <li><a href="#">Saved Jobs</a></li>
                    <li><a href="#">Job Alerts</a></li>
                    <li><a href="#">Applied Jobs</a></li>
                </ul>
                <div className="h-10"></div>
                <h3 className="font-semibold mb-2">Recent search..</h3>
                <ul className="space-y-2 text-sm text-blue-600">
                    <li><a href="#">Saved Jobs</a></li>
                    <li><a href="#">Job Alerts</a></li>
                    <li><a href="#">Applied Jobs</a></li>
                </ul>

            </aside>
        </div>

    )
}