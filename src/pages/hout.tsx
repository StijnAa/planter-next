import * as React from "react";
import Head from "next/head";
import Navbar from "../components/navbar/navbar.component";
import Hero from "../components/hero/hero.component";
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
                <InfoBlock title="De houtkeuze" image="/img/CAS05139.jpg" imagePosition="left" alt="zonnige tuin" card>
                    <div>
                        <p>Welk type hout u kiest bepaalt de style van de plantenbak.</p>
                        <p>Wil u advies? Laat dan uw e-mailadres achter.</p>
                    </div>
                    <EmailInput />
                </InfoBlock>
                <Hero title="Hout types" textPosition="center" size="small" />
                <InfoBlock title="Douglas Hout" image="/img/CAS04991-zoom.jpg" imagePosition="right">
                    <p>
                        Douglas onderscheidt zich door de natuurlijke weerstand tegen rot en schimmels. Dit is een
                        zeldzame eigenschap onder houtsoorten. De karakteristieke roodachtige kleur ontwikkelt bij
                        buitengebruik patina - een beschermende laag die het hout een stijlvolle zilvergrijze tint
                        geeft. Met zijn mooie nerfstructuur en glad oppervlak, dat splinters minimaliseert, biedt
                        Douglas een mooie keuze als hout voor uw plantenbak.
                    </p>
                </InfoBlock>
                <InfoBlock title="Eiken Hout" image="/img/eiken-hout.jpg" imagePosition="left">
                    <p>
                        Eikenhout staat bekend om zijn buitengewone sterkte en duurzaamheid. Het heeft een hoge
                        dichtheid die het bestand maakt tegen weer en wind. De kenmerkende lichtbruine kleur verdiept
                        met de tijd tot een warme, donkere tint. Eiken heeft een opvallende, grovere nerfstructuur die
                        karakter geeft aan elk project. Door zijn hoge tanninegehalte is het van nature bestand tegen
                        insecten en schimmels. Deze combinatie van kracht en schoonheid maakt eiken een uitstekende
                        keuze voor robuuste plantenbakken.
                    </p>
                </InfoBlock>
                <InfoBlock title="Bamboe" image="/img/bamboe-hout.jpg" imagePosition="right">
                    <p>
                        Bamboe is technisch gezien een gras en groeit daarom razendsnel. Hierdoor is het een goede
                        duurzame keuze is. Bamboe is verrassend sterk en licht, wat het makkelijk hanteerbaar maakt. Het
                        heeft een natuurlijke weerstand tegen vocht. De gladde textuur en lichte kleur geven een
                        moderne, minimalistische uitstraling.
                    </p>
                </InfoBlock>
            </main>
            <Footer />
        </>
    );
}
