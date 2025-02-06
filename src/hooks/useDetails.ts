import { useEffect, useState } from "react";
import { MovieDetailType } from "../types/movieTypes";
import { TVDetailType } from "../types/seriesTypes";
import { PersonDetailType } from "../types/personTypes";
import { getDetailsMovie, getDetailsPerson, getDetailsTv } from "../api/getDetails";


export const useDetails=(id:string,media_type:string)=>{
    
        const [movieDetails,setMovieDetails]=useState<MovieDetailType>();
        const [tvDetails,setTvDetails]=useState<TVDetailType>();
        const [personDetails,setPersonDetails]=useState<PersonDetailType>();
    
    
        useEffect(()=>{
            if(media_type==='movie'){
            const fetchDetails=async()=>{
                if(id)
                setMovieDetails(await getDetailsMovie(id));
            }
            fetchDetails();
            }
            else if(media_type==='tv'){
            const fetchTvDetails=async()=>{
                if(id)
                setTvDetails(await getDetailsTv(id));
            }
            fetchTvDetails();
            }
            else{
                const fetchPersonDetails=async()=>{
                    if(id)
                    setPersonDetails(await getDetailsPerson(id));
                }
                fetchPersonDetails();
            }
        },[])

        return {movieDetails,tvDetails,personDetails};
}