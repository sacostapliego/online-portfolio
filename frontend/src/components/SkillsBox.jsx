import { Spacer, Text, VStack, useColorModeValue, HStack, Flex, Modal, useDisclosure, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Image, SimpleGrid} from "@chakra-ui/react";

import { FiArrowUpRight } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";




const SkillsBox = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const modalBox = {
        borderWidth:3,
        borderRadius:4,
        borderColor:useColorModeValue('white', 'black'),
        justifyContent:'center',
        alignItems:'center',
        color:useColorModeValue('white', 'black')
    };

    const modalImage = {
        boxSize:'14',
        borderRadius:4,
    }

    const imageSources = [
        "/python.png",
        "/JavaScript.png",
        "/c.png",
        "/c++.png",
        "/html.png",
        "/css.png",
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

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                        <ModalOverlay/>
                        <ModalContent 
                        display={'flex'}
                        flexDirection={'column'}
                        maxW={'80rem'}
                        h={'50rem'}
                        minH={'50rem'}
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
                                        <Flex
                                        {...modalBox}
                                        w={'100%'}
                                        h={'30%'}
                                        bg={useColorModeValue("#90caf9","#474973")}
                                        >
                                            <VStack w={'100%'} h={'100%'} justifyContent={'center'} spacing={'8'}>
                                                <Text>Relvant Coursework</Text>
                                            </VStack>
                                        </Flex>
                                        <Flex
                                        {...modalBox}
                                        w={'100%'}
                                        h={'70%'}
                                        bg={useColorModeValue("blue.500","#474973")}
                                        >
                                            <VStack w={'100%'} h={'100%'} justifyContent={'center'} alignItems={'center'}>
                                                <Text
                                                h={'10%'}
                                                >Programming Languages</Text>
                                                <SimpleGrid w={'100%'}  h={'70%'} columns={4} spacing={5}>
                                                {imageSources.map((src) => (
                                                <Flex key={src} justifyContent={'center'} alignItems={'center'}>
                                                    <Image {...modalImage} src={src} />
                                                </Flex>
                                            ))}
                                                <Flex 
                                                justifyContent={'center'} 
                                                alignItems={'center'
                                                }
                                                >
                                                    <BsThreeDots  size={'2rem'}/>
                                                </Flex>
                                                </SimpleGrid>
                                            </VStack>
                                        </Flex>
                                    </VStack>


                                    <VStack w={'50%'} h={'100%'} spacing={'5'}>
                                        <Flex
                                        {...modalBox}
                                        w={'100%'}
                                        h={'33%'}
                                        bg={useColorModeValue("blue.300","#474973")}
                                        >
                                        <HStack spacing={5} w={'100%'} justifyContent={'center'}>
                                            <Text>Development Tools</Text>
                                        </HStack>
                                        </Flex>

                                        <Flex
                                        {...modalBox}
                                        w={'100%'}
                                        h={'33%'}
                                        bg={useColorModeValue("#90caf9","#474973")}
                                        >
                                            Frameworks
                                        </Flex>

                                        <Flex
                                        {...modalBox}
                                        w={'100%'}
                                        h={'33%'}
                                        bg={useColorModeValue("blue.100","#474973")}
                                        >

                                            <Text>Operating Systems</Text>

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