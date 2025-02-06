import { useEffect, useState } from "react";
import { MovieType } from "../types/movieTypes";
import { TvTypes } from "../types/seriesTypes";
import { PersonType } from "../types/personTypes";
import { getTrendingMovie, getTrendingPerson, getTrendingSeries } from "../api/getTrending";

export const useCardManage=()=>{
    const [movie,setMovie]=useState<MovieType[]>([]);
        const [tv,setTv]=useState<TvTypes[]>([]);
        const [person,setPerson]=useState<PersonType[]>([]);
    
        useEffect(()=>{
            const fetchMovie=async()=>{
                setMovie(await getTrendingMovie());
            }
    
            const fetchTv=async()=>{
                setTv(await getTrendingSeries());
            }
    
            const fetchPerson=async()=>{
                setPerson(await getTrendingPerson());
            }
    
            fetchMovie();
            fetchTv();
            fetchPerson();
        },[]);

        return {movie,tv,person};
}