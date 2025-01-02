import { Box, VStack, HStack, Text, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { showProjects } from "../projects/project";

const LatestBox = () => {
    const { fetchProjects, projects } = showProjects();
    const [newestProject, setNewestProject] = useState(null);

    useEffect(() => {
        fetchProjects();
    }, []); // Empty dependency array to call fetchProjects only once on mount

    useEffect(() => {
        if (projects.length > 0) {
            const sortedProjects = projects.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            setNewestProject(sortedProjects[0]);
        }
    }, [projects]); // first project in the sorted array is the newest

    return (
        <VStack
            w={'100%'}
            h={'100%'}
            justifyContent={'space-between'}
            alignItems={'flex-start'}
            padding={5}
            color={useColorModeValue("white", "black")}
        >
            {/* =========== NAME + DATE =========== */}
            <HStack justifyContent={'space-between'} w={'100%'}>
                <Text 
                fontFamily={'initial'} 
                fontSize={'1xl'}>
                    {newestProject ? newestProject.projectName : 'Loading...'}
                </Text>

                <Text 
                fontFamily={'initial'} 
                fontSize={'1xl'}>
                    {newestProject ? new Date(newestProject.createdAt).toLocaleDateString() : ''}
                </Text>
            </HStack>

            {/* =========== DESCRIPTION =========== */}
            <Text
                fontFamily={'initial'}
                fontSize={'1xl'}
                >
                {newestProject ? newestProject.projectDescription : 'Loading...'}

                </Text>

            {/* =========== Latest Text =========== */}
            <Text
                fontFamily={'initial'}
                fontStyle={'italic'}
                fontSize={'4xl'}
                fontWeight={'extrabold'}
            >
                Latest
            </Text>
        </VStack>
    );
};

export default LatestBox;