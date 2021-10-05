import { GraphQLClient } from "graphql-request";
import Cookies from "js-cookie";

const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_EP || "";

export const client = new GraphQLClient(endpoint, {
  headers: {
    authorization: Cookies.get("jwtToken") || "",
  },
});
