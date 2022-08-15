import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import { getProjects } from '../lib/projects';

export default function Home({ projects }) {
  return (
    <div className="scroll-smooth">
      <Head>
        <title>Daniel Chung</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="  relative mt-24">
        <Hero />
        <About />
        <Projects projects={projects} />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const projects = await getProjects();
  return {
    props: projects,
  };
}