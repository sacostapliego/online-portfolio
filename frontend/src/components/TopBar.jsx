import { Container, Flex, HStack, Text, Link as ChakraLink, useColorModeValue} from "@chakra-ui/react"
import { Link} from "react-router-dom"


const TopBar = ({name, textColor}) => {
    return (
        <Container maxW='100%' maxH='100%'>
            <Flex
            h={16}
            alignItems={'center'}
            justifyContent={'space-between'}
            color={textColor}

            >
            <Text fontWeight={"bold"} fontSize={20}
            _hover={
                    name !== 'STEVEN ACOSTA-PLIEGO' ? {
                    transform: 'translateY(-5px)',
                    transition: 'transform 0.3s ease',
                }: {}}
            >
                <Link to={'/'}>{name}</Link>
            </Text>

            <HStack spacing={8} alignItems={'center'}>
                <Link to={'/about'} _hover={{textDecoration: 'none'}}>
                <Text fontWeight={"bold"} fontSize={19} 
                _hover={{
                    transform: 'translateY(-5px)',
                    transition: 'transform 0.3s ease',
                }}>
                ABOUT
                </Text>
                </Link>

                <Link to={'/projects'} _hover={{textDecoration: 'none'}}>
                <Text fontWeight={"bold"} fontSize={19}
                _hover={{
                    transform: 'translateY(-5px)',
                    transition: 'transform 0.3s ease',
                }}>
                PROJECTS

                </Text>
                </Link>

                <ChakraLink href="https://drive.google.com/file/d/1XoX34_hnjXcxQOC0vmJD0VEvUHzUupyX/view?usp=sharing" isExternal _hover={{textDecoration: 'none'}} >
                <Text fontWeight={"bold"} fontSize={19} 
                _hover={{
                    transform: 'translateY(-5px)',
                    transition: 'transform 0.3s ease',
                }}> 
                RESUME
                </Text>
                </ChakraLink>
            </HStack>

            </Flex>
        </Container>
    )

}

export default TopBar