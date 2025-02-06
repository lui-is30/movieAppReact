import { useEffect, useState } from "react";
import { getTrendingMovie, getTrendingPerson, getTrendingSeries } from "../api/getTrending";
import { MovieType } from "../types/movieTypes";
import { Card1 } from "./Card";
import { Box, SimpleGrid,Text } from "@chakra-ui/react"
import { TvTypes } from "../types/seriesTypes";
import { PersonType } from "../types/personTypes";



export const CardManage=()=>{
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

    
   

    return(<>
    
 <Box mt="6">
    <Box textAlign="center" color="white">
        <Text textStyle={{sm:"2xl",md:"5xl"}}>Trending Movies</Text>
  </Box>
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"} mt="6">

    <SimpleGrid columns={{sm:1,md:5}} gap={"20px"} >
        {movie.map((element)=>{
            return <Card1 key={element.id} props={element} />})
        }
    </SimpleGrid>
    </Box> 
    </Box>

    <Box mt="6">
    <Box textAlign="center" color="white">
        <Text textStyle={{sm:"2xl",md:"5xl"}}>Trending Series</Text>
  </Box>
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"} mt="6">

    <SimpleGrid columns={{sm:1,md:5}} gap={"20px"} >
        {tv.map((element)=>{
            return <Card1 key={element.id} props={element} />})
        }
    </SimpleGrid>
    </Box> 
    </Box>

    <Box mt="6">
    <Box textAlign="center" color="white">
        <Text textStyle={{sm:"2xl",md:"5xl"}}>Trending Person</Text>
  </Box>
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"} mt="6">

    <SimpleGrid columns={{sm:1,md:5}} gap={"20px"} >
        {person.map((element)=>{
            return <Card1 key={element.id} props={element} />})
        }
    </SimpleGrid>
    </Box> 
    </Box>

    </>);
}



