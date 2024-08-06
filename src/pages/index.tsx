import * as React from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar/navbar.component";
import Usps from "../components/usps/usps.component";
import Hero from "../components/hero/hero.component";
import InfoBlock from "../components/card/infoBlock.component";
import Footer from "../components/footer/footer.component";
import Faq from "../components/faq/faq.component";
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
                <Hero
                    title="Jouw tuin, jouw stijl"
                    buttonText="Over Planter"
                    href="/over-planter"
                    textPosition="left"
                    size="big"
                    img={
                        <Image
                            src="/img/CAS05095.jpg"
                            fill
                            alt="Vertoning van een unieke houten plantenbak"
                            objectPosition="bottom"
                            loading="eager"
                        />
                    }
                />

                <Usps
                    uspsList={[
                        { icon: "star", text: "Al meer dan 50 tevreden klanten" },
                        { icon: "delivery-time", text: "2-3 weken levertijd" },
                        { icon: "magic", text: "Op maat gemaakt" },
                    ]}
                />

                <InfoBlock
                    title="Op maat gemaakte plantenbakken"
                    image="/img/CAS05073.jpg"
                    alt="Showcase van unieke plantenbakken"
                    imagePosition="right"
                    card
                >
                    <p>
                        Transformeer uw buitenruimte met onze op maat gemaakte plantenbakken. Of u nu een compact balkon
                        of een ruime tuin heeft, wij creëren uw perfecte groene oase.
                    </p>
                </InfoBlock>

                <InfoBlock
                    title="Neem contact op"
                    image="/img/CAS05013.jpg"
                    imagePosition="left"
                    alt="Contact opnemen"
                    card
                >
                    <p>Heeft u vragen of specifieke wensen? Ons team staat klaar om u te helpen.</p>
                    <EmailInput />
                </InfoBlock>

                <Faq
                    title="Veelgestelde Vragen:"
                    faqItems={[
                        {
                            question: "Wat Maakt Jullie Plantenbakken Uniek?",
                            answer: "Onze plantenbakken zijn op maat gemaakt, met handgeselecteerd duurzaam hout en ontworpen voor zowel functionaliteit als schoonheid.",
                        },
                        {
                            question: "Kan Ik Ook Een Plantenbak Laten Maken Voor Mijn Balkon?",
                            answer: "Zeker! Wij specialiseren in op maat gemaakte oplossingen voor elke ruimte.",
                        },
                        {
                            question: "Hoe Kies Ik de Juiste Maat Plantenbak?",
                            answer: "Ons team adviseert u graag op basis van de afmetingen van uw ruimte en uw specifieke wensen. Neem contact met ons op om uw ruimte te bespreken.",
                        },
                        {
                            question: "Zijn de Plantenbakken Weer- en Winterbestendig?",
                            answer: "Absoluut, onze plantenbakken zijn behandeld om alle weersomstandigheden te doorstaan, inclusief strenge winters.",
                        },
                        {
                            question: "Kan Ik Een Specifiek Ontwerp Aanvragen?",
                            answer: "Ja, wij bieden volledige maatwerkopties. Deel uw ontwerpwensen met ons, en wij gaan aan de slag om uw ideale plantenbak te realiseren.",
                        },
                    ]}
                />
            </main>
            <Footer />
        </>
    );
}
