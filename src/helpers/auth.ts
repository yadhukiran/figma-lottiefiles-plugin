import appConstants from "../appConstants";
import { T_AuthState } from "../typings/auth";
import * as figmaUI from "./figmaUI";

export function setAuthStateToClientStorage(authState: T_AuthState) {
  console.log("\n ==> setAuthStateToClientStorage", authState);
  figmaUI.clientStorageSet(
    appConstants.localStorageKeys.authState,
    JSON.stringify(authState)
  );
}

export function getAuthStateFromClientStorage() {
  figmaUI.clientStorageGet(appConstants.localStorageKeys.authState);
}
