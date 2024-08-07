import * as React from "react";
import Head from "next/head";
import Navbar from "../components/navbar/navbar.component";
import InfoBlock from "../components/card/infoBlock.component";
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
                <InfoBlock
                    title="Woops!"
                    image="/img/CAS05068.jpg"
                    alt="zonnige tuin"
                    imagePosition="right"
                    buttonText="Terug"
                    href="/contact"
                    card
                >
                    <p>Er is iets fout gegaan. Probeer het opnieuw.</p>
                    <p>
                        Of mail naar
                        <a href="mailto:planter@stijnaa.nl"> planter@stijnaa.nl</a>
                    </p>
                </InfoBlock>
            </main>
            <Footer />
        </>
    );
}
