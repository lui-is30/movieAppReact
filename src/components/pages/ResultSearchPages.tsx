import { useParams } from "react-router-dom";
import { Navbar } from "../Navbar";
import { useEffect, useState } from "react";
import { MovieType } from "../../types/movieTypes";
import { getSearchMovie } from "../../api/getSearch";
import { Card1 } from "../Card";
import { Box,SimpleGrid,Text } from "@chakra-ui/react";

const ResultSearchPages =()=>{
    const {input}=useParams();

    const [resultMovie,setResultMovie]=useState<MovieType[]>([]);

    useEffect(()=>{
        const fetchSearchMovie=async()=>{
            if (input)
            setResultMovie(await getSearchMovie(input));
        }
        fetchSearchMovie();
    },[])

    /**
     * <Box mt="6">
            <Box textAlign="center" color="white">
                <Text textStyle={{sm:"2xl",md:"5xl"}}>Trending Movies</Text>
          </Box>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} mt="6">
        
            <SimpleGrid columns={{sm:1,md:5}} gap={"20px"} >
                {resultMovie.map((element)=>{
                    return <Card1 key={element.id} props={element} />})
                }
            </SimpleGrid>
            </Box> 
            </Box>
     */

    return(<>
        <Navbar />
        {resultMovie?.map((element)=>{
            console.log(element);
                    return <Card1 key={element.id} props={element} />;})
                }
    </>
    )
}

export default ResultSearchPages;