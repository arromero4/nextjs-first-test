import React from 'react'
import Navigation from './Navigation'
import Head from "next/head";

function Container(props) {
  return (
    <div>
        <Head>
            <title>Next.js Project</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" />
        </Head>
        <Navigation/>
        <div className='container p-4'>
            {props.children}
        </div>
    </div>
  )
}

export default Container