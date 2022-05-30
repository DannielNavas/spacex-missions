import { useState, useEffect } from 'react';
import { Heading } from '@chakra-ui/react';
import * as API from '../services/launches';
import { LaunchItem } from './LaunchItem';

export function LaunchList () {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        API.getAllLaunches().then(setLaunches).catch(err => console.log(err));
    }, []); // vacio  se ejecuta al crear el componente, si tiene algo se ejectua cuando se cambia el estado

    return (
        <>
            <Heading as="h1" size="lg" m={4}>SpaceX Launches</Heading>
          <section>
              {launches.map(launch => (
                  <LaunchItem key={launch.flight_number} { ...launch } />
              ))}
            </section>
        </>
    );
}
