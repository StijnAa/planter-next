import * as React from "react";
import Navbar from "../components/navbar/navbar.component";
import Head from "next/head";
import { Usps } from "../components/usps/usps.component";
import Hero from "../components/hero/hero.component";
import { InfoBlock } from "../components/card/infoBlock.component";
import Footer from "../components/footer/footer.component";
import EmailInput from "@/components/textInput/textInput";

export default function Home() {
  return (
    <>
      <Head>
        <title>Planter.nl</title>
      </Head>
      <header>
        <Navbar
          linksList={[
            { text: "Houtkeuze", href: "/hout" },
            { text: "Bezorging", href: "/bezorging" },
            { text: "Contact", href: "/contact" },
            { text: "Over Planter", href: "/over-planter" },
          ]}
        />
      </header>

      <main>
        <InfoBlock
          title="De houtkeuze"
          image="/img/demoImg1.jpg"
          imagePosition="left"
          alt="zonnige tuin"
          card
        >
          <p>
            Welk type hout je keist bepaalt de style van de bak.
            <p>Wil je advies? Laat dan je email adres achter.</p>
          </p>
          <EmailInput />
        </InfoBlock>
        <Hero title="Hout types" textPosition="center" size="small" />
        <InfoBlock
          title="Bamboe"
          image="/img/demoImg1.jpg"
          imagePosition="right"
        >
          <p>
            Eiken (of eikenhout) is een van de bekendste houtsoorten. In het
            algemeen is eiken sterk en hard, maar toch redelijk makkelijk te
            bewerken en af te werken. Er is groot verschil tussen het ene
            eikenhout en het andere. Tot de bekendste handelsgroepen horen
          </p>
        </InfoBlock>

        <InfoBlock
          title="Bamboe"
          image="/img/demoImg1.jpg"
          imagePosition="left"
        >
          <p>
            Eiken (of eikenhout) is een van de bekendste houtsoorten. In het
            algemeen is eiken sterk en hard, maar toch redelijk makkelijk te
            bewerken en af te werken. Er is groot verschil tussen het ene
            eikenhout en het andere. Tot de bekendste handelsgroepen horen
          </p>
        </InfoBlock>
        <InfoBlock
          title="Bamboe"
          image="/img/demoImg1.jpg"
          imagePosition="right"
        >
          <p>
            Eiken (of eikenhout) is een van de bekendste houtsoorten. In het
            algemeen is eiken sterk en hard, maar toch redelijk makkelijk te
            bewerken en af te werken. Er is groot verschil tussen het ene
            eikenhout en het andere. Tot de bekendste handelsgroepen horen
          </p>
        </InfoBlock>

        <InfoBlock
          title="Bamboe"
          image="/img/demoImg1.jpg"
          imagePosition="left"
        >
          <p>
            Eiken (of eikenhout) is een van de bekendste houtsoorten. In het
            algemeen is eiken sterk en hard, maar toch redelijk makkelijk te
            bewerken en af te werken. Er is groot verschil tussen het ene
            eikenhout en het andere. Tot de bekendste handelsgroepen horen
          </p>
        </InfoBlock>
      </main>
      <Footer />
    </>
  );
}
