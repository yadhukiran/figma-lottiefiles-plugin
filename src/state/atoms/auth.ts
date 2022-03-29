import { atom } from "recoil";

export const isLoggedInState = atom({
  key: "is-logged-in-state",
  default: false,
});

export const isLoginInProgressState = atom({
  key: "is-login-in-progress",
  default: false,
});

export const hasCheckedAuthStateInClientStorageState = atom({
  key: "has-checked-auth-state-in-client-storage",
  default: false,
});

export const accessTokenState = atom({
  key: "access-token",
  default: "",
});
