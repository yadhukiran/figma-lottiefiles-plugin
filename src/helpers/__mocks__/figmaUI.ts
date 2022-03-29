import {
  T_FigmaMessageToPlugin,
} from "../../typings/figma";

export function postMessageToPlugin(_message: T_FigmaMessageToPlugin) {}

export async function clientStorageGet(_key: string) {}

export async function clientStorageSet(_key: string, _value: any) {}

export async function clientStorageDelete(_key: string) {}
