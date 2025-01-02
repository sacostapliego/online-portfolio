import { Box, Image, Text, useColorModeValue, VStack, Link, HStack } from "@chakra-ui/react";

import { useState } from "react";

const icons = {
  javascript: "/JavaScript.png",
};

console.log(icons+'.png');

const ProjectCard = ({ project }) => { 
  const bwColor = useColorModeValue("white", "black");

  const [isHovered, setIsHovered] = useState(false);

  return (
  <Link href={project.projectURL} isExternal _hover={{ textDecoration: 'none' }}>
    <Box
    borderRadius='7px'
    borderWidth={4}
    borderColor={bwColor}
    color={bwColor}
    bg={useColorModeValue("#90caf9","#474973")}
    overflow={'hidden'}
    transition={'all 0.3s'}
    _hover={{
      transform: 'translateY(-4px)',
      shadow: 'xl',
    }}
    alignItems='center'
    justifyContent='center'
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >
    <VStack
    spacing={2}
    >
        {/* Text */}
        <Text 
        textAlign='center'
        fontSize="xl"
        fontWeight="bold"
        pt={4}
        >
          {project.projectName}
        </Text>

        {/* Image */}
        {project.projectImage && (
          <Image 
            src={project.projectImage} alt={project.projectName}
            p={5}

           />
        )}

        {/* Languges */}
        <HStack
        w={'70%'}
        justifyContent={'space-evenly'}
        spacing={2}
        >
          {project.projectLanguage.split(',').map((language) => (
            <Image 
            key={language.trim()}
            src={`/${language.trim()}.png`}
            alt={language.trim()}
            boxSize={10}
            mb={4}
            borderRadius={4}
            bg={'black'}
            />
          ))}
        </HStack>
      </VStack>

      {/* Description */}
      {isHovered && (
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              bg="rgba(0, 0, 0, 0.2)" // Semi-transparent background
              color="white"
              display="flex"
              alignItems="flex-end"
              p={4}
              borderRadius='7px'
            >
              <Text textAlign='center'>
                {project.projectDescription}
              </Text>
            </Box>
          )}
    </Box>
  </Link>

  );
};

export default ProjectCard;