import Head from "next/head";
import Image from "next/image";
import Wave from "../src/components/Wave";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Surfing Dream</title>
        <meta name='description' content='About my journey beginning to surf in my 50s' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>my surfing dream</h1>
        <h2>testing out the initial setup</h2>
      </main>
      <div>
        <Wave />
        <Wave />
        <Wave />
      </div>
    </div>
  );
}
