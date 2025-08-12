import { Metadata } from 'next';
import SignInViewPage from '@/features/auth/components/sign-in-view';
import { isAuthenticated } from '@/lib/auth';
import { redirect } from 'next/navigation';


export const metadata: Metadata = {
  title: 'Authentication | Sign In',
  description: 'Sign In page for authentication.'
};

export default async function Page() {
  let stars = 3000; // Default value
  const isAuth = await isAuthenticated(); // Simulating authentication check

  // if (isAuth == true) {
  //   return redirect('/');
  // }

  return <SignInViewPage stars={stars} />;
}
