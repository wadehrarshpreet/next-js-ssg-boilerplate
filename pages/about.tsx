import type { NextPage } from "next";
import Head from "next/head";
import React from "react";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About | NextJS</title>
        <meta name="description" content="About | NextJS" />
      </Head>

      <div className="container md:mt-5">
        <h2>About US Page</h2>
      </div>
    </>
  );
};

export default About;
