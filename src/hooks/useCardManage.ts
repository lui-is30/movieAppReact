import { useQuery } from "@tanstack/react-query";
import { MovieType } from "../types/movieTypes";
import { TvTypes } from "../types/seriesTypes";
import { PersonType } from "../types/personTypes";
import { getTrendingMovie, getTrendingPerson, getTrendingSeries } from "../api/getTrending";

export const useCardManage = () => {
    const { data: movie=[] } = useQuery<MovieType[]>({
        queryKey: ["trendingMovies"],
        queryFn: getTrendingMovie,
    });

    const { data: tv = [] } = useQuery<TvTypes[]>({
        queryKey: ["trendingTv"],
        queryFn: getTrendingSeries,
    });

    const { data: person = [] } = useQuery<PersonType[]>({
        queryKey: ["trendingPersons"],
        queryFn: getTrendingPerson,
    });

    return { movie, tv, person };
};
