import { Flex, Image as ChakraImage } from "@chakra-ui/react";
import Link from 'next/link'

interface HeaderProps {
  arrow?:boolean;
}

export function Header({ arrow = false }: HeaderProps) {
  
  return(
    <Flex  w="100%" h="100" align={'center'} justify={'center'} flexWrap="wrap" bg={'#fff'}>
      { arrow && (
        <Link href={'/'} passHref>
          <a href="">
            <ChakraImage   src="/Arrow.png" alt="Arrow" color={'theme.colrs.dark[150]'}  />
          </a>
        </Link>
        
      )}
      <ChakraImage  src="/Logo.svg" alt="WordTrip"  align={'center'} margin="auto"/>
  </Flex>
  )
  
}