import Navbar from "../components/navbar/navbar.component";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyles from "../styles/global.js";
import Head from "next/head";
import { SSRProvider } from "@react-aria/ssr";
import Footer from "../components/footer/footer.component";
import Faq from "../components/faq/faq.component";
import ShoppingItem from "../components/shoppingcard/shoppingItem";
import ShoppingContainer from "../components/shoppingcard/shoppingContainer";

export default function ShopingPage() {
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
          <ShoppingContainer>
            <ShoppingItem />
            <ShoppingItem />
          </ShoppingContainer>
          <Faq />
        </main>
        <Footer />
      </ThemeProvider>
    </SSRProvider>
  );
}
