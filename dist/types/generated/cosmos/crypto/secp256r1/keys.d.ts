import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "cosmos.crypto.secp256r1";
/** Since: cosmos-sdk 0.43 */
/** PubKey defines a secp256r1 ECDSA public key. */
export interface PubKey {
    /**
     * Point on secp256r1 curve in a compressed representation as specified in section
     * 4.3.6 of ANSI X9.62: https://webstore.ansi.org/standards/ascx9/ansix9621998
     */
    key: Uint8Array;
}
/** PrivKey defines a secp256r1 ECDSA private key. */
export interface PrivKey {
    /** secret number serialized using big-endian encoding */
    secret: Uint8Array;
}
export declare const PubKey: {
    encode(message: PubKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PubKey;
    fromJSON(object: any): PubKey;
    toJSON(message: PubKey): unknown;
    create<I extends {
        key?: Uint8Array | undefined;
    } & {
        key?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, "key">]: never; }>(base?: I | undefined): PubKey;
    fromPartial<I_1 extends {
        key?: Uint8Array | undefined;
    } & {
        key?: Uint8Array | undefined;
    } & { [K_1 in Exclude<keyof I_1, "key">]: never; }>(object: I_1): PubKey;
};
export declare const PrivKey: {
    encode(message: PrivKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PrivKey;
    fromJSON(object: any): PrivKey;
    toJSON(message: PrivKey): unknown;
    create<I extends {
        secret?: Uint8Array | undefined;
    } & {
        secret?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, "secret">]: never; }>(base?: I | undefined): PrivKey;
    fromPartial<I_1 extends {
        secret?: Uint8Array | undefined;
    } & {
        secret?: Uint8Array | undefined;
    } & { [K_1 in Exclude<keyof I_1, "secret">]: never; }>(object: I_1): PrivKey;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
