import { Flex } from "@chakra-ui/react";
import { Header } from "../../components/Header";

import BannerContinent from "../../components/BannerContinent";
import Content from "../../components/Content";
import City from "../../components/City";

export default function Continent() {
  return(
    <Flex 
      maxW={1140}
      mx="auto"
      flexDir={'column'}
    >
      <Header arrow={true}/>
      <BannerContinent />

      <Flex maxWidth={1160} mx="auto" mb="10" px="1rem" flexDir={'column'}>
        <Content />
      </Flex>
      
      <Flex  maxWidth={1160}  mb="10" px="1rem" flexDir={'column'}>
        <City  />
      </Flex>
     
    </Flex>
  )  
}