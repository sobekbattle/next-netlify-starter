import Head from 'next/head'
import Image from 'next/image'
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
        <div className="pt-2" style={{  position: 'relative', width: '100vw', height: '66.66vw'}}>
        <Image 
        layout="fill"
        objectFit="cover" 
        src="/sobek.png" />
        </div>
        <div>coming soon</div>
      </main>

      <Footer />
    </div>
  )
}
