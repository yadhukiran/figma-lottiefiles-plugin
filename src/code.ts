// This file holds the main code for the plugin. It has access to the *document*.
// You can access browser APIs such as the network by creating a UI which contains
// a full browser environment (see documentation).

import { E_FigmaPluginEvents, T_FigmaMessageToPlugin } from "./typings/figma";
import * as figmaPlugin from "./helpers/figmaPlugin";

const figmaUIOptions = {
  width: 450,
  height: 600,
  title: "LottieFiles",
};

// Runs this code if the plugin is run in Figma
if (figma.editorType === "figma") {
  // This plugin will open a window to prompt the user to enter a number, and
  // it will then create that many rectangles on the screen.

  // This shows the HTML page in "ui.html".
  figma.showUI(__html__, figmaUIOptions);

  // Calls to "parent.postMessage" from within the HTML page will trigger this
  // callback. The callback will be passed the "pluginMessage" property of the
  // posted message.
  figma.ui.onmessage = pluginMessageHandler;

  // If the plugins isn't run in Figma, run this code
} else {
  // This plugin will open a window to prompt the user to enter a number, and
  // it will then create that many shapes and connectors on the screen.

  // This shows the HTML page in "ui.html".
  figma.showUI(__html__, figmaUIOptions);

  // Calls to "parent.postMessage" from within the HTML page will trigger this
  // callback. The callback will be passed the "pluginMessage" property of the
  // posted message.
  figma.ui.onmessage = pluginMessageHandler;
}

function pluginMessageHandler(msg: T_FigmaMessageToPlugin) {
  console.log("\n ==> pluginMessageHandler", msg);
  switch (msg.type) {
    case E_FigmaPluginEvents.clientStorageSet: {
      console.log("\n ==> E_FigmaPluginEvents.clientStorageSet", msg);
      const { key, value } = msg.payload;
      figmaPlugin.clientStorageSet(key, value);
      break;
    }
    case E_FigmaPluginEvents.clientStorageGet: {
      console.log("\n ==> E_FigmaPluginEvents.clientStorageGet", msg);
      const key = msg.payload;
      figmaPlugin.clientStorageGet(key);
      break;
    }
    case E_FigmaPluginEvents.clientStorageDelete: {
      console.log("\n ==> E_FigmaPluginEvents.clientStorageDelete", msg);
      const key = msg.payload;
      figmaPlugin.clientStorageDelete(key);
      break;
    }
    case E_FigmaPluginEvents.insertSVG: {
      console.log("\n ==> E_FigmaPluginEvents.insertSVG", msg);
      const svgNode = figma.createNodeFromSvg(msg.payload);
      figma.viewport.scrollAndZoomIntoView([svgNode]);
      break;
    }
    default: {
      console.log("pluginMessageHandler::no matching action", msg);
    }
  }

  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  // figma.closePlugin();
}
