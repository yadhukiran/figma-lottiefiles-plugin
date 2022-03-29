import { T_FigmaMessageToPlugin, E_FigmaPluginEvents } from "../typings/figma";

export function postMessageToPlugin(message: T_FigmaMessageToPlugin) {
  parent.postMessage({ pluginMessage: message }, "*");
}

export async function clientStorageGet(key: string) {
  postMessageToPlugin({
    type: E_FigmaPluginEvents.clientStorageGet,
    payload: key,
  });
}

export async function clientStorageSet(key: string, value: any) {
  postMessageToPlugin({
    type: E_FigmaPluginEvents.clientStorageSet,
    payload: { key, value },
  });
}

export async function clientStorageDelete(key: string) {
  postMessageToPlugin({
    type: E_FigmaPluginEvents.clientStorageDelete,
    payload: key,
  });
}
