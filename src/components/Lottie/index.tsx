import React, { useRef } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

import * as figmaUI from "../../helpers/figmaUI";
import { E_FigmaPluginEvents } from "../../typings/figma";

function Lottie(props: { lottieUrl: string | null | undefined }) {
  const playerRef = useRef<any>(null); // TODO: fix any type

  return props.lottieUrl ? (
    <div
      className="bg-transparent h-32 w-32 outline outline-1 outline-gray-300 justify-self-center"
      onClick={() => {
        if (playerRef.current) {
          figmaUI.postMessageToPlugin({
            payload: playerRef.current.container.innerHTML,
            type: E_FigmaPluginEvents.insertSVG,
          });
        }
      }}
    >
      <Player
        autoplay
        loop
        src={props.lottieUrl}
        // style={{ height: "300px", width: "300px" }}
        ref={playerRef}
      >
        {/* <Controls
            visible={true}
            buttons={["play", "repeat", "frame", "debug"]}
          /> */}
      </Player>
    </div>
  ) : null;
}

export default Lottie;
