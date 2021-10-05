import React, { ReactNode, useState } from "react";
import Head from "next/head";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "@/theme";
import { AuthProvider } from "@/contexts";
import { DashboardLayout } from "@/layouts";

type Page<P = Record<string, unknown>> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

type Props = AppProps & {
  Component: Page;
};

const layouts: Record<string, React.FC> = {
  "/": DashboardLayout,
  "/account": DashboardLayout,
  "/projects/[id]/[step]": DashboardLayout,
};

function MyApp({ Component, pageProps, ...props }: Props) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  console.log(props.router);

  const DynamicLayout = layouts[props.router.pathname];

  const getLayout = DynamicLayout
    ? (page: ReactNode) => {
        return <DynamicLayout>{page}</DynamicLayout>;
      }
    : (page: ReactNode) => page;

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <AuthProvider>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <title>361/DRX CMS</title>
            <meta name="description" content="361/DRX CMS" />
          </Head>
          <ChakraProvider theme={theme}>
            {getLayout(<Component {...pageProps} />)}
          </ChakraProvider>
        </AuthProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
export default MyApp;
