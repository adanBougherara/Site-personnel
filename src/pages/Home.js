import React from 'react'
import Sidebar from '../Components/Sidebar'
const Home = () => {
  return (
    <div className="home">
        <Sidebar/>
        <div className="homeContent">
           <h1 id="titre">Adan Bougherara</h1>
           <h2>Bienvenue sur mon site personnel</h2> 
        </div>
    </div>
  )
}

export default Home;