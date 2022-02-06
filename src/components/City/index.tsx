import { Flex, Img, Text, Heading, Box,  Avatar } from "@chakra-ui/react";


export default function City() {
  return (
    <Flex
      flexDir={'column'}
    >
      <Text fontSize={['lg', '1xl', '2xl']} fontWeight="bold" textAlign={['center','start']}>Cidades + 100</Text>

      <Flex 
        mt="40px"
        flexDir={['column', 'column', 'row']}
        gap="20px"
        align={['center',  'center', 'flex-start']}
        flexWrap="wrap"
        justify={['center', 'center',  'center', 'flex-start']}
      >
        <Flex
          w={256}
          h="279px"
          border='1px solid'
          borderColor="yellow.400"
          flexDir={'column'}
        >
          <Img 
            w={256}
            h='172px'
            bgImage={'url(/london.png)'}
            bgSize='cover'
            bgPos={'center'}
          />

          <Flex flexDir={'row'} align='center' justify={'space-between'} mt={['4', '7']}>
            <Box
              mx="20px"
            >
              <Heading fontSize={'20px'}>Londres</Heading>
              <Text>Reino Unido</Text>
            </Box>
           

            <Box 
              w='30px'
              h="30px"
              mx="20px"
            >
              <Avatar
                w="30px"
                h="30px"
                display={'inline'}
                
              src="/london-bandeira.png"
              />
            </Box>
           
          </Flex>
        </Flex>

        <Flex
          w={256}
          h="279px"
          border='1px solid'
          borderColor="yellow.400"
          flexDir={'column'}
        >
          <Img 
            w={256}
            h='172px'
            bgImage={'url(/paris.png)'}
            bgSize='cover'
            bgPos={'center'}
          />

          <Flex flexDir={'row'} align='center' justify={'space-between'} mt={['4', '7']}>
            <Box
              mx="20px"
            >
              <Heading fontSize={'20px'}>Paris</Heading>
              <Text>França</Text>
            </Box>
           

            <Box 
               w='30px'
               h="30px"
               mx="20px"
            >
              <Avatar  
               w='30px'
               h="30px"               
                src="/paris-bandeira.png"
              />
            </Box>
           
          </Flex>
        </Flex>

        <Flex
          w={256}
          h="279px"
          border='1px solid'
          borderColor="yellow.400"
          flexDir={'column'}
        >
          <Img 
            w={256}
            h='172px'
            bgImage={'url(/roma.png)'}
            bgSize='cover'
            bgPos={'center'}
          />

          <Flex flexDir={'row'} align='center' justify={'space-between'} mt={['4', '7']}>
            <Box
              mx="20px"
            >
              <Heading fontSize={'20px'}>Roma</Heading>
              <Text>Itália</Text>
            </Box>
           

            <Box 
               w='30px'
               h="30px"
               mx="20px"
            >
              <Avatar  
               w='30px'
               h="30px"               
                src="/roma-bandeira.png"
              />
            </Box>
           
          </Flex>
        </Flex>

        <Flex
          w={256}
          h="279px"
          border='1px solid'
          borderColor="yellow.400"
          flexDir={'column'}
        >
          <Img 
            w={256}
            h='172px'
            bgImage={'url(/praga.png)'}
            bgSize='cover'
            bgPos={'center'}
          />

          <Flex flexDir={'row'} align='center' justify={'space-between'} mt={['4', '7']}>
            <Box
              mx="20px"
            >
              <Heading fontSize={'20px'}>Praga</Heading>
              <Text>República Tcheca</Text>
            </Box>
           

            <Box 
               w='30px'
               h="30px"
               mx="20px"
            >
              <Avatar  
               w='30px'
               h="30px"               
                src="/praga-bandeira.png"
              />
            </Box>
           
          </Flex>
        </Flex>

        <Flex
          w={256}
          h="279px"
          border='1px solid'
          borderColor="yellow.400"
          flexDir={'column'}
        >
          <Img 
            w={256}
            h='172px'
            bgImage={'url(/amster.png)'}
            bgSize='cover'
            bgPos={'center'}
          />

          <Flex flexDir={'row'} align='center' justify={'space-between'} mt={['4', '7']}>
            <Box
              mx="20px"
            >
              <Heading fontSize={'20px'}>Amsterdã</Heading>
              <Text>Holanda</Text>
            </Box>
           

            <Box 
               w='30px'
               h="30px"
               mx="20px"
            >
              <Avatar  
               w='30px'
               h="30px"               
                src="/amste-bandeira.png"
              />
            </Box>
           
          </Flex>
        </Flex>
      </Flex>
    </Flex>  
  )
}