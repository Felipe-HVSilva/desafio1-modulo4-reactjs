import { Flex, Text } from "@chakra-ui/react";

export default function BannerContinent() {
  return (
    <Flex
      w="100%"
      h={["150px", "300px", "500px"]}
      px={["0", "0", "36"]}
      pt={["0", "0", "72"]}
      bgImage="url(/banner-europe.png)"
      bgRepeat="no-repeat"
      bgSize='cover'
      bgPosition={'center'}
      align="center"
      justify={["center", 'center', 'flex-start']}
    >
      <Text fontSize={["28px", "48px"]} fontWeight="semibold" color="gray.300">Europa</Text>
    </Flex>
  )
}