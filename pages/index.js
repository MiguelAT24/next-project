import { getSession } from "next-auth/react"

function homepage({session}) {

   return (
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

export const getServerSideProps = async(context) =>{

  const session = await getSession(context)
  if(!session) return{
       redirect:{
        destination: '/login',
        permanent: false
       }
  }

  return {

    props: {
      session
    }
  }

}

export default homepage