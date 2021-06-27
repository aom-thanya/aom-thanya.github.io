import React from 'react'
import Head from 'next/head'
import '../styles/globals.scss'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Aom Thanya</title>
        <meta name="description" content="Aom Thanya's web page" />
        <link rel="icon" href="/heart-8bit.png" sizes="16x16" type="image/png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
