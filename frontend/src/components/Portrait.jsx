import { Box, useColorModeValue, Image, Button, useColorMode } from "@chakra-ui/react"

import PortraitImage from "../assets/me4.png"


const Portrait = () => {

    const { toggleColorMode } = useColorMode();

    return(
    <Button
    w={'100%'} 
    h={'100%'}
    p={0}
    bg={useColorModeValue("#64b5f6","#161b33")}
    _hover={{ bg: useColorModeValue("#5ba6e3","#293159") }}
    onClick={toggleColorMode}
    >
        <Box w='100%' h='100%' borderRadius = '7px' overflow='hidden'>
            <Image
            src= {PortraitImage}
            borderRadius='7px'
            w='100%'
            h='100%' 
            objectFit='cover'
            />
        </Box>
    </Button>
    )
}

export default Portrait