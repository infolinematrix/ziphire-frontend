'use client'

import { logout } from '@/lib/auth';
import { redirect, useRouter } from 'next/navigation';
import React, { useEffect, useTransition } from 'react'
import { Button } from './ui/button';
import { LogOut } from 'lucide-react';

type SignOutButtonProps = {
    redirectUrl?: string;
};

export default function SignOutButton({ redirectUrl = '/auth/sign-in' }: SignOutButtonProps) {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    const handleSignOut = async () => {
        startTransition(async () => {
            console.log('Starting logout process...');
            try {
                // Call the logout function from auth.ts
                await logout();
                console.log('Logout successful. Redirecting to:', redirectUrl);
                router.replace(redirectUrl);
            } catch (error) {
                console.error('Logout failed:', error);
                // Optionally, handle the error (e.g., show a toast)
            }
        });
    };


    return (
        <Button
            variant={"ghost"}
            onClick={handleSignOut}
            disabled={isPending}
            className="px-4 py-2 rounded transition"
        >
            <LogOut className="" />
            {isPending ? 'Signing out...' : 'Sign Out'}
        </Button>
    )
}
