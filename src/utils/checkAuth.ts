import { client } from "@/queryClient";
import { GetServerSidePropsContext } from "next";

import { ROUTES } from "../routes";

export const checkAuth = async ({ req }: GetServerSidePropsContext) => {
  const jwtToken = req.cookies.jwtToken;

  if (!jwtToken) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  client.setHeader("authorization", jwtToken);

  return {
    props: {},
  };
};

export const checkUnAuth = async ({ req }: GetServerSidePropsContext) => {
  const jwtToken = req.cookies.jwtToken;

  if (jwtToken) {
    return {
      redirect: {
        destination: ROUTES.home,
        permanent: false,
      },
    };
  }

  return { props: {} };
};
