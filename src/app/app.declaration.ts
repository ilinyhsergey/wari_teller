export const dateFormat = 'YYYY-MM-DD';
export const dateShortFormat = 'MMM D';
export const timestampFormat = 'YYYY-MM-DDTHH:mm:ss.SSSZ';

// export declare type Collection<T> = { key: [string | number]:T };
export interface Collection<T> {
  [key: string]: T;
}
