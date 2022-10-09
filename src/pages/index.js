import Head from 'next/head'
import React from 'react'
import { Brands, Categories, Customers, GetApp, Header, Store, Why } from '../components'

export default function Home() {
  return (
    <>
    <Head>
      <title>365+</title>
    </Head>
      <Header/>
      <Store/>
      <Categories/>
      <Brands/>
      <Why/>
      <Customers/>
      <GetApp/>
    </>
  )
}
