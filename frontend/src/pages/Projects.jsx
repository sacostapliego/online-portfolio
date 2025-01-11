import { Box, Flex, SimpleGrid, useColorModeValue, VStack } from "@chakra-ui/react";
import TopBar from "../components/TopBar";
import { useEffect } from "react";
import { showProjects } from "../projects/project";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
    const {fetchProjects, projects } = showProjects();

    useEffect(() => {
        fetchProjects();
    }, [fetchProjects]);


    return (
        <Flex
        minH={'100vh'}
        h={'100%'}
        justifyContent="center"
        paddingTop={5}
        >
            <VStack w={'full'} h={'full'} alignItems={'center'}>
                <Flex 
                h={'4.5rem'}
                w={'80%'}
                borderRadius='7px'
                alignItems={'center'}
                bg={useColorModeValue("#90caf9","#474973")}
                borderWidth={6}
                borderColor={useColorModeValue("white","black")}
                _hover={{
                transform: 'scale(1.015)',
                transition: 'all 0.3s ease',
                }}
                >
                    <TopBar name={'BACK'} textColor={useColorModeValue('white','black')}/>
                </Flex>

                

                <SimpleGrid
                columns={{ base: 1, md: 1, lg: 3 }}
                spacing={16}
                w={'90%'}
                alignItems={'center'}
                p={5}
                >

                {projects.map((project) => (
                        <ProjectCard key={project.projectName} project={project} />
                    ))}

                </SimpleGrid>
            </VStack>
        </Flex>
    );
};

export default Projects;