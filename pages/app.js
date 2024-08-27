// pages/_app.js

import Head from "next/head";
import { useState, useEffect } from "react";
import TipsButton from "../components/TipsButton";
import Rules from "../components/Rules";
import NameOverlay from "../components/NameOverlay";
import Image from "next/image";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>TrackHonest</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
