import { MovieCardProps } from "../types/movieTypes";
import { Button, Card, Image } from "@chakra-ui/react"
import { TvCardProps } from "../types/seriesTypes";
import { PersonCardProps } from "../types/personTypes";
import { Link } from "react-router-dom";



export const Card1=({props}:MovieCardProps|TvCardProps|PersonCardProps)=>{
  
  let image;

  switch(props.media_type){
    case "movie":
      if("title" in props)
         image= props.poster_path;
        break;
    case "tv":
      if("name" in props && "poster_path" in props)
        image=props.poster_path;
        break;
    case "person":
      if("name" in props && "profile_path" in props)
        image=props.profile_path;
        break;
  }

    
    

    return(<>
            <Card.Root maxW="sm" overflow="hidden" w={48} h={96} bg="black" >
      <Image
        src={`https://image.tmdb.org/t/p/w500${image}`}
      />
      <Card.Body gap={2}>
      </Card.Body>
      <Card.Footer display="flex" justifyContent="center"  >
        <Button variant="solid" mt="-15%" ><Link to={`/details/${props.id}/${props.media_type}`}>Details</Link></Button>
        
      </Card.Footer>
    </Card.Root>

    </>)
}



  

