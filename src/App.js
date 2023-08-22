import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Cards from './Components/Cards';
import Footer from './Components/Footer';
import Heading from './Components/Heading';
import House from './Components/House';
import Navbar from './Components/Navbar';
import Search from './Components/Search';
//import Location from './Components/Location';





function App() {
  return (
    <div>
      <Navbar />
      <Heading />
      <Search />
      
      <Cards />
      <Routes >
           <Route path='/house' element={ <House />} />
      </Routes>
      <Footer />
     
     
     
    </div>
  );
}

export default App;
