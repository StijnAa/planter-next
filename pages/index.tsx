import * as React from "react";
import Navbar from "../components/navbar/navbar.component";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyles from "../styles/global";
import Head from "next/head";
import { SSRProvider } from "@react-aria/ssr";
import Usps from "../components/usps/usps.component";
import Hero from "../components/hero/hero.component";
import BigCard from "../components/card/bigCard.component";
import Footer from "../components/footer/footer.component";
import Faq from "../components/faq/faq.component";
import InfoCard from "../components/card/infoCard.component";

export default function Home() {
  return (
    <SSRProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Head>
          <title>Planter.nl</title>
        </Head>
        <header>
          <Navbar />
        </header>
        <main>
          <Hero
            title="Deze lente, 25% korting!"
            buttonText="Stel je eigen plantenbak samen"
            href="/formulier"
            src="/img/demoImg1.jpg"
            textPosition="left"
          />
          <Usps />
          <BigCard
            title="Deze lente, 25% korting!"
            p="Maark je tuin zomerklaar. U krijgt 25% korting het totaal"
            buttonText="Stel een plantenbak samen"
            href="/formulier"
            src="/img/demoImg1.jpg"
            alt="zonnige tuin"
            imagePosition="right"
          />
          <BigCard
            title="Deze lente, 25% korting!"
            p="Maark je tuin zomerklaar. U krijgt 25% korting het totaal"
            imagePosition="left"
            src="/img/demoImg1.jpg"
            alt="zonnige tuin"
          />
          <Hero title="Houtsoorten" textPosition="center" />
          <InfoCard
            title="Eikenhout"
            p="Eiken (of eikenhout) is een van de bekendste houtsoorten. In het algemeen is eiken sterk en hard, maar toch redelijk makkelijk te bewerken en af te werken.
            Er is groot verschil tussen het ene eikenhout en het andere. Tot de bekendste handelsgroepen horen
            Europees eiken: Dit is het traditionele eikenhout, waarvan onder andere de klassieke eiken meubelen en beelden gemaakt zijn. 
            Niet alleen meubels, maar ook deuren, parket, kozijnen en trappen en ook schepen en sluisdeuren werden traditioneel van eikenhout gemaakt. 
            Door de schaarste (en prijs) wordt dit meer en meer vervangen door andere soorten, onder andere meer bestendige houtsoorten als Azobé of Afzelia. "
            src="/img/demoImg1.jpg"
            imagePosition="left"
          />
          <InfoCard
            title="Bamboe"
            p="Europees eiken: Dit is het traditionele eikenhout, waarvan onder andere de klassieke eiken meubelen en beelden gemaakt zijn. 
            Niet alleen meubels, maar ook deuren, parket, kozijnen en trappen en ook schepen en sluisdeuren werden traditioneel van eikenhout gemaakt. 
            Door de schaarste (en prijs) wordt dit meer en meer vervangen door andere soorten, onder andere meer bestendige houtsoorten als Azobé of Afzelia. "
            src="/img/demoImg1.jpg"
            buttonText="Stel een plantenbak samen"
            href="/formulier"
            imagePosition="right"
          />
          <InfoCard
            title="Bamboe"
            p="Europees eiken: Dit is het traditionele eikenhout, waarvan onder andere de klassieke eiken meubelen en beelden gemaakt zijn. 
            Niet alleen meubels, maar ook deuren, parket, kozijnen en trappen en ook schepen en sluisdeuren werden traditioneel van eikenhout gemaakt. 
            Door de schaarste (en prijs) wordt dit meer en meer vervangen door andere soorten, onder andere meer bestendige houtsoorten als Azobé of Afzelia. "
          />
          <InfoCard
            title="Bamboe"
            p="Europees eiken: Dit is het traditionele eikenhout, waarvan onder andere de klassieke eiken meubelen en beelden gemaakt zijn. 
            Niet alleen meubels, maar ook deuren, parket, kozijnen en trappen en ook schepen en sluisdeuren werden traditioneel van eikenhout gemaakt. 
            Door de schaarste (en prijs) wordt dit meer en meer vervangen door andere soorten, onder andere meer bestendige houtsoorten als Azobé of Afzelia. "
            buttonText="Stel een plantenbak samen"
            href="/formulier"
          />
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
      </ThemeProvider>
    </SSRProvider>
  );
}
