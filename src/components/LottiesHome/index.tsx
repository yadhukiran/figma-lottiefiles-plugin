import React from "react";
import { useSetRecoilState } from "recoil";

import appConstants from "../../appConstants";
import LottieSearch from "../../components/LottieSearch";
import * as figmaUI from "../../helpers/figmaUI";
import { isLoggedInState } from "../../state/atoms/auth";

function LottiesHome() {
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const handleLogout = () => {
    figmaUI.clientStorageDelete(appConstants.localStorageKeys.authState);
    setIsLoggedIn(false);
  };

  return (
    <div className="">
      <button
        onClick={handleLogout}
        className="fixed text-xs rounded bg-gray-100 right-0 top-0 border py-1 px-2"
      >
        Logout
      </button>
      <div className="mt-10">
        <LottieSearch />
      </div>
    </div>
  );
}

export default LottiesHome;
