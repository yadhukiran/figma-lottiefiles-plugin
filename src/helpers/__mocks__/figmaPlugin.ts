import { T_FigmaMessageToUI } from "../../typings/figma";

export function postMessageToUI(_message: T_FigmaMessageToUI) {
  // figma.ui.postMessage(message);
}

export async function clientStorageGet(_key: string) {
  // console.log("\n ==> clientStorageGet", key);
  // try {
  //   const value = await figma.clientStorage.getAsync(key);
  //   console.log("\n ==> clientStorageGet", key, value);
  //   postMessageToUI({ type: E_FigmaUIEvents.clientStorageGet, payload: value });
  // } catch (error) {
  //   console.log("\n ==> clientStorageGet::ERROR", error);
  //   postMessageToUI({ type: E_FigmaUIEvents.clientStorageGet, payload: null });
  // }
}

export async function clientStorageSet(_key: string, _value: any) {
  // await figma.clientStorage.setAsync(key, value);
  // console.log("\n ==> clientStorageSet", key, value);
  // postMessageToUI({ type: E_FigmaUIEvents.clientStorageSet, payload: { isDone: true } });
}

export async function clientStorageDelete(_key: string) {
  // await figma.clientStorage.deleteAsync(key);
  // console.log("\n ==> clientStorageDelete", key);
  // postMessageToUI({ type: E_FigmaUIEvents.clientStorageDelete, payload: { isDone: true } });
}
