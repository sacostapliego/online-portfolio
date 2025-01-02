import { Flex, useColorModeValue, Text} from "@chakra-ui/react"

const AboutBox = () => {
    return (
    
        <Flex
        h='100%' w='100%'
        bg={useColorModeValue("#90caf9","#474973")} 
        borderRadius = '7px'
        justifyContent='left'
        alignItems='flex-end'
        padding='1rem'
        fontSize={'md'}>
            <Text 
            color = {useColorModeValue('white','black')}
            fontWeight={'bold'}
            >  
                hi

            </Text>
        </Flex>
    )
}

export default AboutBox