import Head from "next/head";
import Navigation from "@/components/Navigation";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

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

      <main className="w-full"></main>
    </>
  );
}
