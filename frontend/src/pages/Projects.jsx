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
        h={'100vh'}
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
                borderWidth={4}
                borderColor={useColorModeValue("white","black")}
                >
                    <TopBar/>
                </Flex>

                

                <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3 }}
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