import { useState, useEffect } from 'react';
import { Heading, Image } from '@chakra-ui/react';
import logo from './assets/SpaceX-Logo.png'
import * as API from './services/launches';
import {LaunchItem} from './components/LaunchItem';


export function App() {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        API.getAllLaunches().then(setLaunches);
    }, []); // vacio  se ejecuta al crear el componente, si tiene algo se ejectua cuando se cambia el estado

  return (
      <>
          <Image src={logo} alt="Logo SpaceX" width={300} />
          <Heading as="h1" size="lg" m={4}>SpaceX Launches</Heading>
          <section>
              {launches.map(launch => (
                  <LaunchItem key={launch.flight_number} { ...launch } />
              ))}
          </section>
    </>
  )
}
