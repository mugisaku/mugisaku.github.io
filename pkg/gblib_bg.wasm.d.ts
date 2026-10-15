/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export const get_byte: (a: number) => number;
export const put_byte: (a: number, b: number) => void;
export const get_u16: (a: number) => number;
export const put_u16: (a: number, b: number) => void;
export const get_word_hi: (a: number) => number;
export const get_word_lo: (a: number) => number;
export const put_word: (a: number, b: number, c: number) => void;
export const set_input: (a: number) => void;
export const get_input: () => number;
export const get_data_address: (a: number, b: number) => number;
export const get_const: (a: number, b: number) => number;
export const process: (a: number, b: number) => void;
export const get_error_message: () => [number, number];
export const add_source: (a: number, b: number, c: number, d: number) => number;
export const clear: () => void;
export const compile: () => number;
export const setup: () => [number, number];
export const __wbindgen_externrefs: WebAssembly.Table;
export const __wbindgen_malloc: (a: number, b: number) => number;
export const __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
export const __wbindgen_free: (a: number, b: number, c: number) => void;
export const __wbindgen_start: () => void;
