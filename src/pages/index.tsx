import Head from "next/head";
import { Plus_Jakarta_Sans } from "next/font/google";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Career from "@/components/Career";
import Projects from "@/components/Projects";
import About from "@/components/About";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

const SECTION_PADDING = "py-20";

export default function Home() {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${plusJakartaSans.style.fontFamily};
        }
      `}</style>
      <Head>
        <title>Gabriel Cisneros</title>
        <meta name="description" content="..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <header>
        <Navigation />
      </header>

      <main className="w-full min-h-screen px-10 max-w-7xl m-auto md:px-16 pb-3 mt-[72px] md:mt-0">
        <Hero />
        <section id="about" className={SECTION_PADDING}>
          <About />
        </section>
        <section id="experience" className={SECTION_PADDING}>
          <Career />
        </section>
        <section id="projects" className={SECTION_PADDING}>
          <Projects />
        </section>
      </main>
    </>
  );
}
