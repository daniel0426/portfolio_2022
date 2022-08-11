import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Daniel Chung</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="  relative mt-24">
        <Hero />
        <About />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
