import Navbar from "../components/navbar/navbar.component";

import Head from "next/head";
import { SSRProvider } from "@react-aria/ssr";
import Footer from "../components/footer/footer.component";
import FormComponent from "../components/form/form.component";
import BigCard from "../components/card/infoBlock.component";

export default function formPage() {
  return (
    <SSRProvider>
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
          imagePosition="right"
          alt="huisje"
        />
      </main>
      <Footer />
    </SSRProvider>
  );
}
