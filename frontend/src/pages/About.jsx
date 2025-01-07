import { Text, Flex, useColorModeValue, VStack, HStack, Image } from "@chakra-ui/react";
import TopBar from "../components/TopBar";

import PortraitImage from "../assets/temp.png"


const About = () => {
  return (
    <Flex 
    bg={useColorModeValue("#90caf9","#474973")} 
    minH={'100vh'}
    justifyContent={'center'}
    color={useColorModeValue('white','black')}
    >
    <VStack w={'100%'}>
      <Flex w={'60%'} pt={5}>
        <TopBar name={'BACK'} textColor={useColorModeValue('white','black')}/>
      </Flex>
      {/* =========== TODAY =========== */}
      <HStack paddingY={5} borderTop={'4px'} alignItems={'left'} w={'65%'}>
        <VStack alignItems={'left'} mt={5}>
          <Text 
          fontSize={'1.5rem'}
          fontStyle={'initial'}
          fontWeight={'bold'}
          >Today</Text>
          <Text
          mr={8}
          >
            My own personal online portfolio, that I use to showcase my projects, skills, contact information and give a brief explnation on who I am.
          </Text>
        </VStack>
        <Image  src={PortraitImage}/>
      </HStack>


      {/* =========== GROWTH =========== */}
      <HStack paddingY={5} borderTop={'4px'} alignItems={'left'} w={'65%'}>
        <Image  src={PortraitImage}/>
      <VStack alignItems={'left'} mt={5}>
          <Text 
          fontSize={'1.5rem'}
          fontStyle={'initial'}
          fontWeight={'bold'}
          >Growth</Text>
          <Text
          >
            My own personal online portfolio, that I use to showcase my projects, skills, contact information and give a brief explnation on who I am.
          </Text>
        </VStack>
      </HStack>
      {/* =========== HOBBIES =========== */}
      <HStack paddingY={5} borderTop={'4px'} alignItems={'left'} w={'65%'}>
        <VStack alignItems={'left'} mt={5}>
          <Text 
          fontSize={'1.5rem'}
          fontStyle={'initial'}
          fontWeight={'bold'}
          >Hobbies</Text>
          <Text
          >
            My own personal online portfolio, that I use to showcase my projects, skills, contact information and give a brief explnation on who I am.
          </Text>
        </VStack>
        <Image  src={PortraitImage}/>
      </HStack>
    </VStack>
    </Flex>
  );
}

export default About;