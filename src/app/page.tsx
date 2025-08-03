import { currentUser, isAuthenticated } from '@/lib/auth';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Page() {

  const isAuth = await isAuthenticated(); // Simulating authentication check
  // console.log("-------isAuth", isAuth);


  if (!isAuth) {
    return redirect('/auth/sign-in');
  } else {
    // const me = await currentUser()
    // if(me['user_type'] == 'developer'){
    //   redirect('/candidate');
    // }
    // if(me['user_type'] == 'client'){
    //   redirect('/client');
    // }

    redirect('/candidate');
  }
}
