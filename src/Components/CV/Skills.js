import React from 'react';

const Skills = ({ field, level, logo }) => {
    return (
        <div>
            <img className='skillsLogo' src={logo} alt="" /> <p className='skillsInfo'>{field} - {level} </p>
        </div>
    );
};

export default Skills;