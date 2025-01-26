import {
  DocumentContext,
  DocumentProps,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import {
  DocumentHeadTags,
  documentGetInitialProps,
  DocumentHeadTagsProps,
} from "@mui/material-nextjs/v15-pagesRouter";

export default function MyDocument(
  props: DocumentProps & DocumentHeadTagsProps,
) {
  return (
    <Html lang="en">
      <Head>
        <DocumentHeadTags {...props} />
        <style>
          {`
            html,
            body,
            #__next {
              height: 100%;
            }
          `}
        </style>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const finalProps = await documentGetInitialProps(ctx);
  return finalProps;
};
