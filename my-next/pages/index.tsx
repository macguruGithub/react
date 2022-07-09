// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// import {App,HomePage} from '../components'

import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter()
  return (
    <button onClick={()=>router.push('/users/users')}> route to users </button>
  )
}
