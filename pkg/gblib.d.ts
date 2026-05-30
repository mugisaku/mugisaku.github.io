/* tslint:disable */
/* eslint-disable */

export function get_audio_freq(): number;

export function get_audio_volume(): number;

export function get_height(): number;

export function get_pixel(x: number, y: number): number;

export function get_width(): number;

export function process(): void;

export function set_input_down(): void;

export function set_input_enter(): void;

export function set_input_left(): void;

export function set_input_right(): void;

export function set_input_up(): void;

export function setup(s: string): boolean;

export function unset_input_down(): void;

export function unset_input_enter(): void;

export function unset_input_left(): void;

export function unset_input_right(): void;

export function unset_input_up(): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly get_width: () => number;
    readonly get_height: () => number;
    readonly get_pixel: (a: number, b: number) => number;
    readonly get_audio_freq: () => number;
    readonly get_audio_volume: () => number;
    readonly set_input_up: () => void;
    readonly unset_input_up: () => void;
    readonly set_input_left: () => void;
    readonly unset_input_left: () => void;
    readonly set_input_right: () => void;
    readonly unset_input_right: () => void;
    readonly set_input_down: () => void;
    readonly unset_input_down: () => void;
    readonly set_input_enter: () => void;
    readonly unset_input_enter: () => void;
    readonly process: () => void;
    readonly setup: (a: number, b: number) => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
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
