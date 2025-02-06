import { OPTS } from "../config/api"

export const getDetailsMovie=async(id:string)=>{
    const response=await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`,OPTS);
    const data=await response.json();
    return data;
}

export const getDetailsTv=async(id:string)=>{
    const response=await fetch(`https://api.themoviedb.org/3/tv/${id}?language=en-US`,OPTS);
    const data=await response.json();
    return data;
}

export const getDetailsPerson=async(id:string)=>{
    const response=await fetch(`https://api.themoviedb.org/3/person/${id}?language=en-US`,OPTS);
    const data=await response.json();
    return data;
}