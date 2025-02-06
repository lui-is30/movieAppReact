
import { Card1 } from "./Card";
import { Box, SimpleGrid,Text } from "@chakra-ui/react"

import { useCardManage } from "../hooks/useCardManage";



export const CardManage=()=>{
    
const movie=useCardManage().movie;
const tv=useCardManage().tv;
const person=useCardManage().person;
   

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



