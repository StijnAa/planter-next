import * as React from "react";
import Head from "next/head";
import Navbar from "../components/navbar/navbar.component";
import InfoBlock from "../components/card/infoBlock.component";
import Footer from "../components/footer/footer.component";
import EmailInput from "../components/emailInput/emailInput";
import Hero from "../components/hero/hero.component";

export default function PrivacyPolicy() {
    return (
        <>
            <Head>
                <title>Planter.nl</title>
            </Head>
            <header>
                <Navbar />
            </header>

            <main>
                <Hero title="Privacyverklaring" textPosition="center" size="small" />
                <InfoBlock title="Privacybeleid Planter" className="privacy-policy">
                    {" "}
                    <p>
                        Bij Planter vinden we uw privacy belangrijk. We houden het simpel en verzamelen alleen wat nodig
                        is:
                    </p>
                    <h5>1. Welke gegevens verzamelen we?</h5>
                    <ul>
                        <li>Uw e-mailadres</li>
                        <li>Onze e-mailgesprekken met u</li>
                    </ul>
                    <h5>2. Waarom verzamelen we deze gegevens?</h5>
                    <ul>
                        <li>Om contact te houden over uw bestellingen en vragen</li>
                        <li>Om u beter te kunnen helpen bij toekomstige vragen</li>
                    </ul>
                    <h5>3. Hoe gaan we met uw gegevens om?</h5>
                    <ul>
                        <li>We verkopen uw gegevens nooit</li>
                        <li>We gebruiken uw gegevens alleen voor ons eigen bedrijf</li>
                        <li>We bewaren uw gegevens veilig en niet langer dan nodig</li>
                    </ul>
                    <h5>4. Wat zijn uw rechten?</h5>
                    <p>
                        U kunt altijd uw gegevens inzien, aanpassen of laten verwijderen. Stuur ons een bericht en we
                        helpen u.
                    </p>
                    <h5>Vragen?</h5>
                    <p>Neem gerust contact op als u vragen heeft over uw gegevens.</p>
                    <p>Door onze website te gebruiken, gaat u akkoord met dit privacybeleid.</p>
                    <p>Laatste update: 06-08-2024</p>
                </InfoBlock>

                <InfoBlock title="Nog vragen?" image="/img/CAS05009.jpg" alt="zonnige tuin" imagePosition="right" card>
                    <p>Laat uw e-mailadres achter.</p>
                    <EmailInput />
                </InfoBlock>
            </main>
            <Footer />
        </>
    );
}
