import { Client, fetchExchange, dedupExchange } from "urql";
import { makeOperation } from "@urql/core";
import { cacheExchange } from "@urql/exchange-graphcache";
import { AuthConfig, authExchange } from "@urql/exchange-auth";

import { getAuthStateFromClientStorage } from "./auth";
import { T_AuthState } from "../typings/auth";
import { isDateExpired } from "./date";
import poll from "./poll";
import appConstants from "../appConstants";

let authState: T_AuthState | null = null;

export function getAuthStateForURQLExchange() {
  return authState;
}

export function setAuthStateForURQLExchange(value: T_AuthState) {
  authState = value;
}

/**
 * @see https://github.com/FormidableLabs/urql/tree/main/exchanges/auth
 */
const authExchangeConfig: AuthConfig<T_AuthState> = {
  addAuthToOperation: ({ authState, operation }) => {
    // the token isn't in the auth state, return the operation without changes
    console.log("==> addAuthToOperation::authState", typeof authState);

    if (!authState || !authState.accessToken) {
      return operation;
    }

    // fetchOptions can be a function (See Client API) but you can simplify this based on usage
    const fetchOptions =
      typeof operation.context.fetchOptions === "function"
        ? operation.context.fetchOptions()
        : operation.context.fetchOptions || {};

    return makeOperation(operation.kind, operation, {
      ...operation.context,
      fetchOptions: {
        ...fetchOptions,
        headers: {
          ...fetchOptions.headers,
          Authorization: `Bearer ${authState.accessToken}`,
        },
      },
    });
  },
  getAuth: async ({ authState }) => {
    console.log("\n ==> urqlClient::getAuth", authState);
    if (!authState) {
      getAuthStateFromClientStorage();
      try {
        const authStateFromClientStorage = await poll(
          getAuthStateForURQLExchange,
          100,
          5000
        );
        console.log(
          "==> getAuth::authStateFromClientStorage ",
          authStateFromClientStorage.accessToken,
          isDateExpired(authStateFromClientStorage.expiresAt)
        );
        if (
          authStateFromClientStorage &&
          !isDateExpired(authStateFromClientStorage.expiresAt)
        ) {
          return authStateFromClientStorage;
        }
      } catch (error) {
        console.log(
          "\n ==> urqlClient::getAuth::getAuthStateForURQLExchange::ERROR",
          error
        );
      }
    }

    return null;
  },
};

const cache = cacheExchange({});

export const urqlClient = new Client({
  url: appConstants.lottieFilesGraphQLEndpointURL,
  exchanges: [
    dedupExchange,
    cache,
    authExchange(authExchangeConfig),
    fetchExchange,
  ],
});
