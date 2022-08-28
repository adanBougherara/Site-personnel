import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import FaceIcon from '@mui/icons-material/Face';
import WalletIcon from '@mui/icons-material/Wallet';

export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon/>,
        link: "/"
    },
    {
        title: "CV",
        icon: <FaceIcon/>,
        link: "/cv"
    },
    {
        title: "Projects",
        icon: <WalletIcon/>,
        link: "/projects"
    },
    {
        title: "Contacts",
        icon: <AlternateEmailIcon/>,
        link: "/contacts"
    }
]