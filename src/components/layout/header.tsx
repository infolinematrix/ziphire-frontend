'use client'
import React, { useEffect } from 'react';
import { SidebarTrigger } from '../ui/sidebar';
import { Separator } from '../ui/separator';
import { Breadcrumbs } from '../breadcrumbs';
import SearchInput from '../search-input';
import { UserNav } from './user-nav';
import { ThemeSelector } from '../theme-selector';
import { ModeToggle } from './ThemeToggle/theme-toggle';
import CtaGithub from './cta-github';
import { NotificationSocket } from '../NotificationSocket';
import Image from 'next/image';
import ChatButton from '@/features/chat/ChatButton';


export default function Header() {

  const token = "your-user-token";

  return (
    <header className='flex  h-18 bg-background shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-18'>
      <div className='flex items-center gap-2 px-4'>
        <SidebarTrigger className='-ml-1' />
        {/* <Separator orientation='vertical' className='mr-2 h-4' /> */}
        <Image
          src="/next.svg"
          alt="App Logo"
          width={80}
          height={20}
        // className="w-100 h-10 object-cover"
        />
        {/* <Breadcrumbs /> */}
      </div>

      <div className='flex items-center gap-2 px-4'>

        <div className='flex gap-4'>
          {/* <CtaGithub /> */}
          {/* <div className='hidden md:flex ml-2'>
          <SearchInput />
        </div> */}
        <UserNav />
        
          <ChatButton />
          {/* <Separator orientation='vertical' className='h-4' /> */}
          <NotificationSocket token={token} />

        </div>


        
        <ModeToggle />
        <ThemeSelector />
        
      </div>
    </header>
  );
}
