import { MovieType } from "../types/movieTypes";
import { TvTypes } from "../types/seriesTypes";
import { PersonType } from "../types/personTypes";
import { getSearchMovie, getSearchPerson, getSearchTv } from "../api/getSearch";
import { useQuery } from "@tanstack/react-query";

export const useResultSearch = (input:string) => {
    const { data: movie} = useQuery<MovieType[]>({
        queryKey: ["movieResult",input],
        queryFn: ()=> getSearchMovie(input),
        enabled: !!input, 
    });

    const { data: tv } = useQuery<TvTypes[]>({
        queryKey: ["tvResult",input],
        queryFn: ()=> getSearchTv(input),
        enabled: !!input,
    });

    const { data: person } = useQuery<PersonType[]>({
        queryKey: ["personResult",input],
        queryFn: ()=> getSearchPerson(input),
        enabled: !!input,
    });

    return { movie, tv, person };
};