
import { Image } from '@chakra-ui/react';
import logo from './assets/SpaceX-Logo.png'
import { LaunchList } from './components/LaunchList';
import { LaunchDetail } from './components/LaunchDetail';
import { Routes, Route } from 'react-router-dom';


export function App() {
  return (
      <>
          <Image src={logo} alt="Logo SpaceX" width={300} />
          <Routes>
              <Route path="/" element={<LaunchList />} />
              <Route path="launch/:lauchId" element={<LaunchDetail />} />
          </Routes>

    </>
  )
}
