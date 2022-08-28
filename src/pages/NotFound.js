import React from 'react';
import Sidebar from '../Components/Sidebar';
import { NavLink } from 'react-router-dom';
function NotFound() {
  return (
    <div className="notFound">
        <Sidebar/>
        <div className="notFoundContent">
          <div className='content'>
            <h3 id="titre">Désolé cette page n'existe pas.</h3>
              <NavLink exact to="/">
                <i className='fas fa-home'></i>
                <span>Accueil</span>
              </NavLink>
          </div>    
        </div>
    </div>
  )
}

export default NotFound