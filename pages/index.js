import Navbar from "../components/navbar/navbar.component";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyles from "../styles/global.js";
import Head from "next/head";
import { SSRProvider } from "@react-aria/ssr";
import Usps from "../components/usps/usps.component";
import Hero from "../components/hero/hero.component";
import BigCard from "../components/card/bigCard.component";
import HalfHero from "../components/hero/halfHero.component";

export default function Home() {
  return (
    <SSRProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Head>
          <title>testd</title>
        </Head>
        <header>
          <Navbar />
        </header>
        <main>
          <Hero
            title="Deze lente, 25% korting!"
            buttonText="Stel een plantenbak samen"
            url="./img/demoImg1.jpg"
          />
          <Usps />
          <BigCard
            title="Deze lente, 25% korting!"
            p="Maark je tuin zomerklaar. U krijgt 25% korting het totaal"
            buttonText="Stel een plantenbak samen"
            src=""
          />
          <BigCard
            title="Deze lente, 25% korting!"
            p="Maark je tuin zomerklaar. U krijgt 25% korting het totaal"
            src=""
            left
          />
          <Hero
            title="Houtsoorten"
            center
            small
          />
          <HalfHero
            title="Eikenhout"
            p="Eiken (of eikenhout) is een van de bekendste houtsoorten. In het algemeen is eiken sterk en hard, maar toch redelijk makkelijk te bewerken en af te werken.
Er is groot verschil tussen het ene eikenhout en het andere. Tot de bekendste handelsgroepen horen
Europees eiken: Dit is het traditionele eikenhout, waarvan onder andere de klassieke eiken meubelen en beelden gemaakt zijn. 
Niet alleen meubels, maar ook deuren, parket, kozijnen en trappen en ook schepen en sluisdeuren werden traditioneel van eikenhout gemaakt. 
Door de schaarste (en prijs) wordt dit meer en meer vervangen door andere soorten, onder andere meer bestendige houtsoorten als Azobé of Afzelia. "
            src=""
            left
            small
          />
          <HalfHero
            title="Bamboe"
            p="Europees eiken: Dit is het traditionele eikenhout, waarvan onder andere de klassieke eiken meubelen en beelden gemaakt zijn. 
            Niet alleen meubels, maar ook deuren, parket, kozijnen en trappen en ook schepen en sluisdeuren werden traditioneel van eikenhout gemaakt. 
            Door de schaarste (en prijs) wordt dit meer en meer vervangen door andere soorten, onder andere meer bestendige houtsoorten als Azobé of Afzelia. "
            src=""
            buttonText="Stel een plantenbak samen"
            small
          />

        </main>
      </ThemeProvider>
    </SSRProvider>
  );
}
