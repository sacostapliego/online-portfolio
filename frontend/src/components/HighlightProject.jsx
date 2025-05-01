import { Flex, useColorModeValue, Text, VStack, HStack, Modal, useDisclosure, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Image, Box, Link} from "@chakra-ui/react"


import { FiArrowUpRight } from "react-icons/fi";
import { HiOutlineGlobeAlt } from "react-icons/hi2";



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
        color:useColorModeValue('white', 'black'),
        _hover: {
        transform: "scale(1.015)",
        transition: "all 0.3s ease"
  },
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

    <Modal 
        isOpen={isOpen} 
        onClose={onClose} 
        isCentered 
        size={0}
        >
        <ModalOverlay 
        
         />
        <ModalContent
        w="75rem"
        h="47rem"
        flexShrink={0}

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
        {/* ============================== PROJECTS PAGE + DESCRIPTION ============================== */}
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
                    <Image mr={8} mt={8} borderRadius={7} border={'2px'} boxSize={"100%"} src={projectLight}/>
                    <Image ml={8} mb={8} borderRadius={7} border={'2px'} boxSize={"100%"} src={projectDark}/>
                </Flex>
                <Flex
                    {...modalBox}
                    w={'60%'}
                    h={'100%'}
                    bg={useColorModeValue('blue.300', '#32356E')}
                >
                    <HStack w={'100%'} h={'100%'} justifyContent={'space-evenly'} alignItems={'center'}>
                        <Text p={4} fontSize={'sm'} fontWeight={'bold'}>
                        With the projects page, I used MongoDB and Express
                        to store the data and React and Node.js to display it.
                        The data stored are my projects that I completed, or might still be working on.
                        They all have four main components, a title, a description, a link to the project, and the resources I used to complete each project.
                        </Text>
                        
                    </HStack>
                </Flex>
            </HStack>
        {/* ============================== MERN ICONS + HIGHLIGHT PICTURE + DESCRIPTION ============================== */}
            <HStack
            h={'50%'}
            w={'100%'}
            justifyContent={'space-between'}
            pl={4}
            pr={4}
            >
        {/* ============================== MERN ICONS ============================== */}
                <Flex
                {...modalBox}
                w={'25%'}
                h={'100%'}
                bg={useColorModeValue('blue.400', '#2E3660')}
                >
                    <VStack w={'100%'} h={'100%'}  justifyContent={'space-evenly'}>
                        <HStack justifyContent={'space-evenly'} w={'100%'}>
                            <Image {...modalImage} src="//mongoDB.png" />
                            <Image {...modalImage} src="/express.png" />
                        </HStack>
                        <HStack justifyContent={'space-evenly'} w={'100%'}>
                            <Image {...modalImage} src="/react.png" />
                            <Image {...modalImage} src="/nodejs.png" />
                        </HStack>
                    </VStack>
                </Flex>
        {/* ============================== HIGHLIGHT PICTURE ============================== */}
                <Flex
                {...modalBox}
                w={'50%'}
                h={'100%'}
                bg={useColorModeValue('blue.500', '#32356E')}
                overflow={'hidden'}
                >
                    
                    <Image src={mainLight}
                        w={'65%'}
                        objectFit='cover'
                        borderRadius={7}
                        border={'4px'}
                        borderColor={useColorModeValue('blue.200', 'black')}
                        mb={28}
                        mr={8}
                     />
                    <Image src={mainDark}
                        w={'65%'}
                        objectFit='cover'
                        borderRadius={7}
                        border={'4px'}
                        borderColor={useColorModeValue('blue.200', 'black')}
                        mt={28}
                        ml={8}
                     />

                </Flex>
        {/* ============================== DESCRIPTION ============================== */}
                <Flex
                {...modalBox}
                w={'25%'}
                h={'100%'}
                bg={useColorModeValue('blue.100', '#53589F9F')}
                p={5}
                fontWeight={'bold'}
                >
                    Overall,
                    this project is my introduction to creating different and more advanced projects that align with my interests while helping me learn more development tools and 
                    gain a better understanding of both old and new programming languages. 
                    For example, I learned the importance of the MERN stack and the deployment process using render with this project.
                </Flex>
            </HStack>

        {/* ============================== CREDIT + DESCRIPTION + PAGE PICTURE ============================== */}
            <HStack
            w={'100%'}
            h={'20%'}
            justifyContent={'space-between'}
            pl={4}
            pr={4}
            >
        {/* ============================== CREDIT ============================== */}
            <Link 
                    display={'flex'}
                    {...modalBox}
                    w={'15%'}
                    h={'100%'}
                    bg={useColorModeValue('blue.200', '#53589F')} 
                    href="https://www.figma.com/design/VGfezirnGf4S6JPWQwHLp9/bentolio-(Community)" isExternal
                >
                    <VStack>
                        <HiOutlineGlobeAlt size={'3rem'}/>
                        <Text fontWeight={'bold'}>UI Inspriation</Text>
                    </VStack>
            </Link>
        {/* ============================== DESCRIPTION ============================== */}
                <Flex
                    {...modalBox}
                    w={'50%'}
                    h={'100%'}
                    bg={useColorModeValue('blue.100', '#53589F')}
                >
                    <Text
                    w={'90%'}
                    h={'90%'}
                    fontSize={'md'}
                    fontWeight={'bold'}
                    >
                        My own online portfolio was a project that I always planned to create.
                        I was finally able to develop, 
                        and design (for the most part) what I had envisioned for awhile now. 
                        During this process of creating I was also learning new tools that will be vital moving forward.
                    </Text>

                </Flex>
        {/* ============================== PAGE PICTURE ============================== */}
                                <Flex
                    {...modalBox}
                    w={'35%'}
                    h={'100%'}
                    bg={useColorModeValue('blue.100', '#53589F9F')}
                    overflow={'hidden'}
                    justifyContent={'center'}
                >
                    <Image mr={4} mb={8} borderRadius={7} border={'2px'} boxSize={"100%"} src={aboutLight}/>
                    <Image ml={4} mt={8} borderRadius={7} border={'2px'} boxSize={"100%"} src={aboutDark}/>
                </Flex>
            </HStack>
          </VStack>
        </ModalContent>
      </Modal>
    </>
    )
}

export default HighlightProject
