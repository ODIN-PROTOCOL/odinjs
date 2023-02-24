/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../../google/protobuf/any";
import { BIP44Params } from "../../hd/v1/hd";
export const protobufPackage = "cosmos.crypto.keyring.v1";
function createBaseRecord() {
    return { name: "", pubKey: undefined, local: undefined, ledger: undefined, multi: undefined, offline: undefined };
}
export const Record = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.pubKey !== undefined) {
            Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
        }
        if (message.local !== undefined) {
            Record_Local.encode(message.local, writer.uint32(26).fork()).ldelim();
        }
        if (message.ledger !== undefined) {
            Record_Ledger.encode(message.ledger, writer.uint32(34).fork()).ldelim();
        }
        if (message.multi !== undefined) {
            Record_Multi.encode(message.multi, writer.uint32(42).fork()).ldelim();
        }
        if (message.offline !== undefined) {
            Record_Offline.encode(message.offline, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.pubKey = Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.local = Record_Local.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.ledger = Record_Ledger.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.multi = Record_Multi.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.offline = Record_Offline.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            name: isSet(object.name) ? String(object.name) : "",
            pubKey: isSet(object.pubKey) ? Any.fromJSON(object.pubKey) : undefined,
            local: isSet(object.local) ? Record_Local.fromJSON(object.local) : undefined,
            ledger: isSet(object.ledger) ? Record_Ledger.fromJSON(object.ledger) : undefined,
            multi: isSet(object.multi) ? Record_Multi.fromJSON(object.multi) : undefined,
            offline: isSet(object.offline) ? Record_Offline.fromJSON(object.offline) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.pubKey !== undefined && (obj.pubKey = message.pubKey ? Any.toJSON(message.pubKey) : undefined);
        message.local !== undefined && (obj.local = message.local ? Record_Local.toJSON(message.local) : undefined);
        message.ledger !== undefined && (obj.ledger = message.ledger ? Record_Ledger.toJSON(message.ledger) : undefined);
        message.multi !== undefined && (obj.multi = message.multi ? Record_Multi.toJSON(message.multi) : undefined);
        message.offline !== undefined &&
            (obj.offline = message.offline ? Record_Offline.toJSON(message.offline) : undefined);
        return obj;
    },
    create(base) {
        return Record.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseRecord();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.pubKey = (object.pubKey !== undefined && object.pubKey !== null)
            ? Any.fromPartial(object.pubKey)
            : undefined;
        message.local = (object.local !== undefined && object.local !== null)
            ? Record_Local.fromPartial(object.local)
            : undefined;
        message.ledger = (object.ledger !== undefined && object.ledger !== null)
            ? Record_Ledger.fromPartial(object.ledger)
            : undefined;
        message.multi = (object.multi !== undefined && object.multi !== null)
            ? Record_Multi.fromPartial(object.multi)
            : undefined;
        message.offline = (object.offline !== undefined && object.offline !== null)
            ? Record_Offline.fromPartial(object.offline)
            : undefined;
        return message;
    },
};
function createBaseRecord_Local() {
    return { privKey: undefined, privKeyType: "" };
}
export const Record_Local = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.privKey !== undefined) {
            Any.encode(message.privKey, writer.uint32(10).fork()).ldelim();
        }
        if (message.privKeyType !== "") {
            writer.uint32(18).string(message.privKeyType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecord_Local();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.privKey = Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.privKeyType = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            privKey: isSet(object.privKey) ? Any.fromJSON(object.privKey) : undefined,
            privKeyType: isSet(object.privKeyType) ? String(object.privKeyType) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.privKey !== undefined && (obj.privKey = message.privKey ? Any.toJSON(message.privKey) : undefined);
        message.privKeyType !== undefined && (obj.privKeyType = message.privKeyType);
        return obj;
    },
    create(base) {
        return Record_Local.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseRecord_Local();
        message.privKey = (object.privKey !== undefined && object.privKey !== null)
            ? Any.fromPartial(object.privKey)
            : undefined;
        message.privKeyType = (_a = object.privKeyType) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseRecord_Ledger() {
    return { path: undefined };
}
export const Record_Ledger = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.path !== undefined) {
            BIP44Params.encode(message.path, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecord_Ledger();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = BIP44Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { path: isSet(object.path) ? BIP44Params.fromJSON(object.path) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined && (obj.path = message.path ? BIP44Params.toJSON(message.path) : undefined);
        return obj;
    },
    create(base) {
        return Record_Ledger.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseRecord_Ledger();
        message.path = (object.path !== undefined && object.path !== null)
            ? BIP44Params.fromPartial(object.path)
            : undefined;
        return message;
    },
};
function createBaseRecord_Multi() {
    return {};
}
export const Record_Multi = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecord_Multi();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return Record_Multi.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseRecord_Multi();
        return message;
    },
};
function createBaseRecord_Offline() {
    return {};
}
export const Record_Offline = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecord_Offline();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return Record_Offline.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseRecord_Offline();
        return message;
    },
};
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=record.js.map