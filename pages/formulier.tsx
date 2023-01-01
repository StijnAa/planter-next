import Navbar from "../components/navbar/navbar.component";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyles from "../styles/global";
import Head from "next/head";
import { SSRProvider } from "@react-aria/ssr";
import Footer from "../components/footer/footer.component";
import FormComponent from "../components/form/form.component";
import BigCard from "../components/card/bigCard.component";
import Faq from "../components/faq/faq.component";
import { useState } from "react";

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
          <BigCard
            title="Contact"
            p="Hier kun je vrijblijvend een aanvraag doen.
              Als je al een idee hebt over hoe je je plantenbak wilt hebben kun je
              dat hieronder invullen. Twijfel je nog over iets? Dat is geen
              probleem. Je kunt een vraag ook leeg laten. We nemen na aanleiding van
              dit formulier contact op om alles nog een keer goed af te stemmen."
            src="/img/demoImg1.jpg"
            imagePosition="right"
            alt="huisje"
          />
          <FormComponent />
        </main>
        <Footer />
      </ThemeProvider>
    </SSRProvider>
  );
}
