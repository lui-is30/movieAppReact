import { useEffect, useState } from "react";
import { MovieType } from "../types/movieTypes";
import { TvTypes } from "../types/seriesTypes";
import { PersonType } from "../types/personTypes";
import { getSearchMovie, getSearchPerson, getSearchTv } from "../api/getSearch";

export const useResultSearch=(input:string)=>{
    const [resultMovie,setResultMovie]=useState<MovieType[]>([]);
        const [resultTv,setResultTv]=useState<TvTypes[]>([]);
        const [resultPerson,setResultPerson]=useState<PersonType[]>([]);
    
        useEffect(()=>{
            const fetchSearchMovie=async()=>{
                if (input)
                setResultMovie(await getSearchMovie(input));
            }
            fetchSearchMovie();
    
            const fetchSearchTv=async()=>{
                if (input)
                setResultTv(await getSearchTv(input));
            }
            fetchSearchTv();
    
            const fetchSearchPerson=async()=>{
                if (input)
                setResultPerson(await getSearchPerson(input));
            }
            fetchSearchPerson();
        },[])

        return {resultMovie,resultTv,resultPerson};
}