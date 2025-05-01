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
            spacing={9}
            w='100%'
            h={'100%'}
            justifyContent={'center'}
            >
                <Link href="https://github.com/sacostapliego" isExternal>
                    <Image 
                        src="languages/GitHub.png" 
                        alt="GitHub"
                        boxSize= {20}
                        borderRadius='2xl'
                        objectFit={'contain'}
                        p={2}
                        style={{ filter: colorFilter}}
                        _hover={{
                            transform: 'translateY(-5px)',
                            transition: 'transform 0.3s ease',
                        }}
                    />
                </Link>

                <Link href="https://www.linkedin.com/in/steven-acosta-pliego/" isExternal>
                <Image 
                        src="languages/Linkedin.png" 
                        alt="GitHub"
                        boxSize= {20}
                        borderRadius='2xl'
                        objectFit={'contain'}
                        p={2}
                        style={{ filter: colorFilter}}
                        _hover={{
                            transform: 'translateY(-5px)',
                            transition: 'transform 0.3s ease',
                        }}
                    />
                </Link>
                
                <Link href="https://app.joinhandshake.com/profiles/8xfd3n" isExternal>
                    <Image 
                        src="languages/HandShake.png" 
                        alt="GitHub"
                        boxSize= {20}
                        borderRadius='2xl'
                        objectFit={'contain'}
                        p={2}
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