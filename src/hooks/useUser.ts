import { useContext } from "react";
import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserSession,
  ICognitoUserSessionData,
} from "amazon-cognito-identity-js";

import { AuthContext, UserPool } from "../contexts";
import { axiosInstance, initAxios } from "@/utils/axiosInstance";

export const useUser = () => {
  const context = useContext(AuthContext);

  if (!context) throw "useUser hook used outside of auth context";

  const { user, loading, setUser, attributes } = context;

  const setupMFA = (user: CognitoUser) =>
    new Promise((resolve) => {
      user.setUserMfaPreference(
        {
          PreferredMfa: true,
          Enabled: true,
        },
        null,
        function (err, result) {
          if (err) {
            resolve({ error: err });
          }
          console.log(result);
          resolve({ result });
        }
      );
    });

  const handleCompleteNewPasswordChallenge = (password: string) =>
    new Promise<{
      session?: CognitoUserSession;
      error?: Error;
      message?:
        | "newPasswordRequired"
        | "userConfirmationNecessary"
        | "mfaRequired";
    }>((resolve) => {
      if (!user) {
        resolve({ error: new Error("User not found") });
        return;
      }
      user.completeNewPasswordChallenge(
        password,
        { phone_number: "+84386503407", email: "test@test.com" },
        {
          onSuccess: async (data, userConfirmationNecessary) => {
            if (userConfirmationNecessary) {
              resolve({
                message: "userConfirmationNecessary",
              });
            }

            resolve({ session: data });
          },
          onFailure: (err) => {
            resolve({ error: err });
          },
        }
      );
    });

  const signIn = (email: string, password: string) =>
    new Promise<{
      session?: CognitoUserSession;
      error?: Error;
      user?: CognitoUser;
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
          await initAxios(data.getIdToken().getJwtToken());

          resolve({ session: data });
        },
        onFailure: (err) => {
          console.log(err, "onFailure");

          if (err.code === "MFAMethodNotFoundException") {
            newUser.setUserMfaPreference(
              { PreferredMfa: true, Enabled: true },
              null,
              function (err, result) {
                if (err) {
                  alert(err.message || JSON.stringify(err));
                }
                console.log("call result " + result);
              }
            );
          }
          resolve({ error: err });
        },
        newPasswordRequired: () => {
          setUser(newUser);
          resolve({ message: "newPasswordRequired" });
        },
        mfaRequired: () => {
          setUser(newUser);
          resolve({ message: "mfaRequired" });
        },
      });
      newUser.refreshSession;
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
          resolve({ message: "success" });
        });
      } else {
        resolve({ message: "not signed in" });
      }
    });

  const getTokens = (session: CognitoUserSession) => {
    return {
      idToken: session.getIdToken().getJwtToken(),
      refreshToken: session.getRefreshToken().getToken(),
    };
  };

  const refreshSession = async (companyId: string) =>
    new Promise<void>((resolve, reject) => {
      if (!user) {
        reject({ error: new Error("Session expired, please login again") });
        return;
      }
      user.getSession(
        async (err: Error | null, session: CognitoUserSession | null) => {
          if (!session) {
            reject({ error: new Error("Session expired, please login again") });
            return;
          }
          const { refreshToken } = getTokens(session);
          const response = await axiosInstance.post<ICognitoUserSessionData>(
            "/profile/refresh-session",
            {
              companyId,
              refreshToken,
            },
            {
              withCredentials: true,
            }
          );

          console.log(response.data);

          const newSession = new CognitoUserSession(response.data);

          user.setSignInUserSession(newSession);
          resolve();
        }
      );
    });

  return {
    setupMFA,
    attributes,
    loading,
    signIn,
    signOut,
    sendMFACode,
    handleCompleteNewPasswordChallenge,
    refreshSession,
  };
};
