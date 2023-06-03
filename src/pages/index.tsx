import * as React from "react";
import Navbar from "../components/navbar/navbar.component";
import Head from "next/head";
import { Usps } from "../components/usps/usps.component";
import Hero from "../components/hero/hero.component";
import { InfoBlock } from "../components/card/infoBlock.component";
import Footer from "../components/footer/footer.component";
import Faq from "../components/faq/faq.component";
import Image from "next/image";
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
        <Hero
          title="Plantenbakken op maat"
          buttonText="Over Planter"
          href="/over-planter"
          textPosition="left"
          size="big"
          img={<Image src="/img/demoImg1.jpg" fill alt="zonnige tuin" />}
        />
        <Usps
          uspsList={[
            { icon: "star", text: "Al meer dan 50 tevreden klanten" },
            { icon: "delivery-time", text: "2-3 weken levertijd" },
            { icon: "magic", text: "Op maat gemaakt" },
          ]}
        />
        <InfoBlock
          title="Plantenbakken die passen in jou tuin"
          buttonText="Bekijk de mogelijkheden"
          href="/hout"
          image="/img/demoImg1.jpg"
          alt="zonnige tuin"
          imagePosition="right"
          card
        >
          <p> Maak jou tuin helemaal af met een op maat gemaakte plantenbak.</p>
        </InfoBlock>
        <InfoBlock
          title="Contact"
          image="/img/demoImg1.jpg"
          imagePosition="left"
          alt="zonnige tuin"
          card
        >
          <p>Laat je email adres achter, dan nemen wij contact met je op.</p>
          <EmailInput />
        </InfoBlock>
        <Hero title="Planter" textPosition="center" size="small" />
        <InfoBlock
          title="Wie zijn wij?"
          image="/img/demoImg1.jpg"
          imagePosition="left"
        >
          <p>
            Wij zijn een klein bedrijf dat zich specialiseert in het maken van
            plantenbakken op maat. Wij maken de bakken van duurzaam hout en
            leveren ze bij jou thuis af.
          </p>
        </InfoBlock>
        <Faq
          title="Veel gestelde vragen:"
          faqItems={[
            {
              question: "hoeveel weegt zo'n bak nou precies?",
              answer: "best een aardige hoeveelheid",
            },
            {
              question: "hoeveel weegt zo'n bak nou precies?",
              answer: "best een aardige hoeveelheid",
            },
            {
              question: "hoeveel weegt zo'n bak nou precies?",
              answer: "best een aardige hoeveelheid",
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
