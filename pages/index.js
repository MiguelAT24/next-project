
import {useSession} from 'next-auth/react'
import { useRouter } from 'next/router';

function homepage() {

    const {data: session, status} = useSession()
    const router = useRouter()

    if(status === 'loading'){
        return <p>Loading...</p>
    }

    if(status === 'unauthenticated'){

          router.push('/login')
    }

  return(
    <div>
        { session ? (
    <div>
      <h1>{session.user.name}</h1>
      <p>{session.user.email}</p>
      <img src={session.user.image} alt='' />
    </div>
        ) : (
            <p>Skeleton</p>
        )
}
    </div>
  );
  
}

export default homepage