import * as React from "react";
import Navbar from "../components/navbar/navbar.component";
import Head from "next/head";
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
          title="Gelukt!"
          image="/img/demoImg1.jpg"
          alt="zonnige tuin"
          imagePosition="right"
          card
        >
          <p>We nemen binnenkort contact met je op!</p>
        </InfoBlock>
      </main>
      <Footer />
    </>
  );
}