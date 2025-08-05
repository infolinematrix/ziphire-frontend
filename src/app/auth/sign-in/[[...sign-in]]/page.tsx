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

  // const { userId } = await auth();
  const isAuth = await isAuthenticated(); // Simulating authentication check

  // const userId = true;
  console.log("-------isLoggedIn", isAuth);



  if (isAuth) {
    return redirect('/');
  }

  try {
    // Something like this to fetch GitHub stars
  } catch (error) {
    // Error fetching GitHub stars, using default value
  }
  return <SignInViewPage stars={stars} />;
}
