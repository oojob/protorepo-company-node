// package: company
// file: service.proto

import * as jspb from "google-protobuf";

export class CreateCompanyReq extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDescriptioon(): string;
  setDescriptioon(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCompanyReq.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCompanyReq): CreateCompanyReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCompanyReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCompanyReq;
  static deserializeBinaryFromReader(message: CreateCompanyReq, reader: jspb.BinaryReader): CreateCompanyReq;
}

export namespace CreateCompanyReq {
  export type AsObject = {
    name: string,
    descriptioon: string,
  }
}

export class CreateCompanyRes extends jspb.Message {
  getStatus(): boolean;
  setStatus(value: boolean): void;

  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCompanyRes.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCompanyRes): CreateCompanyRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCompanyRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCompanyRes;
  static deserializeBinaryFromReader(message: CreateCompanyRes, reader: jspb.BinaryReader): CreateCompanyRes;
}

export namespace CreateCompanyRes {
  export type AsObject = {
    status: boolean,
    id: string,
  }
}

