import React from 'react'
//import '../App.css';
import WalletIcon from '@mui/icons-material/Wallet';
import HomeIcon from '@mui/icons-material/Home';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import FaceIcon from '@mui/icons-material/Face';
import { NavLink } from 'react-router-dom';
function Sidebar() {
  return (
    <div className="Sidebar">
        <ul>
            <li>
                <NavLink to="/" className="navActive">
                    <i className='SidebarIcon'><HomeIcon/></i>
                    <span>Accueil</span>
                </NavLink>     
            </li>
            <li>
                <NavLink to="/cv" className="navActive">
                    <i className='SidebarIcon'><FaceIcon/></i>
                    <span>CV</span>
                </NavLink>     
            </li>
            <li>
                <NavLink to="/projects" className="navActive">
                    <i className='SidebarIcon'><WalletIcon/></i>
                    <span>Projets</span>
                </NavLink>     
            </li>
            <li>
                <NavLink to="/contact" className="navActive">
                    <i className='SidebarIcon'><AlternateEmailIcon/></i>
                    <span>Contact</span>
                </NavLink>     
            </li>
        </ul>
    </div>
  )
}

export default Sidebar