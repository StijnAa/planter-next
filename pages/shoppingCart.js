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
import Footer from "../components/footer/footer.component";
import Faq from "../components/faq/faq.component";
import ShoppingBasket from "../components/shoppingBasket/shoppingBasket.component";

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
          <ShoppingBasket/>
          <Faq/>
        </main>
        <Footer />
      </ThemeProvider>
    </SSRProvider>
  );
}
