/**
 * 2021.10.30
 */

// Tuple to Object
export type TupleToObject<T extends any[]> = {
  [P in T[number]]: P;
};

// First of Array
export type First<T extends any[]> = T extends [infer K, ...any] ? K : never;
export type First2<T extends any[]> = T['length'] extends 0 ? never : T[0];

// Last of Array
export type Last<T extends any[]> = T extends [...any, infer K] ? K : never;

// Length of Tuple
export type Length<T extends any[]> = T['length'];

// If
export type If<T extends boolean, K, V> = T extends true ? K : V;

// Concat
export type MyConcat<T extends any[], K extends any[]> = [...T, ...K];

// Push
export type MyPush<T extends any[], K> = [...T, K];

// Unshift
export type MyUnshift<T extends any[], K> = [K, ...T];

// Awaited
export type Awaited<T extends Promise<any>> = T extends Promise<infer K>
  ? K
  : never;

// Readonly 2
type MyExclude<T, K> = T extends K ? never : T;
export type Readonly2<T, K extends keyof T> = {
  readonly [P in K]: T[P];
} & {
  [P in MyExclude<keyof T, K>]: T[P];
};

// Deep Readonly
export type DeepReadonly<T extends {} = {}> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>;
};

// Tuple to Union
export type TupleToUnion<T extends any[]> = T[number];

// Chainable Options
export type Chainable<T extends {} = {}> = {
  option<K extends string = string, V = any>(
    key: K,
    value: V
  ): Chainable<T & { [P in K]: V }>;
  get(): T;
};

// Type LookUp
export type LookUp<T extends { type: any }, K extends T['type']> = T extends {
  type: K;
}
  ? T
  : never;

// Trim Left
type ignore = ' ' | '\n' | '\t';
export type TrimLeft<T extends string> = T extends `${ignore}${infer R}`
  ? TrimLeft<R>
  : T;

// Trim
export type Trim<T extends string> = T extends `${ignore}${infer R}${ignore}`
  ? Trim<R>
  : T;

// Capitalize
export type Capitalize<S extends string> = S extends `${infer T}${infer U}`
  ? `${Uppercase<T>}${U}`
  : S;

// Replace
export type Replace<
  T extends string,
  From extends string,
  To extends string
> = From extends ''
  ? T
  : T extends `${infer A}${From}${infer B}`
  ? `${A}${To}${B}`
  : T;

// ReplaceAll
export type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = From extends ''
  ? S
  : S extends `${infer A}${From}${infer Rest}`
  ? `${A}${To}${ReplaceAll<Rest, From, To>}`
  : S;
