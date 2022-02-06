import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from 'next/link';
import { Navigation, Pagination, Scrollbar,  A11y} from 'swiper'
import { Swiper, SwiperSlide } from "swiper/react";;

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Carrousel() {
  return(
    <Flex w="100%" maxW='1240px' mx="auto" h={["250px", "450px"]}  mb={['5px', '10px']}>
      <Swiper 
      modules={[Navigation, Pagination, Scrollbar,  A11y]}
      spaceBetween={50}
      slidesPerView={1} 
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{
        delay:4000,
      }}
      style={{width:'100%', flex:"1"}}
     >
       <SwiperSlide>
         <Flex
          w="100%"
          h='100%'
          align="center"
          justify="center"
          direction="column"
          bgImage="url(/europe.png)"
          bgRepeat="no-repeat"
          bgSize='cover'
          textAlign="center"
          bgPosition='center'
         >
           <Link href="/continente/europe">
             <a href="">
               <Heading  fontSize={["3xl", "4xl", "5xl"]} color={"gray.300"} fontWeight="bold">Europa</Heading>
               <Text color="gray.300" fontWeight={"bold"} fontSize={["0.8rem", "1xl", "2xl"]} mt={["2", "4"]}>O continente mais antigo.</Text>
             </a>
           </Link>
         </Flex>
       </SwiperSlide>

       <SwiperSlide>
         <Flex
          w="100%"
          h={['250px', "450px"]}
          marginBottom="90px"
          align="center"
          justify="center"
          direction="column"
          bgImage="url(/america-sul.jpg)"
          bgRepeat="no-repeat"
          bgSize='cover'
          textAlign="center"
          bgPosition='center'
         >
           <Link href="/continente/europe">
             <a href="">
               <Heading fontSize={["3xl", "4xl", "5xl"]} color={"gray.300"} fontWeight="bold">América do Sul</Heading>
               <Text color="gray.300" fontWeight={"bold"} fontSize={["0.8rem", "1xl", "2xl"]} mt={["2", "4"]}>O continente mais bonito.</Text>
             </a>
           </Link>
         </Flex>
       </SwiperSlide>
     </Swiper>
    </Flex>
  )
}



