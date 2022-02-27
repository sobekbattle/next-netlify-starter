import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
       <Head>
        <title>Sobek Battle</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Sobek Battle" />
        <div>coming soon</div>
      </main>

      <Footer />
    </div>
  )
}
