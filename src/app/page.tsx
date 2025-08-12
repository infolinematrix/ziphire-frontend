import { currentUser, isAuthenticated, me, setCurrentUser } from '@/lib/auth';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Page() {


  const isAuth = await isAuthenticated(); // Simulating authentication check
  console.log("is Authenticated", isAuth);



  if (!isAuth) {
    return redirect('/auth/sign-in');
  } else {

    const { user } = await currentUser();
    console.log("------------------------user", user);

    if (user && user.user_type == 'candidate') {
      redirect('/candidate');
    }
    if (user && user.user_type == 'client') {
      redirect('/client');
    }

    // redirect('/candidate');
  }
}
