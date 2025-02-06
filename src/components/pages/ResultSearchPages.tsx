import { useParams } from "react-router-dom";
import { Navbar } from "../Navbar";
import { useEffect, useState } from "react";
import { MovieType } from "../../types/movieTypes";
import { getSearchMovie, getSearchPerson, getSearchTv } from "../../api/getSearch";
import { Card1 } from "../Card";
import { Box,SimpleGrid,Text } from "@chakra-ui/react";
import { TvTypes } from "../../types/seriesTypes";
import { PersonType } from "../../types/personTypes";
//import { Box,SimpleGrid,Text } from "@chakra-ui/react";

const ResultSearchPages =()=>{
    const {input}=useParams();

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


    return(<>
        <Navbar />
        {resultMovie &&
        <Box mt="6">
            <Box textAlign="center" color="white">
                <Text textStyle={{sm:"2xl",md:"5xl"}}>Movies</Text>
            </Box>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} mt="6">
        
            <SimpleGrid columns={{sm:1,md:5}} gap={"20px"} >
                {resultMovie?.map((element)=>{
                    console.log(element);
                        return <Card1 key={element.id} props={element} />})
                    }
            </SimpleGrid>
            </Box> 
        </Box>
        }

        {resultTv &&
        <Box mt="6">
            <Box textAlign="center" color="white">
                <Text textStyle={{sm:"2xl",md:"5xl"}}>Series</Text>
            </Box>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} mt="6">
        
            <SimpleGrid columns={{sm:1,md:5}} gap={"20px"} >
                {resultTv?.map((element)=>{
                    console.log(element);
                        return <Card1 key={element.id} props={element} />})
                    }
            </SimpleGrid>
            </Box> 
        </Box>
        }

        {resultPerson &&
        <Box mt="6">
            <Box textAlign="center" color="white">
                <Text textStyle={{sm:"2xl",md:"5xl"}}>Actors</Text>
            </Box>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} mt="6">
        
            <SimpleGrid columns={{sm:1,md:5}} gap={"20px"} >
                {resultPerson?.map((element)=>{
                    console.log(element);
                        return <Card1 key={element.id} props={element} />})
                    }
            </SimpleGrid>
            </Box> 
        </Box>
        }

        <br />
        
    </>
    )
}

export default ResultSearchPages;