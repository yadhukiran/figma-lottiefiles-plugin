import React from "react";

import {
  useAuthStateFromClientStorage,
  useCreateLoginToken,
  useTokenLogin,
} from "./hooks";

export default function Login() {
  useAuthStateFromClientStorage();
  const createLoginTokenResult = useCreateLoginToken();
  useTokenLogin(createLoginTokenResult.token, createLoginTokenResult.loginUrl);

  return (
    <div className="place-content-center">
      <h1 className="mt-5 text-xl">Logging in</h1>
      {createLoginTokenResult.isFetching && <h4>Acquiring login URL...</h4>}
      {createLoginTokenResult.loginUrl && <h4>Awaiting access grant...</h4>}
    </div>
  );
}
