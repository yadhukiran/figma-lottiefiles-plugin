import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import {
  accessTokenState,
  hasCheckedAuthStateInClientStorageState,
  isLoggedInState,
  isLoginInProgressState,
} from "../../state/atoms/auth";
import {
  useCreateLoginTokenMutation,
  useTokenLoginMutation,
} from "../../generated/graphql";
import { openInNewTab } from "../../helpers/navigate";
import poll from "../../helpers/poll";
import {
  getAuthStateFromClientStorage,
  setAuthStateToClientStorage,
} from "../../helpers/auth";

export function useAuthStateFromClientStorage() {
  useEffect(() => {
    getAuthStateFromClientStorage();
  }, []);
}

export function useCreateLoginToken() {
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const hasCheckedAuthStateInClientStorage = useRecoilValue(
    hasCheckedAuthStateInClientStorageState
  );
  const [createLoginTokenResult, createLoginToken] =
    useCreateLoginTokenMutation();

  useEffect(() => {
    if (
      !isLoggedIn &&
      hasCheckedAuthStateInClientStorage
      // && APP_KEY
    ) {
      // TODO: use key from env
      createLoginToken({ appKey: "3c02f0d3-4a5a-4cb7-af91-77262f089165" });
    }
  }, [isLoggedIn, hasCheckedAuthStateInClientStorage, createLoginToken]);

  return {
    isFetching: createLoginTokenResult.fetching,
    loginUrl: createLoginTokenResult.data?.createLoginToken.loginUrl,
    token: createLoginTokenResult.data?.createLoginToken.token,
  };
}

export function useTokenLogin(token?: string, loginUrl?: string) {
  const [, attemptTokenLogin] = useTokenLoginMutation();
  const setAccessTokenState = useSetRecoilState(accessTokenState);
  const setIsLoggedInState = useSetRecoilState(isLoggedInState);
  const setIsLoginInProgressState = useSetRecoilState(isLoginInProgressState);

  useEffect(() => {
    if (loginUrl && token) {
      openInNewTab(loginUrl);

      const getAccessToken = async () => {
        try {
          const tokenLoginResult = await poll(async () => {
            const tokenLoginResponse = await attemptTokenLogin({ token });
  
            return tokenLoginResponse.data?.tokenLogin;
          });
  
          if (tokenLoginResult) {
            const { accessToken, expiresAt } = tokenLoginResult;
            setAuthStateToClientStorage({ accessToken, expiresAt });
            setIsLoggedInState(true);
          }
        } catch (error) {
          setIsLoginInProgressState(false);
        }
      };

      getAccessToken();
    }
  }, [
    token,
    loginUrl,
    attemptTokenLogin,
    setAccessTokenState,
    setIsLoggedInState,
    setIsLoginInProgressState
  ]);
}
