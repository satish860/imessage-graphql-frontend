import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";
import { themeconst } from "../chakra/theme";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={themeconst}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
}
