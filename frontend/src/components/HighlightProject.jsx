import { Flex, useColorModeValue, Text, VStack, HStack, Modal, useDisclosure, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Image, Box} from "@chakra-ui/react"

import ProjectHighlight from "../assets/beginner-product-app.png";

const HighlightProject = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const bg = useColorModeValue("#90caf9","#474973");


    console.log(ProjectHighlight)

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
                    src= {useColorModeValue('/white-macbook.png', 'black-surface.png')}
                    objectFit='cover'
                    margin={0}
                        />

                <Text marginLeft={5} marginRight={5}>
                    A beginner project that I made to learn the basics of the MERN stack.
                </Text>

            </VStack>
        </Flex>

        {/* ============================== MODAL ============================== */}

       <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/>
            <ModalContent 
            w={'100%'}
            maxW={'85vw'}
            h={'100%'}
            maxH={'85vh'}
            bg={bg}
            color={useColorModeValue('white', 'black')}
            borderColor={useColorModeValue('white', 'black')}
            borderRadius='7px'
            border='7px solid'
            >   
                <ModalHeader p={4}>
                    <Flex
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    w={'100%'}
                    >
                    <Text
                    textAlign={'center'}
                    flexGrow={1}
                    >Highlight Project</Text>
                        <ModalCloseButton position={'static'}/>
                    </Flex>
                </ModalHeader>
                
                <ModalBody>
                    <VStack justifyContent={'space-evenly'} bg={'yellow'} h={'100%'}>
                        {/* ============================== 3 boxes ============================== */}
                        <HStack bg={'red'} w={'100%'} justifyContent={'space-evenly'}>
                            <Box bg={'blue'} w={'60%'}>hi</Box>
                            <Box>hi</Box>
                            <Box>hi</Box>
                        </HStack>

                        {/* ============================== 2 boxes, 1 image ============================== */}
                        <HStack  w={'100%'} h={'60%'} justifyContent={'space-evenly'} bg={'blue'}>

                            <Box>hi</Box>

                            <Flex 
                            bg={useColorModeValue('white', 'black')}
                            justifyContent={'center'} 
                            alignItems={'center'} 
                            w='30%'
                            h={'50%'}
                            borderRadius='7px'
                            p={'10px'}
                            >
                                <Image 
                                w='100%'
                                src= {ProjectHighlight}
                                objectFit='cover'
                                margin={0}
                                />
                            </Flex>

                            <Box>hi</Box>
                        </HStack>

                        {/* ============================== 2 boxes ============================== */}
                        <HStack w={'100%'} justifyContent={'space-evenly'} bg={'green'}>
                            <Box>hi</Box>
                            <Box>hi</Box>
                        </HStack>
                    </VStack>

                </ModalBody>
                <ModalFooter>

                </ModalFooter>
            </ModalContent>
        </Modal>
    </>
    )
}

export default HighlightProject