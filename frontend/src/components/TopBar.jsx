import { Container, Flex, HStack, Text, Link as ChakraLink, useColorModeValue} from "@chakra-ui/react"
import { Link} from "react-router-dom"


const TopBar = () => {
    return (
        <Container maxW='100%' maxH='100%'>
            <Flex
            h={16}
            alignItems={'center'}
            justifyContent={'space-between'}
            flexDir={{ base: 'column', sm: 'row' }}
            color={useColorModeValue('white','black')}

            >
            <Text fontWeight={"bold"} fontSize={20}>
                <Link to={'/'}>STEVEN ACOSTA-PLIEGO</Link>
            </Text>

            <HStack spacing={8} alignItems={'center'}>
                <Link to={'/'} _hover={{textDecoration: 'none'}}>
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

                <ChakraLink href="https://www.facebook.com" isExternal _hover={{textDecoration: 'none'}} >
                <Text fontWeight={"bold"} fontSize={19} 
                _hover={{
                    transform: 'translateY(-5px)',
                    transition: 'transform 0.3s ease',
                }}>
                CONTACT
                </Text>
                </ChakraLink>
            </HStack>

            </Flex>
        </Container>
    )

}

export default TopBar