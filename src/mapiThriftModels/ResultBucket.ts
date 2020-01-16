/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "@creditkarma/thrift-server-core";
import * as Asset from "./Asset";
export interface IResultBucket {
    assets?: Array<Asset.IAsset>;
    description: string;
    title: string;
    share: string;
    id: string;
}
export interface IResultBucketArgs {
    assets?: Array<Asset.IAssetArgs>;
    description: string;
    title: string;
    share: string;
    id: string;
}
export const ResultBucketCodec: thrift.IStructCodec<IResultBucketArgs, IResultBucket> = {
    encode(args: IResultBucketArgs, output: thrift.TProtocol): void {
        const obj: any = {
            assets: args.assets,
            description: args.description,
            title: args.title,
            share: args.share,
            id: args.id
        };
        output.writeStructBegin("ResultBucket");
        if (obj.assets != null) {
            output.writeFieldBegin("assets", thrift.TType.LIST, 1);
            output.writeListBegin(thrift.TType.STRUCT, obj.assets.length);
            obj.assets.forEach((value_1: Asset.IAssetArgs): void => {
                Asset.AssetCodec.encode(value_1, output);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        if (obj.description != null) {
            output.writeFieldBegin("description", thrift.TType.STRING, 2);
            output.writeString(obj.description);
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[description] is unset!");
        }
        if (obj.title != null) {
            output.writeFieldBegin("title", thrift.TType.STRING, 3);
            output.writeString(obj.title);
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[title] is unset!");
        }
        if (obj.share != null) {
            output.writeFieldBegin("share", thrift.TType.STRING, 4);
            output.writeString(obj.share);
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[share] is unset!");
        }
        if (obj.id != null) {
            output.writeFieldBegin("id", thrift.TType.STRING, 5);
            output.writeString(obj.id);
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[id] is unset!");
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): IResultBucket {
        let _args: any = {};
        input.readStructBegin();
        while (true) {
            const ret: thrift.IThriftField = input.readFieldBegin();
            const fieldType: thrift.TType = ret.fieldType;
            const fieldId: number = ret.fieldId;
            if (fieldType === thrift.TType.STOP) {
                break;
            }
            switch (fieldId) {
                case 1:
                    if (fieldType === thrift.TType.LIST) {
                        const value_2: Array<Asset.IAsset> = new Array<Asset.IAsset>();
                        const metadata_1: thrift.IThriftList = input.readListBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const value_3: Asset.IAsset = Asset.AssetCodec.decode(input);
                            value_2.push(value_3);
                        }
                        input.readListEnd();
                        _args.assets = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.TType.STRING) {
                        const value_4: string = input.readString();
                        _args.description = value_4;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.TType.STRING) {
                        const value_5: string = input.readString();
                        _args.title = value_5;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.TType.STRING) {
                        const value_6: string = input.readString();
                        _args.share = value_6;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 5:
                    if (fieldType === thrift.TType.STRING) {
                        const value_7: string = input.readString();
                        _args.id = value_7;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                default: {
                    input.skip(fieldType);
                }
            }
            input.readFieldEnd();
        }
        input.readStructEnd();
        if (_args.description !== undefined && _args.title !== undefined && _args.share !== undefined && _args.id !== undefined) {
            return {
                assets: _args.assets,
                description: _args.description,
                title: _args.title,
                share: _args.share,
                id: _args.id
            };
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Unable to read ResultBucket from input");
        }
    }
};
export class ResultBucket extends thrift.StructLike implements IResultBucket {
    public assets?: Array<Asset.IAsset>;
    public description: string;
    public title: string;
    public share: string;
    public id: string;
    public readonly _annotations: thrift.IThriftAnnotations = {};
    public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
    constructor(args: IResultBucketArgs) {
        super();
        if (args.assets != null) {
            const value_8: Array<Asset.IAsset> = new Array<Asset.IAsset>();
            args.assets.forEach((value_13: Asset.IAssetArgs): void => {
                const value_14: Asset.IAsset = new Asset.Asset(value_13);
                value_8.push(value_14);
            });
            this.assets = value_8;
        }
        if (args.description != null) {
            const value_9: string = args.description;
            this.description = value_9;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[description] is unset!");
        }
        if (args.title != null) {
            const value_10: string = args.title;
            this.title = value_10;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[title] is unset!");
        }
        if (args.share != null) {
            const value_11: string = args.share;
            this.share = value_11;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[share] is unset!");
        }
        if (args.id != null) {
            const value_12: string = args.id;
            this.id = value_12;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[id] is unset!");
        }
    }
    public static read(input: thrift.TProtocol): ResultBucket {
        return new ResultBucket(ResultBucketCodec.decode(input));
    }
    public static write(args: IResultBucketArgs, output: thrift.TProtocol): void {
        return ResultBucketCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return ResultBucketCodec.encode(this, output);
    }
}
