
/**
 * https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1
 * https://api.themoviedb.org/3/search/tv?include_adult=false&language=en-US&page=1
 * https://api.themoviedb.org/3/search/person?include_adult=false&language=en-US&page=1
 */

import { OPTS } from "../config/api"


export const getSearchMovie=async(title:string)=>{
    const response=await fetch(`https://api.themoviedb.org/3/search/movie?query=${title}`,OPTS);
    const data=await response.json();
    return data.results;
}

export const getSearchTv=async(title:string)=>{
    const response=await fetch(`https://api.themoviedb.org/3/search/tv?query=${title}`,OPTS);
    const data=await response.json();
    return data.results;
}

export const getSearchPerson=async(title:string)=>{
    const response=await fetch(`https://api.themoviedb.org/3/search/person?query=${title}`,OPTS);
    const data=await response.json();
    return data.results;
}