import React from 'react'
import { useRouter } from 'next/router';

export const UserList = ({pageProps:{users}}) => { 
  const router = useRouter()
  // console.log('users ',users)
  return (
    <>
    <button onClick={()=>router.push('/')}> back </button>
        <ul>
        {
          users?.map(data => (
            
            <div key={`${data.id}`}><li> {data.name}</li>
            <button onClick={()=>router.push(`users/?counter=2`,undefined,{shallow:true})}>{`Go to ${data.name} page`}</button>
            </div>
          ))
        }
          
      </ul>
      
    </>
  )
}
interface ResponseType {
  createdAt?:string
    name?:string
    avatar?:string
    custom?:string
    id?:string
  
}
export default UserList;




  
