import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";
import { themeconst } from "../chakra/theme";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/graphql/apollo";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <ApolloProvider client={client}>
    <SessionProvider session={session}>
      <ChakraProvider theme={themeconst}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
    </ApolloProvider>
  );
}
