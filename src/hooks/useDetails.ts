import { MovieDetailType } from "../types/movieTypes";
import { TVDetailType } from "../types/seriesTypes";
import { PersonDetailType } from "../types/personTypes";
import { getDetailsMovie, getDetailsPerson, getDetailsTv } from "../api/getDetails";
import { useQuery } from "@tanstack/react-query";



export const useDetails = (id:string,media_type:string) => {
    const { data: movie} = useQuery<MovieDetailType>({
        queryKey: ["movieDetails",id],
        queryFn: ()=> getDetailsMovie(id),
        enabled: media_type === "movie" && !!id, 
    });

    const { data: tv } = useQuery<TVDetailType>({
        queryKey: ["tvDetails",id],
        queryFn: ()=> getDetailsTv(id),
        enabled: media_type === "tv" && !!id,
    });

    const { data: person } = useQuery<PersonDetailType>({
        queryKey: ["personDetails",id],
        queryFn: ()=> getDetailsPerson(id),
        enabled: media_type === "person" && !!id,
    });

    return { movie, tv, person };
};