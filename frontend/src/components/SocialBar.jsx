import {Flex, HStack, Text, Image, Link, useColorModeValue} from "@chakra-ui/react"

const SocialBar = () => {

    const colorFilter = useColorModeValue('invert(1)', 'none')

    return(
        <Flex 
        w='100%'
        h='100%'
        borderRadius = '7px'
        alignItems={'center'}
        justifyContent={'center'}
        flexDir={{ base: 'column', sm: 'row' }}
        >
            <HStack 
            spacing={16}
            w='80%'
            alignItems='center'
            >
                <Link href="https://github.com/hawksfan422" isExternal>
                    <Image 
                        src="/GitHub.png" 
                        alt="GitHub"
                        w='5rem'
                        objectFit='cover'
                        style={{ filter: colorFilter}}
                        _hover={{
                            transform: 'translateY(-5px)',
                            transition: 'transform 0.3s ease',
                        }}
                    />
                </Link>

                <Link href="https://www.linkedin.com/in/steven-acosta-pliego/" isExternal>
                <Image 
                        src="/Linkedin.png" 
                        alt="GitHub"
                        w='5rem'
                        objectFit='cover'
                        style={{ filter: colorFilter}}
                        _hover={{
                            transform: 'translateY(-5px)',
                            transition: 'transform 0.3s ease',
                        }}
                    />
                </Link>
                
                <Link href="https://gsu.joinhandshake.com/profiles/43579875" isExternal>
                    <Image 
                        src="/HandShake.png" 
                        alt="GitHub"
                        w='5rem'
                        objectFit='cover'
                        style={{ filter: useColorModeValue('none', 'invert(1)')}}
                        _hover={{
                            transform: 'translateY(-5px)',
                            transition: 'transform 0.3s ease',
                        }}
                    />
                </Link>

            </HStack>
        </Flex>
    )
}

export default SocialBar