import { Flex, useColorModeValue, Text, VStack, HStack} from "@chakra-ui/react"

import { MdOutlineWavingHand } from "react-icons/md";


const AboutBox = () => {
    return (
    
        <Flex
        h='100%' w='100%'
        bg={useColorModeValue("#90caf9","#474973")} 
        borderRadius = '7px'
        justifyContent='left'
        alignItems='flex-end'
        padding='1rem'
        fontSize={'md'}
        color = {useColorModeValue('white','black')}
        >
        <VStack justifyContent='left' alignItems='left'>
            <HStack spacing={4}>
                <MdOutlineWavingHand size={'2rem'}/>
                <Text
                fontSize={'2rem'}
                fontWeight={'bold'}
                >
                    Hi, I'm <Text as="span" fontStyle="italic">Steven</Text>!
                </Text>
            </HStack>
            <Text 
            fontWeight={'bold'}
            fontSize={'1xl'}
            >  
                I am currently attending Georgia State University in Atlanta, 
                pursuing a bachelors in Computer Science. 
                Constantly working on both personal and academic projects.

            </Text>
        </VStack>
        </Flex>
    )
}

export default AboutBox