import { Flex, Box, Image, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";

import Carrousel from "../components/Carrousel";
import Caracteristicas from "../components/Caracteristicas";
import BannerMenu from "../components/BannerMenu";

export default function Home() {
  return (
   <Flex w="100%" maxWidth={1400} h="100%" direction={'row'}  m="auto" wrap={'wrap'}>
     <Header />
     <BannerMenu />
     <Flex  align={'center'} justify="space-between" marginTop='80px' w="100%"  maxWidth={1160} marginLeft="auto" marginRight={'auto'}>
        <Caracteristicas />
     </Flex>
     
     <Flex  align="center" justify='center' mt="50" mx={'auto'} flexDir="row"  w="100%"   >
      <Text w="80px" border='1px'  ></Text>
     </Flex>
     

      <Flex textAlign={'center'} mt="50px" fontSize='36px' fontWeight="medium" flexDir={'column'} mx="auto" mb="50" lineHeight={'50px'} >
        <Text> Vamos nessa ?</Text>
        <Text>Então escolha seu continente</Text>
      </Flex>
        
      <Carrousel />
   </Flex>
  )
}
