import { Html, Head, Main, NextScript } from "next/document";
import ExternalIconLinks from "@/components/ExternalIconLinks";
import DottedExternalLink from "@/components/Links/DottedExternalLink";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-zinc-900 h-full">
        <Main />
        <NextScript />
        <footer className="flex flex-col px-2 pb-6 pt-36 text-xs text-center gap-2">
          <div className="flex felx-row justify-center gap-5">
            <ExternalIconLinks />
          </div>
          <p>Built by Gabriel Cisneros</p>
          <p>
            Design created by{" "}
            <DottedExternalLink href="https://www.figma.com/community/file/1160861462615915842">
              Caleb Nyong
            </DottedExternalLink>{" "}
            with inspiration from{" "}
            <DottedExternalLink href="https://brittanychiang.com/">
              brittanychiang.com
            </DottedExternalLink>
          </p>
        </footer>
      </body>
    </Html>
  );
}
