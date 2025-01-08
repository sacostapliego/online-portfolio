import { Flex, useColorModeValue, Text, VStack, HStack, Modal, useDisclosure, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Image, Box} from "@chakra-ui/react"

import projectLight from "../assets/highlight-projects-light.png";
import projectDark from "../assets/highlight-projects-dark.png";

import laptopDark from "../assets/highlight-laptop-dark.png";
import laptopLight from "../assets/highlight-laptop-light.png";
import { FiArrowUpRight } from "react-icons/fi";



const HighlightProject = () => {
    
    const laptopSrc = useColorModeValue(laptopLight, laptopDark);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const bg = useColorModeValue("#90caf9","#474973");
    const modalBox = {
        borderWidth:3,
        borderRadius:4,
        borderColor:useColorModeValue('white', 'black'),
        justifyContent:'center',
        alignItems:'center',
        color:useColorModeValue('white', 'black')
    };
    const modalImage = {
        boxSize:28,
        bg:useColorModeValue('white', 'black'), 
        p:5,
        borderRadius:'2xl',
        border:'5px solid',
        borderColor:useColorModeValue('blue.300', '#1D2138'),
        _hover: {transform: 'translateY(-7px)', transition: 'transform 0.3s ease'}
        
    }

    return(
       <> 
       
        {/* ============================== BOX ============================== */}
        <Flex bg={bg} 
        borderRadius = '7px' 
        w={'100%'} 
        h={'100%'}
        justifyContent={'center'}
        alignItems={'center'}
        onClick={onOpen}
        cursor='pointer'
        
        /*_hover={{ bg: useColorModeValue("#64b5f6", "#161b33") }}*/
        >
            <VStack color={useColorModeValue('white', 'black')} fontWeight={'bold'} spacing={24}>
                <Text>ONLINE PORTFOLIO</Text>

                <Image 
                    w='80%'
                    src= {laptopSrc}
                    objectFit='cover'
                    margin={0}
                        />

                <Text pl={5} pr={5}>
                    My own personal online portfolio, that I use to showcase
                    my projects, skills, contact information and give a brief explnation on who I am.
                </Text>

            </VStack>
        </Flex>

        {/* ============================== MODAL ============================== */}

    <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent
        display={'flex'}
        flexDirection={'column'}
        maxW={'80rem'}
        h={'50rem'}
        minH={'50rem'}
        alignItems={'center'}
        justifyContent={'center'}
        bg= {bg}
        border='5px solid'
        borderColor={useColorModeValue('white', 'black')}
        color={useColorModeValue('white', 'black')}
        pb={5}
        >
            <ModalHeader>
                <ModalCloseButton />
            </ModalHeader>
          <ModalCloseButton />
          
          <VStack 
          h={'100%'}
          w={'100%'}
          justifyContent={'space-evenly'}>
            <HStack
            w={'100%'}
            h={'20%'}
            justifyContent={'space-between'}
            pl={4}
            pr={4}
            >
                <Flex
                    {...modalBox}
                    w={'40%'}
                    h={'100%'}
                    bg={useColorModeValue('blue.100', '#53589F9F')}
                    overflow={'hidden'}
                    justifyContent={'center'}
                >
                    <Image mr={8} borderRadius={7} border={'2px'} boxSize={"100%"} src={projectLight}/>
                    <Image ml={8} borderRadius={7} border={'2px'} boxSize={"100%"} src={projectDark}/>
                </Flex>
                <Flex
                    {...modalBox}
                    w={'60%'}
                    h={'100%'}
                    bg={useColorModeValue('blue.300', '#32356E')}
                >
                    <HStack w={'100%'} h={'100%'} justifyContent={'space-evenly'} alignItems={'center'}>
                        <Text p={4} fontSize={'xs'} fontWeight={'bold'}>
                        With the projects page, I used MongoDB and Express
                        to store the data and React and Node.js to display it.
                        The data stored are my projects that I completed, or might still be working on.
                        They all have four main components, a title, a description, a link to the project, and the resources I used to complete each project.
                        </Text>
                        
                    </HStack>
                </Flex>
            </HStack>
            <HStack
            h={'50%'}
            w={'100%'}
            justifyContent={'space-between'}
            pl={4}
            pr={4}
            >
                <Flex
                {...modalBox}
                w={'25%'}
                h={'100%'}
                bg={useColorModeValue('blue.400', '#2E3660')}
                >
                    <VStack w={'100%'} h={'100%'}  justifyContent={'space-evenly'}>
                        <HStack justifyContent={'space-evenly'} w={'100%'}>
                            <Image {...modalImage} src="/mongoDB.png" />
                            <Image {...modalImage} src="/express.png" />
                        </HStack>
                        <HStack justifyContent={'space-evenly'} w={'100%'}>
                            <Image {...modalImage} src="/react.png" />
                            <Image {...modalImage} src="/nodejs.png" />
                        </HStack>
                    </VStack>
                </Flex>
                <Flex
                {...modalBox}
                w={'50%'}
                h={'100%'}
                bg={useColorModeValue('blue.300', '#32356E')}
                >
                    Main Image
                </Flex>
                <Flex
                {...modalBox}
                w={'25%'}
                h={'100%'}
                bg={useColorModeValue('blue.100', '#53589F9F')}
                p={5}
                fontWeight={'bold'}
                >
                    To create this project, I had a frontend and backend.
                    For my frontend I used React,
                </Flex>
            </HStack>

            <HStack
            w={'100%'}
            h={'20%'}
            justifyContent={'space-between'}
            pl={4}
            pr={4}
            >
                <Flex
                    {...modalBox}
                    w={'75%'}
                    h={'100%'}
                    bg={useColorModeValue('blue.100', '#53589F')}
                >
                    4
                </Flex>
                <Flex
                    {...modalBox}
                    w={'25%'}
                    h={'100%'}
                    bg={useColorModeValue('blue.300', '#32356E')}
                >
                    Image 2?
                </Flex>
            </HStack>
          </VStack>
        </ModalContent>
      </Modal>
    </>
    )
}

export default HighlightProject