import { Text, Flex, useColorModeValue, VStack, HStack, Image } from "@chakra-ui/react";
import TopBar from "../components/TopBar";

import { GoSmiley } from "react-icons/go";

import todayImage from "../assets/about-mater.jpg"
import growthImage from "../assets/about-snugg.jpg"
import hobbiesImage from "../assets/about-pc.jpg"


// "#64b5f6","#161b33"

// "#90caf9","#474973"

const About = () => {

  const bg = {
    borderRadius: '7px',
    borderWidth: 6,
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
    minW={'-webkit-max-content'}
    >
    <VStack pt={5} spacing={5} w={'100%'}>
      <Flex 
      w={'55%'} 
      {...bg}
      padding={2}
      >
        <TopBar name={'BACK'} textColor={useColorModeValue('white','black')}/>
      </Flex>
      {/* =========== TODAY =========== */}
      <HStack {...bg} alignItems={'left'} w={'6xl'}>
        <VStack 
        alignItems={'left'} 
        mt={8}
        
        >
          <Text 
          fontSize={'1.5rem'}
          fontWeight={'bold'}
          >Today</Text>
            <VStack
            fontSize={'md'}
            fontWeight={'bold'}
            spacing={5}
            >
              <Text>
                I am currently attending Georgia State University, 
                pursuing a bachelor's degree in computer science. 
                Immersing myself in Atlanta's energetic and fast-paced environment has greatly influenced my creativity and personal growth. 
                The computer science program provides a strong foundation for me to explore areas that interest me, 
                from complex concepts like artificial intelligence to more creatively oriented processes such as web development.
              </Text>
              <Text>
              I hope to pursue this career pathway and contribute to bigger ideas and innovations that have a meaningful impact on the world. 
              I am excited to see where my journey in computer science takes me and the opportunities that await me in the future.
              </Text>
            </VStack>
        </VStack>
        <Image
        mr={5}  
        {...polaroid}
        transform={'rotate(2deg)'}
        src={todayImage}/>
      </HStack>


      {/* ====================== GROWTH ====================== */}
      <HStack  {...bg} alignItems={'left'} w={'6xl'}>
        <Image  
        ml={5}
        {...polaroid}
        transform={'rotate(-2deg)'}
        src={growthImage}/>
      <VStack alignItems={'left'} mt={8}>
          <Text 
          fontSize={'1.5rem'}
          fontWeight={'bold'}
          >Background</Text>
          <VStack
          fontSize={'md'}
          fontWeight={'bold'}
          spacing={5}
          >
                <Text>
            		I grew up in Gwinnett County, 
                moving back and forth between Lawrenceville and Norcross. 
                As a kid, I was always fascinated by any tech I could get my hands on, 
                starting with a blue Game Boy Advance. 
                As I got older, I would use the family laptop to experiment with a website's HTML, 
                making it say anything I wanted and showing it to my friends and family. 
                This was my entry to the world of programming.
                </Text>
          </VStack>
        </VStack>
      </HStack>
      {/* ====================== HOBBIES ====================== */}
      <HStack {...bg} alignItems={'left'} w={'6xl'}>
        <VStack alignItems={'left'} mt={8} w={'75%'}>
          <Text 
          fontSize={'1.5rem'}
          fontWeight={'bold'}
          >Hobbies</Text>
          <VStack
          fontSize={'md'}
          fontWeight={'bold'}
          spacing={5}
          >
                <Text>
                One of the newest hobbies I picked up over the last year has been researching and assembling custom PCs. 
                So far, I have built my own PC; however, 
                I am always researching ways to upgrade it or even build a separate PC. 
                I plan for my next personal project to be a micro ATX build. 
                In addition to building my own PC, 
                I have used this experience to help my little brother build his own.
                </Text>
                <Text>
                Aside from spending a lot of time behind a screen, 
                I believe it is important to disconnect from the digital world and give yourself a break. 
                I prioritize taking walks, whether in national or neighborhood parks, 
                either by myself or with my girlfriend. 
                I often use this time to reflect on my week, accomplishments, and future goals.
                </Text>
          </VStack>
        </VStack>
        <Image  
        mr={5}
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