import { buttonVariants } from '@/components/ui/button';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';
import Link from 'next/link';
import { LoginForm } from './login-form';

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.'
};

export default function SignInViewPage({ stars }: { stars: number }) {
  return (
    <div className='relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
      <Link
        href='/'
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute top-4 right-4 hidden md:top-8 md:right-8'
        )}
      >
        Login
      </Link>
      <div className='bg-muted relative hidden h-full flex-col p-10 lg:flex dark:border-r'>
        <div className='absolute inset-0 bg-cover bg-center opacity-20 dark:opacity-10'
          style={{ backgroundImage: "url('/img/master_admin_login.jpg')" }}
        />
        <div className='relative z-20 flex items-center text-lg font-medium'>
          <Image
            src='/img/ziphire-logo-dark-1.svg'      // Path from public folder
            alt='Company Logo'
            width={60}           // Set width and height
            height={60}
            className='mr-2'
          />
          <div className='flex flex-col leading-tight'>
            <span className='font-bold'>ZipHire</span>
            <span className='text-sm font-normal '>
              Smart Hiring Made Simple
            </span>
          </div>
        </div>
        <div className='relative z-20 mt-auto'>
          {/* <blockquote className='space-y-2'>
            <p className='text-lg'>
              &ldquo;This starter template has saved me countless hours of work
              and helped me deliver projects to my clients faster than ever
              before.&rdquo;
            </p>
            <footer className='text-sm'>Random Dude</footer>
          </blockquote> */}
        </div>
      </div>


      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-xs">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
