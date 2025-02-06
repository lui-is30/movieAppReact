import { Navbar } from "../Navbar"
import { useParams } from "react-router-dom"

import { Box, Heading, Image, Table,Text } from "@chakra-ui/react";

import { useDetails } from "../../hooks/useDetails";

export const Details=()=>{

    const {id,media_type}=useParams();

    if(!id || !media_type)
        return null


    const { movie, tv, person } = useDetails(id,media_type);

    
    


        let image;
        let title;
        let description;
        let budget;
        let original_language;
        let runtime;
        let genres;
        let number_of_episodes;
        let number_of_season;
        let birthday;
        let known_for_department;
        let place_of_birth;
        let popularity;

        

    if(media_type==='movie'){
        image=movie?.backdrop_path;
        title=movie?.title;
        description=movie?.overview;
        budget=movie?.budget;
        original_language=movie?.original_language;
        runtime=movie?.runtime;
        genres=movie?.genres;
    }
    else if(media_type==='tv'){
        image=tv?.backdrop_path;
        title=tv?.name;
        description=tv?.overview;
        number_of_season=tv?.number_of_seasons;
        original_language=tv?.original_language;
        number_of_episodes=tv?.number_of_episodes;
        genres=tv?.genres;
    }
    else{
        image=person?.profile_path;
        title=person?.name;
        description=person?.biography;
        birthday=person?.birthday;
        known_for_department=person?.known_for_department;
        place_of_birth=person?.place_of_birth;
        popularity=person?.popularity;
    }

    


if(media_type==='movie'||media_type==='tv'){

    return(<>
        <Navbar />

           <Box w={'full'} h={'500px'} position={'relative'}>
           
                <Box w={'full'} h={'500px'} backgroundImage={`url(https://image.tmdb.org/t/p/w500${image})`} bgSize={'cover'} filter="blur(10px)" position={'absolute'} zIndex={'0'} >
                    
                </Box>

                <Image src={`https://image.tmdb.org/t/p/w500${image}`} w={'3/6'} h={'500px'} objectFit={'cover'} position={'absolute'} zIndex={'1'} left={'25%'}></Image>
            </Box>

            <Box bg={'rgb(35, 33, 33)'} w={'3/6'} mx="auto">
                <Box w={'full'} textAlign={'center'}>
                    <Heading size="5xl" color={'white'}>{title}</Heading>
                </Box>

                <Box mt={'12'}>
                    <Text textStyle={'lg'} fontWeight={'bold'} color={'white'}>{description}</Text>
                </Box>

            <Box  justifyContent={"center"} alignItems={"center"} mt={'12'}>
                <Table.Root size="sm" w={'full'} unstyled>
                    <Table.Body>

                        <Table.Row bg={'rgb(35, 33, 33)'} color={'white'} textAlign={'center'}>
                            {media_type==='movie'?(
                            <Table.Cell><Text fontWeight={'bold'} textStyle={'md'}>Budget</Text></Table.Cell>):(
                                <Table.Cell><Text fontWeight={'bold'} textStyle={'md'}>Seasons</Text></Table.Cell>
                            )
                            }
                            <Table.Cell><Text fontWeight={'bold'} textStyle={'md'}>Original Language</Text></Table.Cell>
                            {media_type==='movie'?(
                            <Table.Cell><Text fontWeight={'bold'} textStyle={'md'}>Runtime</Text></Table.Cell>):(
                                <Table.Cell><Text fontWeight={'bold'} textStyle={'md'}>episodes</Text></Table.Cell>
                            )
                            }
                            <Table.Cell><Text fontWeight={'bold'} textStyle={'md'}>Genres</Text></Table.Cell>
                        </Table.Row>

                        <Table.Row bg={'rgb(35, 33, 33)'} color={'white'} textAlign={'center'}>
                        
                            {media_type==='movie'?(
                            <Table.Cell>{budget+'$'}</Table.Cell>):(
                                <Table.Cell>{number_of_season}</Table.Cell>
                            )
                            }
                            <Table.Cell>{original_language}</Table.Cell>
                            {media_type==='movie'?(
                            <Table.Cell>{runtime+' m'}</Table.Cell>):(
                                <Table.Cell>{number_of_episodes}</Table.Cell>
                            )
                            }
                            <Table.Cell>{genres?.map((element)=>element.name+',')}</Table.Cell>

                        </Table.Row>

                    </Table.Body>
                </Table.Root>
            </Box>

            </Box>
        
        <br />
    </>)
}
else{
    return(<>
        <Navbar />
        <Box display="flex" alignItems="center" justifyContent="center" gap={8}>
            <Box w={'2/6'} h={'500px'} >
                <Image src={`https://image.tmdb.org/t/p/w500${image}`} h={'500px'} objectFit="cover" mx={'auto'}></Image>
            </Box>

            <Box flex="1" textAlign="center" mr={'8'}>
                <Heading size="5xl" color={'white'}>{title}</Heading>
                <Box>
                    <Text textStyle={'lg'} fontWeight={'bold'} color={'white'}>{description}</Text>
                </Box>

                <Table.Root size={'sm'} unstyled mx={'auto'} mt={'12'}>
                    <Table.Body>
                        <Table.Row bg={'rgb(35, 33, 33)'} color={'white'} textAlign={'center'} fontWeight={'bold'} textStyle={'md'}>
                            <Table.Cell p={'4'}>birthday</Table.Cell>
                            <Table.Cell p={'4'}>department</Table.Cell>
                            <Table.Cell p={'4'}>place of birth</Table.Cell>
                            <Table.Cell p={'4'}>popularity</Table.Cell>
                        </Table.Row>

                        <Table.Row bg={'rgb(35, 33, 33)'} color={'white'} textAlign={'center'}>
                            <Table.Cell p={'4'}>{birthday}</Table.Cell>
                            <Table.Cell p={'4'}>{known_for_department}</Table.Cell>
                            <Table.Cell p={'4'}>{place_of_birth}</Table.Cell>
                            <Table.Cell p={'4'}>{popularity}</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table.Root>

            </Box>
        </Box>


    </>)
}
}

    
  



