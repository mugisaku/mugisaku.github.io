/* tslint:disable */
/* eslint-disable */

export function compile(s: string): boolean;

export function get_byte(off: number): number;

export function get_const(s: string): number;

export function get_data_address(s: string): number;

export function get_error_message(): string;

export function get_input(): number;

export function get_word(off: number): number;

export function process(freq: number, tm: number): void;

export function put_byte(off: number, v: number): void;

export function put_word(off: number, v: number): void;

export function set_input(v: number): void;

export function setup(): string;

export function transfer_ex_img(w: number, h: number, data: Uint8Array): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly get_byte: (a: number) => number;
    readonly put_byte: (a: number, b: number) => void;
    readonly get_word: (a: number) => number;
    readonly put_word: (a: number, b: number) => void;
    readonly set_input: (a: number) => void;
    readonly get_input: () => number;
    readonly get_data_address: (a: number, b: number) => number;
    readonly get_const: (a: number, b: number) => number;
    readonly process: (a: number, b: number) => void;
    readonly get_error_message: () => [number, number];
    readonly transfer_ex_img: (a: number, b: number, c: number, d: number) => void;
    readonly compile: (a: number, b: number) => number;
    readonly setup: () => [number, number];
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
