import { Text, Flex, useColorModeValue, VStack, HStack, Image } from "@chakra-ui/react";
import TopBar from "../components/TopBar";

import PortraitImage from "../assets/temp.png"

import todayImage from "../assets/about-mater.jpg"
import growthImage from "../assets/about-snugg.jpg"
import hobbiesImage from "../assets/about-pc.jpg"


// "#64b5f6","#161b33"

// "#90caf9","#474973"

const About = () => {

  const bg = {
    borderRadius: '7px',
    borderWidth: 4,
    borderColor: useColorModeValue("white", "black"),
    bg: useColorModeValue("#90caf9", "#474973"),
    padding: 5,
    _hover: {
    transform: "scale(1.015)",
    transition: "all 0.3s ease"
  },
  spacing: '8'
};

  const polaroid = {
    w: '25%',
    bg: useColorModeValue("white", "black"),
    px: 3,
    pb: 16,
    pt: 5,
    borderRadius: '5px',
  }

  return (
    <Flex 
    bg={useColorModeValue("#64b5f6","#161b33")} 
    minH={'100vh'}
    justifyContent={'center'}
    color={useColorModeValue('white','black')}
    pb={16}
    >
    <VStack w={'100%'} pt={5} spacing={5}>
      <Flex 
      w={'60%'} 
      {...bg}
      padding={2}
      >
        <TopBar name={'BACK'} textColor={useColorModeValue('white','black')}/>
      </Flex>
      {/* =========== TODAY =========== */}
      <HStack {...bg} alignItems={'left'} w={'65%'}>
        <VStack 
        alignItems={'left'} 
        mt={5}>
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
        <Image  
        {...polaroid}
        transform={'rotate(2deg)'}
        src={todayImage}/>
      </HStack>


      {/* ====================== GROWTH ====================== */}
      <HStack  {...bg} alignItems={'left'} w={'65%'}>
        <Image  
        {...polaroid}
        transform={'rotate(-2deg)'}
        src={growthImage}/>
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
      {/* ====================== HOBBIES ====================== */}
      <HStack {...bg} alignItems={'left'} w={'65%'}>
        <VStack alignItems={'left'} mt={5} w={'75%'}>
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
        <Image  
        {...polaroid}
        src={hobbiesImage}
        transform={'rotate(2deg)'}
        />
      </HStack>
    </VStack>
    </Flex>
  );
}

export default About;