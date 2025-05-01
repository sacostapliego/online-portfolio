import { Spacer, Text, VStack, useColorModeValue, HStack, Flex, Modal, useDisclosure, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Image, SimpleGrid} from "@chakra-ui/react";

import { FiArrowUpRight } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";

import { IoIosSchool } from "react-icons/io";


const SkillsBox = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const modalBox = {
        borderWidth:3,
        borderRadius:4,
        borderColor:useColorModeValue('white', 'black'),
        justifyContent:'center',
        alignItems:'center',
        color:useColorModeValue('white', 'black'),
        _hover: {
        transform: "scale(1.015)",
        transition: "all 0.3s ease"
    },
    };

    const modalImage = {
        boxSize:'16',
        borderRadius:4,
        bg:useColorModeValue('white', 'black'), 
        border:'5px solid',
        borderColor:useColorModeValue('#0973CB', '#1D2138'),
        _hover: {transform: 'translateY(-7px)', transition: 'transform 0.3s ease'},
    }

    const programmingIcons = [
        "languages/python.png",
        "languages/JavaScript.png",
        "languages/c.png",
        "languages/sql.png",
        "languages/dart.png",
        "languages/html.png",
        "languages/css.png",
        "languages/r.png",
    ];

    const developmentIcons = [
        "languages/mongoDB.png",
        "languages/chakra.png",
        "languages/git.png",
        "languages/matplotlib.png",
        "languages/react.png",
        "languages/nodejs.png",
        "languages/flutter.png",
        "languages/express.png",
    ];

    const osIcons = [
        "languages/windows.png",
        "languages/macos.png",
        "languages/ubuntu.png",
    ];
    
    return(
        <>
            <VStack
            w={'100%'} 
            h={'100%'}
            justifyContent={'flex-left'}
            alignItems={'flex-left'}
            padding={5}
            color={useColorModeValue("white","#474973")}
            onClick={onOpen}
            cursor='pointer'
            >
                {/* =========== ICON + TEXT =========== */}
                <HStack
                justifyContent={'space-between'}
                >
                    <Text
                    fontFamily={'initial'}
                    fontSize={'1xl'}
                    >
                        
                    </Text>

                    <FiArrowUpRight size={'2rem'}/>
                </HStack>

                <Spacer/>
                {/* =========== TEXT =========== */}
                <Text
                fontFamily={'initial'}
                fontStyle={'italic'}
                fontSize={'4xl'}
                fontWeight={'extrabold'}
                >
                Skills
                </Text>

                {/* =========== MODULE =========== */}

            </VStack>

            <Modal isOpen={isOpen} onClose={onClose} isCentered size={0}>
                        <ModalOverlay/>
                        <ModalContent 
                        display={'flex'}
                        flexDirection={'column'}
                        w="75rem"
                        h="47rem"
                        flexShrink={0}

                        alignItems={'center'}
                        justifyContent={'center'}
                        bg={useColorModeValue("#64b5f6","#161b33")}
                        border='5px solid'
                        borderColor={useColorModeValue('white', 'black')}
                        color={useColorModeValue('white', 'black')}
                        >   
                            <ModalHeader p={4} justifyContent={'flex-end'} alignItems={'flex-end'}>
                                <ModalCloseButton/>
                            </ModalHeader>
                            
                            <ModalBody
                            w={'100%'}
                            >
                                <HStack w={'100%'} h={'100%'} justifyContent={'space-between'} spacing={'5'}>
                                    <VStack w={'50%'} h={'100%'} spacing={'5'}>
                {/* ================================= Prgramming Langauges ================================= */}
                                    <Flex
                                        {...modalBox}
                                        w={'100%'}
                                        h={'80%'}
                                        bg={useColorModeValue("blue.300","#3E4173")}
                                        >
                                            <VStack w={'100%'} h={'100%'}> 
                                                <VStack h={'20%'} w={'80%'} justifyContent={'center'} alignItems={'center'} spacing={2} pt={6}>
                                                    <Text h={'50%'} fontSize={'lg'} fontWeight={'bold'}>Programming Languages</Text>
                                                    <Text h={'100%'} fontSize={'md'} fontWeight={'bold'}>
                                                        Proficent in Python, however I am always looking to learn new programming langauges, development tools,
                                                        or different distros of linux!
                                                    </Text>
                                                </VStack>
                                            
                                                <SimpleGrid w={'95%'}  h={'80%'} columns={3} spacing={5} alignItems={'center'} >
                                                {programmingIcons.map((src) => (
                                                <Flex key={src} justifyContent={'center'} alignItems={'center'} h={'50%'}>
                                                    <Image {...modalImage} boxSize='20' src={src} />
                                                </Flex>
                                            ))}
                                             
                                                <Flex justifyContent={'center'} alignItems={'center'}>
                                                    <BsThreeDots  size={'2rem'}/>
                                                </Flex>
                                                
                                                </SimpleGrid>
                                            </VStack>
                                        </Flex>
                {/* ================================= COURSEWORK ================================= */}
                                        <Flex
                                        {...modalBox}
                                        w={'100%'}
                                        h={'20%'}
                                        bg={useColorModeValue("#90caf9","#383E77")}
                                        >
                                            <VStack w={'100%'} h={'100%'} justifyContent={'center'}>
                                                <Flex w={'50%'} h={'20%'} justifyContent={'space-evenly'} alignItems={'center'} mt={2} >
                                                    <Text fontSize={'lg'} fontWeight={'bold'}>Relvant Courses Taken</Text>
                                                    <IoIosSchool size={'2rem'} />
                                                </Flex>
                                                <Text w={'80%'} h={'80%'} fontSize={'sm'} fontWeight={'bold'} justifyContent={'center'} alignItems={'center'} > 
                                                Data Structures, Computer Organization, System-Level Programming, Linear Algebra, Discrete Math
                                                Principles of Computer Science I & II
                                                
                                                </Text>
                                            </VStack>
                                        </Flex>
                                    </VStack>


                                    <VStack w={'50%'} h={'100%'} spacing={'5'}>
                {/* ================================= DEVELOPMENT TOOLS + FRAMEWORKS ================================= */}
                                        <Flex
                                        {...modalBox}
                                        w={'100%'}
                                        h={'70%'}
                                        bg={useColorModeValue("blue.300","#383E77")}
                                        >
                                        <VStack spacing={5} h={'100%'} w={'100%'} justifyContent={'center'}>
                                            <Text
                                            fontSize={'md'}
                                            fontWeight={'bold'}
                                            >Development Tools and Frameworks</Text>
                                            <SimpleGrid w={'95%'} h={'70%'} columns={3} spacing={5}>
                                                {developmentIcons.map((src) => (
                                                <Flex key={src} justifyContent={'center'} alignItems={'center'}>
                                                    <Image {...modalImage} src={src} />
                                                </Flex>
                                            ))}
                                            </SimpleGrid>
                                        </VStack>
                                        </Flex>
                {/* ================================= OPERATING SYSTEMSD ================================= */}
                                        <Flex
                                        {...modalBox}
                                        w={'100%'}
                                        h={'30%'}
                                        bg={useColorModeValue("blue.100","#3E4173")}
                                        >
                                        <VStack spacing={5} w={'100%'} h={'100%'} justifyContent={'center'} alignItems={'center'}>
                                            <Text
                                            fontSize={'md'}
                                            fontWeight={'bold'}
                                            >Operating Systems</Text>
                                            <SimpleGrid w={'95%'}  h={'50%'} columns={3} spacing={5} >
                                                {osIcons.map((src) => (
                                                <Flex key={src} justifyContent={'center'} alignItems={'center'}>
                                                    <Image {...modalImage} src={src} />
                                                </Flex>
                                            ))}
                                            </SimpleGrid>
                                        </VStack>
                                        </Flex>
                                    </VStack>
                                </HStack>
                            </ModalBody>
                            <ModalFooter>
            
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
        </>
    )
}
export default SkillsBox;