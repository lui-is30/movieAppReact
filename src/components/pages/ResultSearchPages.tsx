import { useParams } from "react-router-dom";
import { Navbar } from "../Navbar";

import { Card1 } from "../Card";
import { Box,SimpleGrid,Text } from "@chakra-ui/react";

import { useResultSearch } from "../../hooks/useResultSearch";


const ResultSearchPages =()=>{
    const {input}=useParams();



    if(!input)
        return null

    const { movie, tv, person } = useResultSearch(input);


    return(<>
        <Navbar />
        {movie &&
        <Box mt="6">
            <Box textAlign="center" color="white">
                <Text textStyle={{sm:"2xl",md:"5xl"}}>Movies</Text>
            </Box>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} mt="6">
        
            <SimpleGrid columns={{sm:1,md:5}} gap={"20px"} >
                {movie?.map((element)=>{
                    console.log(element);
                        return <Card1 key={element.id} props={element} />})
                    }
            </SimpleGrid>
            </Box> 
        </Box>
        }

        {tv &&
        <Box mt="6">
            <Box textAlign="center" color="white">
                <Text textStyle={{sm:"2xl",md:"5xl"}}>Series</Text>
            </Box>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} mt="6">
        
            <SimpleGrid columns={{sm:1,md:5}} gap={"20px"} >
                {tv?.map((element)=>{
                    console.log(element);
                        return <Card1 key={element.id} props={element} />})
                    }
            </SimpleGrid>
            </Box> 
        </Box>
        }

        {person &&
        <Box mt="6">
            <Box textAlign="center" color="white">
                <Text textStyle={{sm:"2xl",md:"5xl"}}>Actors</Text>
            </Box>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} mt="6">
        
            <SimpleGrid columns={{sm:1,md:5}} gap={"20px"} >
                {person?.map((element)=>{
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