import { Box, Flex, VStack, HStack, Text, useColorModeValue, Spacer
, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalCloseButton, useDisclosure
} from "@chakra-ui/react"

import { FiArrowUpRight } from "react-icons/fi";


const ContactBox = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
        <VStack
            w={'100%'} 
            h={'100%'}
            justifyContent={'flex-left'}
            alignItems={'flex-left'}
            padding={5}
            onClick={onOpen}
            color={useColorModeValue("white","black")}
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
                        Contact
                        </Text>        
                    </VStack>
                {/* =========== MODULE =========== */}
                <Modal isOpen={isOpen} onClose={onClose} isCentered>
                        <ModalOverlay/>
                        <ModalContent 
                        h={'50%'}
                        maxW={'50%'}
                        bg={useColorModeValue("#90caf9","#474973")}
                        color={useColorModeValue('white', 'black')}
                        borderRadius='7px'
                        border='7px solid'
                        >   
                            <ModalHeader p={4} justifyContent={'flex-end'} alignItems={'flex-end'}>
                                <ModalCloseButton/>
                            </ModalHeader>
                            
                            <ModalBody>
                                <Flex
                                h={'100%'}
                                justifyContent={'center'}
                                alignItems={'center'}
                                fontSize={'1xl'}
                                fontWeight={'medium'}
                                >
                                    <VStack>
                                            <Text>steven.acosta867@gmail.com</Text>
                                            <Text>+1 678 789 1567</Text>
                                    </VStack>
                                </Flex>

                            </ModalBody>
                            <ModalFooter>
            
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
        </>
    )
}

export default ContactBox