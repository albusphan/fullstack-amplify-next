import { GraphQLClient } from "graphql-request";
import Cookies from "js-cookie";

const jwtToken = Cookies.get("jwtToken");
const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_EP || "";

export const graphqlClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: jwtToken || "",
  },
});
