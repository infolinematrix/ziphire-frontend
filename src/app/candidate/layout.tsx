
import { Breadcrumbs } from '@/components/breadcrumbs';
import KBar from '@/components/kbar';
import AppSidebar from '@/components/layout/app-sidebar';
import Header from '@/components/layout/header';
import StickyJobSearch from '@/components/StickyJobSearch';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { currentUser } from '@/lib/auth';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';


export const metadata: Metadata = {
  title: 'Next Shadcn Dashboard Starter',
  description: 'Basic dashboard with Next.js and Shadcn'
};

export default async function CandidateLayout({
  children
}: {
  children: React.ReactNode;
}) {
  // Persisting the sidebar state in the cookie.
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"

  const { user } = await currentUser();
  if (user.user_type !== 'candidate') return (<>Unauthorised</>)

  return (
    <div className="bg-black/5 min-h-screen">
      <KBar>
        <SidebarProvider defaultOpen={defaultOpen} >
          <AppSidebar />
          <SidebarInset>
            <Header user={user} />
            {/* page main content */}
            <div className="mt-5 w-full sm:w-11/12 md:w-4/5 lg:w-3/4 max-w-8xl mx-auto  px-4 sm:px-6 lg:px-8">
              {/* Fixed Inner Header */}
              <StickyJobSearch />
              <div className="my-0">
                {children}
              </div>
            </div>
            {/* page main content ends */}
          </SidebarInset>
        </SidebarProvider>
      </KBar>
    </div>
  );
}
