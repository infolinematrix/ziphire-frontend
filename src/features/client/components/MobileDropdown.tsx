'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface NavLinkItem {
    label: string
    href: string
}

interface Props {
    token: string
    navLinks: NavLinkItem[]
}

export function MobileDropdown({ token, navLinks }: Props) {
    const [open, setOpen] = useState(false)

    return (
        <div className="sm:hidden mt-4 flex flex-col gap-3 px-4">
            {navLinks.map((link) => (
                <Link
                    key={link.href}
                    href={link.href} // or href if you're using Next.js
                    className="text-sm font-medium text-muted-foreground"
                >
                    {link.label}
                </Link>
            ))}
        </div>
    )
}
