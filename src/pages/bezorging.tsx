import * as React from "react";
import Head from "next/head";
import Navbar from "../components/navbar/navbar.component";
import Hero from "../components/hero/hero.component";
import InfoBlock from "../components/card/infoBlock.component";
import EmailInput from "../components/emailInput/emailInput";
import Footer from "../components/footer/footer.component";

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
                <InfoBlock title="De houtkeuze" image="/img/demoImg1.jpg" imagePosition="left" alt="zonnige tuin" card>
                    <p>Welk type hout je keist bepaalt de style van de bak.</p>
                    <p>Wil je advies? Laat dan je email adres achter.</p>
                    <EmailInput />
                </InfoBlock>
            </main>
            <Footer />
        </>
    );
}
