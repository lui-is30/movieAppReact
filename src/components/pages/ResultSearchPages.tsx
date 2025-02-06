import { useParams } from "react-router-dom";
import { Navbar } from "../Navbar";

import { Card1 } from "../Card";
import { Box,SimpleGrid,Text } from "@chakra-ui/react";

import { useResultSearch } from "../../hooks/useResultSearch";


const ResultSearchPages =()=>{
    const {input}=useParams();

    let resultMovie;
    let resultTv;
    let resultPerson;

    if(input){
    resultMovie=useResultSearch(input).resultMovie;
    resultTv=useResultSearch(input).resultTv;
    resultPerson=useResultSearch(input).resultPerson;
    }


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