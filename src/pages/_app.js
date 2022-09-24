import React from 'react'
import Head from 'next/head'
import { Navbar } from '../components'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='app'>
      <Head>
        <link rel="icon" type="image/x-icon" href="favicon.png"/>
      </Head>
      <Navbar/>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
