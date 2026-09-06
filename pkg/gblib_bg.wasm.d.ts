/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export const get_byte: (a: number) => number;
export const put_byte: (a: number, b: number) => void;
export const get_word: (a: number) => number;
export const put_word: (a: number, b: number) => void;
export const set_input: (a: number) => void;
export const get_input: () => number;
export const get_data_address: (a: number, b: number) => number;
export const get_const: (a: number, b: number) => number;
export const process: (a: number, b: number) => void;
export const get_error_message: () => [number, number];
export const transfer_ex_img: (a: number, b: number, c: number, d: number) => void;
export const compile: (a: number, b: number) => number;
export const setup: () => [number, number];
export const __wbindgen_externrefs: WebAssembly.Table;
export const __wbindgen_malloc: (a: number, b: number) => number;
export const __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
export const __wbindgen_free: (a: number, b: number, c: number) => void;
export const __wbindgen_start: () => void;
