/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "@creditkarma/thrift-server-core";
import * as ReviewType from "./ReviewType";
import * as Rating from "./Rating";
import * as Restaurant from "./Restaurant";
import * as Game from "./Game";
import * as Film from "./Film";
import * as Image from "./Image";
export interface IReviewAtom {
    reviewType: ReviewType.ReviewType;
    reviewer: string;
    rating: Rating.IRating;
    reviewSnippet: string;
    entityId: string;
    restaurant?: Restaurant.IRestaurant;
    game?: Game.IGame;
    film?: Film.IFilm;
    sourceArticleId?: string;
    images?: Array<Image.IImage>;
}
export interface IReviewAtomArgs {
    reviewType: ReviewType.ReviewType;
    reviewer: string;
    rating: Rating.IRatingArgs;
    reviewSnippet: string;
    entityId: string;
    restaurant?: Restaurant.IRestaurantArgs;
    game?: Game.IGameArgs;
    film?: Film.IFilmArgs;
    sourceArticleId?: string;
    images?: Array<Image.IImageArgs>;
}
export const ReviewAtomCodec: thrift.IStructCodec<IReviewAtomArgs, IReviewAtom> = {
    encode(args: IReviewAtomArgs, output: thrift.TProtocol): void {
        const obj: any = {
            reviewType: args.reviewType,
            reviewer: args.reviewer,
            rating: args.rating,
            reviewSnippet: args.reviewSnippet,
            entityId: args.entityId,
            restaurant: args.restaurant,
            game: args.game,
            film: args.film,
            sourceArticleId: args.sourceArticleId,
            images: args.images
        };
        output.writeStructBegin("ReviewAtom");
        if (obj.reviewType != null) {
            output.writeFieldBegin("reviewType", thrift.TType.I32, 1);
            output.writeI32(obj.reviewType);
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[reviewType] is unset!");
        }
        if (obj.reviewer != null) {
            output.writeFieldBegin("reviewer", thrift.TType.STRING, 2);
            output.writeString(obj.reviewer);
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[reviewer] is unset!");
        }
        if (obj.rating != null) {
            output.writeFieldBegin("rating", thrift.TType.STRUCT, 3);
            Rating.RatingCodec.encode(obj.rating, output);
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[rating] is unset!");
        }
        if (obj.reviewSnippet != null) {
            output.writeFieldBegin("reviewSnippet", thrift.TType.STRING, 4);
            output.writeString(obj.reviewSnippet);
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[reviewSnippet] is unset!");
        }
        if (obj.entityId != null) {
            output.writeFieldBegin("entityId", thrift.TType.STRING, 5);
            output.writeString(obj.entityId);
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[entityId] is unset!");
        }
        if (obj.restaurant != null) {
            output.writeFieldBegin("restaurant", thrift.TType.STRUCT, 6);
            Restaurant.RestaurantCodec.encode(obj.restaurant, output);
            output.writeFieldEnd();
        }
        if (obj.game != null) {
            output.writeFieldBegin("game", thrift.TType.STRUCT, 7);
            Game.GameCodec.encode(obj.game, output);
            output.writeFieldEnd();
        }
        if (obj.film != null) {
            output.writeFieldBegin("film", thrift.TType.STRUCT, 8);
            Film.FilmCodec.encode(obj.film, output);
            output.writeFieldEnd();
        }
        if (obj.sourceArticleId != null) {
            output.writeFieldBegin("sourceArticleId", thrift.TType.STRING, 9);
            output.writeString(obj.sourceArticleId);
            output.writeFieldEnd();
        }
        if (obj.images != null) {
            output.writeFieldBegin("images", thrift.TType.LIST, 10);
            output.writeListBegin(thrift.TType.STRUCT, obj.images.length);
            obj.images.forEach((value_1: Image.IImageArgs): void => {
                Image.ImageCodec.encode(value_1, output);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): IReviewAtom {
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
                    if (fieldType === thrift.TType.I32) {
                        const value_2: ReviewType.ReviewType = input.readI32();
                        _args.reviewType = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.TType.STRING) {
                        const value_3: string = input.readString();
                        _args.reviewer = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.TType.STRUCT) {
                        const value_4: Rating.IRating = Rating.RatingCodec.decode(input);
                        _args.rating = value_4;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.TType.STRING) {
                        const value_5: string = input.readString();
                        _args.reviewSnippet = value_5;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 5:
                    if (fieldType === thrift.TType.STRING) {
                        const value_6: string = input.readString();
                        _args.entityId = value_6;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 6:
                    if (fieldType === thrift.TType.STRUCT) {
                        const value_7: Restaurant.IRestaurant = Restaurant.RestaurantCodec.decode(input);
                        _args.restaurant = value_7;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 7:
                    if (fieldType === thrift.TType.STRUCT) {
                        const value_8: Game.IGame = Game.GameCodec.decode(input);
                        _args.game = value_8;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 8:
                    if (fieldType === thrift.TType.STRUCT) {
                        const value_9: Film.IFilm = Film.FilmCodec.decode(input);
                        _args.film = value_9;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 9:
                    if (fieldType === thrift.TType.STRING) {
                        const value_10: string = input.readString();
                        _args.sourceArticleId = value_10;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 10:
                    if (fieldType === thrift.TType.LIST) {
                        const value_11: Array<Image.IImage> = new Array<Image.IImage>();
                        const metadata_1: thrift.IThriftList = input.readListBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const value_12: Image.IImage = Image.ImageCodec.decode(input);
                            value_11.push(value_12);
                        }
                        input.readListEnd();
                        _args.images = value_11;
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
        if (_args.reviewType !== undefined && _args.reviewer !== undefined && _args.rating !== undefined && _args.reviewSnippet !== undefined && _args.entityId !== undefined) {
            return {
                reviewType: _args.reviewType,
                reviewer: _args.reviewer,
                rating: _args.rating,
                reviewSnippet: _args.reviewSnippet,
                entityId: _args.entityId,
                restaurant: _args.restaurant,
                game: _args.game,
                film: _args.film,
                sourceArticleId: _args.sourceArticleId,
                images: _args.images
            };
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Unable to read ReviewAtom from input");
        }
    }
};
export class ReviewAtom extends thrift.StructLike implements IReviewAtom {
    public reviewType: ReviewType.ReviewType;
    public reviewer: string;
    public rating: Rating.IRating;
    public reviewSnippet: string;
    public entityId: string;
    public restaurant?: Restaurant.IRestaurant;
    public game?: Game.IGame;
    public film?: Film.IFilm;
    public sourceArticleId?: string;
    public images?: Array<Image.IImage>;
    public readonly _annotations: thrift.IThriftAnnotations = {};
    public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
    constructor(args: IReviewAtomArgs) {
        super();
        if (args.reviewType != null) {
            const value_13: ReviewType.ReviewType = args.reviewType;
            this.reviewType = value_13;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[reviewType] is unset!");
        }
        if (args.reviewer != null) {
            const value_14: string = args.reviewer;
            this.reviewer = value_14;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[reviewer] is unset!");
        }
        if (args.rating != null) {
            const value_15: Rating.IRating = new Rating.Rating(args.rating);
            this.rating = value_15;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[rating] is unset!");
        }
        if (args.reviewSnippet != null) {
            const value_16: string = args.reviewSnippet;
            this.reviewSnippet = value_16;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[reviewSnippet] is unset!");
        }
        if (args.entityId != null) {
            const value_17: string = args.entityId;
            this.entityId = value_17;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[entityId] is unset!");
        }
        if (args.restaurant != null) {
            const value_18: Restaurant.IRestaurant = new Restaurant.Restaurant(args.restaurant);
            this.restaurant = value_18;
        }
        if (args.game != null) {
            const value_19: Game.IGame = new Game.Game(args.game);
            this.game = value_19;
        }
        if (args.film != null) {
            const value_20: Film.IFilm = new Film.Film(args.film);
            this.film = value_20;
        }
        if (args.sourceArticleId != null) {
            const value_21: string = args.sourceArticleId;
            this.sourceArticleId = value_21;
        }
        if (args.images != null) {
            const value_22: Array<Image.IImage> = new Array<Image.IImage>();
            args.images.forEach((value_23: Image.IImageArgs): void => {
                const value_24: Image.IImage = new Image.Image(value_23);
                value_22.push(value_24);
            });
            this.images = value_22;
        }
    }
    public static read(input: thrift.TProtocol): ReviewAtom {
        return new ReviewAtom(ReviewAtomCodec.decode(input));
    }
    public static write(args: IReviewAtomArgs, output: thrift.TProtocol): void {
        return ReviewAtomCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return ReviewAtomCodec.encode(this, output);
    }
}
