import * as React from "react";
import Head from "next/head";
import Navbar from "../components/navbar/navbar.component";
import InfoBlock from "../components/card/infoBlock.component";
import Footer from "../components/footer/footer.component";
import EmailInput from "../components/emailInput/emailInput";
import Hero from "../components/hero/hero.component";

export default function faq() {
    return (
        <>
            <Head>
                <title>Planter.nl</title>
            </Head>
            <header>
                <Navbar />
            </header>

            <main>
                <Hero title="Veelgestelde vragen" textPosition="center" size="small" />
                <InfoBlock title="Hoe verloopt het proces van bestelling tot installatie?">
                    <p>
                        Ons proces begint met een persoonlijk gesprek om uw wensen te bespreken. Vervolgens maken we een
                        ontwerp en leggen dit aan u voor. Na uw goedkeuring starten we met de productie. Tot slot
                        leveren en installeren we de plantenbakken bij u thuis.
                    </p>
                </InfoBlock>

                <InfoBlock title="Kan ik een vrijblijvende offerte aanvragen?">
                    <p>
                        Zeker! U kunt via onze website of telefonisch een vrijblijvende offerte aanvragen. We maken
                        graag een voorstel op maat.
                    </p>
                </InfoBlock>

                <InfoBlock title="Hoe lang duurt het hele proces gemiddeld?">
                    <p>
                        Gemiddeld duurt het proces van eerste gesprek tot installatie 4-6 weken, afhankelijk van de
                        complexiteit van het project en onze actuele werkdruk.
                    </p>
                </InfoBlock>

                <InfoBlock title="Werken jullie in heel Nederland of alleen in bepaalde regio's?">
                    <p>
                        We zijn actief in heel Nederland. Voor projecten buiten de Randstad kan een kleine toeslag voor
                        reiskosten gelden.
                    </p>
                </InfoBlock>

                <InfoBlock title="Bieden jullie garantie op de geïnstalleerde plantenbakken?">
                    <p>
                        Ja, we bieden 2 jaar garantie op constructie en afwerking van onze plantenbakken bij normaal
                        gebruik.
                    </p>
                </InfoBlock>

                <InfoBlock title="Hoe gaan jullie om met onvoorziene omstandigheden tijdens de installatie?">
                    <p>
                        Onze ervaren installateurs zijn voorbereid op diverse situaties. Bij onvoorziene omstandigheden
                        zoeken we direct naar oplossingen en communiceren we transparant met u over eventuele
                        aanpassingen.
                    </p>
                </InfoBlock>

                <InfoBlock title="Bieden jullie onderhoudsdiensten aan na de installatie?">
                    <p>
                        Ja, we bieden optionele onderhoudscontracten aan. Hierbij komen we periodiek langs voor
                        inspectie en onderhoud van de plantenbakken en beplanting.
                    </p>
                </InfoBlock>

                <InfoBlock title="Kunnen jullie ook de beplanting doen?">
                    <p>
                        Absoluut! We kunnen de volledige beplanting verzorgen, afgestemd op uw wensen en de specifieke
                        omstandigheden van uw locatie.
                    </p>
                </InfoBlock>

                <InfoBlock title="Wat zijn de betalingsvoorwaarden?">
                    <p>
                        We hanteren meestal een aanbetaling van 30% bij opdrachtverstrekking, 40% bij start productie,
                        en de resterende 30% na installatie. Voor grote projecten kunnen we een aangepast
                        betalingsschema opstellen.
                    </p>
                </InfoBlock>

                <InfoBlock title="Hoe gaan jullie om met duurzaamheid en milieuvriendelijkheid in jullie proces?">
                    <p>
                        Duurzaamheid staat centraal in ons proces. We gebruiken FSC-gecertificeerd hout, werken met
                        milieuvriendelijke behandelingsmethoden, en streven naar minimale afvalproductie. Ook adviseren
                        we over waterefficiënte beplanting en irrigatiesystemen.
                    </p>
                </InfoBlock>
                <InfoBlock
                    title="Nog andere vragen?"
                    image="/img/CAS05009.jpg"
                    alt="zonnige tuin"
                    imagePosition="right"
                    card
                >
                    <p>Laat uw e-mailadres achter.</p>
                    <EmailInput />
                </InfoBlock>
            </main>
            <Footer />
        </>
    );
}
