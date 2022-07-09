import React from 'react'
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'

const UsersId = ({pageProps}) => {
const router = useRouter()
console.log('pageProps => ',pageProps)
// console.log(params)

  return (
    <div>user no {}</div>
  )
}

// export async function getStaticProps({params}){
//     return {
//       props : {
//         id: params.user_id
//       }
//     }

// }
interface ResponseType {
  createdAt?:string
    name?:string
    avatar?:string
    custom?:string
    id?:string
  
}

export async function getStaticProps({params}){
  console.log('getStaticProps params ',params)
  return {
    props:{
      params
    }
  }
}
export async function getStaticPaths(){

  let data = await fetch(`https://62c6adb074e1381c0a65dc58.mockapi.io/api/v1/users`)
  let res:ResponseType[] = await data.json()
  const paths = res.filter(data => data.id!=='1').map(data => {
    return {
      params:{
        user_id:data.id
      }
    }
  })
  console.log('paths => ',paths)

  return {
    paths:paths,
    fallback:true
  }
}

export default UsersId