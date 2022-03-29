import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

import {
  hasCheckedAuthStateInClientStorageState,
  isLoggedInState,
} from "../../state/atoms/auth";
import { isDateExpired } from "../../helpers/date";
import { setAuthStateForURQLExchange } from "../../helpers/urqlClient";
import { E_FigmaUIEvents } from "../../typings/figma";

export function useFigmaUIEventListener() {
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const setHasCheckedAuthStateInClientStorage = useSetRecoilState(
    hasCheckedAuthStateInClientStorageState
  );

  useEffect(() => {
    onmessage = (event: MessageEvent) => {
      console.log("\n ==> onmessage", event);
      const { pluginMessage: msg } = event.data;

      switch (msg.type) {
        case E_FigmaUIEvents.clientStorageGet: {
          console.log("\n ==> E_FigmaUIEvents.clientStorageGet", msg);
          const value = msg.payload;
          if (value) {
            const isLoginSessionValid = !isDateExpired(value.expiresAt);
            setIsLoggedIn(isLoginSessionValid);
            setAuthStateForURQLExchange(value);
          }

          setHasCheckedAuthStateInClientStorage(true);
        }
      }
    };
  // Intentionally not watching any dependencies
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
