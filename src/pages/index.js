import Head from 'next/head'
import React from 'react'
import { Brands, Categories, Customers, Header, Store, Why } from '../components'

export default function Home() {
  return (
    <>
    <Head>
      <title>Rhythm</title>
    </Head>
      <Header/>
      <Store/>
      <Categories/>
      <Brands/>
      <Why/>
      <Customers/>
    </>
  )
}
