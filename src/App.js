import HEADER from './components/Navbar/Header.js';
// import Image from './Image.js';
// import MainContent from './MainContent.js';
import FOOTER from './components/Footer.js';
import About from './About.js';
import Home from './Home.js';
import LogIn from './LogIn.js';
import Register from './Register.js';
import DashBoard from './DashBoard.js';
import { useState } from 'react';
import Tables from './Tables'

import { BrowserRouter, Routes,  Route } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] =useState(false);
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  return (
    <BrowserRouter>
        <div className="App">
          {isLoggedIn ?<h1>DashBoard</h1> : <HEADER/>}
          {isLoggedOut && <DashBoard/>}
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/About" element={<About/>}/>
              <Route path="/LogIn" element={<LogIn loginStatus ={{isLoggedIn, setIsLoggedIn}} />}/>
              <Route path="/Register" element={<Register/>}/>
              <Route path="/DashBoard" element={<DashBoard logoutStatus ={{isLoggedOut, setIsLoggedOut}}/>}/>
              <Route path="/Tables" element={<Tables/>}/>
              </Routes>
          <FOOTER/>
        </div>
    </BrowserRouter>
  );
}

export default App;

