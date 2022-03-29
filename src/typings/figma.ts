export enum E_FigmaPluginEvents {
  clientStorageGet,
  clientStorageSet,
  clientStorageDelete,
  insertSVG,
}

export enum E_FigmaUIEvents {
  clientStorageGet,
  clientStorageSet,
  clientStorageDelete,
}

export type T_FigmaMessageToPlugin = {
  type: E_FigmaPluginEvents;
  payload?: any;
};

export type T_FigmaMessageToUI = {
  type: E_FigmaUIEvents;
  payload?: any;
};
