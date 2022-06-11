import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | NextJS</title>
        <meta name="description" content="Home | NextJS" />
      </Head>

      <div className="container md:mt-5">
        <h2>Home Page</h2>
      </div>
    </>
  );
};

export default Home;
