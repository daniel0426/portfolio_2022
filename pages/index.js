import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import { getProjects } from '../lib/projects';
import { motion } from 'framer-motion';

export default function Home({ projects }) {
  return (
    <motion.div
      className="scroll-smooth hero-bg"
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
    >
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
    </motion.div>
  );
}

export async function getStaticProps() {
  const projects = await getProjects();
  return {
    props: projects,
  };
}