export type T_Function<T_Args extends any[] = any[], T_ReturnType = void> = (
  ...args: T_Args
) => T_ReturnType;
