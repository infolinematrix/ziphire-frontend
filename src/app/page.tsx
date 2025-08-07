import { currentUser, isAuthenticated } from '@/lib/auth';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Page() {

  const isAuth = await isAuthenticated(); // Simulating authentication check



  if (!isAuth) {
    return redirect('/auth/sign-in');
  } else {

    const { user } = await currentUser();
    if (!user) return redirect('/auth/sign-in');

    if (user.user_type == 'candidate') {
      redirect('/candidate');
    }
    if (user.user_type == 'client') {
      redirect('/client');
    }

    redirect('/candidate');
  }
}
