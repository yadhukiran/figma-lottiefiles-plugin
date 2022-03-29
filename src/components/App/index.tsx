import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import {
  isLoggedInState,
  hasCheckedAuthStateInClientStorageState,
  isLoginInProgressState,
} from "../../state/atoms/auth";
import Login from "../../components/Login";
import LottiesHome from "../../components/LottiesHome";
import { useFigmaUIEventListener } from "./hooks";
import "./styles.css";

function App() {
  useFigmaUIEventListener();
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const hasCheckedAuthStateInClientStorage = useRecoilValue(
    hasCheckedAuthStateInClientStorageState
  );
  const [isLoginProgress, setIsLoginInProgress] = useRecoilState(
    isLoginInProgressState
  );
  useEffect(() => {
    if (isLoggedIn) {
      setIsLoginInProgress(false);
    }
  }, [isLoggedIn, setIsLoginInProgress]);

  return (
    <div className="App">
      {!hasCheckedAuthStateInClientStorage ? (
        "Loading..."
      ) : isLoggedIn ? (
        <LottiesHome />
      ) : (
        getLoginMarkup(isLoginProgress, setIsLoginInProgress)
      )}
    </div>
  );
}

function getLoginMarkup(
  isLoginInProgress: boolean,
  setIsLoginInProgress: React.Dispatch<React.SetStateAction<boolean>>
) {
  return (
    <>
      {isLoginInProgress ? (
        <Login />
      ) : (
        <div className="text-">
          Please login and grant access to your LottieFiles account.
          <button
            onClick={() => setIsLoginInProgress(true)}
            className="text-xl rounded bg-gray-100 text-center border py-1 px-2"
          >
            Login
          </button>
        </div>
      )}
    </>
  );
}

export default App;
