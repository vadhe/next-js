import Head from 'next/head'
import Header from '@components/header'
import Navigation from '@components/navigation'
import { ReactNode } from 'react'

type PageProps = {
  children?: ReactNode
}

const Layout = ({ children }: PageProps) => {
  return (
    <>
      <Head>
        <title>All About NextJS</title>
      </Head>
      <main>
        <Header />
        <Navigation />
        {children}
      </main>
    </>
  )
}
export default Layout
