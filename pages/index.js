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
        <div className="pt-2" style={{  position: 'relative', width: '25vw', height: '25vw'}}>
        <Image 
        layout="fill"
        objectFit="cover" 
        src="/sobek.png" />
        </div>
        <div class="pt-2">In ancient times, a great beast walked the Earth with men. Some late remnant of an even more ancient planet, these hulking beast were surprisingly friendly and devoted to anyone who fed them.</div>
        <div>And fed them they did for they were always hungry. The bottomless pits that they were even inspired some to worship the beast as the God of Hunger and named him Sobek.</div>
        <div>The Sobeki, or trainers, learned early on that the beast would gladly compete for gold, gems and baubles. Thus the Great Sobek Battles were born.  Tournaments of epic proportions for gold and glory were held all through out the ancient lands.</div>
        <div>Until one day, the Sobek disappeared.  They entered a long, deep hibernation to sleep off their excesses in thousand year long food comma.</div>
        <div>There are new rumblings and grumblings. Some can hear it and know what opportunities await for those who learn the ways of the Sobeki and prepare for The Great Sobek Battles.</div>
      </main>

      <Footer />
    </div>
  )
}
