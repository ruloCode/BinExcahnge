import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import {Converter} from '../components/conversor/Conversor';

const Home: NextPage = () => {
  return (
    <div className="app">
      <Head>
        <title>Bin Exchange</title>
        <meta
          name="Description"
          content="Build a PWA with Next.js to achieve 100 lighthouse score."
        />
      </Head>
      <Converter />
    </div>
  );
};

export default Home;
