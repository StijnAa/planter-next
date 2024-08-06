import React from "react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <React.StrictMode>
            <Html lang="en">
                <Head>
                    <link href="/icofont/icofont.min.css" rel="stylesheet" />
                    <link href="/icofont/fonts/icofont.woff2" rel="stylesheet" />
                    <link
                        rel="icon"
                        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🅿</text></svg>"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        </React.StrictMode>
    );
}
