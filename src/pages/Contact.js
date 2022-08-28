import React from 'react'
import Sidebar from '../Components/Sidebar'
import GitHubButton from "../Components/Contact/GitHubButton";
import MailButton from "../Components/Contact/MailButton";

function Contact() {
  return (
    <div className='contact'>
        <Sidebar/>
        <div className='contactContent'>
          <h1 className='title'>Contactez-moi</h1>
          <div className="links">
            <ul>
              <li>
                <MailButton
                  mailto="adan.bougherara@gmail.com"
                  label="adan.bougherara@gmail.com"
                />
              </li>
              <li>
                <GitHubButton />
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Contact