import { useContext } from "react";
import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserSession,
} from "amazon-cognito-identity-js";
import Cookies from "js-cookie";

import { AuthContext, UserPool } from "../contexts";

export const useUser = () => {
  const context = useContext(AuthContext);

  if (!context) throw "useUser hook used outside of auth context";

  const { user, loading, setUser, attributes } = context;

  const signIn = (email: string, password: string) =>
    new Promise<{
      session?: CognitoUserSession;
      error?: Error;
      message?:
        | "newPasswordRequired"
        | "userConfirmationNecessary"
        | "mfaRequired";
    }>((resolve) => {
      const newUser = new CognitoUser({
        Username: email,
        Pool: UserPool,
      });

      const authDetails = new AuthenticationDetails({
        Username: email,
        Password: password,
      });

      newUser.authenticateUser(authDetails, {
        onSuccess: async (data, userConfirmationNecessary) => {
          if (userConfirmationNecessary) {
            resolve({
              message: "userConfirmationNecessary",
            });
          }
          const jwtToken = data.getAccessToken().getJwtToken();
          Cookies.set("jwtToken", jwtToken);
          setUser(newUser);
          resolve({ session: data });
        },
        onFailure: (err) => {
          resolve({ error: err });
        },
        newPasswordRequired: () => {
          resolve({ message: "newPasswordRequired" });
        },
        mfaRequired: () => {
          setUser(newUser);
          resolve({ message: "mfaRequired" });
        },
      });
    });

  const sendMFACode = (
    code: string
  ): Promise<{
    data?: "success";
    error?: Error;
  }> =>
    new Promise((resolve) => {
      if (!user) {
        resolve({
          error: new Error("Something wrong, please try login again"),
        });
        return;
      }
      user.sendMFACode(code, {
        onSuccess: () => resolve({ data: "success" }),
        onFailure: (err) =>
          resolve({
            error: err,
          }),
      });
    });

  const signOut = () =>
    new Promise<{ message: string }>((resolve) => {
      if (user) {
        user.signOut(() => {
          setUser(null);
          Cookies.remove("jwtToken");
          resolve({ message: "success" });
        });
      } else {
        resolve({ message: "not signed in" });
      }
    });

  return {
    user,
    attributes,
    loading,
    signIn,
    signOut,
    sendMFACode,
  };
};
