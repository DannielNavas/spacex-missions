import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import * as API from '../services/launches';
import { Box, Flex, Text, Spacer, Tag } from '@chakra-ui/react';

export function LaunchDetail(props) {
    const [launch, setLaunch] = useState({});
    const { lauchId } = useParams(); +
        useEffect(() => {
            API.getLounchByFlightNumber(lauchId).then(setLaunch).catch(console.log);
        }, [lauchId]);

    return (
        <>
            { }
            <Box bg="gray.100" p={4} m={4} borderRadius="lg">
                <Flex display="flex">
                    <Text fontSize="2x1">
                        Mission <strong>{launch.mission_name}</strong> ({launch.launch_year})
                    </Text>
                </Flex>
            </Box>
        </>
    )

}
