import { HiCalendar } from "react-icons/hi";
import { Box, Flex, Text, Spacer, Tag, Button, Icon } from '@chakra-ui/react';
import {Link} from 'react-router-dom';
export function LaunchItem(launch) {
    return (
        <Box bg="gray.100" p={4} m={4} borderRadius="lg">
                      <Flex display="flex">
                          <Text fontSize="2x1">
                            Mission <strong>{launch.mission_name}</strong> ({launch.launch_year})
                          </Text>
                          <Spacer />
                          <Tag p={4} colorScheme={launch.launch_success ? 'green' : 'red'}>
                                {launch.launch_success ? 'Success' : 'Failure'}
                          </Tag>
                      </Flex>
                      <Flex align="center" mb={3}>{" "}
                          <Icon as={HiCalendar} size={20} color="gray.500" />
                          <Text fontSize="sm" ml={1} color="gray.500">
                                {launch.launch_date_local}
                          </Text>
            </Flex>
            <Link to={`/launch/${launch.flight_number}`}>
                <Button colorScheme="purple">More details</Button>
                </Link>
                  </Box>
    )
}
