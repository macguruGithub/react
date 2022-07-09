import React from 'react'
import Error from 'next/error'

 const ErrorPage = ({pageProps:{errorcode}}) => {
  return (
    <Error title={'Stupid run :('} eee={'ee'} statusCode={errorcode}/>
  )
}
ErrorPage.getInitialProps = ({res,err}) =>{
  console.log('error from error page ',err?.statusCode)
  console.log('res from error page ',res?.statusCode)
  const errorcode = res?res.statusCode : err?err.statusCode : 404
    return {
        props:{
             errorcode
        }
    }
}

export default ErrorPage


