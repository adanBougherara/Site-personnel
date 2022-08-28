import React from 'react';

import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import CV from "./pages/CV";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cv" element={<CV/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<NotFound/>} />     
        </Routes>
    </BrowserRouter>
    </>
    
      
  );
}

export default App;
