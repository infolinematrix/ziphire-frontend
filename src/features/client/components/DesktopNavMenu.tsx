'use client'

import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { UserNav } from '@/components/layout/user-nav'
import ChatButton from '@/features/chat/ChatButton'
import { NotificationSocket } from '@/components/NotificationSocket'
import { ModeToggle } from '@/components/layout/ThemeToggle/theme-toggle'
import { ThemeSelector } from '@/components/theme-selector'

interface NavLinkItem {
    label: string
    href: string
}

interface Props {
    user: any,
    token: string
    navLinks: NavLinkItem[]
}

export function DesktopNavMenu({ token, navLinks, user }: Props) {
    return (
        <div className="hidden sm:flex items-center gap-6">
            {navLinks.map((link) => (
                <Link
                    key={link.href}
                    href={link.href} // or href if you're using Next.js
                    className="text-sm font-medium "
                >
                    {link.label}
                </Link>
            ))}
            <Separator orientation="vertical" className="h-6" />
            <UserNav user={user} />
            <ChatButton />
            <NotificationSocket token={token} />
            <ModeToggle />
            <div className="hidden md:block">
                <ThemeSelector />
            </div>
        </div>
    )
}
