import { OPTS } from "../config/api"

export const getTrendingMovie=async()=>{
    const response=await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US',OPTS);
    const data=await response.json();
    return data.results;
}


export const getTrendingSeries=async()=>{
    const response=await fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US',OPTS);
    const data=await response.json();
    return data.results;
}

export const getTrendingPerson=async()=>{
    const response=await fetch('https://api.themoviedb.org/3/trending/person/day?language=en-US',OPTS);
    const data=await response.json();
    return data.results;
}