import { Box, Input} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { InputGroup } from "./ui/input-group"
import { LuSearch } from "react-icons/lu"
import React, { useState } from "react"



export const Navbar=()=> {

  const [inputValue,setInputValue]=useState('');

  const inputChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
    setInputValue(event.target.value);
  }
  

  return(
    <Box bg="black" w="full" h="20" color="teal.contrast" padding={0} textAlign={"center"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} position="relative">
  
    <Box flex="1" textAlign="center">
      <Link to={"/"}>Movie App</Link>
    </Box>

    <InputGroup startElement={<LuSearch />} endElement={<Box cursor={'pointer'} _hover={{fontWeight:"bold",color:'black'}} onClick={() => {window.location.reload();}}><Link to={`/result/${inputValue}`}>Search</Link></Box>} bg={'white'} w="250px" position="absolute" right={4} color={'black'}>
      <Input placeholder="Search contacts" onChange={inputChange}/>
    </InputGroup>
    

</Box>


  )
}