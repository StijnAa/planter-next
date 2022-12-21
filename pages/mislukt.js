import Navbar from "../components/navbar/navbar.component";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyles from "../styles/global.js";
import Head from "next/head";
import { SSRProvider } from "@react-aria/ssr";
import Footer from "../components/footer/footer.component";
import FormComponent from "../components/form/form.component";
import BigCard from "../components/card/bigCard.component";

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
            title="Er is iets mis gegaan."
            p="We hebben je aanvraag nog niet ontvangen. Probeer het nog een keer. Je kunt ook altijd contact op nemen via de mail."
            buttonText="Terug"
            href="/formulier"
            src="/img/demoImg1.jpg"
          />
        </main>
        <Footer />
      </ThemeProvider>
    </SSRProvider>
  );
}
