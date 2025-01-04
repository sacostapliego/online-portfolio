import { Spacer, Text, VStack, useColorModeValue, HStack, Flex, Modal, useDisclosure, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter} from "@chakra-ui/react";

import { FiArrowUpRight } from "react-icons/fi";


const SkillsBox = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

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
                        w={'100%'}
                        maxW={'85vw'}
                        h={'100%'}
                        maxH={'85vh'}
                        bg={useColorModeValue("#64b5f6","#161b33")}
                        color={useColorModeValue('white', 'black')}
                        borderRadius='7px'
                        border='7px solid'
                        >   
                            <ModalHeader p={4} justifyContent={'flex-end'} alignItems={'flex-end'}>
                                <ModalCloseButton/>
                            </ModalHeader>
                            
                            <ModalBody>
                                <VStack>
                                <Flex 
                                bg={useColorModeValue('white', 'white')}
                                justifyContent={'center'} 
                                alignItems={'center'} 
                                w='30%'
                                h={'50%'}
                                borderRadius='7px'
                                p={'10px'}
                                 >

                                </Flex>
                                </VStack>
            
                            </ModalBody>
                            <ModalFooter>
            
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
        </>
    )
}
export default SkillsBox;