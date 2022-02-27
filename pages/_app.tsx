import React, { ReactNode } from "react";
import Head from "next/head";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "@/theme";
import { AuthProvider } from "@/contexts";
import { AuthLayout, DashboardLayout } from "@/layouts";

import "styles/date-picker.css";

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
  "/sign-in": AuthLayout,
  "/sign-up": AuthLayout,
};

function MyApp({ Component, pageProps, ...props }: Props) {
  const DynamicLayout = layouts[props.router.pathname];

  const getLayout = DynamicLayout
    ? (page: ReactNode) => {
        return <DynamicLayout>{page}</DynamicLayout>;
      }
    : (page: ReactNode) => page;

  return (
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
  );
}
export default MyApp;
