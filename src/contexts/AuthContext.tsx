import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import {
  CognitoUser,
  CognitoUserAttribute,
  CognitoUserPool,
  CognitoUserSession,
} from "amazon-cognito-identity-js";
import { AUTH_ROUTES, ROUTES } from "@/routes";
import { initAxios } from "@/utils/axiosInstance";

export const UserPool = new CognitoUserPool({
  UserPoolId: process.env.NEXT_PUBLIC_USER_POOL || "",
  ClientId: process.env.NEXT_PUBLIC_CLIENT_ID || "",
});

interface AuthContextType {
  user: CognitoUser | null;
  setUser: Dispatch<SetStateAction<CognitoUser | null>>;
  attributes: Record<string, string>;
  setAttributes: (attr: Record<string, string>) => void;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const currentSession = () =>
  new Promise<{
    session: CognitoUserSession;
    user: CognitoUser;
  }>((resolve, reject) => {
    const commonErr = new Error("current session not found");
    try {
      const user = UserPool.getCurrentUser();
      if (user) {
        user.getSession(
          (error: Error | null, session: CognitoUserSession | null) => {
            if (session && session.isValid()) {
              resolve({ session, user });
            } else {
              reject(Error || commonErr);
            }
          }
        );
      } else {
        reject(commonErr);
      }
    } catch (error) {
      reject(error || commonErr);
    }
  });

export const getUserAttributes = (
  currentUser: CognitoUser
): Promise<Record<string, string>> =>
  new Promise((resolve, reject) => {
    currentUser.getUserAttributes(
      (err?: Error, attributes?: CognitoUserAttribute[]) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          const results: Record<string, string> = {};

          attributes?.forEach((attribute) => {
            results[attribute.Name] = attribute.Value;
          });
          resolve(results);
        }
      }
    );
  });

export const AuthProvider = ({ children }: { children?: React.ReactNode }) => {
  const [user, setUser] = useState<CognitoUser | null>(null);
  const [attributes, setAttributes] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  const checkUser = useCallback(async () => {
    try {
      setLoading(true);
      const { user: currentUser, session } = await currentSession();
      const attributes = await getUserAttributes(currentUser);
      await initAxios(session.getIdToken().getJwtToken());
      setAttributes(attributes);
      setUser(currentUser);
    } catch (error) {
      setUser(null);
      if (!AUTH_ROUTES.includes(window.location.pathname)) {
        window.location.href = ROUTES.signIn;
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    checkUser();
  }, [checkUser]);

  return (
    <AuthContext.Provider
      value={{ user, loading, setUser, attributes, setAttributes }}
    >
      {children}
    </AuthContext.Provider>
  );
};
