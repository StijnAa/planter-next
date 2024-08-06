import "../styles/styles.scss";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Planter.nl</title>
                <meta name="description" content="Op maat gemaakte plantenbakken" />
                <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
            </Head>
            <Component {...pageProps} />
            <Analytics />
        </>
    );
}
