import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main className="mt-20 md:mt-24 max-w-screen-3xl m-auto min-h-[calc(100vh_-_176px)] py-8">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
