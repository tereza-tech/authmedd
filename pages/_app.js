import "@styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Head from "next/head";
import Header from "../components/Header";

function Application({ Component, pageProps }) {
  return (
    <ClerkProvider {...pageProps}>
      <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
        <Head>
          <title>Clerk + Netlify Starter</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <Header />
        <Component {...pageProps} />
      </div>
    </ClerkProvider>
  );
  //return <Component {...pageProps} />
}

export default Application;
