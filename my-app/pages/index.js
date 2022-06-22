import Head from 'next/head'
import Form from "../components/Form"
export default function Home() {
  return (
    <>
      <Head>
        <title>Ceejs Form</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

  <div className="bg-white h-screen flex items-center justify-center p-12 py-6">
  <div className="mx-auto w-full max-w-screen-lg bg-blue-700 px-5 py-10">
    <div className="grid gap-5 md:grid-cols-2 md:gap-10 lg:gap-20">
      <div className="flex justify-center md:justify-end">
        <img className="w-full max-w-sm" src="https://ouch-cdn2.icons8.com/sKnF2PmYhkmP28DzIm6KqWSknT03UVWjg3FLlGYIOp4/rs:fit:684:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvOTI3/L2U4OWQ2NmZiLTg0/NzEtNDc3NS1hNTA0/LTMwNWRiYmJkNzg0/MC5zdmc.png" alt="Marketing newsletter via computer Illustration in PNG, SVG" />
      </div>
      <div className="flex items-center">
        <div className="mx-auto md:mx-0">
          <h3 className="text-4xl font-bold text-white">Subscribe</h3>
          <p className="mt-2 max-w-[20rem] text-lg text-white/80">Join our weekly digest. You'll also receive some of our best posts today.</p>
         <Form />
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}
