import { Flex, HStack, VStack, useColorModeValue} from "@chakra-ui/react";
import TopBar from "../components/TopBar";
import Portrait from "../components/Portrait";
import SocialBar from "../components/SocialBar";
import HighlightProject from "../components/HighlightProject";
import AboutBox from "../components/AboutBox";
import LatestBox from "../components/LatestBox";
import SkillsBox from "../components/SkillsBox";
import ContactBox from "../components/ContactBox";
import { transform } from "framer-motion";


const Homepage = () => {

  const hovereffect = {
    _hover: {
      transform: "scale(1.015)",
      transition: "all 0.3s ease"
    }
  }


  return (
    <Flex
      minH={'-webkit-max-content'}
      h="100vh"
      minW={'-webkit-max-content'}
      w="100vw"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        bg={useColorModeValue("white","black")}
        w="80rem"
        h="50rem"
        justifyContent="center"
        alignItems="center"
        borderRadius="2vh"
        flexShrink={0}
        flexGrow={0}
      >

        <VStack w='97%' h='95%' spacing= '2vh' >
        /* ===================TOP==================== */
            <Flex {...hovereffect}  h='10%' w='100%' bg={useColorModeValue("#90caf9","#474973")} borderRadius='7px' spacing='2vh' >
                <TopBar name={'STEVEN ACOSTA-PLIEGO'} textColor={useColorModeValue('white','black')}/>
            </Flex>
            
            
            <HStack h='100%' w='100%' spacing='2vh'>
            /* ==================BOX 2 & 3====================== */
            <VStack h='100%' w='30%' spacing='2vh'>
            <Flex color="white" h='85%' w='100%' {...hovereffect}>
              <HighlightProject/>
            </Flex>
            
            <Flex color="white" {...hovereffect} bg={useColorModeValue("#90caf9","#474973")} h='15%' w='100%' borderRadius = '7px' >
              <SocialBar/>
            </Flex>
            
            </VStack>

            /* ======================================== */
            <VStack h='100%' w='75%' spacing='2vh'>
                /* =================BOX 4 & 5==================== */
                <HStack  h='60%' w='100%' spacing='2vh' >

                <Flex color="white" h='100%' w='30%' {...hovereffect}>
                  <Portrait/>
                </Flex>

                <Flex color="white"
                h='100%' w='70%' {...hovereffect}
                >
                  <AboutBox/>
                </Flex>  
                </HStack>

                
                /* ===================BOX 6 & 7===================== */
                <HStack h='40%' w='100%' spacing='2vh'>
                <Flex {...hovereffect} color="white" bg={useColorModeValue("#64b5f6","#161b33")} h='100%' w='50%' borderRadius = '7px'>
                  <SkillsBox/>
                </Flex>
                <Flex {...hovereffect} color="white" bg={useColorModeValue("#90caf9","#474973")} h='100%' w='50%' borderRadius = '7px'>
                  <ContactBox/>
                </Flex>  
                </HStack>
            </VStack>


            </HStack>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default Homepage;
