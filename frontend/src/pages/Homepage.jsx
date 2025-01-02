import { Flex, HStack, VStack, useColorModeValue} from "@chakra-ui/react";
import TopBar from "../components/TopBar";
import Portrait from "../components/Portrait";
import SocialBar from "../components/SocialBar";
import HighlightProject from "../components/HighlightProject";
import AboutBox from "../components/AboutBox";
import LatestBox from "../components/LatestBox";
import SkillsBox from "../components/SkillsBox";


const Homepage = () => {
  return (
    <Flex
      h="100vh"
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
      >

        <VStack w='97%' h='95%' spacing= '2vh' >
        /* ===================TOP==================== */
            <Flex h='10%' w='100%' bg={useColorModeValue("#90caf9","#474973")} borderRadius='7px' spacing='2vh'>
                <TopBar name={'STEVEN ACOSTA-PLIEGO'}/>
            </Flex>
            
            
            <HStack h='100%' w='100%' spacing='2vh'>
            /* ==================BOX 2 & 3====================== */
            <VStack h='100%' w='30%' spacing='2vh'>
            <Flex color="white" h='85%' w='100%' >
              <HighlightProject/>
            </Flex>
            
            <Flex color="white" bg={useColorModeValue("#90caf9","#474973")} h='15%' w='100%' borderRadius = '7px' >
              <SocialBar/>
            </Flex>
            
            </VStack>

            /* ======================================== */
            <VStack h='100%' w='75%' spacing='2vh'>
                /* =================BOX 4 & 5==================== */
                <HStack  h='60%' w='100%' spacing='2vh' >

                <Flex color="white" h='100%' w='30%'>
                  <Portrait/>
                </Flex>

                <Flex color="white"
                h='100%' w='70%'
                >
                  <AboutBox/>
                </Flex>  
                </HStack>

                
                /* ===================BOX 6 & 7===================== */
                <HStack h='40%' w='100%' spacing='2vh'>
                <Flex color="white" bg={useColorModeValue("#64b5f6","#161b33")} h='100%' w='50%' borderRadius = '7px'>
                  <SkillsBox/>
                </Flex>
                <Flex color="white" bg={useColorModeValue("#90caf9","#474973")} h='100%' w='50%' borderRadius = '7px'>
                  <LatestBox/>
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
