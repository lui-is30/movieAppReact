import { MovieType } from "./movieTypes";

export type PersonType={
    adult:boolean,
    id:number,
    name:string,
    original_name:string,
    media_type:string,
    popularity:number,
    gender:number,
    known_for_department:string,
    profile_path:string,
    known_for:MovieType[],
}

export type PersonCardProps={
    props:PersonType;
}

export type PersonDetailType={
    adult:boolean;
    also_known_as:string[];
    biography:string;
    birthday:string;
    deathday:string;
    gender:number;
    homepage:string;
    id:number;
    imdb_id:string;
    known_for_department:string;
    name:string;
    place_of_birth:string;
    popularity:number;
    profile_path:string;
}