import * as React from "react";
import Head from "next/head";
import Navbar from "../components/navbar/navbar.component";
import InfoBlock from "../components/card/infoBlock.component";
import Footer from "../components/footer/footer.component";

import EmailInput from "../components/emailInput/emailInput";

export default function Home() {
    return (
        <>
            <Head>
                <title>Planter.nl</title>
            </Head>
            <header>
                <Navbar />
            </header>

            <main>
                <InfoBlock title="Contact" image="/img/demoImg1.jpg" alt="zonnige tuin" imagePosition="right" card>
                    <p>Laat je email adres achter, dan nemen wij contact met je op.</p>
                    <EmailInput />
                </InfoBlock>
            </main>
            <Footer />
        </>
    );
}
