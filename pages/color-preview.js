import Navbar from "../components/navbar/navbar.component";
import styled, { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyles from "../styles/global.js";
import Head from "next/head";
import { SSRProvider } from "@react-aria/ssr";
import ColorPreview from "../components/colorPreview/colorPreview.component";

export default function ColorPreviewPage() {
  return (
    <SSRProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Head>
          <title>Planter.nl</title>
        </Head>
        <ColorPreview />
      </ThemeProvider>
    </SSRProvider>
  );
}
