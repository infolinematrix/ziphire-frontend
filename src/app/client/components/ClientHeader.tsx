'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { MenuIcon, XIcon } from 'lucide-react'
import ChatButton from '@/features/chat/ChatButton'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { UserNav } from '@/components/layout/user-nav'
import { NotificationSocket } from '@/components/NotificationSocket'
import { ModeToggle } from '@/components/layout/ThemeToggle/theme-toggle'
import { ThemeSelector } from '@/components/theme-selector'
import { DesktopNavMenu } from './DesktopNavMenu'
// import { MobileNavMenu } from './MobileNavMenu'
import Link from 'next/link'
import { MobileDropdown } from './MobileDropdown'

export default function ClientHeader() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const token = 'your-user-token'

    const navLinks = [
        { label: "Home", href: "/client" },
        { label: "Applications", href: "/applications" },
        { label: "Jobs", href: "/jobs" },
        { label: "Find Candidate", href: "/find-candidate" },
        { label: "Create", href: "/post" },
        { label: "Analytics", href: "/analytics" },
    ];

    return (
        <header className="bg-background border-b shadow-sm px-4 py-3 sm:px-6 sticky top-0 z-50">
            <div className="flex justify-between items-center">
                {/* Left: Logo + Trigger */}
                <div className="flex items-center gap-3">
                    <SidebarTrigger />
                    <Image src="/next.svg" alt="App Logo" width={80} height={20} priority />
                </div>

                {/* Mobile Hamburger */}
                <div className="flex items-center justify-end w-full gap-4 md:hidden ml-auto mr-6">
                    <UserNav />
                    <ChatButton />
                    <NotificationSocket token={token} />
                    <ModeToggle />
                    {/* ThemeSelector only on md+ */}
                    <div className="hidden md:block">
                        <ThemeSelector />
                    </div>
                </div>
                <div className="sm:hidden">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                    </button>
                </div>


                {/* Right: Desktop Navigation */}
                <DesktopNavMenu token={token} navLinks={navLinks} />

            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <MobileDropdown token={token} navLinks={navLinks} />
            )}
        </header>
    )
}
