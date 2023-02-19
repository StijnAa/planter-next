import Head from "next/head";
import ColorPreview from "../components/colorPreview/colorPreview.component";

export default function ColorPreviewPage() {
  return (
    <>
      <Head>
        <title>Planter.nl</title>
      </Head>
      <ColorPreview />
    </>
  );
}
