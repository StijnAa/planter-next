import Navbar from "../components/navbar/navbar.component";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyles from "../styles/global.js";
import Head from "next/head";
import { SSRProvider } from "@react-aria/ssr";
import Footer from "../components/footer/footer.component";
import FormComponent from "../components/form/form.component";
import PaddingWrapper from "../components/wrappers/padding.wrapper";
import BigCard from "../components/card/bigCard.component";
import Faq from "../components/faq/faq.component";

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
          <PaddingWrapper>
            <BigCard
              title="Contact"
              p="Hier kun je vrijblijvend een aanvraag doen.
              Als je al een idee hebt over hoe je je plantenbak wilt hebben kun je
              dat hieronder invullen. Twijfel je nog over iets? Dat is geen
              probleem. Je kunt een vraag ook leeg laten. We nemen na aanleiding van
              dit formulier contact op om alles nog een keer goed af te stemmen."
              src="/img/demoImg1.jpg"
            />
            <FormComponent />
          </PaddingWrapper>
        </main>
        <Faq />
        <Footer />
      </ThemeProvider>
    </SSRProvider>
  );
}