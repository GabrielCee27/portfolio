import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Gabriel Cisneros</title>
        <meta name="description" content="..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main>
        <h1 className='text-3xl font-bold underline'>Hello World</h1>
      </main>
    </>
  )
}
