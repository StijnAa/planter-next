import Navbar from "../components/navbar/navbar.component";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyles from "../styles/global.js";
import Head from "next/head";
import { SSRProvider } from "@react-aria/ssr";
import Footer from "../components/footer/footer.component";
import HalfHero from "../components/card/infoCard.component";

export default function formPage() {
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
          <HalfHero
            title="Eikenhout"
            p="Eiken (of eikenhout) is een van de bekendste houtsoorten. In het algemeen is eiken sterk en hard, maar toch redelijk makkelijk te bewerken en af te werken.
            Er is groot verschil tussen het ene eikenhout en het andere. Tot de bekendste handelsgroepen horen
            Europees eiken: Dit is het traditionele eikenhout, waarvan onder andere de klassieke eiken meubelen en beelden gemaakt zijn. 
            Niet alleen meubels, maar ook deuren, parket, kozijnen en trappen en ook schepen en sluisdeuren werden traditioneel van eikenhout gemaakt. 
            Door de schaarste (en prijs) wordt dit meer en meer vervangen door andere soorten, onder andere meer bestendige houtsoorten als Azobé of Afzelia. "
          />
        </main>
        <Footer />
      </ThemeProvider>
    </SSRProvider>
  );
}
